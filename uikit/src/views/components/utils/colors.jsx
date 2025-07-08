'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { Themes } from '@/utils/config';
import ComponentsWrapper from '@/components/ComponentsWrapper';
import useConfig from '@/hooks/useConfig';
import { ColorBox } from '@/sections/components/color';

// get theme wise color string
function getColorString(themes) {
  switch (themes) {
    case Themes.THEME_HOSTING:
    default:
      return 'HOSTING';
  }
}

// get theme wise primary/secondary color offset
function getColorCode(themes, index) {
  const lightModeCodes = [90, 80, 40, 30, 10];

  const code1 = lightModeCodes;

  switch (themes) {
    case Themes.THEME_HOSTING:
    default:
      return code1[index];
  }
}

// get theme wise grey color offset
function getGreyCode(themes, index) {
  const lightModeCodes = [98, 96, 94, 92, 90, 87, 80, 50, 30, 10];

  const code1 = lightModeCodes;

  switch (themes) {
    case Themes.THEME_HOSTING:
    default:
      return code1[index];
  }
}

/***************************  COLOR - PALETTE  ***************************/

function ColorPalette({ title, palette }) {
  return (
    <Stack sx={{ gap: { xs: 2, sm: 3 } }}>
      <Typography variant="subtitle1">{title}</Typography>
      <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ alignItems: 'center' }}>
        {palette.map((item, index) => (
          <ColorBox key={index} {...item} />
        ))}
      </Grid>
    </Stack>
  );
}

/***************************  UTILS - COLOR  ***************************/

export default function UtilsColor() {
  const theme = useTheme();

  const { currentTheme } = useConfig();
  const colorString = getColorString(currentTheme);

  const primaryPalette = [
    {
      value: theme.palette.primary.lighter || theme.palette.primary.light,
      color: 'primary.darker',
      muiLabel: 'primary.lighter',
      figmaLabel: 'Primary Container / Primary Fixed',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 0)}`
    },
    {
      value: theme.palette.primary.light,
      color: 'primary.dark',
      muiLabel: 'primary.light',
      figmaLabel: 'Primary Fixed Dim',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 1)}`
    },
    {
      value: theme.palette.primary.main,
      color: 'background.default',
      muiLabel: 'primary.main',
      figmaLabel: 'Primary',
      main: true,
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 2)}`
    },
    {
      value: theme.palette.primary.dark,
      color: 'primary.light',
      muiLabel: 'primary.dark',
      figmaLabel: 'On Primary Fixed Variant',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 3)}`
    },
    {
      value: theme.palette.primary.darker || theme.palette.primary.dark,
      color: 'primary.lighter',
      muiLabel: 'primary.darker',
      figmaLabel: 'On Primary Container / On Primary Fixed',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 4)}`
    }
  ];

  const secondaryPalette = [
    {
      value: theme.palette.secondary.lighter || theme.palette.secondary.light,
      color: 'secondary.darker',
      muiLabel: 'secondary.lighter',
      figmaLabel: 'Secondary Container / Secondary Fixed',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 0)}`
    },
    {
      value: theme.palette.secondary.light,
      color: 'secondary.dark',
      muiLabel: 'secondary.light',
      figmaLabel: 'Secondary Fixed Dim',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 1)}`
    },
    {
      value: theme.palette.secondary.main,
      color: 'background.default',
      muiLabel: 'secondary.main',
      figmaLabel: 'Secondary',
      main: true,
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 2)}`
    },
    {
      value: theme.palette.secondary.dark,
      color: 'secondary.light',
      muiLabel: 'secondary.dark',
      figmaLabel: 'On Secondary Fixed Variant',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 3)}`
    },
    {
      value: theme.palette.secondary.darker || theme.palette.secondary.dark,
      color: 'secondary.lighter',
      muiLabel: 'secondary.darker',
      figmaLabel: 'On Secondary Container / On Secondary Fixed',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 4)}`
    }
  ];

  const greyPalette = [
    {
      value: theme.palette.grey[50],
      color: 'grey.900',
      muiLabel: 'grey.50',
      figmaLabel: 'Surface / Surface Bright',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 0)}`
    },
    {
      value: theme.palette.grey[100],
      color: 'grey.900',
      muiLabel: 'grey.100',
      figmaLabel: 'Surface Container Low',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 1)}`
    },
    {
      value: theme.palette.grey[200],
      color: 'grey.900',
      muiLabel: 'grey.200',
      figmaLabel: 'Surface Container',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 2)}`
    },
    {
      value: theme.palette.grey[300],
      color: 'grey.900',
      muiLabel: 'grey.300',
      figmaLabel: 'Surface Container High',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 3)}`
    },
    {
      value: theme.palette.grey[400],
      color: 'grey.900',
      muiLabel: 'grey.400',
      figmaLabel: 'Surface Container Highest',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 4)}`
    },
    {
      value: theme.palette.grey[500],
      color: 'grey.900',
      muiLabel: 'grey.500',
      figmaLabel: 'Surface Container Highest',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 5)}`
    },
    {
      value: theme.palette.grey[600],
      color: 'grey.800',
      muiLabel: 'divider/grey.600',
      figmaLabel: 'Outline Variant',
      figmaValue: `${colorString}/neutral variant/${getGreyCode(currentTheme, 6)}`
    },
    {
      value: theme.palette.grey[700],
      color: 'grey.600',
      muiLabel: 'grey.700',
      figmaLabel: 'Outline',
      figmaValue: `${colorString}/neutral variant/${getGreyCode(currentTheme, 7)}`
    },
    {
      value: theme.palette.grey[800],
      color: 'grey.600',
      muiLabel: 'text.secondary/grey.800',
      figmaLabel: 'On Surface Variant',
      figmaValue: `${colorString}/neutral variant/${getGreyCode(currentTheme, 8)}`
    },
    {
      value: theme.palette.grey[900],
      color: 'grey.50',
      muiLabel: 'text.primary/grey.900',
      figmaLabel: 'On Surface',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 9)}`
    },
    {
      value: theme.palette.background.default,
      color: 'text.primary',
      muiLabel: 'background.default',
      figmaLabel: 'On Primary/Secondary',
      figmaValue: 'Common'
    }
  ];

  const errorPalette = [
    {
      value: theme.palette.error.lighter || theme.palette.error.light,
      color: 'error.darker',
      muiLabel: 'error.lighter',
      figmaLabel: 'On Error / Error Container Low',
      figmaValue: `error/${getColorCode(currentTheme, 0)}`
    },
    {
      value: theme.palette.error.light,
      color: 'error.dark',
      muiLabel: 'error.light',
      figmaLabel: 'Error Container High / Outline',
      figmaValue: `error/${getColorCode(currentTheme, 1)}`
    },
    {
      value: theme.palette.error.main,
      color: 'background.default',
      muiLabel: 'error.main',
      figmaLabel: 'Error',
      figmaValue: `error/${getColorCode(currentTheme, 2)}`
    },
    {
      value: theme.palette.error.dark,
      color: 'error.light',
      muiLabel: 'error.dark',
      figmaLabel: 'On Container/ Error Container',
      figmaValue: `error/${getColorCode(currentTheme, 3)}`
    },
    {
      value: theme.palette.error.darker || theme.palette.error.dark,
      color: 'error.lighter',
      muiLabel: 'error.darker',
      figmaLabel: 'On Container Low / Container High',
      figmaValue: `error/${getColorCode(currentTheme, 4)}`
    }
  ];

  const palettes = [
    { title: 'Primary', palette: primaryPalette },
    { title: 'Secondary', palette: secondaryPalette },
    { title: 'Neutral', palette: greyPalette },
    { title: 'Error', palette: errorPalette }
  ];

  return (
    <ComponentsWrapper title="Color">
      <Stack sx={{ gap: { xs: 2, sm: 3 } }}>
        {palettes.map((palette, index) => (
          <ColorPalette key={index} {...palette} />
        ))}
      </Stack>
    </ComponentsWrapper>
  );
}

ColorPalette.propTypes = { title: PropTypes.string, palette: PropTypes.array };
