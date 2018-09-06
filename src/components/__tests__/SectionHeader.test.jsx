import SectionHeader from 'components/SectionHeader';

describe("<SectionHeader>", () => {
  let mountedComponent;
  let props;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<SectionHeader {...props} />);
    }
    return mountedComponent;
  };
  const getTitle = () => getComponent().find('h2');

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      description: 'testing',
      index: 1,
      title: 'some title',
    };
  });

  it("renders a <header> as the root element", () => {
    expect(getComponent().is('header')).toBeTruthy();
  });

  it("renders a title", () => {
    expect(getTitle()).toHaveLength(1);
  });

  it("renders `props.description` in a paragraph", () => {
    expect(getComponent().find(`p[children='${props.description}']`)).toHaveLength(1);
  });

  describe("rendered title", () => {
    it("renders `props.index` inside a <span>", () => {
      expect(getTitle().find(`span[children='0${props.index} —']`)).toHaveLength(1);
    });

    it("renders `props.title`", () => {
      expect(getComponent().contains(` ${props.title}`)).toBeTruthy();
    });
  });
});
