import Parallax from 'components/Parallax';

describe("<Parallax>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Parallax {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      children: (
        <div>
          Some text
        </div>
      ),
    };
  });

  it("renders a <Plx> as the root element", () => {
    expect(getComponent().is('Plx')).toBeTruthy();
  });

  it("renders `props.children`", () => {
    expect(getComponent().contains(props.children)).toBeTruthy();
  });

  describe("when the user is on a small screen", () => {
    let parallaxData;

    beforeEach(() => {
      window.innerHeight = 700;
      [parallaxData] = getComponent().props().parallaxData;
    });

    it("sets its `parallaxData.end` prop to `600`", () => {
      expect(parallaxData.end).toBe(600);
    });

    it("sets its `parallaxData.easing` prop to `easeIn`", () => {
      expect(parallaxData.easing).toBe('easeIn');
    });
  });

  describe("when the user is not on a small screen", () => {
    let parallaxData;

    beforeEach(() => {
      window.innerHeight = 1000;
      [parallaxData] = getComponent().props().parallaxData;
    });

    it("sets its `parallaxData.end` prop to `500`", () => {
      expect(parallaxData.end).toBe(500);
    });

    it("sets its `parallaxData.easing` prop to `undefined`", () => {
      expect(parallaxData.easing).not.toBeDefined();
    });
  });
});
