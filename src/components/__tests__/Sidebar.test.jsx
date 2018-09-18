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

  it("renders an <AnchorLink> for each link in `NAV_LINKS`", () => {
    expect(getLinks()).toHaveLength(NAV_LINKS.length);
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

  describe("each rendered <AnchorLink>", () => {
    it("sets its `href` prop to its `href` in `NAV_LINKS`", () => {
      getLinks().forEach((link, index) => {
        expect(link.props().href).toBe(`#${NAV_LINKS[index].href}`);
      });
    });

    it("sets its `key` prop to its `name` in `NAV_LINKS`", () => {
      getLinks().forEach((link, index) => {
        expect(link.key()).toBe(NAV_LINKS[index].name);
      });
    });

    it("sets its `children` prop to its `name` in `NAV_LINKS`", () => {
      getLinks().forEach((link, index) => {
        expect(link.props().children).toBe(NAV_LINKS[index].name);
      });
    });

    it("sets its `onClick` prop to `props.toggle`", () => {
      getLinks().forEach((link) => {
        expect(link.props().onClick).toBe(props.toggle);
      });
    });
  });
});
