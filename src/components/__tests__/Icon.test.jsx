import Icon from 'components/Icon';

describe("<Icon>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Icon {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      name: 'some-icon',
    };
  });

  it("renders a <i> as the root element", () => {
    expect(getComponent().is('i')).toBeTruthy();
  });

  describe("rendered <i>", () => {
    it("adds `icon-$[props.name]` to its `className` prop", () => {
      expect(getComponent().props().className).toContain(`icon-${props.name}`);
    });
  });
});
