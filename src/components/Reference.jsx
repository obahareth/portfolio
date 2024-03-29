import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/Heading';
import HTML from 'components/HTML';
import { addQuotesToHtml } from 'utils';
import './scss/Reference.scss';

class Reference extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
    };
  }

  componentDidMount() {
    const { children } = this.props;
    this.setState({
      children: addQuotesToHtml(children),
    });
  }

  render() {
    const {
      authorName, authorPosition, authorAvatar, className, noMargin,
    } = this.props;
    const { children } = this.state;

    return (
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
  }
}

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
  fragment References on Query {
    references: allMarkdownRemark(
      filter: { frontmatter: { id: { glob: "reference-*" } } }
      sort: { order: ASC, fields: [frontmatter___index] }
    ) {
      edges {
        node {
          html
          frontmatter {
            id
            authorName
            authorPosition
            authorAvatar {
              childImageSharp {
                fixed(width: 64, height: 64) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Reference;
