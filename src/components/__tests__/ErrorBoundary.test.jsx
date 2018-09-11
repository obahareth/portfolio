import ErrorBoundary from 'components/ErrorBoundary';

describe("<ErrorBoundary>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<ErrorBoundary {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      children: 'some text',
    };
  });

  it("sets `state.hasError` to `false` by default", () => {
    expect(getComponent().instance().state.hasError).not.toBeTruthy();
  });

  describe(`componentDidCatch`, () => {
    it("sets `state.hasError` to `true`", () => {
      const mock = jest.fn();
      const componentInstance = getComponent().instance();
      componentInstance.setState = mock;
      componentInstance.componentDidCatch();
      expect(mock).toBeCalledWith({
        hasError: true,
      });
    });
  });

  describe("when `state.hasError` is `false`", () => {
    it("renders `props.children`", () => {
      expect(getComponent().contains(props.children)).toBeTruthy();
    });
  });

  describe("when `state.hasError` is `true`", () => {
    beforeEach(() => {
      getComponent().setState({
        hasError: true,
      });
    });

    it("renders an error message", () => {
      expect(getComponent().find("h2[children='Something went wrong']"))
        .toHaveLength(1);
    });
  });
});
