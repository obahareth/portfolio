import Section from 'components/Section';

describe("<Section>", () => {
  let mountedComponent;
  let props;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Section {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      children: (
        <div>
          content
        </div>
      ),
    };
  });

  it("renders a <section> as the root element", () => {
    expect(getComponent().is('section')).toBeTruthy();
  });

  describe("rendered <section>", () => {
    it("sets its `className` prop as 'Section'", () => {
      expect(getComponent().props().className).toBe('Section');
    });

    describe("when `props.roundedBottom` is `true`", () => {
      beforeEach(() => {
        props.roundedBottom = true;
      });

      it("sets adds 'Section--rounded-bottom' to its `className` prop", () => {
        expect(getComponent().props().className).toContain('Section--rounded-bottom');
      });
    });

    describe("when `props.gray` is `true`", () => {
      beforeEach(() => {
        props.gray = true;
      });

      it("sets adds 'Section--gray' to its `className` prop", () => {
        expect(getComponent().props().className).toContain('Section--gray');
      });
    });
  });
});
