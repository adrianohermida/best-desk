// @mui
import { alpha } from '@mui/material/styles';

/***************************  DEFAULT - PALETTE  ***************************/

export default function palette(mode) {
  const textPrimary = '#1B1B1F'; // Hosting/neutral/10 - on surface
  const textSecondary = '#46464F'; // Hosting/neutral variant/30 - on surface variant

  const secondaryMain = '#5A5C78'; // Hosting/secondary/40 - secondary

  const divider = '#EFEDF4'; // Hosting/neutral/94 - surface container
  const background = '#FFF';

  const disabled = '#777680'; // Hosting/neutral variant/50 - outline
  const disabledBackground = '#E4E1E6'; // Hosting/neutral/90 - surface container highest

  const lightPalette = {
    primary: {
      lighter: '#E0E0FF', // Hosting/primary/90 - primary container / primary fixed
      light: '#BDC2FF', // Hosting/primary/80 - primary fixed dim
      main: '#606BDF', // Hosting/primary/40 - primary
      dark: '#3944B8', // Hosting/primary/30 - on primary fixed variant
      darker: '#000668' // Hosting/primary/10 - on primary container / on primary fixed
    },
    secondary: {
      lighter: '#E0E0FF', // Hosting/secondary/90 - secondary container / secondary fixed
      light: '#C3C4E4', // Hosting/secondary/80 - secondary fixed dim
      main: secondaryMain, // Hosting/secondary/40 - secondary
      dark: '#43455F', // Hosting/secondary/30 - on secondary fixed variant
      darker: '#1D1B2C' // Hosting/secondary/10 - on secondary container / on secondary fixed
    },
    error: {
      lighter: '#FFEBEE',
      light: '#EF9A9A',
      main: '#F44336',
      dark: '#C62828',
      darker: '#B71C1C'
    },
    warning: {
      lighter: '#FFF8E1',
      light: '#FFD54F',
      main: '#FF9800',
      dark: '#F57C00',
      darker: '#E65100'
    },
    info: {
      lighter: '#E3F2FD',
      light: '#64B5F6',
      main: '#2196F3',
      dark: '#1976D2',
      darker: '#0D47A1'
    },
    success: {
      lighter: '#E8F5E8',
      light: '#81C784',
      main: '#4CAF50',
      dark: '#388E3C',
      darker: '#1B5E20'
    },
    grey: {
      0: '#FFFFFF',
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161'
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      disabled
    },
    background: {
      paper: background,
      default: background
    },
    divider,
    action: {
      hover: alpha(textPrimary, 0.04),
      selected: alpha(textPrimary, 0.08),
      disabled,
      disabledBackground
    }
  };

  return lightPalette;
}
