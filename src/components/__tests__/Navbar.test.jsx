import isFunction from 'lodash/isFunction';

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
  const getNavScrollspy = () => getComponent().find('NavScrollspy');
  const getNavItems = () => getNavScrollspy().find('NavItem');
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

  it("renders a <NavScrollspy>", () => {
    expect(getNavScrollspy()).toHaveLength(1);
  });

  it("renders a <ContactButton>", () => {
    expect(getComponent().find('ContactButton')).toHaveLength(1);
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

  describe("rendered <NavScrollspy>", () => {
    describe('`mapItems` prop', () => {
      let renderedNavScrollspy;

      beforeEach(() => {
        renderedNavScrollspy = getNavScrollspy().dive();
      });

      it("is a function", () => {
        expect(isFunction(getNavScrollspy().props().mapItems)).toBeTruthy();
      });

      it("renders <NavItem>s", () => {
        expect(renderedNavScrollspy.find('NavItem').length).toBeGreaterThan(1);
      });

      it("renders <AnchorLink>s", () => {
        expect(renderedNavScrollspy.find('AnchorLink').length).toBeGreaterThan(1);
      });

      describe('each rendered <NavItem>', () => {
        let renderedNavItems;

        beforeEach(() => {
          renderedNavItems = renderedNavScrollspy.find('NavItem');
        });

        it("sets its `key` prop to its item's `name`", () => {
          renderedNavItems.forEach((node, index) => expect(
            node.key(),
          ).toBe(NAV_LINKS[index].name));
        });

        it("sets its `className` prop to 'd-none' if its item's name is 'Intro'", () => {
          renderedNavItems.forEach((node, index) => expect(
            node.props().className,
          ).toBe(NAV_LINKS[index].name === 'Intro' ? 'd-none' : ''));
        });
      });

      describe('each rendered <AnchorLink>', () => {
        let renderedAnchorLinks;

        beforeEach(() => {
          renderedAnchorLinks = renderedNavScrollspy.find('AnchorLink');
        });

        it("sets its `href` prop to its item's `href` prepended with a #", () => {
          renderedAnchorLinks.forEach((node, index) => expect(
            node.props().href,
          ).toBe(`#${NAV_LINKS[index].href}`));
        });

        it("sets its `children` prop to its item's `name`", () => {
          renderedAnchorLinks.forEach((node, index) => expect(
            node.props().children,
          ).toBe(NAV_LINKS[index].name));
        });
      });
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
