'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

// @tabler-icons
import { IconPalette, IconSun, IconMoon, IconAdjustments, IconRefresh } from '@tabler/icons-react';

// @project
import { useTheme, ThemeVariants, ThemeStyles, ColorSchemes } from '@/contexts/ThemeContext';
import { Themes } from '@/config';

/***************************  THEME PICKER COMPONENT  ***************************/

export default function ThemePicker({ variant = 'full', onClose }) {
  const {
    currentTheme,
    themeVariant,
    themeStyle,
    colorScheme,
    animations,
    onChangeTheme,
    onChangeVariant,
    onChangeStyle,
    onChangeColorScheme,
    onToggleAnimations,
    resetTheme
  } = useTheme();

  const themeLabels = {
    [Themes.THEME_DEFAULT]: 'Default',
    [Themes.THEME_AI]: 'AI Theme',
    [Themes.THEME_CRM]: 'CRM',
    [Themes.THEME_CRYPTO]: 'Crypto',
    [Themes.THEME_HOSTING]: 'Hosting',
    [Themes.THEME_PMS]: 'PMS',
    [Themes.THEME_HRM]: 'HRM',
    [Themes.THEME_PLUGIN]: 'Plugin',
    [Themes.THEME_LMS]: 'LMS'
  };

  const variantLabels = {
    [ThemeVariants.LIGHT]: 'Light',
    [ThemeVariants.DARK]: 'Dark',
    [ThemeVariants.AUTO]: 'Auto'
  };

  const styleLabels = {
    [ThemeStyles.MINIMAL]: 'Minimal',
    [ThemeStyles.BOLD]: 'Bold',
    [ThemeStyles.ELEGANT]: 'Elegant',
    [ThemeStyles.MODERN]: 'Modern',
    [ThemeStyles.CLASSIC]: 'Classic'
  };

  const colorSchemeLabels = {
    [ColorSchemes.DEFAULT]: 'Default',
    [ColorSchemes.BLUE]: 'Ocean Blue',
    [ColorSchemes.GREEN]: 'Nature Green',
    [ColorSchemes.PURPLE]: 'Royal Purple',
    [ColorSchemes.ORANGE]: 'Sunset Orange',
    [ColorSchemes.RED]: 'Crimson Red'
  };

  const colorPreviews = {
    [ColorSchemes.DEFAULT]: ['#2563eb', '#64748b'],
    [ColorSchemes.BLUE]: ['#0ea5e9', '#06b6d4'],
    [ColorSchemes.GREEN]: ['#10b981', '#84cc16'],
    [ColorSchemes.PURPLE]: ['#8b5cf6', '#d946ef'],
    [ColorSchemes.ORANGE]: ['#f97316', '#eab308'],
    [ColorSchemes.RED]: ['#ef4444', '#f59e0b']
  };

  if (variant === 'compact') {
    return (
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Tooltip title="Theme Variant">
          <IconButton onClick={() => onChangeVariant(themeVariant === ThemeVariants.LIGHT ? ThemeVariants.DARK : ThemeVariants.LIGHT)}>
            {themeVariant === ThemeVariants.DARK ? <IconMoon size={20} /> : <IconSun size={20} />}
          </IconButton>
        </Tooltip>

        <Tooltip title="Color Scheme">
          <IconButton>
            <IconPalette size={20} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Reset Theme">
          <IconButton onClick={resetTheme}>
            <IconRefresh size={20} />
          </IconButton>
        </Tooltip>
      </Stack>
    );
  }

  return (
    <Card sx={{ maxWidth: 400, width: '100%' }}>
      <CardContent>
        <Stack spacing={3}>
          {/* Header */}
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <IconAdjustments size={20} />
              <Typography variant="h6">Theme Settings</Typography>
            </Stack>
            {onClose && (
              <IconButton size="small" onClick={onClose}>
                ×
              </IconButton>
            )}
          </Stack>

          {/* Base Theme */}
          <FormControl fullWidth size="small">
            <InputLabel>Base Theme</InputLabel>
            <Select value={currentTheme} onChange={(e) => onChangeTheme(e.target.value)} label="Base Theme">
              {Object.entries(themeLabels).map(([value, label]) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Theme Variant */}
          <FormControl fullWidth size="small">
            <InputLabel>Theme Variant</InputLabel>
            <Select value={themeVariant} onChange={(e) => onChangeVariant(e.target.value)} label="Theme Variant">
              {Object.entries(variantLabels).map(([value, label]) => (
                <MenuItem key={value} value={value}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    {value === ThemeVariants.LIGHT && <IconSun size={16} />}
                    {value === ThemeVariants.DARK && <IconMoon size={16} />}
                    {value === ThemeVariants.AUTO && <IconAdjustments size={16} />}
                    <span>{label}</span>
                  </Stack>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Theme Style */}
          <FormControl fullWidth size="small">
            <InputLabel>Theme Style</InputLabel>
            <Select value={themeStyle} onChange={(e) => onChangeStyle(e.target.value)} label="Theme Style">
              {Object.entries(styleLabels).map(([value, label]) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Color Scheme */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Color Scheme
            </Typography>
            <Grid container spacing={1}>
              {Object.entries(colorSchemeLabels).map(([value, label]) => (
                <Grid item xs={6} key={value}>
                  <Card
                    variant={colorScheme === value ? 'elevation' : 'outlined'}
                    sx={{
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      border: colorScheme === value ? 2 : 1,
                      borderColor: colorScheme === value ? 'primary.main' : 'divider',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: 2
                      }
                    }}
                    onClick={() => onChangeColorScheme(value)}
                  >
                    <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                      <Stack spacing={1}>
                        <Stack direction="row" spacing={0.5}>
                          {colorPreviews[value].map((color, index) => (
                            <Box
                              key={index}
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '50%',
                                backgroundColor: color,
                                border: '1px solid',
                                borderColor: 'divider'
                              }}
                            />
                          ))}
                        </Stack>
                        <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                          {label}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Animation Toggle */}
          <FormControlLabel
            control={<Switch checked={animations} onChange={onToggleAnimations} size="small" />}
            label="Enable Animations"
          />

          {/* Actions */}
          <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
            <Chip
              label="Reset to Default"
              variant="outlined"
              size="small"
              onClick={resetTheme}
              clickable
              icon={<IconRefresh size={14} />}
            />
            <Chip label={`Current: ${themeLabels[currentTheme]}`} size="small" color="primary" variant="filled" />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

ThemePicker.propTypes = {
  variant: PropTypes.oneOf(['full', 'compact']),
  onClose: PropTypes.func
};

/***************************  THEME PICKER FOR BUILDER.IO  ***************************/

export function BuilderThemePicker(props) {
  return (
    <Box sx={{ p: 2 }}>
      <ThemePicker variant="full" {...props} />
    </Box>
  );
}

BuilderThemePicker.propTypes = {
  ...ThemePicker.propTypes
};
