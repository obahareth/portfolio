import NotFoundPage from '../404';

describe("<NotFoundPage>", () => {
  let mountedComponent;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<NotFoundPage />);
    }
    return mountedComponent;
  };
  const getHeading = () => getComponent().find('Heading');
  const getHomePageLink = () => getComponent().find("GatsbyLink[to='/']");
  const getGif = () => getComponent().find("iframe[src*='giphy.com']");

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it("renders a <section> as the root element", () => {
    expect(getComponent().is('section')).toBeTruthy();
  });

  it("renders a <Heading>", () => {
    expect(getHeading()).toHaveLength(1);
  });

  it("renders a <Link> to the home page", () => {
    expect(getHomePageLink()).toHaveLength(1);
  });

  it("renders a <Link> to the home page", () => {
    expect(getHomePageLink()).toHaveLength(1);
  });

  it("renders a gif", () => {
    expect(getGif()).toHaveLength(1);
  });
});
