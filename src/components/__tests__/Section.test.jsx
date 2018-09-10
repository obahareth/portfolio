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

    describe("when `props.gray` is `true`", () => {
      beforeEach(() => {
        props.gray = true;
      });

      it("adds 'Section--gray' to its `className` prop", () => {
        expect(getComponent().props().className).toContain('Section--gray');
      });
    });

    describe("when `props.bgStars` is `true`", () => {
      beforeEach(() => {
        props.bgStars = true;
      });

      it("adds 'Section--bg-stars' to its `className` prop", () => {
        expect(getComponent().props().className).toContain('Section--bg-stars');
      });
    });

    describe("when `props.padding` is set as `large`", () => {
      beforeEach(() => {
        props.padding = 'large';
      });

      it("adds 'Section--padding-large' to its `className` prop", () => {
        expect(getComponent().props().className).toContain('Section--padding-large');
      });
    });

    describe("when `props.padding` is set as `small`", () => {
      beforeEach(() => {
        props.padding = 'small';
      });

      it("adds 'Section--padding-small' to its `className` prop", () => {
        expect(getComponent().props().className).toContain('Section--padding-small');
      });
    });

    describe("when `props.roundedBottom` is `true`", () => {
      beforeEach(() => {
        props.roundedBottom = true;
      });

      it("adds 'Section--rounded-bottom' to its `className` prop", () => {
        expect(getComponent().props().className).toContain('Section--rounded-bottom');
      });
    });

    describe("when `props.roundedTop` is `true`", () => {
      beforeEach(() => {
        props.roundedTop = true;
      });

      it("adds 'Section--rounded-top' to its `className` prop", () => {
        expect(getComponent().props().className).toContain('Section--rounded-top');
      });
    });
  });
});
