import React from 'react';

import ContactButton from 'components/ContactButton';
import Section from 'components/Section';

const Footer = () => (
  <footer className="text-center">
    <Section padding={Section.PADDING_SMALL}>
      <div className="w-50 mx-auto">
        <h2>
          Send me something
        </h2>
        <p>
          If you vibe with me and want to get in touch, shoot me an email
          and I&apos;ll get back to you soon
          {' '}
          <span role="img" aria-label="smile">
            🙂
          </span>
        </p>
        <ContactButton size="lg" />
      </div>
    </Section>
  </footer>
);

export default Footer;
