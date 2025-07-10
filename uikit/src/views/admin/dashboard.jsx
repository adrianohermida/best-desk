// @mui
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

/***************************  SIMPLIFIED ADMIN DASHBOARD  ***************************/

export default function AdminDashboard() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Dashboard Admin
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Visitantes Únicos
              </Typography>
              <Typography variant="h4" color="primary">
                23,876
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +24.5% da semana passada
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Visualizações
              </Typography>
              <Typography variant="h4" color="success.main">
                30,450
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +20.5% da semana passada
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Eventos
              </Typography>
              <Typography variant="h4" color="info.main">
                34,789
              </Typography>
              <Typography variant="body2" color="error.main">
                -20.5% da semana passada
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Visitantes Online
              </Typography>
              <Typography variant="h4" color="warning.main">
                45,687
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +24.5% da semana passada
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Estatísticas Detalhadas
              </Typography>
              <Typography variant="body1">
                Aqui estão as estatísticas completas do dashboard admin do SaasAble. Este é o template original preservando o design e
                funcionalidades.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
