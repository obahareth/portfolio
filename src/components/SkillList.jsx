import PropTypes from 'prop-types';
import React from 'react';

import './scss/SkillList.scss';

const SkillList = ({ skills }) => (
  <div className="SkillList">
    {skills.map(skill => (
      <code className="SkillList__item" key={skill}>
        {skill}
      </code>
    ))}
  </div>
);

SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillList;
