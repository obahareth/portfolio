import Sidebar from 'components/Sidebar';
import {
  CONTACT_EMAIL, NAV_LINKS, PAGE_CONTENT_ID, PAGE_CONTENT_CONTAINER_ID,
} from 'constants';

describe("<Sidebar>", () => {
  let mountedComponent;
  let props;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Sidebar {...props} />);
    }
    return mountedComponent;
  };
  const getLinks = () => getComponent().find('AnchorLink');
  const getNavScrollspy = () => getComponent().find('NavScrollspy');
  const getContactLink = () => getComponent().find(`a[href='mailto:${CONTACT_EMAIL}']`);

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      toggle: jest.fn(),
    };
  });

  it("renders a <Menu> as the root element", () => {
    expect(getComponent().is('Menu')).toBeTruthy();
  });

  it("renders a <NavScrollspy>", () => {
    expect(getNavScrollspy()).toHaveLength(1);
  });

  it("renders a contact link", () => {
    expect(getContactLink()).toHaveLength(1);
  });

  describe("rendered <Menu>", () => {
    beforeEach(() => {
      props.isOpen = false;
    });

    it("sets its `isOpen` prop to `props.isOpen`", () => {
      expect(getComponent().props().isOpen).toBe(props.isOpen);
    });

    it("sets its `pageWrapId` prop to `PAGE_CONTENT_ID`", () => {
      expect(getComponent().props().pageWrapId).toBe(PAGE_CONTENT_ID);
    });

    it("sets its `outerContainerId` prop to `PAGE_CONTENT_CONTAINER_ID`", () => {
      expect(getComponent().props().outerContainerId).toBe(PAGE_CONTENT_CONTAINER_ID);
    });

    describe(`onStateChange prop`, () => {
      beforeEach(() => {
        props.isOpen = false;
      });

      it("calls `props.toggle` if its `state.isOpen` arg is different to `props.isOpen`", () => {
        const newState = { isOpen: !props.isOpen };
        getComponent().props().onStateChange(newState);
        expect(props.toggle).toHaveBeenCalled();
      });

      it("doesn't call `props.toggle` if its `state.isOpen` arg is equal to `props.isOpen`", () => {
        const newState = { isOpen: props.isOpen };
        getComponent().props().onStateChange(newState);
        expect(props.toggle).not.toHaveBeenCalled();
      });
    });
  });

  describe("rendered <NavScrollspy>", () => {
    describe('`mapItems` prop', () => {
      const args = { name: 'Intro', href: 'intro' };
      let renderedAnchorLink;

      beforeEach(() => {
        renderedAnchorLink = shallow(getNavScrollspy().props().mapItems(args))
          .find('AnchorLink');
      });

      it('is a function', () => {
        expect(typeof getNavScrollspy().props().mapItems).toBe('function');
      });

      it('renders an <AnchorLink>', () => {
        expect(renderedAnchorLink.is('AnchorLink')).toBeTruthy();
      });

      describe('rendered <AnchorLink>', () => {
        it("sets its `href` prop to `mapItems`'s `href` arg", () => {
          expect(renderedAnchorLink.props().href).toBe(`#${args.href}`);
        });

        it("sets its `children` prop to `mapItems`'s `name` arg", () => {
          expect(renderedAnchorLink.props().children).toBe(args.name);
        });

        it("sets its `key` prop to `mapItems`'s `name` arg", () => {
          getLinks().forEach((node, index) => expect(
            node.key(),
          ).toBe(NAV_LINKS[index].name));
        });

        it("sets its `onClick` prop to `props.toggle`", () => {
          expect(renderedAnchorLink.props().onClick).toBe(props.toggle);
        });
      });
    });
  });
});
