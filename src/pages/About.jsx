import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Frontend Development', icon: <Layout className="text-gradient" size={32} />, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'] },
    { name: 'Backend Systems', icon: <Database className="text-gradient" size={32} />, skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
    { name: 'Core Architecture', icon: <Code2 className="text-gradient" size={32} />, skills: ['System Design', 'API Development', 'Microservices', 'GraphQL'] },
    { name: 'Tools & DevOps', icon: <Terminal className="text-gradient" size={32} />, skills: ['Git', 'Docker', 'AWS', 'CI/CD'] },
  ];

  return (
    <div className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Me</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          I am a passionate software engineering student exploring in the field of cybersecurity , webdev and devops, learning programming languages and chasing skills.
        </p>
      </motion.div>

      {/* Experience Timeline or Bio Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ padding: '2rem' }}
        >
          <h3 style={{ color: 'var(--neon-cyan)', marginBottom: '1rem', fontSize: '1.5rem' }}>My Journey</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            from childhood I was bit curious on solving sums and puzzles with different toys like mechanical toys , also loved the subjects like maths and physics i took a keen interest and later got my interest in software engineering
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            I specialize in the JavaScript ecosystem but remain technology-agnostic at heart, always selecting the right tool to deliver the highest quality solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ padding: '2rem' }}
        >
          <h3 style={{ color: 'var(--neon-purple)', marginBottom: '1rem', fontSize: '1.5rem' }}>Philosophy</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            I believe that great software is indistinguishable from magic. It should not only function flawlessly but also delight the user through beautiful aesthetics and smooth interactions.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            Performance is a feature, and I architect applications with that principle from day one.
          </p>
        </motion.div>
      </div>

      {/* Skills Graph */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Core <span className="text-gradient">Expertise</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skills.map((area, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, boxShadow: 'var(--glow-purple)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-panel"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div style={{ marginBottom: '1rem' }}>{area.icon}</div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{area.name}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {area.skills.map(skill => (
                  <span key={skill} style={{
                    fontSize: '0.85rem',
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-secondary)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
