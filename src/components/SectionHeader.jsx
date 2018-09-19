import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Heading from 'components/Heading';

const SectionHeader = ({ description, index, title }) => (
  <header className="text-center pb-5">
    <Container>
      <Row className="justify-content-center">
        <Col lg="6">
          <Heading size={2} extraBold>
            <span className="text-primary font-weight-bold">
              {`0${index} —`}
            </span>
            {` ${title}`}
          </Heading>
          <p>
            {description}
          </p>
        </Col>
      </Row>
    </Container>
  </header>
);

SectionHeader.propTypes = {
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
