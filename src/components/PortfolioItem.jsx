import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';

import './scss/PortfolioItem.scss';
import Heading from 'components/Heading';
import Icon from 'components/Icon';
import SkillList from 'components/SkillList';

const PortfolioItem = ({
  alt, caseStudy, description, imageSizes, name, noMargin, siteLink, skillsUsed,
  sourceCode, year,
}) => (
  <Row className={`PortfolioItem ${noMargin ? '' : 'mt-5'}`}>
    <Col lg={{ size: 6, order: alt ? 2 : undefined }}>
      <div className="PortfolioItem__image-container">
        <Img
          className="PortfolioItem__image img-fluid mb-4 mb-lg-0"
          alt={`${name} screenshot`}
          fluid={imageSizes}
        />
      </div>
    </Col>
    <Col lg="6">
      <div className="PortfolioItem__header">
        <Heading className="PortfolioItem__title" size={3}>
          {name}
        </Heading>
        <Heading size={3} className="PortfolioItem__date text-primary font-weight-medium">
          <span className="PortfolioItem__date-mdash">
            {'—'}
          </span>
          {year}
        </Heading>
      </div>
      <p>
        {description}
      </p>
      <div className="mt-4">
        <SkillList skills={skillsUsed} />
      </div>
      {(caseStudy || siteLink || sourceCode) && (
        <ul className="list-inline">
          {[
            { link: siteLink, name: 'View site', icon: 'view-site' },
            { link: caseStudy, name: 'Case study', icon: 'case-study' },
            { link: sourceCode, name: 'Source code', icon: 'developer' },
          ].map(item => item.link && (
            <li className="list-inline-item mr-4 mt-2" key={item.name}>
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
  noMargin: PropTypes.bool,
  siteLink: PropTypes.string,
  skillsUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
  sourceCode: PropTypes.string,
  year: PropTypes.number.isRequired,
};

PortfolioItem.defaultProps = {
  alt: false,
  caseStudy: undefined,
  noMargin: false,
  siteLink: undefined,
  sourceCode: undefined,
};

export const query = graphql`
  fragment PortfolioItems on Query {
    portfolioItems: allPortfolioYaml {
      edges {
        node {
          name
          description
          caseStudy
          siteLink
          sourceCode
          year
          skillsUsed
          image {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default PortfolioItem;
