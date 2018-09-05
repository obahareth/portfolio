import PropTypes from 'prop-types';
import React from 'react';

const HTML = ({ children }) => (
  <div dangerouslySetInnerHTML={{ __html: children }} />
);

HTML.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HTML;
