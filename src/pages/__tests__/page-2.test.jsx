import SecondPage from '../page-2';

describe("<SecondPage>", () => {
  let mountedComponent;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<SecondPage />);
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
