// @mui
import { alpha } from '@mui/material/styles';

/***************************  DEFAULT - SHADOWS  ***************************/

export default function Shadows(theme) {
  const { palette } = theme;

  const shadowColor = alpha(palette.grey[900], 0.15);

  return {
    0: 'none',
    1: `0px 1px 3px ${shadowColor}`,
    2: `0px 1px 5px ${shadowColor}`,
    3: `0px 1px 8px ${shadowColor}`,
    4: `0px 1px 10px ${shadowColor}`,
    5: `0px 1px 14px ${shadowColor}`,
    6: `0px 1px 18px ${shadowColor}`,
    7: `0px 2px 16px ${shadowColor}`,
    8: `0px 3px 14px ${shadowColor}`,
    9: `0px 3px 16px ${shadowColor}`,
    10: `0px 4px 18px ${shadowColor}`,
    11: `0px 4px 20px ${shadowColor}`,
    12: `0px 5px 22px ${shadowColor}`,
    13: `0px 5px 24px ${shadowColor}`,
    14: `0px 5px 26px ${shadowColor}`,
    15: `0px 6px 28px ${shadowColor}`,
    16: `0px 6px 30px ${shadowColor}`,
    17: `0px 6px 32px ${shadowColor}`,
    18: `0px 7px 34px ${shadowColor}`,
    19: `0px 7px 36px ${shadowColor}`,
    20: `0px 8px 38px ${shadowColor}`,
    21: `0px 8px 40px ${shadowColor}`,
    22: `0px 8px 42px ${shadowColor}`,
    23: `0px 9px 44px ${shadowColor}`,
    24: `0px 9px 46px ${shadowColor}`
  };
}
