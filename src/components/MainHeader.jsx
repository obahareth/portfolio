import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import ContactButton from 'components/ContactButton';
import Heading from 'components/Heading';
import Parallax from 'components/Parallax';
import './scss/MainHeader.scss';

export const MainHeader = ({
  avatarResolutions, children, subtitle, title,
}) => (
  <Parallax>
    <header className="MainHeader">
      <Img
        alt="Daniel Spajic"
        className="MainHeader__avatar img-fluid rounded-circle mb-5"
        resolutions={avatarResolutions}
      />
      <Heading size={1} extraBold>
        {title}
      </Heading>
      <Heading size={3} light className="text-light mb-4">
        {subtitle}
      </Heading>
      {children}
      <div className="d-lg-none mt-5 MainHeader__cta-container">
        <ContactButton size="lg" />
      </div>
    </header>
  </Parallax>
);

MainHeader.propTypes = {
  avatarResolutions: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const MainHeaderContainer = props => (
  <StaticQuery
    query={graphql`
     query {
        avatar: file(relativePath: { eq: "daniel-spajic-avatar.png" }) {
          childImageSharp {
            fixed(width: 160, height: 160) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <MainHeader
        avatarResolutions={data.avatar.childImageSharp.fixed}
        {...props}
      />
    )}
  />
);

export default MainHeaderContainer;
