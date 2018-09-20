import React from 'react';
import { Container } from 'reactstrap';

import ContactButton from 'components/ContactButton';
import Section from 'components/Section';

const Footer = () => (
  <footer className="text-center">
    <Section padding={Section.PADDING_SMALL}>
      <Container>
        <h2>
          Want to get in touch?
        </h2>
        <p>
          Shoot me an email and I&apos;ll get back to you soon
          {' '}
          <span role="img" aria-label="smile">
            🙂
          </span>
        </p>
        <ContactButton className="mt-3" size="lg" />
      </Container>
    </Section>
  </footer>
);

export default Footer;
