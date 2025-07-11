// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/***************************  ADMIN - DASHBOARD  ***************************/

export default function Dashboard() {
  return (
    <Stack sx={{ p: 3, gap: 3 }}>
      <Typography variant="h4">✅ Admin Dashboard Integrado com Sucesso!</Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Status da Integração
          </Typography>
          <Typography variant="body1">
            • ✅ Rotas admin funcionando (/admin/dashboard)
            <br />
            • ✅ Material-UI carregando corretamente
            <br />
            • ✅ Página renderizando sem erros
            <br />• ✅ Layout integrado ao UIKit principal
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
