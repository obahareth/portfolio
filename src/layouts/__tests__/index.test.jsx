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
  const getApp = () => getComponent().find('App');
  const getRenderedApp = () => getApp().dive();
  const getHelmet = () => getRenderedApp().find('HelmetWrapper');
  const getSidebar = () => getRenderedApp().find('Sidebar');

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
            description: 'some description',
            siteUrl: 'https://danieljs.tech',
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
    expect(getHelmet()).toHaveLength(1);
  });

  it("renders a <Sidebar>", () => {
    expect(getSidebar()).toHaveLength(1);
  });

  it("renders `props.children`", () => {
    expect(getRenderedApp().contains(props.children())).toBeTruthy();
  });

  describe("rendered <Helmet>", () => {
    it("sets its `title` prop as `props.data.site.siteMetadata.title`", () => {
      expect(getHelmet().props().title).toBe(props.data.site.siteMetadata.title);
    });
  });

  describe("rendered <App>", () => {
    const args = { isSidebarOpen: false, scrollTop: 0, toggleSidebar: jest.fn() };
    let getAppWrapper;

    beforeEach(() => {
      const AppWrapper = getApp().props().render;
      getAppWrapper = () => shallow(<AppWrapper {...args} />);
    });

    it("sets <Sidebar>'s `isOpen` prop to its `isSidebarOpen` arg", () => {
      expect(getAppWrapper().find('Sidebar').props().isOpen).toBe(args.isSidebarOpen);
    });

    it("sets <Sidebar>'s `toggle` prop to its `toggleSidebar` arg", () => {
      expect(getAppWrapper().find('Sidebar').props().toggle).toBe(args.toggleSidebar);
    });
  });

  // TODO: test `scrollTop` and `otherProps` is passed to `children`
  // TODO: add tests for `getTwitterImage`
});
