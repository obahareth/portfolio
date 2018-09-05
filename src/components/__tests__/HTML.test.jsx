import HTML from 'components/HTML';

describe("<HTML>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<HTML {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      children: '<div>test</div>',
    };
  });

  it("renders a <div> as the root element", () => {
    expect(getComponent().is('div')).toBeTruthy();
  });

  describe("rendered <div>", () => {
    it("sets its `dangerouslySetInnerHTML` prop as an object containing `props.children`", () => {
      expect(getComponent().props().dangerouslySetInnerHTML).toEqual({
        __html: props.children,
      });
    });
  });
});
