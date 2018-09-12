import MainHeader from '../MainHeader';

describe("<MainHeader>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<MainHeader {...props} />);
    }
    return mountedComponent;
  };

  const getAvatar = () => getComponent().find("img[className*='rounded-circle']");
  const getTitle = () => getComponent().find('h1');
  const getSubtitle = () => getComponent().find('h3');

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      avatar: 'dummy-image.jpg',
      children: (
        <div>
          some HTML
        </div>
      ),
      subtitle: 'Subtitle',
      title: 'Title',
    };
  });

  it("renders a <Parallax> as the root element", () => {
    expect(getComponent().is('Parallax')).toBeTruthy();
  });

  it("renders a <header>", () => {
    expect(getComponent().find('header')).toHaveLength(1);
  });

  it("renders an avatar", () => {
    expect(getAvatar()).toHaveLength(1);
  });

  it("renders a title", () => {
    expect(getTitle()).toHaveLength(1);
  });

  it("renders a subtitle", () => {
    expect(getSubtitle()).toHaveLength(1);
  });

  it("renders `props.children`", () => {
    expect(getComponent().contains(props.children)).toBeTruthy();
  });

  describe("rendered avatar", () => {
    it("sets `props.avatar` as its `src` prop", () => {
      expect(getAvatar().props().src).toBe(props.avatar);
    });
  });

  describe("rendered title", () => {
    it("sets `props.title` as its children", () => {
      expect(getTitle().text()).toBe(props.title);
    });
  });

  describe("rendered subtitle", () => {
    it("sets `props.subtitle` as its children", () => {
      expect(getSubtitle().text()).toBe(props.subtitle);
    });
  });
});
