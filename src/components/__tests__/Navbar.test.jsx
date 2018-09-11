import Navbar from '../Navbar';

describe("<Navbar>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Navbar {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {};
  });

  it("renders a <Navbar> as the root element", () => {
    expect(getComponent().is('Navbar')).toBeTruthy();
  });

  it("renders a `.navbar-brand`", () => {
    expect(getComponent().find("GatsbyLink[className*='navbar-brand']")).toHaveLength(1);
  });

  it("renders a <NavItem> for each main page section", () => {
    expect(getComponent().find('NavItem')).toHaveLength(4);
  });

  it("renders a <ContactButton>", () => {
    expect(getComponent().find('ContactButton')).toHaveLength(1);
  });

  it("renders a <NavLink> for each <NavItem>", () => {
    const navItems = getComponent().find("NavItem");
    expect(getComponent().find('NavLink')).toHaveLength(navItems.length);
  });

  describe("rendered `.navbar-brand`", () => {
    it("renders a logo", () => {
      expect(getComponent().find("GatsbyLink[className*='navbar-brand']")
        .find("img[alt='Logo']")).toHaveLength(1);
    });
  });

  describe("when `props.solid` is `true`", () => {
    beforeEach(() => {
      props.solid = true;
    });

    it("adds 'Navbar--solid' to its `className` prop", () => {
      expect(getComponent().props().className).toContain('Navbar--solid');
    });
  });
});
