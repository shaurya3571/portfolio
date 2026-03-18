import { motion } from 'framer-motion';
import { Code2, LineChart, Monitor, Users } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Programming & Development', icon: <Code2 className="text-gradient" size={32} />, skills: ['Python', 'C++', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'] },
    { name: 'Business & Data', icon: <LineChart className="text-gradient" size={32} />, skills: ['Business Analysis', 'Data Analysis', 'Process Understanding', 'Research', 'Documentation', 'Problem Solving'] },
    { name: 'Tools & Platforms', icon: <Monitor className="text-gradient" size={32} />, skills: ['Excel', 'Figma', 'VS Code', 'Canva', 'PowerPoint', 'Frontend Projects'] },
    { name: 'Professional Strengths', icon: <Users className="text-gradient" size={32} />, skills: ['Communication', 'Leadership', 'Teamwork', 'Event Coordination', 'Adaptability', 'Time Management'] },
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
          I’m a Computer Science student at SRM Institute of Science and Technology, passionate about Business Analysis, Data Analysis, Python, and Frontend Development. I enjoy solving practical problems, learning through projects, and building skills that create real-world impact.        </p>
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
          <h3 style={{ color: 'var(--neon-purple)', marginBottom: '1rem', fontSize: '1.5rem' }}>What I Focus on</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            I am currently focused on building a strong foundation in business analysis, data analysis, frontend development, and Python-based problem solving. I enjoy understanding requirements, improving processes, and creating solutions that are both useful and user-friendly.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            I believe strong work comes from combining clear thinking, communication, consistency, and execution. My goal is to grow through meaningful internships and projects where I can learn fast and contribute with impact.
          </p>
        </motion.div>
      </div>

      {/* Skills Graph */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Core <span className="text-gradient">Skills</span></h2>

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
