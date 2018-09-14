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

  const getAvatar = () => getComponent().find('Image');
  const getTitle = () => getComponent().find('Heading[size=1]');
  const getSubtitle = () => getComponent().find('Heading[size=3]');

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      avatarResolutions: {},
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

  it("renders a <Heading size={1}> for the title", () => {
    expect(getTitle()).toHaveLength(1);
  });

  it("renders a <Heading size={3}> for the subtitle", () => {
    expect(getSubtitle()).toHaveLength(1);
  });

  it("renders `props.children`", () => {
    expect(getComponent().contains(props.children)).toBeTruthy();
  });

  describe("rendered avatar", () => {
    it("sets `props.avatarResolutions` as its `resolutions` prop", () => {
      expect(getAvatar().props().resolutions).toBe(props.avatarResolutions);
    });
  });

  describe("rendered title", () => {
    it("sets `props.title` as its `children` prop", () => {
      expect(getTitle().props().children).toBe(props.title);
    });
  });

  describe("rendered subtitle", () => {
    it("sets `props.subtitle` as its `children` prop", () => {
      expect(getSubtitle().props().children).toBe(props.subtitle);
    });
  });
});
