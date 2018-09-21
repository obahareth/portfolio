import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/Heading';
import HTML from 'components/HTML';
import './scss/Reference.scss';

const Reference = ({
  authorName, authorPosition, authorAvatar, children, className, noMargin,
}) => (
  <div className={`${className} ${noMargin ? '' : 'mt-5'}`}>
    <div className="Reference">
      <div className="Reference__header">
        <div className="d-flex align-items-center">
          <Img
            alt={authorName}
            className="Reference__author-avatar rounded-circle mr-3"
            resolutions={authorAvatar}
          />
          <div>
            <Heading size={4}>
              {authorName}
            </Heading>
            <Heading size={6} light className="text-secondary">
              {authorPosition}
            </Heading>
          </div>
        </div>
      </div>
      <div className="Reference__body">
        <HTML>
          {children}
        </HTML>
      </div>
    </div>
  </div>
);

Reference.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorPosition: PropTypes.string.isRequired,
  authorAvatar: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  noMargin: PropTypes.bool,
};

Reference.defaultProps = {
  className: '',
  noMargin: false,
};

export const query = graphql`
  fragment References on RootQueryType {
    references: allReferencesYaml {
      edges {
        node {
          authorName
          authorPosition
          message
          authorAvatar {
            childImageSharp {
              resolutions(width: 64, height: 64) {
                ...GatsbyImageSharpResolutions
              }
            }
          }
        }
      }
    }
  }
`;

export default Reference;
