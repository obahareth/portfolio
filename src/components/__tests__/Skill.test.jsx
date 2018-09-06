import Skill from 'components/Skill';

describe("<Skill>", () => {
  let mountedComponent;
  let props;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Skill {...props} />);
    }
    return mountedComponent;
  };
  const getIcon = () => getComponent().find('Icon');

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      title: 'Front-end',
      children: 'front-end experience',
      icon: 'js-icon',
      small: false,
    };
  });

  it("renders a <div> as the root element", () => {
    expect(getComponent().is('div')).toBeTruthy();
  });

  it("renders `props.children`", () => {
    expect(getComponent().contains(props.children)).toBeTruthy();
  });

  describe("when `props.small` is `false`", () => {
    beforeEach(() => {
      props.small = false;
    });

    it("renders a title as a <h3>", () => {
      expect(getComponent().find('h3')).toHaveLength(1);
    });
  });

  describe("when `props.small` is `true`", () => {
    beforeEach(() => {
      props.small = true;
    });

    it("renders a title as a <h5>", () => {
      expect(getComponent().find('h5')).toHaveLength(1);
    });
  });

  describe("rendered title", () => {
    it("renders an <Icon>", () => {
      const title = getComponent().find('h3');
      expect(title.find('Icon')).toHaveLength(1);
    });

    it("contains `props.title`", () => {
      const title = getComponent().find('h3');
      expect(title.contains(props.title)).toBeTruthy();
    });

    describe("rendered <Icon>", () => {
      it("sets its `name` prop as `props.icon`", () => {
        expect(getIcon().props().name).toBe(props.icon);
      });
    });
  });
});
