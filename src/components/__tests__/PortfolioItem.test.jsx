import PortfolioItem from 'components/PortfolioItem';

describe("<PortfolioItem>", () => {
  let mountedComponent;
  let props;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<PortfolioItem {...props} />);
    }
    return mountedComponent;
  };
  const getImg = () => getComponent().find('Image');
  const getTitle = () => getComponent().find('Heading[size=3]');
  const getYear = () => getTitle().find('span');
  const getSkillList = () => getComponent().find('SkillList');
  const getDescription = () => getComponent().find('p');
  const getCols = () => getComponent().find('Col');
  const getList = () => getComponent().find('ul');

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      description: 'some app I made',
      imageSizes: {
        aspectRatio: 3,
        src: 'test.png',
        srcSet: 'test',
        sizes: 'test',
      },
      name: 'Awesome App',
      skillsUsed: ['React', 'Redux', 'Django', 'SCSS', 'Twitter Bootstrap'],
      year: 2017,
    };
  });

  it("renders a <Row> as the root element", () => {
    expect(getComponent().is('Row')).toBeTruthy();
  });

  it("renders two <Col>s", () => {
    expect(getCols()).toHaveLength(2);
  });

  it("sets the first <Col>'s `lg.order` prop as `undefined`", () => {
    expect(getCols().first().props().lg.order).not.toBeDefined();
  });

  it("renders an <Img>", () => {
    expect(getImg()).toHaveLength(1);
  });

  it("renders a title", () => {
    expect(getTitle()).toHaveLength(1);
  });

  it("renders the year", () => {
    expect(getYear()).toHaveLength(1);
  });

  it("renders a <SkillList>", () => {
    expect(getSkillList()).toHaveLength(1);
  });

  it("renders the description", () => {
    expect(getDescription()).toHaveLength(1);
  });

  describe("when `props.alt` is `true`", () => {
    beforeEach(() => {
      props.alt = true;
    });

    it("sets the first <Col>'s `lg.order` prop as `2`", () => {
      expect(getCols().first().props().lg.order).toBe(2);
    });
  });

  describe("rendered <Img>", () => {
    it("sets its `fluid` prop as `props.imageSizes`", () => {
      expect(getImg().props().fluid).toBe(props.imageSizes);
    });

    it("sets its `alt` prop as `$[props.name] screenshot`", () => {
      expect(getImg().props().alt).toBe(`${props.name} screenshot`);
    });
  });

  describe("rendered title", () => {
    it("sets its `children` prop as `props.name`", () => {
      expect(getTitle().contains(props.name)).toBeTruthy();
    });
  });

  describe("rendered year", () => {
    it("sets its `children` prop as `props.year`", () => {
      expect(getYear().props().children).toContain(props.year);
    });
  });

  describe("rendered <SkillList>", () => {
    it("sets its `skills` prop as `props.skillsUsed`", () => {
      expect(getSkillList().props().skills).toBe(props.skillsUsed);
    });
  });

  describe("rendered description", () => {
    it("sets its `children` prop as `props.description`", () => {
      expect(getDescription().props().children).toBe(props.description);
    });
  });

  describe("when `props.caseStudy` is defined", () => {
    beforeEach(() => {
      props.caseStudy = 'https://danieljs.me/some-case-study/';
    });

    it("renders an inline list", () => {
      expect(getList()).toHaveLength(1);
    });

    it("renders a list item for the case study inside the list", () => {
      expect(getList().find('li')).toHaveLength(1);
    });

    describe("rendered list item", () => {
      it("sets its `key` prop as 'Case study'", () => {
        expect(getList().find('li').key()).toBe('Case study');
      });

      it("renders an <a>", () => {
        expect(getList().find('li').find('a')).toHaveLength(1);
      });

      describe("rendered <a>", () => {
        it("sets its `href` prop as `props.caseStudy`", () => {
          expect(getList().find('a').props().href).toBe(props.caseStudy);
        });

        it("sets its `children` prop as 'Case study'", () => {
          expect(getList().find('a').contains('Case study')).toBeTruthy();
        });

        it("renders an <Icon> with its `name` prop set to 'case-study'", () => {
          expect(getList().find('li').find('a').find("Icon[name='case-study']"))
            .toHaveLength(1);
        });
      });
    });
  });

  describe("when `props.siteLink` is defined", () => {
    beforeEach(() => {
      props.siteLink = 'https://debak.danieljs.tech';
    });

    it("renders an inline list", () => {
      expect(getList()).toHaveLength(1);
    });

    it("renders a list item for the case study inside the list", () => {
      expect(getList().find('li')).toHaveLength(1);
    });

    describe("rendered list item", () => {
      it("sets its `key` prop as 'View site'", () => {
        expect(getList().find('li').key()).toBe('View site');
      });

      it("renders an <a>", () => {
        expect(getList().find('li').find('a')).toHaveLength(1);
      });

      describe("rendered <a>", () => {
        it("sets its `href` prop as `props.siteLink`", () => {
          expect(getList().find('a').props().href).toBe(props.siteLink);
        });

        it("sets its `children` prop as 'View site'", () => {
          expect(getList().find('a').contains('View site')).toBeTruthy();
        });

        it("renders an <Icon> with its `name` prop set to 'view-site'", () => {
          expect(getList().find('li').find('a').find("Icon[name='view-site']"))
            .toHaveLength(1);
        });
      });
    });
  });

  describe("when `props.sourceCode` is defined", () => {
    beforeEach(() => {
      props.sourceCode = 'https://github.com/dspacejs/portfolio';
    });

    it("renders an inline list", () => {
      expect(getList()).toHaveLength(1);
    });

    it("renders a list item for the case study inside the list", () => {
      expect(getList().find('li')).toHaveLength(1);
    });

    describe("rendered list item", () => {
      it("sets its `key` prop as 'Source code'", () => {
        expect(getList().find('li').key()).toBe('Source code');
      });

      it("renders an <a>", () => {
        expect(getList().find('li').find('a')).toHaveLength(1);
      });

      describe("rendered <a>", () => {
        it("sets its `href` prop as `props.sourceCode`", () => {
          expect(getList().find('a').props().href).toBe(props.sourceCode);
        });

        it("sets its `children` prop as 'Source code'", () => {
          expect(getList().find('a').contains('Source code')).toBeTruthy();
        });

        it("renders an <Icon> with its `name` prop set to 'developer'", () => {
          expect(getList().find('li').find('a').find("Icon[name='developer']"))
            .toHaveLength(1);
        });
      });
    });
  });

  describe("when `props.noMargin` is `false`", () => {
    beforeEach(() => {
      props.noMargin = false;
    });

    it("sets a margin", () => {
      expect(getComponent().props().className).toContain('mt-');
    });
  });

  describe("when `props.noMargin` is `true`", () => {
    beforeEach(() => {
      props.noMargin = true;
    });

    it("doesn't set a margin", () => {
      expect(getComponent().props().className).not.toContain('mt-');
    });
  });
});
