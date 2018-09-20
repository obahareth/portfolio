import SkillList from 'components/SkillList';

describe("<SkillList>", () => {
  let mountedComponent;
  let props;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<SkillList {...props} />);
    }
    return mountedComponent;
  };
  const getListItems = () => getComponent().find('code');

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      skills: ['Django', 'React'],
    };
  });

  it("renders a <div> as the root element", () => {
    expect(getComponent().is('div')).toBeTruthy();
  });

  it("renders a <code> for each item in `props.skills`", () => {
    expect(getListItems()).toHaveLength(props.skills.length);
  });

  describe("each rendered <code>", () => {
    it("sets its `key` prop as the item's skill", () => {
      getListItems().forEach((node, index) => {
        const skill = props.skills[index];
        expect(node.key()).toBe(skill);
      });
    });

    it("renders a <code> containing the item's skill", () => {
      getListItems().find('code').forEach((node, index) => {
        const skill = props.skills[index];
        expect(node.contains(skill)).toBeTruthy();
      });
    });
  });
});
