export const metadata = { title: 'JSTU DINE - Smart Cafeteria OS', description: 'JSTU Cafeteria and Billing System' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter,system-ui', background: '#f8fafc', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>{children}</div>
        
        <footer style={{ width: '100%', background: '#16a34a', borderTop: '4px solid #14532d', padding: '20px 28px', marginTop: '50px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'left' }}>
            <p style={{ fontSize: '11px', letterSpacing: '2.2px', color: '#bbf7d0', textTransform: 'uppercase', fontWeight: 800, margin: 0 }}>Crafted, Designed and Developed by</p>
            <p style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '6px 0 0 0' }}>Arnica Tabassum</p>
            <p style={{ fontSize: '13px', color: '#dcfce7', fontWeight: 600, margin: '4px 0 0 0' }}>Department of CSE</p>
            <p style={{ fontSize: '13px', color: '#dcfce7', fontWeight: 500, margin: '2px 0 0 0' }}>Jamalpur Science and Technology University</p>
          </div>
        </footer>
      </body>
    </html>
  );
}