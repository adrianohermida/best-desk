'use client';

// @project
import SectionsNavigation from '@/components/SectionsNavigation';
import { sections } from '@/data/sectionsData';

/***************************  BUILDER.IO SECTIONS PREVIEW  ***************************/

export default function BuilderSectionsPreview() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 0',
          textAlign: 'center'
        }}
      >
        <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>Builder.io Sections Preview</h1>
        <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.9 }}>
          Browse and test all {sections.length} available UI sections in Builder.io
        </p>
      </div>

      {/* Sections Navigation */}
      <SectionsNavigation showSearch={true} showFilters={true} itemsPerPage={9} defaultCategory="" enableLoadMore={false} />

      {/* Builder.io Instructions */}
      <div
        style={{
          background: '#f8fafc',
          padding: '3rem 0',
          marginTop: '2rem'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
          <h2>Using Sections in Builder.io</h2>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>🎨 Visual Editor</h3>
              <p style={{ margin: 0, color: '#666' }}>
                Use the SectionsNavigation component in Builder.io's visual editor to create dynamic section browsers.
              </p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>⚡ Live Preview</h3>
              <p style={{ margin: 0, color: '#666' }}>
                All sections are registered and available for drag-and-drop editing with real-time preview.
              </p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>📱 Responsive</h3>
              <p style={{ margin: 0, color: '#666' }}>
                All components are fully responsive and optimized for mobile, tablet, and desktop viewing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
