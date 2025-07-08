'use client';

import { customComponents } from '../../../builder-registry';

export default function TestComponentsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🧪 Builder.io Components Test</h1>
      <h2>✅ Phase 3 Complete - Component Registration</h2>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
        <h3>📦 Registered Components ({customComponents.length})</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {customComponents.map((component, index) => (
            <div
              key={index}
              style={{
                padding: '1rem',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: 'white'
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>{component.name}</h4>
              <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#6b7280' }}>Inputs: {component.inputs.length}</p>
              <p style={{ margin: '0', fontSize: '0.75rem', color: '#9ca3af' }}>Children: {component.canHaveChildren ? 'Yes' : 'No'}</p>

              <details style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
                <summary style={{ cursor: 'pointer', color: '#3b82f6' }}>View Inputs</summary>
                <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1rem' }}>
                  {component.inputs.map((input, i) => (
                    <li key={i} style={{ color: '#6b7280' }}>
                      {input.name} ({input.type})
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#ecfdf5', borderRadius: '8px' }}>
        <h3>�� Registration Summary</h3>
        <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
          <li>✅ Hero Components: Hero17</li>
          <li>✅ Feature Components: Feature18, Feature20, Feature21</li>
          <li>✅ Layout Components: Navbar10, Footer7</li>
          <li>✅ CTA Components: Cta4, Cta5</li>
          <li>✅ Content Components: Benefit5, Testimonial10, ContactUs4</li>
          <li>✅ Utility Components: SmallHero3, Integration2, Faq6, Pricing9</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '8px' }}>
        <h3>📋 Next Steps</h3>
        <ol style={{ margin: 0, paddingLeft: '1.5rem' }}>
          <li>Configure Builder.io API key in .env file</li>
          <li>Create content in Builder.io using registered components</li>
          <li>Test components at /builder/* routes</li>
          <li>Ready for Phase 4: Advanced configurations</li>
        </ol>
      </div>

      <p style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
        All components are registered and ready to use in Builder.io visual editor! 🎉
      </p>
    </div>
  );
}
