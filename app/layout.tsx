export const metadata = { title: 'JSTU DINE - Smart Cafeteria OS', description: 'JSTU Cafeteria and Billing System' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter,system-ui', background: '#f8fafc', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <footer style={{ width: '100%', borderTop: '1px solid #e2e8f0', background: 'rgba(255,255,255,0.9)', padding: '16px 24px', marginTop: '40px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'left' }}>
            <p style={{ fontSize: '10px', letterSpacing: '1.5px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600, margin: 0 }}>Crafted, Designed and Developed by</p>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b', margin: '4px 0 0 0' }}>Arnica Tabassum</p>
            <p style={{ fontSize: '12px', color: '#64748b', margin: '2px 0 0 0' }}>Department of CSE</p>
            <p style={{ fontSize: '12px', color: '#64748b', margin: '2px 0 0 0' }}>Jamalpur Science and Technology University</p>
          </div>
        </footer>
      </body>
    </html>
  );
}