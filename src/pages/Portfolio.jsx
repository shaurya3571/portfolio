import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'NexGen Core System',
      description: 'A cutting edge distributed microservices architecture handling high-throughput real-time data processing.',
      tags: ['Node.js', 'Kafka', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    },
    {
      title: 'Quantum Analytics UI',
      description: 'Futuristic data visualization dashboard allowing for multidimensional analysis of marketing datasets.',
      tags: ['React', 'D3.js', 'Tailwind', 'Framer'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    },
    {
      title: 'Aegis Security Module',
      description: 'Zero-trust authentication and authorization framework capable of integrating into legacy enterprise apps via OAuth.',
      tags: ['Go', 'Redis', 'JWT', 'gRPC'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    },
    {
        title: 'Neural Network Optimizer',
        description: 'An AI-powered tool that automatically compresses and optimizes neural networks for edge deployment.',
        tags: ['Python', 'TensorFlow', 'ONNX', 'C++'],
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
        github: '#',
        demo: '#'
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
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Selected Works</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          A showcase of systems, interfaces, and products I have designed and engineered.
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
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }} aria-label="GitHub">
                  <Github size={20} className="hover-glow" />
                  <span style={{ fontSize: '0.9rem' }}>Code</span>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon-cyan)' }} aria-label="Live Demo">
                  <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Live Demo</span>
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
