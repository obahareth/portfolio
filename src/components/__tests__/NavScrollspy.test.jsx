import NavScrollspy from 'components/NavScrollspy';
import { NAV_LINKS } from 'constants';

describe("<NavScrollspy>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<NavScrollspy {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      mapItems: item => (
        <a href={`#${item.href}`} key={item.href}>
          {item.name}
        </a>
      ),
    };
  });

  it("renders a <Scrollspy> as the root element", () => {
    expect(getComponent().is('Scrollspy')).toBeTruthy();
  });

  it("sets its `items` prop to the hrefs from `NAV_LINKS`", () => {
    expect(getComponent().props().items).toEqual(NAV_LINKS.map(link => link.href));
  });

  it("sets its `children` prop as `NAV_LINKS` mapped to `props.mapItems`", () => {
    expect(getComponent().props().children).toEqual(NAV_LINKS.map(props.mapItems));
  });

  describe('when `props.className` is defined', () => {
    beforeEach(() => {
      props.className = 'some-class';
    });

    it("sets its `className` prop as `props.className`", () => {
      expect(getComponent().props().className).toBe(props.className);
    });
  });
});
