import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/Heading';

const SectionHeader = ({ description, index, title }) => (
  <header className="text-center pb-5">
    <div className="w-50 mx-auto">
      <Heading size={2} extraBold>
        <span className="text-primary">
          {`0${index} —`}
        </span>
        {` ${title}`}
      </Heading>
      <p>
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
