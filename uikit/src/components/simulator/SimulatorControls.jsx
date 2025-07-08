'use client';
import PropTypes from 'prop-types';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// @project
import ScreenButton from './ScreenButton';
import SvgIcon from '../SvgIcon';
import { viewportData } from './SimulatorData';

function SimulatorControls({ screenSize, onScreenChange, onRefresh, showRefresh = true }) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'grey.300',
        bgcolor: alpha(theme.palette.grey[100], 0.5)
      }}
    >
      {/* Screen Size Controls */}
      <Stack direction="row" sx={{ gap: 1 }}>
        {Object.entries(viewportData).map(([screen, { icon }]) => (
          <ScreenButton key={screen} icon={icon} screen={screen} screenSize={screenSize} onScreenChange={onScreenChange} />
        ))}
      </Stack>

      {/* Refresh Button */}
      {showRefresh && (
        <Button
          variant="outlined"
          size="small"
          startIcon={<SvgIcon name="tabler-refresh" size={16} />}
          onClick={onRefresh}
          sx={{
            minWidth: 'auto',
            px: 2
          }}
        >
          Refresh
        </Button>
      )}
    </Stack>
  );
}

SimulatorControls.propTypes = {
  screenSize: PropTypes.string.isRequired,
  onScreenChange: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  showRefresh: PropTypes.bool
};

export default SimulatorControls;
