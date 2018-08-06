import Header from '../Header';

describe("<Header>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Header {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      siteTitle: 'Site title',
    };
    mountedComponent = undefined;
  });

  it("renders a <div> as the root element", () => {
    expect(getComponent().is('div')).toBeTruthy();
  });

  it("renders a title", () => {
    expect(getComponent().find('h1')).toHaveLength(1);
  });

  describe("rendered title", () => {
    it("renders a <Link>", () => {
      expect(getComponent().find('h1').find('GatsbyLink')).toHaveLength(1);
    });

    describe("rendered <Link>", () => {
      it("sets its value as `props.siteTitle`", () => {
        const link = getComponent().find('h1').find('GatsbyLink');
        expect(link.children().text()).toBe(props.siteTitle);
      });
    });
  });
});
