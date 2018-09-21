import Link from 'gatsby-link';
import React from 'react';
import { Container } from 'reactstrap';

import Heading from 'components/Heading';

const NotFoundPage = () => (
  <section className="pt-5 text-center">
    <Container>
      <Heading size={1}>
        <span className="text-primary">
          404
        </span>
        {' '}
        NOT FOUND
      </Heading>
      <p>
        This page doesn&apos;t exist.
        {' '}
        <Link to="/">
          Go to the home page
        </Link>
      </p>
      <iframe
        title="404 gif"
        src="https://giphy.com/embed/l1J9EdzfOSgfyueLm"
        width="100%"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    </Container>
  </section>
);

export default NotFoundPage;
