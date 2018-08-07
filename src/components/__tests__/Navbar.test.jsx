import Navbar from '../Navbar';

describe("<Navbar>", () => {
  let mountedComponent;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Navbar />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it("renders a <Navbar> as the root element", () => {
    expect(getComponent().is('Navbar')).toBeTruthy();
  });

  it("renders a `.navbar-brand`", () => {
    expect(getComponent().find("GatsbyLink[className*='navbar-brand']")).toHaveLength(1);
  });

  it("renders a <NavItem> for each main page section", () => {
    expect(getComponent().find('NavItem')).toHaveLength(5);
  });

  it("renders a <Button> for the contact section", () => {
    expect(getComponent().find("Button[children='Get In Touch']")).toHaveLength(1);
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
});
