import PropTypes from 'prop-types';
import React from 'react';

const SectionHeader = ({ description, index, title }) => (
  <header className="SectionHeader">
    <h2>
      <span>
        {`0${index} —`}
      </span>
      {` ${title}`}
    </h2>
    <p>
      {description}
    </p>
  </header>
);

SectionHeader.propTypes = {
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
