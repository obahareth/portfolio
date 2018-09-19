import Scrollspy from 'components/Scrollspy';

describe("<Scrollspy>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Scrollspy {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      children: 'some items',
      items: ['some-href', 'another-href'],
    };
  });

  it("renders a <Scrollspy> as the root element", () => {
    expect(getComponent().is('Scrollspy')).toBeTruthy();
  });

  it("sets its `items` prop to `props.items`", () => {
    expect(getComponent().props().items).toBe(props.items);
  });

  it("sets its `children` prop to `props.children`", () => {
    expect(getComponent().props().children).toBe(props.children);
  });

  describe('when `props.className` is defined', () => {
    beforeEach(() => {
      props.className = 'some-class';
    });

    it("sets its `className` prop as `props.className`", () => {
      expect(getComponent().props().className).toBe(props.className);
    });
  });
});
