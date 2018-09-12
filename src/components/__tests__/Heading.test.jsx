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
});
