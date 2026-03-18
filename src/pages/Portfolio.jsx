import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a responsive personal portfolio website to showcase my profile, skills, projects, and internship interests in a clean, recruiter-friendly format.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1507238692062-7f0ecfdb4f49?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#',
      codeText: 'Code',
      demoText: 'Live Demo'
    },
    {
      title: 'Student Utility / College Management Project',
      description: 'Built a project focused on simplifying student-related workflows through structured logic, clean interface design, and practical problem-solving.',
      tags: ['Python', 'Flask', 'SQL', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#',
      codeText: 'Code',
      demoText: 'View Details'
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'Analyzed structured data to identify trends, generate insights, and present findings through visualizations and summary-based reporting.',
      tags: ['Python', 'Pandas', 'Excel', 'Matplotlib', 'Data Analysis'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#',
      codeText: 'Code',
      demoText: 'View Details'
    },
    {
      title: 'Frontend Landing Page / UI Project',
      description: 'Created a modern and responsive frontend interface with focus on clean design, usability, and smooth user experience across devices.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#',
      codeText: 'Code',
      demoText: 'Live Demo'
    },
    {
      title: 'Business Analysis Case Study',
      description: 'Worked on understanding a business problem, identifying requirements, analyzing possible improvements, and presenting a structured solution approach.',
      tags: ['Business Analysis', 'Research', 'Documentation', 'Process Thinking', 'Presentation'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#',
      codeText: 'View Case Study',
      demoText: 'View Details'
    }
  ];

  return (
    <div className="section container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Featured Projects</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          A selection of projects that reflect my interest in analysis, development, problem-solving, and user-focused solutions.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-panel"
            style={{ 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease' 
            }}
            whileHover={{ y: -10, boxShadow: 'var(--glow-cyan)' }}
          >
            {/* Project Image */}
            <div style={{ 
              width: '100%', 
              height: '200px', 
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(0,0,0,0.5)', zIndex: 1,
                mixBlendMode: 'overlay'
              }} />
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'grayscale(50%) contrast(1.2)'
                }} 
              />
            </div>

            {/* Project Details */}
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.8rem',
                    color: 'var(--neon-cyan)',
                    background: 'rgba(0, 243, 255, 0.1)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }} aria-label={project.codeText}>
                  {project.codeText === 'Code' ? <Github size={20} className="hover-glow" /> : <ExternalLink size={20} className="hover-glow" />}
                  <span style={{ fontSize: '0.9rem' }}>{project.codeText}</span>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon-cyan)' }} aria-label={project.demoText}>
                  <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{project.demoText}</span>
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            {/* Inline CSS just for specific hover effects missing from global */}
            <style>{`
              .hover-glow:hover {
                color: var(--neon-cyan);
                filter: drop-shadow(0 0 5px var(--neon-cyan));
                transition: all 0.3s ease;
              }
            `}</style>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
