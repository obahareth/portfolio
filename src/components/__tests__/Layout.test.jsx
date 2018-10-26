import { Layout } from 'components/Layout';

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
      render: () => (
        <div>
          test
        </div>
      ),
      extraProp: 'some-value',
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
    expect(getApp()).toHaveLength(1);
  });

  it("renders a <Helmet>", () => {
    expect(getHelmet()).toHaveLength(1);
  });

  it("renders a <Sidebar>", () => {
    expect(getSidebar()).toHaveLength(1);
  });

  it("renders `props.render`", () => {
    expect(getRenderedApp().contains(props.render())).toBeTruthy();
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

  describe("`render` prop", () => {
    beforeEach(() => {
      props.render = jest.fn();
      getRenderedApp();
    });

    it("receives <App>'s `scrollTop` and `toggleSidebar` render prop args, and any extra props", () => {
      const app = getRenderedApp().instance();
      expect(props.render).toHaveBeenCalledWith({
        scrollTop: app.state.scrollTop,
        toggleSidebar: app.toggleSidebar,
        extraProp: props.extraProp,
      });
    });
  });
});
