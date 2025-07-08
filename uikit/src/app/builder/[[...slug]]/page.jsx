import { Content, fetchOneEntry, isPreviewing, isEditing } from '@builder.io/sdk-react';
import { BUILDER_CONFIG, validateBuilderConfig } from '@/lib/builder/config';

export default async function BuilderPage(props) {
  // Validate Builder.io configuration
  const isConfigured = validateBuilderConfig();

  if (!isConfigured) {
    const urlPath = '/builder/' + (props.params?.slug?.join('/') || '');
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>⚙️ Builder.io Configuration Required</h1>
        <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '8px', marginTop: '2rem' }}>
          <h3>🔑 API Key Not Configured</h3>
          <p>To use Builder.io features, you need to:</p>
          <ol style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
            <li>
              Get your API key from{' '}
              <a href="https://builder.io" target="_blank">
                builder.io
              </a>
            </li>
            <li>Replace "your-builder-api-key-here" in the .env file</li>
            <li>Restart the development server</li>
          </ol>
        </div>
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>Current path: {urlPath}</p>
      </div>
    );
  }

  // NOTE: This import MUST be inside the Page component
  const { initializeNodeRuntime } = await import('@builder.io/sdk-react/node/init');
  initializeNodeRuntime();

  const urlPath = '/builder/' + (props.params?.slug?.join('/') || '');

  const content = await fetchOneEntry({
    options: { ...BUILDER_CONFIG.defaultOptions, ...props.searchParams },
    apiKey: BUILDER_CONFIG.apiKey,
    model: BUILDER_CONFIG.models.page,
    userAttributes: { urlPath }
  });

  const canShowContent = content || isPreviewing(props.searchParams) || isEditing(props.searchParams);

  if (!canShowContent) {
    return (
      <>
        <h1>Builder.io Content Not Found</h1>
        <p>Make sure you have your content published at builder.io with the correct URL path.</p>
        <p>Current path: {urlPath}</p>
        <p>Expected format: Create content in Builder.io with URL path matching this route.</p>
      </>
    );
  }

  return <Content content={content} apiKey={BUILDER_CONFIG.apiKey} model={BUILDER_CONFIG.models.page} />;
}
