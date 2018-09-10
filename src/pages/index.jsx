import React from 'react';
import {
  Button, Col, Container, Row,
} from 'reactstrap';

import MainHeader from 'components/MainHeader';
import HTML from 'components/HTML';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import Skill from 'components/Skill';
import SkillList from 'components/SkillList';
import SocialLink from 'components/SocialLink';
import Value from 'components/Value';
import avatar from 'images/daniel-spajic-avatar.jpg';
import introMarkdown from 'page-content/home/intro.md';
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
            subtitle="Front-end engineer with a full-stack skill-set"
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
            <Skill icon="developer" title="Developer">
              <HTML>
                {developerSkillsetMarkdown}
              </HTML>
            </Skill>
          </Col>
          <Col lg="6">
            <Skill small icon="javascript" title="Front-end development">
              <SkillList
                skills={['ReactJS', 'Twitter Bootstrap', 'Sass', 'Redux',
                  'Webpack', 'Babel', 'NPM', 'HTML', 'CSS', 'JavaScript']}
              />
            </Skill>
            <Skill small icon="python" title="Back-end development">
              <SkillList
                skills={['Django', 'Python', 'PostgreSQL', 'GraphQL', 'REST',
                  'PHP']}
              />
            </Skill>
            <Skill small icon="linux" title="System administration">
              <SkillList
                skills={['Linux (Ubuntu)', 'Docker', 'Nginx', 'uWSGI',
                  'DigitalOcean']}
              />
            </Skill>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Skill icon="design" title="Design sense">
              <HTML>
                {designSkillsetMarkdown}
              </HTML>
            </Skill>
          </Col>
          <Col lg="6">
            <Skill icon="business" title="Business insight">
              <HTML>
                {businessSkillsetMarkdown}
              </HTML>
            </Skill>
          </Col>
        </Row>
      </Container>
    </Section>
    <Section>
      <Container>
        <SectionHeader
          index={2}
          title="Values"
          description="Collaborating well is more important than someone's skill-set.
           Here's an insight into how I work to ensure we'll get along well."
        />
        <Row>
          <Col lg="3">
            <Value title="Passion" icon="passion">
              I love what I do and put genuine effort into my work. I enjoy
              working with people who share the same passion.
            </Value>
          </Col>
          <Col lg="3">
            <Value title="Craftsmanship" icon="craftsmanship">
              I&apos;m creative, meticulous, take my time, and find great
              enjoyment in doing things properly. I&apos;m not one to rush.
            </Value>
          </Col>
          <Col lg="3">
            <Value title="Easy-going" icon="happy">
              Working well with others is crucial for producing great work and
              everyones&apos; happiness. I&apos;m friendly and have fun.
            </Value>
          </Col>
          <Col lg="3">
            <Value title="Communication" icon="communication">
              I want to make life easy for both of us. I&apos;m candid, ask many
              questions, don&apos;t let things slip by, and ensure we&apos;re on
              the same page.
            </Value>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <Value title="Focus" icon="focus">
              Multitasking is my Achilles&apos; heel. Synonymous to taking my
              time, I work best when concentrating my effort on a single project.
            </Value>
          </Col>
          <Col lg="3">
            <Value title="Curiosity" icon="curiosity">
              I love learning and dedicate myself to it. You can count on me to
              pick up anything I don&apos;t know.
            </Value>
          </Col>
          <Col lg="3">
            <Value title="Independence" icon="independence">
              Although I&apos;m able to work in a team, I&apos;m very driven and
              self-motivated. You can count on me to Get Shit Done&trade;
            </Value>
          </Col>
          <Col lg="3">
            <Value title="Open-minded" icon="open-minded">
              I&apos;m objective and question everything. I don&apos;t hesitate to
              discard my convictions when provided with a good reason.
            </Value>
          </Col>
        </Row>
      </Container>
    </Section>
    <Section>
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
    <Section>
      <Container>
        <SectionHeader
          index={4}
          title="My story"
          description="Learn more about who I am and why I love what I do."
        />
        <HTML>
          {aboutMeMarkdown}
        </HTML>
        <h3>
          Testimonials
        </h3>
        <ul>
          <li>
            Antun Debak
          </li>
          <li>
            Thirty4
          </li>
        </ul>
      </Container>
    </Section>
    <Section>
      <Container>
        <p>
          If you vibe with me and want to get in touch, fill out the form below
          and I&apos;ll get back to you soon
          {' '}
          <span role="img" aria-label="smile">
            🙂
          </span>
        </p>
        <Button color="primary">
          Get in touch
        </Button>
      </Container>
    </Section>
  </main>
);

export default IndexPage;
