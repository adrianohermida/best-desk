import PropTypes from 'prop-types';
import { createElement } from 'react';

// @tabler/icons-react
import * as TablerIcons from '@tabler/icons-react';

// @mui/icons-material
import { DashboardOutlined, ChromeReaderModeOutlined, LoginOutlined, QuestionMarkOutlined } from '@mui/icons-material';

/***************************  DYNAMIC ICON  ***************************/

export default function DynamicIcon({ name, size = 16, color, stroke, ...other }) {
  // Handle if name is already a component (from menu data)
  if (typeof name === 'function') {
    return createElement(name, {
      sx: {
        color,
        fontSize: size || 24,
        strokeWidth: stroke || 1
      },
      ...other
    });
  }

  // Handle string names for Tabler icons
  if (typeof name === 'string') {
    // Try Tabler icons first
    const iconName = `Icon${name.charAt(0).toUpperCase() + name.slice(1)}`;
    const TablerComponent = TablerIcons[iconName];

    if (TablerComponent) {
      return <TablerComponent size={size} {...other} />;
    }

    // Fallback to default
    return <TablerIcons.IconQuestionMark size={size} {...other} />;
  }

  return <TablerIcons.IconQuestionMark size={size} {...other} />;
}

DynamicIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};
