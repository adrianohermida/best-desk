import { Content, fetchOneEntry, isPreviewing, isEditing } from '@builder.io/sdk-react';
import { BUILDER_CONFIG, validateBuilderConfig } from '@/lib/builder/config';

export default async function Page(props) {
  // Validate Builder.io configuration
  validateBuilderConfig();

  // NOTE: This import MUST be inside the Page component
  const { initializeNodeRuntime } = await import('@builder.io/sdk-react/node/init');
  initializeNodeRuntime();

  const urlPath = '/' + (props.params?.slug?.join('/') || '');

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
        <h1>404</h1>
        <p>Make sure you have your content published at builder.io.</p>
        <p>Current path: {urlPath}</p>
      </>
    );
  }

  return <Content content={content} apiKey={BUILDER_CONFIG.apiKey} model={BUILDER_CONFIG.models.page} />;
}
