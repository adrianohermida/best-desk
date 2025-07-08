const fs = require('fs');
const path = require('path');

// List of all block routes that need conversion
const blockRoutes = [
  'blocks/benefit/benefit5/page.jsx',
  'blocks/clientele/clientele3/page.jsx',
  'blocks/contact-us/contact-us4/page.jsx',
  'blocks/cta/cta4/page.jsx',
  'blocks/cta/cta5/page.jsx',
  'blocks/error404/page.jsx',
  'blocks/error500/page.jsx',
  'blocks/faq/faq6/page.jsx',
  'blocks/feature/feature21/page.jsx',
  'blocks/footer/footer7/page.jsx',
  'blocks/integration/integration2/page.jsx',
  'blocks/megamenu/megamenu4/page.jsx',
  'blocks/megamenu/megamenu5/page.jsx',
  'blocks/navbar/navbar10/page.jsx',
  'blocks/other/other1/page.jsx',
  'blocks/other/other2/page.jsx',
  'blocks/pricing/pricing9/page.jsx',
  'blocks/pro-page/page.jsx',
  'blocks/small-hero/small-hero3/page.jsx',
  'blocks/testimonial/testimonial10/page.jsx'
];

// Function to convert a single file
function convertFile(filePath) {
  const fullPath = path.join(__dirname, 'src/app', filePath);

  try {
    let content = fs.readFileSync(fullPath, 'utf8');

    // Convert different import patterns
    const conversions = [
      // Named imports like: import { Component } from '@/blocks/category';
      {
        pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+'@\/blocks\/([^']+)';/,
        replacement: (match, component, category) => {
          const cleanComponent = component.trim();
          return `import dynamic from 'next/dynamic';\n\nconst ${cleanComponent} = dynamic(() => import('@/blocks/${category}').then(mod => ({ default: mod.${cleanComponent} })), {\n  loading: () => <div>Carregando...</div>\n});`;
        }
      },
      // Default imports like: import Component from '@/blocks/category';
      {
        pattern: /import\s+([A-Z][a-zA-Z0-9]*)\s+from\s+'@\/blocks\/([^']+)';/,
        replacement: (match, component, category) => {
          return `import dynamic from 'next/dynamic';\n\nconst ${component} = dynamic(() => import('@/blocks/${category}'), {\n  loading: () => <div>Carregando...</div>\n});`;
        }
      },
      // Multiple named imports like: import { Navbar10, NavbarContent10, Other2 } from '@/blocks/navbar';
      {
        pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+'@\/blocks\/([^']+)';/,
        replacement: (match, components, category) => {
          const componentList = components.split(',').map((c) => c.trim());
          const dynamicImports = componentList
            .map(
              (comp) =>
                `const ${comp} = dynamic(() => import('@/blocks/${category}').then(mod => ({ default: mod.${comp} })), {\n  loading: () => <div>Carregando...</div>\n});`
            )
            .join('\n\n');
          return `import dynamic from 'next/dynamic';\n\n${dynamicImports}`;
        }
      }
    ];

    // Apply conversions
    for (const conversion of conversions) {
      content = content.replace(conversion.pattern, conversion.replacement);
    }

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Converted: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
  }
}

// Convert all files
console.log('Converting block routes to lazy loading...\n');

blockRoutes.forEach((route) => {
  convertFile(route);
});

console.log('\n🎉 Conversion completed!');
