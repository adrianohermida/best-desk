// Quick test to verify Builder.io registry
import { customComponents, registryMetadata } from './src/builder-registry';

console.log('🎨 Builder.io Registry Test');
console.log('Total Components:', registryMetadata.totalComponents);
console.log('Categories:', registryMetadata.categories);

// Check for the new components
const newComponents = ['Other1', 'Other2', 'ProPage'];
const registeredComponents = customComponents.map((c) => c.name);

newComponents.forEach((componentName) => {
  const isRegistered = registeredComponents.includes(componentName);
  console.log(`${isRegistered ? '✅' : '❌'} ${componentName}: ${isRegistered ? 'Registered' : 'Missing'}`);
});

console.log('\nUtility Components:');
const utilityComponents = customComponents.filter((c) => c.category === 'utility');
utilityComponents.forEach((c) => console.log(`- ${c.name}`));
