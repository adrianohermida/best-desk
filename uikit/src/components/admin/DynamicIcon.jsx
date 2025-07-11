import PropTypes from 'prop-types';

// @tabler/icons-react
import * as TablerIcons from '@tabler/icons-react';

/***************************  DYNAMIC ICON  ***************************/

export default function DynamicIcon({ name, size = 16, ...other }) {
  // Convert name to proper component name (e.g., 'dashboard' -> 'IconDashboard')
  const iconName = `Icon${name.charAt(0).toUpperCase() + name.slice(1)}`;

  // Get the icon component from Tabler Icons
  const IconComponent = TablerIcons[iconName];

  if (!IconComponent) {
    // Return a default icon if the requested icon is not found
    return <TablerIcons.IconQuestionMark size={size} {...other} />;
  }

  return <IconComponent size={size} {...other} />;
}

DynamicIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};
