import Value from 'components/Value';

describe("<Value>", () => {
  let mountedComponent;
  let props;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Value {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      children: 'A description',
      icon: 'some-icon',
      title: 'Communication',
    };
  });

  it("renders a <div> as the root element", () => {
    expect(getComponent().is('div')).toBeTruthy();
  });

  it("renders a <p>", () => {
    expect(getComponent().find('p')).toHaveLength(1);
  });

  it("renders a title as a <h4>", () => {
    expect(getComponent().find('h4')).toHaveLength(1);
  });

  describe("rendered <p>", () => {
    it("contains `props.children`", () => {
      expect(getComponent().find('p').contains(props.children)).toBeTruthy();
    });
  });

  describe("rendered <h4>", () => {
    it("contains `props.title`", () => {
      expect(getComponent().find('h4').contains(props.title)).toBeTruthy();
    });

    it("renders an <Icon>", () => {
      expect(getComponent().find('Icon')).toHaveLength(1);
    });

    describe("rendered <Icon>", () => {
      it("sets its `name` prop as `props.icon`", () => {
        expect(getComponent().find('Icon').props().name).toBe(props.icon);
      });
    });
  });
});
