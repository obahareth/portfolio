import PropTypes from 'prop-types';
import React from 'react';

const SkillList = ({ skills }) => (
  <ul className="list-inline">
    {skills.map(skill => (
      <li className="list-inline-item" key={skill}>
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
