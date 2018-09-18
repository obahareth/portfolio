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
  const getNavbar = () => getComponent().find('Navbar');
  const getPortfolioItems = () => getComponent().find('PortfolioItem');
  const getReferences = () => getComponent().find('Reference');

  beforeEach(() => {
    mountedComponent = undefined;
    props = {
      scrollTop: 0,
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
    expect(getComponent().find('MainHeader')).toHaveLength(1);
  });

  it("renders a <PortfolioItem> for each item in `props.data.portfolioItems`", () => {
    expect(getPortfolioItems()).toHaveLength(props.data.portfolioItems.edges.length);
  });

  it("renders a <Reference> for each item in `props.data.references`", () => {
    expect(getReferences()).toHaveLength(props.data.references.edges.length);
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
});
