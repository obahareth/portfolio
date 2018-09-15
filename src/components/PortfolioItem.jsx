import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';

import Heading from 'components/Heading';
import Icon from 'components/Icon';
import SkillList from 'components/SkillList';

const PortfolioItem = ({
  alt, caseStudy, description, imageSizes, name, siteLink, skillsUsed, year,
}) => (
  <Row className="mb-5">
    <Col lg={{ size: 6, order: alt ? 2 : undefined }}>
      <Img
        className="img-fluid img-thumbnail"
        alt={`${name} screenshot`}
        sizes={imageSizes}
      />
    </Col>
    <Col lg="6">
      <Heading size={3}>
        {name}
        <small className="text-primary">
          {` — ${year}`}
        </small>
      </Heading>
      <SkillList skills={skillsUsed} />
      <p>
        {description}
      </p>
      {(caseStudy || siteLink) && (
        <ul className="list-inline">
          {[
            { link: caseStudy, name: 'Case study', icon: 'case-study' },
            { link: siteLink, name: 'View site', icon: 'view-site' },
          ].map(item => item.link && (
            <li className="list-inline-item mr-3" key={item.name}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Icon name={item.icon} />
                {' '}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Col>
  </Row>
);

PortfolioItem.propTypes = {
  alt: PropTypes.bool,
  caseStudy: PropTypes.string,
  description: PropTypes.string.isRequired,
  imageSizes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  siteLink: PropTypes.string,
  skillsUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};

PortfolioItem.defaultProps = {
  alt: false,
  caseStudy: undefined,
  siteLink: undefined,
};

export const query = graphql`
  fragment PortfolioItems on RootQueryType {
    portfolioItems: allPortfolioYaml {
      edges {
        node {
          name
          caseStudy
          description
          siteLink
          year
          skillsUsed
          image {
            childImageSharp {
              sizes(maxWidth: 700) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`;

export default PortfolioItem;
