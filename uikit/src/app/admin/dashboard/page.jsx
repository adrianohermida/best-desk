export default function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <p>Dashboard is working without layout!</p>
      <div style={{ marginTop: '20px' }}>
        <h2>Quick Stats</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>Total Users</h3>
            <p style={{ fontSize: '24px', margin: '0' }}>1,234</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>Active Sessions</h3>
            <p style={{ fontSize: '24px', margin: '0' }}>567</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>Page Views</h3>
            <p style={{ fontSize: '24px', margin: '0' }}>89.2K</p>
          </div>
        </div>
      </div>
    </div>
  );
}
