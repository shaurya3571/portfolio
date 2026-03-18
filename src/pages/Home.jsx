import { motion } from 'framer-motion';
import { Download, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section container" style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', textAlign: 'center', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 style={{ color: 'var(--neon-cyan)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1rem', marginBottom: '1rem' }} className="glow-text">
              OPEN TO INTERNSHIP OPPORTUNITIES
            </h2>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1.1', marginBottom: '1.5rem', fontWeight: '800' }}>
              Hi, I'm <br />
              <span className="text-gradient">Shaurya Agrawal</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}
          >
            <p style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: '500' }}>
              Computer Science student at SRM University focused on Business Analysis, Data Analysis, Python, and Frontend Development
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              I build practical, user-focused solutions by combining analytical thinking, problem solving, communication, and development skills. I’m currently looking for internships where I can learn, contribute, and grow through real-world projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            {/* The resume file should be placed in the public folder as resume.pdf */}
            <a href="public/resume.pdf" target="_blank" rel="noopener noreferrer" className="neon-btn">
              <span>Resume</span>
              <Download size={18} />
            </a>
            <Link to="/portfolio" className="neon-btn" style={{ background: 'transparent', border: '1px solid var(--text-secondary)', color: 'var(--text-primary)' }}>
              <span>My Work</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={32} color="var(--text-secondary)" />
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'var(--neon-purple)',
          filter: 'blur(150px)',
          opacity: 0.2,
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '250px',
          height: '250px',
          background: 'var(--neon-cyan)',
          filter: 'blur(120px)',
          opacity: 0.15,
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
      </section>

      {/* Quick Stats or Features */}
      <section className="section container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { title: 'Frontend', desc: 'React, Next.js, Framer Motion' },
            { title: 'Backend', desc: 'Node.js, Express, Postgres' },
            { title: 'Design', desc: 'Figma, UI/UX, Design Systems' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ padding: '2rem', textAlign: 'center' }}
            >
              <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{stat.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
