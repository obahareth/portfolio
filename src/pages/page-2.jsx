import Link from 'gatsby-link';
import React from 'react';

const SecondPage = () => (
  <section>
    <h1>
      Hi from the second page
    </h1>
    <p>
      Welcome to page 2
    </p>
    <Link to="/">
      Go back to the homepage
    </Link>
  </section>
);

export default SecondPage;
