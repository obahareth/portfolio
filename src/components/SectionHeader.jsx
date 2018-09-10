import PropTypes from 'prop-types';
import React from 'react';

const SectionHeader = ({ description, index, title }) => (
  <header className="SectionHeader text-center pb-5">
    <div className="w-50 mx-auto">
      <h2 className="font-weight-bold">
        <span className="text-primary">
          {`0${index} —`}
        </span>
        {` ${title}`}
      </h2>
      <p className="text-secondary">
        {description}
      </p>
    </div>
  </header>
);

SectionHeader.propTypes = {
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
