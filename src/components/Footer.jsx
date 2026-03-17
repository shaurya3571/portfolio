export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ marginTop: 'auto', padding: '2rem 0', borderTop: '1px solid var(--glass-border)' }} className="glass-panel">
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>
          © {currentYear} <span className="text-gradient" style={{ fontWeight: '600' }}>Shaurya Agrawal</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
