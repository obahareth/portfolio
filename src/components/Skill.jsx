import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';

const Skill = ({
  children, icon, small, title,
}) => {
  const TitleTag = small ? 'h5' : 'h3';

  return (
    <div>
      <TitleTag>
        <Icon name={icon} />
        {title}
      </TitleTag>
      {children}
    </div>
  );
};

Skill.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  small: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Skill.defaultProps = {
  small: false,
};

export default Skill;
