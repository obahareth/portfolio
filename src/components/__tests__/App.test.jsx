import App from 'components/App';

describe("<App>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<App {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      render: state => (
        <div>
          {state.scrollTop}
        </div>
      ),
    };
  });

  it("renders a <div> as the root element", () => {
    expect(getComponent().is('div')).toBeTruthy();
  });

  it("renders `props.render`", () => {
    const { state } = getComponent().instance();
    const renderProp = props.render(state);
    expect(getComponent().contains(renderProp)).toBeTruthy();
  });

  it("sets its `state.scrollTop` property as `0`", () => {
    expect(getComponent().instance().state.scrollTop).toBe(0);
  });

  it("calls `props.render` with its state as an argument", () => {
    props.render = jest.fn();
    const component = getComponent();
    const { state } = component.instance();
    expect(props.render).toBeCalledWith(state);
  });

  it("adds a 'scroll' event listener for `handleScroll` during mounting", () => {
    const mock = jest.fn();
    window.addEventListener = mock;
    getComponent(); // Mount
    expect(mock).toBeCalledWith('scroll', getComponent().instance().handleScroll);
  });

  it("removes a 'scroll' event listener for `handleScroll` when unmounting", () => {
    const mock = jest.fn();
    window.removeEventListener = mock;
    getComponent().instance().componentWillUnmount(); // Unmount
    expect(mock).toBeCalledWith('scroll', getComponent().instance().handleScroll);
  });

  describe(`handleScroll`, () => {
    it("calls `setState` with its `event.pageY` arg", () => {
      const mock = jest.fn();
      getComponent().instance().setState = mock;

      const pageY = 8;
      const mockEvent = {
        pageY,
      };
      getComponent().instance().handleScroll(mockEvent);

      expect(mock).toBeCalledWith({
        scrollTop: pageY,
      });
    });
  });
});
