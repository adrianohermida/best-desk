'use client';
import { useState } from 'react';

// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';

// @tabler-icons
import { IconEye, IconCode, IconX, IconExternalLink } from '@tabler/icons-react';

// @project
import { TEMPLATE_REGISTRY, TEMPLATE_CATEGORIES } from '@/templates';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SaasStartupTemplate } from '@/templates';
import { CorporateTemplate } from '@/templates';

/***************************  TEMPLATE COMPONENTS MAP  ***************************/

const TEMPLATE_COMPONENTS = {
  SaasStartupTemplate,
  CorporateTemplate
};

/***************************  TEMPLATES GALLERY PAGE  ***************************/

export default function TemplatesGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const filteredTemplates =
    selectedCategory === 'all' ? TEMPLATE_REGISTRY : TEMPLATE_REGISTRY.filter((template) => template.category === selectedCategory);

  const handlePreview = (template) => {
    setPreviewTemplate(template);
  };

  const handleClosePreview = () => {
    setPreviewTemplate(null);
  };

  const renderTemplate = (template) => {
    const TemplateComponent = TEMPLATE_COMPONENTS[template.component];
    if (!TemplateComponent) {
      return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography>Template not found: {template.component}</Typography>
        </Box>
      );
    }
    return <TemplateComponent />;
  };

  return (
    <>
      {/* Header */}
      <ContainerWrapper>
        <Box sx={{ py: 8 }}>
          <Stack spacing={4} sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h1">
              Template Gallery
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Ready-to-use page templates built with our component library. Perfect starting points for your projects.
            </Typography>
          </Stack>

          {/* Category Filter */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Tabs value={selectedCategory} onChange={handleCategoryChange}>
              <Tab label="All Templates" value="all" />
              <Tab label="Landing Pages" value={TEMPLATE_CATEGORIES.LANDING} />
              <Tab label="Business" value={TEMPLATE_CATEGORIES.BUSINESS} />
              <Tab label="SaaS" value={TEMPLATE_CATEGORIES.SAAS} />
              <Tab label="Portfolio" value={TEMPLATE_CATEGORIES.PORTFOLIO} />
              <Tab label="E-commerce" value={TEMPLATE_CATEGORIES.ECOMMERCE} />
            </Tabs>
          </Box>

          {/* Templates Grid */}
          <Grid container spacing={4}>
            {filteredTemplates.map((template) => (
              <Grid item xs={12} md={6} lg={4} key={template.id}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={template.thumbnail}
                    alt={template.name}
                    sx={{
                      objectFit: 'cover',
                      bgcolor: 'grey.100'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Stack spacing={2} sx={{ height: '100%' }}>
                      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h6" component="h3">
                          {template.name}
                        </Typography>
                        <Chip label={template.category} size="small" color="primary" variant="outlined" />
                      </Stack>

                      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                        {template.description}
                      </Typography>

                      {/* Features */}
                      <Box>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                          Includes:
                        </Typography>
                        <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 0.5 }}>
                          {template.features.slice(0, 3).map((feature) => (
                            <Chip key={feature} label={feature} size="small" variant="outlined" sx={{ fontSize: '0.7rem', height: 20 }} />
                          ))}
                          {template.features.length > 3 && (
                            <Chip
                              label={`+${template.features.length - 3} more`}
                              size="small"
                              variant="outlined"
                              sx={{ fontSize: '0.7rem', height: 20 }}
                            />
                          )}
                        </Stack>
                      </Box>

                      {/* Use Cases */}
                      <Box>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                          Best for:
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                          {template.useCases.join(', ')}
                        </Typography>
                      </Box>

                      {/* Actions */}
                      <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<IconEye size={16} />}
                          onClick={() => handlePreview(template)}
                          fullWidth
                        >
                          Preview
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<IconCode size={16} />}
                          href={`/blocks/templates/${template.id}`}
                          fullWidth
                        >
                          Use Template
                        </Button>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Empty State */}
          {filteredTemplates.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                No templates found in this category.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                More templates coming soon!
              </Typography>
            </Box>
          )}
        </Box>
      </ContainerWrapper>

      {/* Preview Dialog */}
      <Dialog
        open={!!previewTemplate}
        onClose={handleClosePreview}
        maxWidth="xl"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            height: '90vh',
            maxHeight: '90vh'
          }
        }}
      >
        <DialogActions sx={{ p: 2 }}>
          <Stack direction="row" spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {previewTemplate?.name} - Preview
            </Typography>
            <Button
              variant="outlined"
              size="small"
              startIcon={<IconExternalLink size={16} />}
              href={`/blocks/templates/${previewTemplate?.id}`}
              target="_blank"
            >
              Open in New Tab
            </Button>
            <IconButton onClick={handleClosePreview}>
              <IconX size={20} />
            </IconButton>
          </Stack>
        </DialogActions>
        <DialogContent sx={{ p: 0, overflow: 'hidden' }}>
          <Box sx={{ height: '100%', overflow: 'auto' }}>{previewTemplate && renderTemplate(previewTemplate)}</Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
