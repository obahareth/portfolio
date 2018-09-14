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
                image: 'trausing.png',
              },
            },
            {
              node: {
                name: 'Trizma',
                description: 'Website',
                year: 2018,
                siteLink: 'https://trizma.danieljs.tech',
                skillsUsed: ['Nunjucks', 'Sass', 'Gulp', 'jQuery'],
                image: 'trizma.png',
              },
            },
          ],
        },
        portfolioItemImages: {
          edges: [
            {
              node: {
                childImageSharp: {
                  sizes: {
                    originalName: 'trausing.png',
                    someProperty: 'test',
                  },
                },
              },
            },
            {
              node: {
                childImageSharp: {
                  sizes: {
                    originalName: 'trizma.png',
                    someProperty: 'test',
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
        const dataValue = portfolioData[index][dataKey];
        expect(propValue).toBe(dataValue);
      });

    beforeEach(() => {
      portfolioData = props.data.portfolioItems.edges.map(edge => edge.node);
    });

    it("sets its `key` prop as its `name` from `data.portfolioItems`", () => {
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

    it("sets its `name` prop as its `name` from `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('name', 'name');
    });

    it("sets its `description` prop as its `description` from `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('description', 'description');
    });

    it("sets its `year` prop as its `year` from `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('year', 'year');
    });

    it("sets its `siteLink` prop as its `siteLink` from `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('siteLink', 'siteLink');
    });

    it("sets its `skillsUsed` prop as its `skillsUsed` from `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('skillsUsed', 'skillsUsed');
    });

    it("sets its `caseStudy` prop as its `caseStudy` from `props.data.portfolioItems`", () => {
      comparePropToPortfolioData('caseStudy', 'caseStudy');
    });

    it("sets its `imageSizes` prop using its corresponding `props.data.portfolioItemImages` item", () => {
      getPortfolioItems().forEach((node, index) => {
        const expectedImageName = props.data.portfolioItems.edges[index].node.image;

        const getImageSizes = item => item.node.childImageSharp.sizes;
        const allImageSizes = props.data.portfolioItemImages.edges
          .map(getImageSizes);

        const matchImageOriginalName = image => image.originalName === expectedImageName;
        const expectedImageSizes = allImageSizes.find(matchImageOriginalName);

        expect(node.props().imageSizes).toBe(expectedImageSizes);
      });
    });
  });
});
