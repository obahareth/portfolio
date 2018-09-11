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
  const getRenderedApp = () => getComponent().find('App').dive();

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

  it("renders an <ErrorBoundary> as the root element", () => {
    expect(getComponent().is('ErrorBoundary')).toBeTruthy();
  });

  it("renders an <App>", () => {
    expect(getComponent().find('App')).toHaveLength(1);
  });

  it("renders a <Helmet>", () => {
    expect(getRenderedApp().find('HelmetWrapper')).toHaveLength(1);
  });

  it("renders a <Navbar>", () => {
    expect(getRenderedApp().find('Navbar')).toHaveLength(1);
  });

  it("renders a <Footer>", () => {
    expect(getRenderedApp().find('Footer')).toHaveLength(1);
  });

  it("renders `props.children`", () => {
    expect(getRenderedApp().contains(props.children())).toBeTruthy();
  });

  describe("rendered <Helmet>", () => {
    it("sets its `title` prop as `props.data.site.siteMetadata.title`", () => {
      expect(getRenderedApp().find('HelmetWrapper').props().title)
        .toBe(props.data.site.siteMetadata.title);
    });
  });

  // TODO: test navbar `solid` prop
});
