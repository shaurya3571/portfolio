import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <div className="section container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Experience & Growth</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          My journey is shaped by practical experiences across internships, student leadership, volunteering, and self-driven learning.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ padding: '2rem' }}
        >
          <h3 style={{ color: 'var(--neon-cyan)', marginBottom: '1rem', fontSize: '1.5rem' }}>Practical Impact</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            These opportunities have strengthened my communication, teamwork, execution, and analytical thinking.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            Each role has helped me better understand how to contribute in professional environments while continuously improving my technical and problem-solving skills.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
