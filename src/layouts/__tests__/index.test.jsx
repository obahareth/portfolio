import Layout from '../index';

describe("<Layout>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Layout {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      children: () => (
        <div>
          test
        </div>
      ),
      data: {
        site: {
          siteMetadata: {
            title: 'site',
          },
        },
      },
    };
    mountedComponent = undefined;
  });

  it("renders a <div> as the root element", () => {
    expect(getComponent().is('div')).toBeTruthy();
  });

  it("renders a <Helmet>", () => {
    expect(getComponent().find('HelmetWrapper')).toHaveLength(1);
  });

  it("renders a <Header>", () => {
    expect(getComponent().find('Header')).toHaveLength(1);
  });

  it("renders `props.children`", () => {
    expect(getComponent().contains(props.children())).toBeTruthy();
  });

  describe("rendered <Helmet>", () => {
    it("sets its `title` prop as `props.data.site.siteMetadata.title`", () => {
      expect(getComponent().find('HelmetWrapper').props().title)
        .toBe(props.data.site.siteMetadata.title);
    });
  });

  describe("rendered <Header>", () => {
    it("sets its `siteTitle` prop as `props.data.site.siteMetadata.title`", () => {
      expect(getComponent().find('Header').props().siteTitle)
        .toBe(props.data.site.siteMetadata.title);
    });
  });
});
