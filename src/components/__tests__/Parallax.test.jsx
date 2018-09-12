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
});
