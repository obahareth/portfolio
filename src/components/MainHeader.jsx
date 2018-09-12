import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Parallax from 'components/Parallax';
import './scss/MainHeader.scss';

const MainHeader = ({
  avatarResolutions, children, subtitle, title,
}) => (
  <Parallax>
    <header className="MainHeader">
      <Img
        alt="Daniel Spajic"
        className="MainHeader__avatar img-fluid rounded-circle mb-5"
        resolutions={avatarResolutions}
      />
      <h1 className="MainHeader__title">
        {title}
      </h1>
      <h3 className="MainHeader__subtitle">
        {subtitle}
      </h3>
      {children}
    </header>
  </Parallax>
);

MainHeader.propTypes = {
  avatarResolutions: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export const query = graphql`
  fragment AvatarFragment on RootQueryType {
    avatar: file(relativePath: { eq: "daniel-spajic-avatar.png" }) {
      childImageSharp {
        resolutions(width: 160, height: 160) {
          ...GatsbyImageSharpResolutions_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default MainHeader;
