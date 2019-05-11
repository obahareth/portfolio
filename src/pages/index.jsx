import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Footer from 'components/Footer';
import HeadingSection from 'components/HeadingSection';
import { default as Layout } from 'components/Layout';
// eslint-disable-next-line
import MainHeader from 'components/MainHeader';
import Navbar from 'components/Navbar';
import PortfolioItem from 'components/PortfolioItem';
import HTML from 'components/HTML';
import Reference from 'components/Reference';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import SkillList from 'components/SkillList';
import SocialLink from 'components/SocialLink';

export const IndexPage = ({ data, scrollTop, toggleSidebar }) => (
  <div>
    <Navbar solid={scrollTop > 0} toggleSidebar={toggleSidebar} />
    <main>
      <div id="intro">
        <Section bgStars>
          <Section roundedBottom padding={Section.PADDING_LARGE}>
            <Container>
              <MainHeader
                title="Daniel Spajic"
                subtitle="Front-end engineer with a full-stack skillset"
              >
                <SocialLink icon="blog" to="https://danieljs.me" />
                <SocialLink icon="github" to="https://github.com/dspacejs" />
                <SocialLink
                  icon="stack-overflow"
                  to="https://stackoverflow.com/users/4260047/dspacejs"
                />
                <SocialLink icon="twitter" to="https://twitter.com/dspacejs" />
                <SocialLink
                  icon="linkedin"
                  to="https://www.linkedin.com/in/daniel-spajic-445197158/"
                />
              </MainHeader>
            </Container>
          </Section>
        </Section>
        <Section roundedTop padding={Section.PADDING_SMALL}>
          <Container>
            <Row>
              <Col className="text-center" lg={{ size: 8, offset: 2 }}>
                <HTML>
                  {data.introMarkdown.html}
                </HTML>
              </Col>
            </Row>
          </Container>
        </Section>
      </div>
      <Section id="skillset" gray padding={Section.PADDING_SMALL}>
        <Container>
          <SectionHeader
            index={1}
            title="Skillset"
            description="As an individual with diverse interests and experience,
              I've developed a broad, yet deep skillset as a web developer."
          />
          <Row>
            <Col lg="6">
              <HeadingSection icon="developer" title="Developer" size={3} noMargin>
                <HTML>
                  {data.developerSkillsetMarkdown.html}
                </HTML>
              </HeadingSection>
            </Col>
            <Col lg="6">
              <HeadingSection
                icon="react"
                title="Front-end
                development"
                size={5}
                className="mt-lg-0"
              >
                <SkillList
                  skills={['React.js', 'Redux', 'JavaScript ES6', 'Jest',
                    'Twitter Bootstrap', 'Sass', 'CSS', 'HTML',
                    'Webpack', 'Parcel', 'Gulp', 'Nunjucks', 'jQuery']}
                />
              </HeadingSection>
              <HeadingSection icon="python" title="Back-end development" size={5}>
                <SkillList
                  skills={['Django', 'Python', 'PostgreSQL', 'GraphQL', 'REST',
                    'PHP']}
                />
              </HeadingSection>
              <HeadingSection icon="linux" title="System administration" size={5}>
                <SkillList
                  skills={['Linux (Ubuntu)', 'Docker', 'Nginx', 'uWSGI',
                    'VPS']}
                />
              </HeadingSection>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <HeadingSection icon="design" title="Design sense" size={3}>
                <HTML>
                  {data.designSkillsetMarkdown.html}
                </HTML>
              </HeadingSection>
            </Col>
            <Col md="6">
              <HeadingSection icon="business" title="Business insight" size={3}>
                <HTML>
                  {data.businessSkillsetMarkdown.html}
                </HTML>
              </HeadingSection>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section id="values" bgStars padding={Section.PADDING_SMALL}>
        <Container>
          <SectionHeader
            index={2}
            title="Values"
            description="Collaborating well is more important than someone's skillset.
            Here's an insight into how I work to ensure we'll get along well."
          />
          <Row>
            <Col lg="3" sm="6">
              <HeadingSection title="Passion" icon="passion" size={4} noMargin>
                I love what I do and therefore put genuine effort into my work.
                I enjoy working with people who share the same passion.
              </HeadingSection>
            </Col>
            <Col lg="3" sm="6">
              <HeadingSection
                title="Craftsmanship"
                icon="craftsmanship"
                size={4}
                className="mt-sm-0"
              >
                I&apos;m creative, meticulous, take my time, and find great
                enjoyment in doing things properly. I&apos;m not one to rush.
              </HeadingSection>
            </Col>
            <Col lg="3" sm="6">
              <HeadingSection
                title="Cooperation"
                icon="easy-going"
                size={4}
                className="mt-lg-0"
              >
                Working well with others is crucial for producing great work and
                everyone&apos;s happiness. I&apos;m friendly and have fun.
              </HeadingSection>
            </Col>
            <Col lg="3" sm="6">
              <HeadingSection
                title="Communication"
                icon="communication"
                size={4}
                className="mt-lg-0"
              >
                I want to make life easy for both of us. I&apos;m candid, ask many
                questions, and don&apos;t let things slip by.
              </HeadingSection>
            </Col>
            <Col lg="3" sm="6">
              <HeadingSection title="Focus" icon="focus" size={4}>
                Multitasking is my Achilles&apos; heel. Synonymous to taking my
                time, I work best when concentrating my effort.
              </HeadingSection>
            </Col>
            <Col lg="3" sm="6">
              <HeadingSection title="Curiosity" icon="curiosity" size={4}>
                I love learning and dedicate myself to it. You can count on me to
                pick up anything I don&apos;t know on my own accord.
              </HeadingSection>
            </Col>
            <Col lg="3" sm="6">
              <HeadingSection title="Independence" icon="independence" size={4}>
                Although I&apos;m able to work in a team, I&apos;m very driven and
                self-motivated. You can count on me to get things done.
              </HeadingSection>
            </Col>
            <Col lg="3" sm="6">
              <HeadingSection title="Open-mindedness" icon="open-mindedness" size={4}>
                I&apos;m objective and question everything. I don&apos;t hesitate to
                discard my convictions when provided with a good reason.
              </HeadingSection>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section id="showcase" padding={Section.PADDING_SMALL}>
        <Container>
          <SectionHeader
            index={3}
            title="Showcase"
            description="Here's a few of the many things I've worked on over the
              years. Check out the case studies for a deeper insight into how I work."
          />
          {data.portfolioItems.edges.map(({ node }, index) => (
            <PortfolioItem
              noMargin={index === 0}
              key={node.name}
              alt={index % 2 > 0}
              name={node.name}
              description={node.description}
              year={node.year}
              siteLink={node.siteLink}
              skillsUsed={node.skillsUsed}
              sourceCode={node.sourceCode}
              caseStudy={node.caseStudy}
              imageSizes={node.image.childImageSharp.fluid}
            />
          ))}
        </Container>
      </Section>
      <Section id="my-story" gray padding={Section.PADDING_SMALL}>
        <Container>
          <SectionHeader
            index={4}
            title="My story"
            description="Learn more about who I am and why I love what I do."
          />
          <Row>
            <Col lg="7">
              <div className="mb-4">
                <HeadingSection
                  size={4}
                  icon="git-branch"
                  title="My journey as a developer"
                  noMargin
                >
                  <HTML>
                    {data.aboutMeDeveloperJourneyMarkdown.html}
                  </HTML>
                </HeadingSection>
              </div>
              <HeadingSection size={4} icon="about-me" title="More about me">
                <HTML>
                  {data.aboutMeMainMarkdown.html}
                </HTML>
              </HeadingSection>
            </Col>
            <Col lg="5">
              <HeadingSection
                size={4}
                icon="about-me-extra"
                title="Random facts about me"
                className="mt-lg-0"
              >
                <HTML>
                  {data.aboutMeExtraMarkdown.html}
                </HTML>
              </HeadingSection>
              <HeadingSection size={4} icon="quote" title="Favourite quotes">
                <HTML>
                  {data.aboutMeQuotesMarkdown.html}
                </HTML>
              </HeadingSection>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section bgStars padding={Section.PADDING_SMALL}>
        <Container>
          <SectionHeader
            index={5}
            title="References"
            description="Don't take my word for it. Here's what people I've
              worked with have said about me."
          />
          <Row>
            {data.references.edges.map(({ node: { html, frontmatter } }, index) => (
              <Col lg="6" key={frontmatter.id}>
                <Reference
                  noMargin={index === 0}
                  className={index % 2 === 1 ? 'mt-lg-0' : ''}
                  authorName={frontmatter.authorName}
                  authorPosition={frontmatter.authorPosition}
                  authorAvatar={frontmatter.authorAvatar.childImageSharp.fixed}
                >
                  {html}
                </Reference>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
    </main>
    <Footer />
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  scrollTop: PropTypes.number.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const IndexPageContainer = props => (
  <Layout render={({ scrollTop, toggleSidebar }) => (
    <StaticQuery
      query={graphql`
        query IndexQuery {
          ...PortfolioItems
          ...References
          aboutMeDeveloperJourneyMarkdown: markdownRemark(frontmatter: { id: { eq: "content-about-me-developer" } }) {
            html
          }
          aboutMeExtraMarkdown: markdownRemark(frontmatter: { id: { eq: "content-about-me-extra" } }) {
            html
          }
          aboutMeMainMarkdown: markdownRemark(frontmatter: { id: { eq: "content-about-me-main" } }) {
            html
          }
          aboutMeQuotesMarkdown: markdownRemark(frontmatter: { id: { eq: "content-about-me-quotes" } }) {
            html
          }
          introMarkdown: markdownRemark(frontmatter: { id: { eq: "content-intro" } }) {
            html
          }
          businessSkillsetMarkdown: markdownRemark(frontmatter: { id: { eq: "content-skillset-business" } }) {
            html
          }
          designSkillsetMarkdown: markdownRemark(frontmatter: { id: { eq: "content-skillset-design" } }) {
            html
          }
          developerSkillsetMarkdown: markdownRemark(frontmatter: { id: { eq: "content-skillset-developer" } }) {
            html
          }
        }
      `}
      render={data => (
        <IndexPage
          data={data}
          scrollTop={scrollTop}
          toggleSidebar={toggleSidebar}
          {...props}
        />
      )}
    />
  )}
  />
);

export default IndexPageContainer;
