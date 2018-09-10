import Button from 'components/Button';

describe("<Button>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Button {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      children: 'test',
    };
  });

  it("renders a <Button> as the root element", () => {
    expect(getComponent().is('Button')).toBeTruthy();
  });

  describe("rendered <Button>", () => {
    it("sets its children as `props.children`", () => {
      expect(getComponent().contains(props.children)).toBeTruthy();
    });

    it("receives any extra props", () => {
      props.extraProp = 'some-value';
      expect(getComponent().props()).toEqual(expect.objectContaining({
        extraProp: props.extraProp,
      }));
    });

    describe("when `props.icon` is defined", () => {
      beforeEach(() => {
        props.icon = 'some-icon';
      });

      it("renders an <Icon> with its `name` prop set as `props.icon`", () => {
        expect(getComponent().find(`Icon[name='${props.icon}']`)).toHaveLength(1);
      });
    });
  });
});
