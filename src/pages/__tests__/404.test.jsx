import NotFoundPage from '../404';

describe("<NotFoundPage>", () => {
  let mountedComponent;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<NotFoundPage />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it("renders a <section> as the root element", () => {
    expect(getComponent().is('section')).toBeTruthy();
  });
});
