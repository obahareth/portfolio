import Heading from 'components/Heading';

describe("<Heading>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Heading {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      children: 'some title',
      size: 1,
    };
  });

  it("renders a heading as the root element of `props.size`", () => {
    expect(getComponent().is(`h${props.size}`)).toBeTruthy();
  });

  it("renders `props.children`", () => {
    expect(getComponent().contains(props.children)).toBeTruthy();
  });

  describe("when `props.icon` is defined", () => {
    beforeEach(() => {
      props.icon = 'some-icon';
    });

    it("renders an <Icon> with its `name` prop set to `props.icon`", () => {
      expect(getComponent().find(`Icon[name='${props.icon}']`)).toHaveLength(1);
    });
  });

  describe("when `props.extraBold` is `true`", () => {
    beforeEach(() => {
      props.extraBold = true;
    });

    it("adds 'Heading--extra-bold' to its `className` prop", () => {
      expect(getComponent().props().className).toContain('Heading--extra-bold');
    });
  });

  describe("when `props.light` is `true`", () => {
    beforeEach(() => {
      props.light = true;
    });

    it("adds 'Heading--light' to its `className` prop", () => {
      expect(getComponent().props().className).toContain('Heading--light');
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
});
