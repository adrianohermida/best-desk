// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/***************************  ADMIN - SAMPLE PAGE  ***************************/

export default function SamplePage() {
  return (
    <Stack sx={{ p: 3, gap: 3 }}>
      <Typography variant="h4">✅ Admin Sample Page Funcionando!</Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Página de Exemplo do Admin
          </Typography>
          <Typography variant="body1">
            Esta é uma página de exemplo do template admin integrado ao UIKit principal.
            <br />
            • ✅ Layout admin funcionando
            <br />
            • ✅ Navegação entre páginas
            <br />• ✅ Componentes Material-UI renderizando
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
