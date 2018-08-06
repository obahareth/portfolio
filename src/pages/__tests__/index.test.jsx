import IndexPage from '../index';

describe("<IndexPage>", () => {
  let mountedComponent;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<IndexPage />);
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
