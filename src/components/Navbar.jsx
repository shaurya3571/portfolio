import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Portfolio', path: '/portfolio' }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 glass-panel" style={{ borderRadius: '0 0 16px 16px', borderTop: 'none' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Terminal size={28} color="var(--neon-cyan)" />
          <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-display)' }}>
            SHAURYA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'none' }} className="md-flex gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              style={{
                position: 'relative',
                color: location.pathname === link.path ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '0.9rem'
              }}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    background: 'var(--neon-cyan)',
                    boxShadow: 'var(--glow-cyan)'
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md-hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="var(--neon-cyan)" /> : <Menu color="var(--neon-cyan)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="glass-panel"
          style={{ position: 'absolute', top: '80px', left: '0', width: '100%', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', borderRadius: '0 0 16px 16px' }}
        >
          {links.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                color: location.pathname === link.path ? 'var(--neon-cyan)' : 'var(--text-primary)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}

      {/* Basic inline styles to handle md-flex and md-hidden simulating media queries without huge css files for now */}
      <style>{`
        .md-flex { display: none; }
        .md-hidden { display: block; }
        @media (min-width: 768px) {
          .md-flex { display: flex !important; gap: 2rem; }
          .md-hidden { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
