import HeadingSection from 'components/HeadingSection';

describe("<HeadingSection>", () => {
  let mountedComponent;
  let props;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<HeadingSection {...props} />);
    }
    return mountedComponent;
  };
  const getHeading = () => getComponent().find('Heading');

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      title: 'Front-end',
      children: 'front-end experience',
      size: 3,
      icon: 'js-icon',
    };
  });

  it("renders a <div> as the root element", () => {
    expect(getComponent().is('div')).toBeTruthy();
  });

  it("renders `props.children`", () => {
    expect(getComponent().contains(props.children)).toBeTruthy();
  });

  it("renders a <Heading>", () => {
    expect(getHeading()).toHaveLength(1);
  });

  describe("rendered <Heading>", () => {
    it("sets its `children` prop as `props.title`", () => {
      expect(getHeading().props().children).toBe(props.title);
    });

    it("sets its `icon` prop as `props.icon`", () => {
      expect(getHeading().props().icon).toBe(props.icon);
    });

    it("sets its `size` prop as `props.size`", () => {
      expect(getHeading().props().size).toBe(props.size);
    });
  });
});
