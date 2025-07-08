// Typography configuration for the theme system

// Font families
export const fontFamilies = {
  primary: [
    '"Inter"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),

  secondary: ['"Roboto"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),

  monospace: ['"Fira Code"', '"SF Mono"', 'Monaco', 'Consolas', '"Ubuntu Mono"', 'monospace'].join(',')
};

// Base typography scale
export const fontSizes = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem', // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem', // 72px
  '8xl': '6rem', // 96px
  '9xl': '8rem' // 128px
};

// Font weights
export const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};

// Line heights
export const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2
};

// Letter spacing
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em'
};

// Material-UI typography configuration
export const typography = {
  fontFamily: fontFamilies.primary,
  fontSize: 14,
  fontWeightLight: fontWeights.light,
  fontWeightRegular: fontWeights.normal,
  fontWeightMedium: fontWeights.medium,
  fontWeightBold: fontWeights.bold,

  // Typography variants
  h1: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['5xl'],
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
    '@media (max-width:600px)': {
      fontSize: fontSizes['4xl']
    }
  },

  h2: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
    '@media (max-width:600px)': {
      fontSize: fontSizes['3xl']
    }
  },

  h3: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.normal,
    '@media (max-width:600px)': {
      fontSize: fontSizes['2xl']
    }
  },

  h4: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.normal,
    '@media (max-width:600px)': {
      fontSize: fontSizes.xl
    }
  },

  h5: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal
  },

  h6: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.wide
  },

  subtitle1: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.base,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.wide
  },

  subtitle2: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.wider
  },

  body1: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.normal,
    fontSize: fontSizes.base,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.normal
  },

  body2: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.normal,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal
  },

  button: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.none,
    letterSpacing: letterSpacing.wide,
    textTransform: 'uppercase'
  },

  caption: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.normal,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.wider
  },

  overline: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.none,
    letterSpacing: letterSpacing.widest,
    textTransform: 'uppercase'
  },

  // Custom variants
  code: {
    fontFamily: fontFamilies.monospace,
    fontWeight: fontWeights.normal,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.normal
  },

  lead: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.normal,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.normal
  }
};

// Responsive typography helpers
export const responsiveTypography = {
  // Mobile-first approach
  mobile: {
    h1: { fontSize: fontSizes['2xl'] },
    h2: { fontSize: fontSizes.xl },
    h3: { fontSize: fontSizes.lg },
    h4: { fontSize: fontSizes.base },
    h5: { fontSize: fontSizes.sm },
    h6: { fontSize: fontSizes.sm }
  },

  tablet: {
    h1: { fontSize: fontSizes['4xl'] },
    h2: { fontSize: fontSizes['3xl'] },
    h3: { fontSize: fontSizes['2xl'] },
    h4: { fontSize: fontSizes.xl },
    h5: { fontSize: fontSizes.lg },
    h6: { fontSize: fontSizes.base }
  },

  desktop: {
    h1: { fontSize: fontSizes['5xl'] },
    h2: { fontSize: fontSizes['4xl'] },
    h3: { fontSize: fontSizes['3xl'] },
    h4: { fontSize: fontSizes['2xl'] },
    h5: { fontSize: fontSizes.xl },
    h6: { fontSize: fontSizes.lg }
  }
};

export default {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  typography,
  responsiveTypography
};
