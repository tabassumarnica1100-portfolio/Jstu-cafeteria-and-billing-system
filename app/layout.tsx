export const metadata = { title: "JSTU DINE - Smart Cafeteria Management System", description: "Official Smart Cafeteria System - Crafted, Designed & Developed by Arnica Tabassum, CSE, JSTU" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter,system-ui', background: '#f8fafc', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <footer style={{ width: '100%', background: '#16a34a', color: 'white', padding: '28px 0', textAlign: 'center', marginTop: '48px' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <p style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>© 2026 JSTU DINE. Crafted, Designed & Developed by Arnica Tabassum</p>
    <p style={{ fontSize: '13px', fontWeight: '500', marginTop: '6px', color: 'white', opacity: 0.95 }}>Department of Computer Science and Engineering, Jamalpur Science and Technology University</p>
  </div>
</footer>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b', margin: '4px 0 0 0' }}>Arnica Tabassum</p>
            <p style={{ fontSize: '12px', color: '#64748b', margin: '2px 0 0 0' }}>Department of CSE</p>
            <p style={{ fontSize: '12px', color: '#64748b', margin: '2px 0 0 0' }}>Jamalpur Science and Technology University</p>
          </div>
        </footer>
      </body>
    </html>
  );
}