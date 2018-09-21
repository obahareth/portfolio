import Reference from 'components/Reference';

describe("<Reference>", () => {
  let mountedComponent;
  let props;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Reference {...props} />);
    }
    return mountedComponent;
  };
  const getAuthorAvatar = () => getComponent().find('Image');
  const getAuthorName = () => getComponent().find(`Heading[children='${props.authorName}']`);
  const getAuthorPosition = () => getComponent().find(`Heading[children='${props.authorPosition}']`);
  const getChildren = () => getComponent().find(`HTML[children='${props.children}']`);

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      authorName: 'Elon Musk',
      authorPosition: 'CEO @ SpaceX & Tesla',
      authorAvatar: { someKey: 'somevalue' },
      children: 'You should hire Daniel',
    };
  });

  it("renders a <div> as the root element", () => {
    expect(getComponent().is('div')).toBeTruthy();
  });

  it("renders the author's avatar", () => {
    expect(getAuthorAvatar()).toHaveLength(1);
  });

  it("renders the author's name", () => {
    expect(getAuthorName()).toHaveLength(1);
  });

  it("renders the author's position", () => {
    expect(getAuthorPosition()).toHaveLength(1);
  });

  it("renders `props.children`", () => {
    expect(getChildren()).toHaveLength(1);
  });

  describe("rendered avatar", () => {
    it("sets its `alt` prop as `props.authorName`", () => {
      expect(getAuthorAvatar().props().alt).toBe(props.authorName);
    });

    it("sets its `resolutions` prop as `props.authorAvatar`", () => {
      expect(getAuthorAvatar().props().resolutions).toEqual(props.authorAvatar);
    });
  });

  describe("when `props.className` is defined", () => {
    beforeEach(() => {
      props.className = 'some-class';
    });

    it("adds `props.className` to its `className` prop", () => {
      expect(getComponent().props().className).toContain(props.className);
    });
  });

  describe("when `props.noMargin` is `false`", () => {
    beforeEach(() => {
      props.noMargin = false;
    });

    it("sets a margin", () => {
      expect(getComponent().props().className).toContain('mt-');
    });
  });

  describe("when `props.noMargin` is `true`", () => {
    beforeEach(() => {
      props.noMargin = true;
    });

    it("doesn't set a margin", () => {
      expect(getComponent().props().className).not.toContain('mt-');
    });
  });
});
