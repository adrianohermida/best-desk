'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';

// @project
import branding from '@/branding.json';

/***************************  LOGO - WATERMARK  ***************************/

export default function LogoWatermark() {
  const theme = useTheme();
  const logoWatermark = branding.logo.logoWatermark;

  return logoWatermark ? (
    <CardMedia src={logoWatermark} component="img" alt="logo" loading="lazy" />
  ) : (
    <svg width="430" height="466" viewBox="0 0 430 466" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.08"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M338.865 7.65501C384.41 -17.229 438.326 22.2206 428.453 73.206L362.518 413.718C362.061 416.788 361.368 419.837 360.436 422.839C358.377 429.849 355.397 435.688 351.689 440.393C351.581 440.543 351.473 440.692 351.364 440.841C331.376 468.207 293.007 474.172 265.666 454.167C252.106 444.245 243.805 429.799 241.32 414.419L241.333 414.428C233.747 385.894 244.587 309.302 301.474 186.701L323.393 211.292L352.417 92.773C353.72 87.4517 347.934 83.2176 343.263 86.0748L239.233 149.712L270.533 164.061C211.517 226.313 129.346 284.552 71.0875 290.69C56.5339 292.223 39.1151 288.401 25.5612 278.484C-1.78032 258.478 -7.74121 220.077 12.2472 192.712C12.2987 192.641 12.3504 192.571 12.4021 192.501C12.4609 192.421 12.5198 192.341 12.5788 192.262C15.9306 187.304 20.5806 182.694 26.6222 178.607C29.2021 176.803 31.9007 175.213 34.6905 173.844L338.865 7.65501ZM115.015 415.116C132.568 427.7 157.065 423.555 169.732 405.857C178.149 394.098 184.334 355.792 187.537 331.41C188.767 322.045 179.332 315.281 170.869 319.46C148.833 330.34 114.586 348.525 106.169 360.284C93.5024 377.982 97.4628 402.531 115.015 415.116Z"
        fill={theme.palette.primary.main}
      />
    </svg>
  );
}
