// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// @project
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';

/***************************  FAQS - BREADCRUMBS  ***************************/

let breadcrumbs = [{ title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' }, { title: 'FAQs' }];

/***************************  FAQS - DATA  ***************************/

const faqsData = [
  {
    question: 'What is SaasAble?',
    answer:
      'SaasAble is a comprehensive UI component library and dashboard template built with React, Next.js, and Material-UI. It provides 200+ customizable components and blocks to help you build modern SaaS applications quickly.'
  },
  {
    question: 'Do you offer support?',
    answer:
      'Yes, we provide support through multiple channels including documentation, Discord community, and direct email support for Pro users. Our team is committed to helping you succeed with your projects.'
  },
  {
    question: 'Can I use this for commercial projects?',
    answer:
      'Absolutely! SaasAble comes with a commercial license that allows you to use it in both personal and commercial projects without any restrictions.'
  },
  {
    question: 'Is the source code included?',
    answer:
      'Yes, you get complete access to the source code. This allows you to customize components, add new features, and modify the codebase to fit your specific requirements.'
  },
  {
    question: 'How often do you release updates?',
    answer:
      'We release regular updates that include new components, bug fixes, and feature enhancements. Pro users get access to all updates for free as part of their license.'
  },
  {
    question: 'What technologies are used?',
    answer:
      'SaasAble is built with modern technologies including React 19, Next.js 15, Material-UI v6, TypeScript, and includes support for dark/light themes.'
  },
  {
    question: 'Do you provide migration assistance?',
    answer:
      'Yes, we offer migration guides and documentation to help you upgrade between versions. For complex migrations, our team can provide additional assistance.'
  },
  {
    question: 'Can I request custom components?',
    answer:
      'We regularly add new components based on user feedback. Pro users can request specific components, and we consider all suggestions for future releases.'
  }
];

/***************************  PAGE - FAQS  ***************************/

export default function Faqs() {
  return (
    <>
      <SectionHero
        {...{
          heading: `${branding.brandName} FAQs`,
          breadcrumbs,
          caption: 'Find answers to frequently asked questions'
        }}
      />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          <Stack sx={{ gap: 2, textAlign: 'center' }}>
            <Typography variant="h2">Frequently Asked Questions</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Can't find what you're looking for? Contact our support team for additional help.
            </Typography>
          </Stack>

          <Stack sx={{ gap: 2, maxWidth: 800, mx: 'auto', width: '100%' }}>
            {faqsData.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>

          <Stack sx={{ gap: 2, textAlign: 'center', mt: 4 }}>
            <Typography variant="h4">Still have questions?</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Can't find the answer you're looking for? Please chat with our friendly team.
            </Typography>
          </Stack>
        </Stack>
      </ContainerWrapper>
    </>
  );
}
