import IndexPage from '../index';

describe("<IndexPage>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<IndexPage {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      data: {
        avatar: {
          childImageSharp: {
            resolutions: {},
          },
        },
      },
    };
  });

  it("renders a <main> as the root element", () => {
    expect(getComponent().is('main')).toBeTruthy();
  });

  it("renders a <MainHeader>", () => {
    expect(getComponent().find('MainHeader')).toHaveLength(1);
  });
});
