import PropTypes from 'prop-types';
import React from 'react';

import './scss/SkillList.scss';

const SkillList = ({ skills }) => (
  <ul className="SkillList list-inline">
    {skills.map(skill => (
      <li className="SkillList__item list-inline-item" key={skill}>
        <code>
          {skill}
        </code>
      </li>
    ))}
  </ul>
);

SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillList;
