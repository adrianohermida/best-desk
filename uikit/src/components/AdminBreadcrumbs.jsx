import { usePathname } from 'next/navigation';

// @mui
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// @next
import NextLink from 'next/link';

/***************************  ADMIN BREADCRUMBS  ***************************/

export default function AdminBreadcrumbs() {
  const pathname = usePathname();

  // Convert pathname to breadcrumb items
  const pathSegments = pathname.split('/').filter(Boolean);

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const isLast = index === pathSegments.length - 1;

    // Convert segment to readable title
    const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

    if (isLast) {
      return (
        <Typography key={href} color="text.primary">
          {title}
        </Typography>
      );
    }

    return (
      <Link key={href} component={NextLink} href={href} underline="hover">
        {title}
      </Link>
    );
  });

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link component={NextLink} href="/" underline="hover">
        Home
      </Link>
      {breadcrumbItems}
    </Breadcrumbs>
  );
}
