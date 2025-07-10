// @mui
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

// @assets
import { IconBell } from '@tabler/icons-react';

/***************************  HEADER - NOTIFICATION  ***************************/

export default function Notification() {
  return (
    <IconButton size="large" aria-label="show notifications" color="secondary">
      <Badge badgeContent={4} color="primary">
        <IconBell />
      </Badge>
    </IconButton>
  );
}
