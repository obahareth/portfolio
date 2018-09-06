import SocialLink from 'components/SocialLink';

describe("<SocialLink>", () => {
  let mountedComponent;
  let props;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<SocialLink {...props} />);
    }
    return mountedComponent;
  };
  const getIcon = () => getComponent().find('Icon');

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      icon: 'some-icon',
      to: 'https://danieljs.me',
    };
  });

  it("renders a <a> as the root element", () => {
    expect(getComponent().is('a')).toBeTruthy();
  });

  it("renders an <Icon>", () => {
    expect(getIcon()).toHaveLength(1);
  });

  describe("rendered <a>", () => {
    it("sets its `href` prop as `props.to`", () => {
      expect(getComponent().props().href).toBe(props.to);
    });
  });

  describe("rendered <Icon>", () => {
    it("sets its `name` prop as `props.icon`", () => {
      expect(getIcon().props().name).toBe(props.icon);
    });
  });
});
