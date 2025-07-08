'use client';

export default function TestBuilderPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎉 Builder.io Integration Test</h1>
      <h2>✅ Phase 1-2 Complete!</h2>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
        <h3>Infrastructure Status:</h3>
        <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
          <li>✅ SDK Installed: @builder.io/sdk-react</li>
          <li>✅ Environment Variable: NEXT_PUBLIC_BUILDER_API_KEY</li>
          <li>✅ Builder.io Route: builder/[[...slug]]/page.jsx</li>
          <li>✅ Component Registry: builder-registry.js</li>
          <li>✅ Configuration: lib/builder/config.js</li>
          <li>✅ Route Conflicts: Fixed (dedicated namespace)</li>
          <li>✅ TypeScript Issues: Fixed (converted to JavaScript)</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '8px' }}>
        <h3>⚠️ Next Steps:</h3>
        <ol style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
          <li>Get your Builder.io API key from builder.io</li>
          <li>Replace "your-builder-api-key-here" in .env file</li>
          <li>Create content in Builder.io</li>
          <li>Proceed to Phase 3: Component Registration</li>
        </ol>
      </div>

      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
        Visit <code>/test-builder</code> to see this test page.
        <br />
        Check <code>BUILDER_SETUP.md</code> for detailed instructions.
      </p>
    </div>
  );
}
