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

  it("renders a <main> as the root element", () => {
    expect(getComponent().is('main')).toBeTruthy();
  });

  it("renders a <MainHeader>", () => {
    expect(getComponent().find('MainHeader')).toHaveLength(1);
  });
});
