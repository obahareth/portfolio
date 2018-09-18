import { NAV_LINKS } from 'constants';
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
  const getNavbarBrand = () => getComponent()
    .find("AnchorLink[className*='navbar-brand']");
  const getScrollspy = () => getComponent().find('Scrollspy');
  const getNavItems = () => getScrollspy().find('NavItem');
  const getNavLinks = () => getNavItems().find("AnchorLink[className*='nav-link']");
  const getNavbarToggler = () => getComponent().find('.navbar-toggler');

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      toggleSidebar: jest.fn(),
    };
  });

  it("renders a <Navbar> as the root element", () => {
    expect(getComponent().is('Navbar')).toBeTruthy();
  });

  it("renders a `.navbar-brand`", () => {
    expect(getNavbarBrand()).toHaveLength(1);
  });

  it("renders a `.navbar-toggler`", () => {
    expect(getNavbarToggler()).toHaveLength(1);
  });

  it("renders a <Scrollspy>", () => {
    expect(getScrollspy()).toHaveLength(1);
  });

  it("renders a <NavItem> for each section", () => {
    expect(getNavItems()).toHaveLength(5);
  });

  it("renders a <NavLink> for each section", () => {
    const sectionHrefs = NAV_LINKS.map(link => link.href);
    sectionHrefs.forEach((href) => {
      const navLink = getNavLinks().filter(`[href*='${href}']`);
      expect(navLink).toHaveLength(1);
    });
  });

  it("hides the <NavItem> for the 'Intro' section", () => {
    const navItem = getNavLinks().filter("[href*='intro']").parents('NavItem');
    expect(navItem.props().className).toContain('d-none');
  });

  it("renders a <ContactButton>", () => {
    expect(getComponent().find('ContactButton')).toHaveLength(1);
  });

  it("renders a <AnchorLink> with a `nav-link` class for each <NavItem>", () => {
    const navItems = getComponent().find("NavItem");
    expect(getNavLinks()).toHaveLength(navItems.length);
  });

  describe("rendered `.navbar-brand`", () => {
    it("renders a logo", () => {
      expect(getNavbarBrand().find("img[alt='Logo']")).toHaveLength(1);
    });
  });

  describe("rendered `.navbar-toggler`", () => {
    it("sets its `onClick` prop as `props.toggleSidebar`", () => {
      expect(getNavbarToggler().props().onClick).toBe(props.toggleSidebar);
    });

    it("renders a menu <Icon>", () => {
      expect(getNavbarToggler().find("Icon[name='menu']")).toHaveLength(1);
    });
  });

  describe("rendered <Scrollspy>", () => {
    it("sets its `items` prop to an array of each .nav-link's URL", () => {
      const navLinkUrls = getNavLinks().map(link => link.props().href.substring(1));
      expect(getScrollspy().props().items).toEqual(navLinkUrls);
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
