import get from 'lodash/get';

import IndexPage from '../index';

describe("<IndexPage>", () => {
  let mountedComponent;
  let props;

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<IndexPage {...props} />);
    }
    return mountedComponent;
  };
  const getMainHeader = () => getComponent().find('MainHeader');
  const getNavbar = () => getComponent().find('Navbar');
  const getPortfolioItems = () => getComponent().find('PortfolioItem');
  const getReferences = () => getComponent().find('Reference');
  const getSectionHeaders = () => getComponent().find('SectionHeader');
  const getHeadingSections = () => getComponent().find('HeadingSection');

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      scrollTop: 0,
      toggleSidebar: jest.fn(),
      data: {
        avatar: {
          childImageSharp: {
            resolutions: {},
          },
        },
        portfolioItems: {
          edges: [
            {
              node: {
                name: 'Trausing',
                description: 'Housing platform',
                year: 2016,
                siteLink: 'https://trausing.danieljs.tech',
                sourceCode: undefined,
                skillsUsed: ['Django', 'Python', 'PostgreSQL', 'jQuery'],
                caseStudy: 'https://danieljs.me/my-first-taste-of-success/',
                image: {
                  childImageSharp: {
                    sizes: {
                      someProperty: 'someValue',
                    },
                  },
                },
              },
            },
            {
              node: {
                name: 'Trizma',
                description: 'Website',
                year: 2018,
                siteLink: 'https://trizma.danieljs.tech',
                sourceCode: 'https://github.com/dspacejs/someproject',
                skillsUsed: ['Nunjucks', 'Sass', 'Gulp', 'jQuery'],
                image: {
                  childImageSharp: {
                    sizes: {
                      someProperty: 'someValue',
                    },
                  },
                },
              },
            },
          ],
        },
        references: {
          edges: [
            {
              node: {
                authorName: 'Elon Musk',
                authorPosition: 'CEO @ SpaceX & Tesla',
                message: 'Hire Daniel',
                authorAvatar: {
                  childImageSharp: {
                    resolutions: {
                      someKey: 'somevalue',
                    },
                  },
                },
              },
            },
            {
              node: {
                authorName: 'Nikola Tesla',
                authorPosition: 'Inventor',
                message: 'Daniel is a cool kiddo',
                authorAvatar: {
                  childImageSharp: {
                    resolutions: {
                      someKey: 'somevalue',
                    },
                  },
                },
              },
            },
          ],
        },
      },
    };
  });

  it("renders a <div> as the root element", () => {
    expect(getComponent().is('div')).toBeTruthy();
  });

  it("renders a <main>", () => {
    expect(getComponent().find('main')).toHaveLength(1);
  });

  it("renders a <Navbar>", () => {
    expect(getNavbar()).toHaveLength(1);
  });

  it("renders a <Footer>", () => {
    expect(getComponent().find('Footer')).toHaveLength(1);
  });

  it("renders a <MainHeader>", () => {
    expect(getMainHeader()).toHaveLength(1);
  });

  it("renders a <PortfolioItem> for each item in `props.data.portfolioItems`", () => {
    expect(getPortfolioItems()).toHaveLength(props.data.portfolioItems.edges.length);
  });

  it("renders a <Reference> for each item in `props.data.references`", () => {
    expect(getReferences()).toHaveLength(props.data.references.edges.length);
  });

  it("renders a <SectionHeader> for Daniel's skillset", () => {
    expect(getSectionHeaders().filter("[title='Skillset']")).toHaveLength(1);
  });

  it("renders a <SectionHeader> for Daniel's values", () => {
    expect(getSectionHeaders().filter("[title='Values']")).toHaveLength(1);
  });

  it("renders a <SectionHeader> for Daniel's projects", () => {
    expect(getSectionHeaders().filter("[title='Showcase']")).toHaveLength(1);
  });

  it("renders a <SectionHeader> for Daniel's story", () => {
    expect(getSectionHeaders().filter("[title='My story']")).toHaveLength(1);
  });

  it("renders a <SectionHeader> for Daniel's references", () => {
    expect(getSectionHeaders().filter("[title='References']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's developer skillset", () => {
    expect(getHeadingSections().filter("[title='Developer']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's front-end skillset", () => {
    expect(getHeadingSections().filter("[title='Front-end development']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's back-end skillset", () => {
    expect(getHeadingSections().filter("[title='Back-end development']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's sysadmin skillset", () => {
    expect(getHeadingSections().filter("[title='System administration']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's design skillset", () => {
    expect(getHeadingSections().filter("[title='Design sense']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's business skillset", () => {
    expect(getHeadingSections().filter("[title='Business insight']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's passion value", () => {
    expect(getHeadingSections().filter("[title='Passion']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's craftsmanship value", () => {
    expect(getHeadingSections().filter("[title='Craftsmanship']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's cooperation value", () => {
    expect(getHeadingSections().filter("[title='Cooperation']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's communication value", () => {
    expect(getHeadingSections().filter("[title='Communication']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's focus value", () => {
    expect(getHeadingSections().filter("[title='Focus']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's curiosity value", () => {
    expect(getHeadingSections().filter("[title='Curiosity']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's independence value", () => {
    expect(getHeadingSections().filter("[title='Independence']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's open-mindedness value", () => {
    expect(getHeadingSections().filter("[title='Open-mindedness']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's journey as a developer", () => {
    expect(getHeadingSections().filter("[title='My journey as a developer']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's personal life", () => {
    expect(getHeadingSections().filter("[title='More about me']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for random facts about Daniel", () => {
    expect(getHeadingSections().filter("[title='Random facts about me']")).toHaveLength(1);
  });

  it("renders a <HeadingSection> for Daniel's favourite quotes", () => {
    expect(getHeadingSections().filter("[title='Favourite quotes']")).toHaveLength(1);
  });

  describe("rendered <MainHeader>", () => {
    it("sets its `avatarResolutions` prop to `props.data.avatar.childImageSharp.resolutions`", () => {
      expect(getMainHeader().props().avatarResolutions)
        .toBe(props.data.avatar.childImageSharp.resolutions);
    });

    it("renders a link to Daniel's blog", () => {
      expect(getMainHeader().find("SocialLink[icon='blog']")).toHaveLength(1);
    });

    it("renders a link to Daniel's GitHub account", () => {
      expect(getMainHeader().find("SocialLink[icon='github']")).toHaveLength(1);
    });

    it("renders a link to Daniel's Stack Overflow account", () => {
      expect(getMainHeader().find("SocialLink[icon='stack-overflow']")).toHaveLength(1);
    });

    it("renders a link to Daniel's Twitter account", () => {
      expect(getMainHeader().find("SocialLink[icon='twitter']")).toHaveLength(1);
    });

    it("renders a link to Daniel's LinkedIn account", () => {
      expect(getMainHeader().find("SocialLink[icon='linkedin']")).toHaveLength(1);
    });
  });

  describe("rendered <Navbar>", () => {
    it("sets its `solid` prop to `false` when `props.scrollTop` is `0`", () => {
      props.scrollTop = 0;
      expect(getNavbar().props().solid).not.toBeTruthy();
    });

    it("sets its `solid` prop to `true` when `props.scrollTop` is > than `0`", () => {
      props.scrollTop = 1;
      expect(getNavbar().props().solid).toBeTruthy();
    });

    it("sets its `toggleSidebar` prop to `props.toggleSidebar`", () => {
      expect(getNavbar().props().toggleSidebar).toBe(props.toggleSidebar);
    });
  });

  describe("each <PortfolioItem>", () => {
    let portfolioData;
    const comparePropToPortfolioData = (propKey, dataKey) => getPortfolioItems()
      .forEach((node, index) => {
        const propValue = node.prop(propKey);
        const dataValue = get(portfolioData[index], dataKey);
        expect(propValue).toBe(dataValue);
      });

    beforeEach(() => {
      portfolioData = props.data.portfolioItems.edges.map(edge => edge.node);
    });

    it("sets its `key` prop as its `name` from `props.data.portfolioItems`", () => {
      getPortfolioItems().forEach((node, index) => {
        expect(node.key()).toBe(portfolioData[index].name);
      });
    });

    it("sets its `alt` prop as `true` if its `index % 2` is greater than `0`", () => {
      const firstPortfolioItem = getPortfolioItems().at(0);
      expect(firstPortfolioItem.props().alt).not.toBeTruthy();
    });

    it("sets its `alt` prop as `false` if its `index % 2` is `0`", () => {
      const secondPortfolioItem = getPortfolioItems().at(1);
      expect(secondPortfolioItem.props().alt).toBeTruthy();
    });

    it("sets its `noMargin` prop to `true` if its `index` is `0`", () => {
      const firstPortfolioItem = getPortfolioItems().at(0);
      expect(firstPortfolioItem.props().noMargin).toBeTruthy();
    });

    it("sets its `noMargin` prop to `true` if its `index` is not `0`", () => {
      const firstPortfolioItem = getPortfolioItems().at(1);
      expect(firstPortfolioItem.props().noMargin).not.toBeTruthy();
    });

    it("sets its `alt` prop as `false` if its `index % 2` is `0`", () => {
      const secondPortfolioItem = getPortfolioItems().at(1);
      expect(secondPortfolioItem.props().alt).toBeTruthy();
    });

    it("sets its `name` prop using its data `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('name', 'name');
    });

    it("sets its `description` prop using its data `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('description', 'description');
    });

    it("sets its `year` prop using its data `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('year', 'year');
    });

    it("sets its `siteLink` prop using its data `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('siteLink', 'siteLink');
    });

    it("sets its `sourceCode` prop using its data `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('sourceCode', 'sourceCode');
    });

    it("sets its `skillsUsed` prop using its data `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('skillsUsed', 'skillsUsed');
    });

    it("sets its `caseStudy` prop using its data `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('caseStudy', 'caseStudy');
    });

    it("sets its `imageSizes` prop using its data `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('imageSizes', 'image.childImageSharp.sizes');
    });
  });

  describe("each <Reference>", () => {
    let referenceData;
    const comparePropToReferenceData = (propKey, dataKey) => getReferences()
      .forEach((node, index) => {
        const propValue = node.prop(propKey);
        const dataValue = get(referenceData[index], dataKey);
        expect(propValue).toBe(dataValue);
      });

    beforeEach(() => {
      referenceData = props.data.references.edges.map(edge => edge.node);
    });

    it("sets its parent <Col>'s `key` prop as its `name` from `props.data.references`", () => {
      getReferences().forEach((node, index) => {
        expect(node.parents('Col').key()).toBe(referenceData[index].authorName);
      });
    });

    it("sets its `noMargin` prop as `true` if its `index` is `0`", () => {
      const firstPortfolioItem = getReferences().at(0);
      expect(firstPortfolioItem.props().noMargin).toBeTruthy();
    });

    it("sets its `noMargin` prop as `false` if its `index` isn't `0`", () => {
      const secondPortfolioItem = getReferences().at(1);
      expect(secondPortfolioItem.props().noMargin).not.toBeTruthy();
    });

    it("sets its `className` prop to '' if its `index % 2` is `0`", () => {
      const firstPortfolioItem = getReferences().at(0);
      expect(firstPortfolioItem.props().className).toBe('');
    });

    it("sets its `className` prop to 'mt-lg-0' if its `index % 2` is `1`", () => {
      const firstPortfolioItem = getReferences().at(1);
      expect(firstPortfolioItem.props().className).toBe('mt-lg-0');
    });

    it("sets its `authorName` prop using its data `props.data.references`", () => {
      comparePropToReferenceData('authorName', 'authorName');
    });

    it("sets its `authorPosition` prop using its data `props.data.references`", () => {
      comparePropToReferenceData('authorPosition', 'authorPosition');
    });

    it("sets its `authorAvatar` prop using its data `props.data.references`", () => {
      comparePropToReferenceData('authorAvatar', 'authorAvatar.childImageSharp.resolutions');
    });

    it("sets its `children` prop using its data `props.data.references`", () => {
      comparePropToReferenceData('children', 'message');
    });
  });
});
