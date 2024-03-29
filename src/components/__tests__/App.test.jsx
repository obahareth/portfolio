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

  it("defaults its `state.scrollTop` property as `0`", () => {
    expect(getComponent().instance().state.scrollTop).toBe(0);
  });

  it("defaults its `state.isSidebarOpen` property as `false`", () => {
    expect(getComponent().instance().state.isSidebarOpen).toBe(false);
  });

  it("calls `props.render` with its `state` and `toggleSidebar` properties as args", () => {
    props.render = jest.fn();
    const component = getComponent();
    const { state } = component.instance();
    expect(props.render).toBeCalledWith({
      ...state,
      toggleSidebar: component.instance().toggleSidebar,
    });
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
    let componentInstance;
    let mock;

    beforeEach(() => {
      componentInstance = getComponent().instance();
      mock = jest.fn();
      componentInstance.setState = mock;
    });

    describe("when `document.documentElement.scrollTop` is defined", () => {
      beforeEach(() => {
        document.documentElement.scrollTop = 20;
      });

      it("sets `state.scrollTop` to `document.documentElement.scrollTop`", () => {
        componentInstance.handleScroll();
        expect(mock).toBeCalledWith({
          scrollTop: document.documentElement.scrollTop,
        });
      });
    });

    describe("when `document.documentElement.scrollTop` is not defined", () => {
      beforeEach(() => {
        document.documentElement.scrollTop = undefined;
        document.body.scrollTop = 30;
      });

      it("sets `state.scrollTop` to `document.body.scrollTop`", () => {
        componentInstance.handleScroll();
        expect(mock).toBeCalledWith({
          scrollTop: document.body.scrollTop,
        });
      });
    });
  });

  describe(`toggleSidebar`, () => {
    it("toggles `state.isSidebarOpen`", () => {
      const componentInstance = getComponent().instance();
      const mock = jest.fn();
      const initialValue = componentInstance.state.isSidebarOpen;

      componentInstance.setState = mock;
      componentInstance.toggleSidebar();
      expect(mock).toBeCalledWith({
        isSidebarOpen: !initialValue,
      });
    });
  });
});
