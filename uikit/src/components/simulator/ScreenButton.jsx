'use client';
import PropTypes from 'prop-types';

// @mui
import IconButton from '@mui/material/IconButton';

// @project
import SvgIcon from '../SvgIcon';

function ScreenButton({ icon, screen, screenSize, onScreenChange }) {
  const activeEffect = screenSize === screen ? 'grey.300' : 'grey.100';

  return (
    <IconButton
      sx={{
        width: 36,
        height: 36,
        bgcolor: activeEffect,
        border: '1px solid',
        borderColor: screenSize === screen ? 'grey.600' : 'grey.300',
        '&.MuiIconButton-root:hover': { borderColor: 'grey.600', bgcolor: activeEffect }
      }}
      onClick={() => onScreenChange(screen)}
      aria-label={screen}
    >
      <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} size={20} color="text.primary" />
    </IconButton>
  );
}

ScreenButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  screen: PropTypes.string.isRequired,
  screenSize: PropTypes.string.isRequired,
  onScreenChange: PropTypes.func.isRequired
};

export default ScreenButton;
