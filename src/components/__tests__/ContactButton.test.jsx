import ContactButton from 'components/ContactButton';

describe("<ContactButton>", () => {
  let mountedComponent;
  let props;
  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<ContactButton {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it("renders a <Button> as the root element", () => {
    expect(getComponent().is('Button')).toBeTruthy();
  });

  it("passes any props to <Button>", () => {
    props = {
      someProp: 'some-value',
      anotherProp: 'another-value',
    };

    expect(getComponent().props()).toEqual(expect.objectContaining(props));
  });
});
