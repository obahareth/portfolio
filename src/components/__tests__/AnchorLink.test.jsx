import AnchorLink from 'components/AnchorLink';

describe("<AnchorLink>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<AnchorLink {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      children: 'some link',
      href: '#some-link',
    };
  });

  it("renders an <AnchorLink> as the root element", () => {
    expect(getComponent().is('AnchorLink')).toBeTruthy();
  });

  it("sets its `children` prop as `props.children`", () => {
    expect(getComponent().props().children).toBe(props.children);
  });

  it("sets its `href` prop as `props.href`", () => {
    expect(getComponent().props().href).toBe(props.href);
  });
});
