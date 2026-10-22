export default function Loading() {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ height: '32px', background: '#e5e7eb', borderRadius: '8px', width: '33%', marginBottom: '24px' }}></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        <div style={{ height: '96px', background: '#e5e7eb', borderRadius: '12px' }}></div>
        <div style={{ height: '96px', background: '#e5e7eb', borderRadius: '12px' }}></div>
        <div style={{ height: '96px', background: '#e5e7eb', borderRadius: '12px' }}></div>
      </div>
    </div>
  );
}