import { type RegisteredComponent } from '@builder.io/sdk-react';

// Base registry for Builder.io components
// Components will be added here following the exact patterns from the integration guide

export const customComponents: RegisteredComponent[] = [
  // Components will be added here in Phase 3
  // Following the exact registration pattern:
  // {
  //   component: DynamicComponent,
  //   name: 'ComponentName',
  //   inputs: [
  //     {
  //       name: 'propName',
  //       type: 'string',
  //       defaultValue: 'Default value',
  //     },
  //   ],
  //   canHaveChildren: true, // Only if component accepts children
  // },
];
