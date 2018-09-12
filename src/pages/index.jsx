import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import HeadingSection from 'components/HeadingSection';
import MainHeader from 'components/MainHeader';
import HTML from 'components/HTML';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import SkillList from 'components/SkillList';
import SocialLink from 'components/SocialLink';
import avatar from 'images/daniel-spajic-avatar.jpg';
import introMarkdown from 'page-content/home/intro.md';
import aboutMeDeveloperJourneyMarkdown from 'page-content/home/about-me-developer.md';
import aboutMeExtraMarkdown from 'page-content/home/about-me-extra.md';
import aboutMeFavouriteQuotesMarkdown from 'page-content/home/about-me-quotes.md';
import aboutMeMarkdown from 'page-content/home/about-me.md';
import businessSkillsetMarkdown from 'page-content/home/skillset-business.md';
import developerSkillsetMarkdown from 'page-content/home/skillset-developer.md';
import designSkillsetMarkdown from 'page-content/home/skillset-design.md';

const IndexPage = () => (
  <main>
    <Section bgStars>
      <Section roundedBottom padding={Section.PADDING_LARGE}>
        <Container>
          <MainHeader
            avatar={avatar}
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
              {introMarkdown}
            </HTML>
          </Col>
        </Row>
      </Container>
    </Section>
    <Section gray padding={Section.PADDING_SMALL}>
      <Container>
        <SectionHeader
          index={1}
          title="Skillset"
          description="As an individual with diverse interests and experience,
            I've developed a broad, yet deep skillset as a web developer."
        />
        <Row>
          <Col lg="6">
            <HeadingSection icon="developer" title="Developer" size={3}>
              <HTML>
                {developerSkillsetMarkdown}
              </HTML>
            </HeadingSection>
          </Col>
          <Col lg="6">
            <HeadingSection small icon="react" title="Front-end development" size={5}>
              <SkillList
                skills={['ReactJS', 'Twitter Bootstrap', 'Sass', 'Redux',
                  'Webpack', 'Babel', 'NPM', 'HTML', 'CSS', 'jQuery', 'JavaScript']}
              />
            </HeadingSection>
            <HeadingSection small icon="python" title="Back-end development" size={5}>
              <SkillList
                skills={['Django', 'Python', 'PostgreSQL', 'GraphQL', 'REST',
                  'PHP']}
              />
            </HeadingSection>
            <HeadingSection small icon="linux" title="System administration" size={5}>
              <SkillList
                skills={['Linux (Ubuntu)', 'Docker', 'Nginx', 'uWSGI',
                  'DigitalOcean']}
              />
            </HeadingSection>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <HeadingSection icon="design" title="Design sense" size={3}>
              <HTML>
                {designSkillsetMarkdown}
              </HTML>
            </HeadingSection>
          </Col>
          <Col lg="6">
            <HeadingSection icon="business" title="Business insight" size={3}>
              <HTML>
                {businessSkillsetMarkdown}
              </HTML>
            </HeadingSection>
          </Col>
        </Row>
      </Container>
    </Section>
    <Section bgStars padding={Section.PADDING_SMALL}>
      <Container>
        <SectionHeader
          index={2}
          title="Values"
          description="Collaborating well is more important than someone's skillset.
           Here's an insight into how I work to ensure we'll get along well."
        />
        <Row>
          <Col lg="3">
            <HeadingSection title="Passion" icon="passion" size={4}>
              I love what I do and therefore put genuine effort into my work. I enjoy
              working with people who share the same passion.
            </HeadingSection>
          </Col>
          <Col lg="3">
            <HeadingSection title="Craftsmanship" icon="craftsmanship" size={4}>
              I&apos;m creative, meticulous, take my time, and find great
              enjoyment in doing things properly. I&apos;m not one to rush.
            </HeadingSection>
          </Col>
          <Col lg="3">
            <HeadingSection title="Easy-going" icon="easy-going" size={4}>
              Working well with others is crucial for producing great work and
              everyones&apos; happiness. I&apos;m friendly and have fun.
            </HeadingSection>
          </Col>
          <Col lg="3">
            <HeadingSection title="Communication" icon="communication" size={4}>
              I want to make life easy for both of us. I&apos;m candid, ask many
              questions, don&apos;t let things slip by, and ensure we&apos;re on
              the same page.
            </HeadingSection>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <HeadingSection title="Focus" icon="focus" size={4}>
              Multitasking is my Achilles&apos; heel. Synonymous to taking my
              time, I work best when concentrating my effort on a single project.
            </HeadingSection>
          </Col>
          <Col lg="3">
            <HeadingSection title="Curiosity" icon="curiosity" size={4}>
              I love learning and dedicate myself to it. You can count on me to
              pick up anything I don&apos;t know.
            </HeadingSection>
          </Col>
          <Col lg="3">
            <HeadingSection title="Independence" icon="independence" size={4}>
              Although I&apos;m able to work in a team, I&apos;m very driven and
              self-motivated. You can count on me to get things done.
            </HeadingSection>
          </Col>
          <Col lg="3">
            <HeadingSection title="Open-minded" icon="open-mindedness" size={4}>
              I&apos;m objective and question everything. I don&apos;t hesitate to
              discard my convictions when provided with a good reason.
            </HeadingSection>
          </Col>
        </Row>
      </Container>
    </Section>
    <Section padding={Section.PADDING_SMALL}>
      <Container>
        <SectionHeader
          index={3}
          title="Showcase"
          description="Here's some of the many things I've worked on over the
            years."
        />
        <ul>
          <li>
            Trausing
          </li>
          <li>
            Antun Debak&apos;s portfolio
          </li>
          <li>
            Trizma
          </li>
          <li>
            This portfolio
          </li>
          <li>
            B4UBUY Home Inspections website
          </li>
          <li>
            Devarity Game Store
          </li>
        </ul>
      </Container>
    </Section>
    <Section gray padding={Section.PADDING_SMALL}>
      <Container>
        <SectionHeader
          index={4}
          title="My story"
          description="Learn more about who I am and why I love what I do."
        />
        <Row>
          <Col lg="7">
            <div className="mb-4">
              <HeadingSection size={4} icon="git-branch" title="My journey as a developer">
                <HTML>
                  {aboutMeDeveloperJourneyMarkdown}
                </HTML>
              </HeadingSection>
            </div>
            <HeadingSection size={4} icon="about-me" title="More about me">
              <HTML>
                {aboutMeMarkdown}
              </HTML>
            </HeadingSection>
          </Col>
          <Col lg="5">
            <HeadingSection size={4} icon="about-me-extra" title="Random facts about me">
              <HTML>
                {aboutMeExtraMarkdown}
              </HTML>
            </HeadingSection>
            <HeadingSection size={4} icon="quote" title="Favourite quotes">
              <HTML>
                {aboutMeFavouriteQuotesMarkdown}
              </HTML>
            </HeadingSection>
          </Col>
        </Row>
      </Container>
    </Section>
    <Section padding={Section.PADDING_SMALL}>
      <Container>
        <h4>
          Testimonials
        </h4>
        <ul>
          <li>
            Antun Debak
          </li>
          <li>
            Jake Press
          </li>
        </ul>
      </Container>
    </Section>
  </main>
);

export default IndexPage;
