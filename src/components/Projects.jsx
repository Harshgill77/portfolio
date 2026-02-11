import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Crop Recommendation System',
    description: 'An intelligent agricultural system that recommends the most suitable crops for a field based on soil nutrients and climatic conditions.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    tags: ['React', 'ML', 'Flask', 'Python'],
    liveUrl: 'https://crop-frontend-6hx9.onrender.com',
    githubUrl: 'https://github.com/Harshgill77/stachack'
  },
  {
    id: 2,
    title: '3D Portfolio Website',
    description: 'An interactive portfolio featuring Three.js animations and immersive 3D experiences.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    tags: ['React', 'Three.js', 'WebGL', 'GSAP'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Student Dropout Prediction',
    description: 'A machine learning-based platform to predict student dropout risks early, enabling timely intervention and support.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
    tags: ['Streamlit', 'Python', 'ML', 'Logistic Regression'],
    liveUrl: 'https://harshgill77-college-dropout-prediction-system-app-x3ov9j.streamlit.app',
    githubUrl: 'https://github.com/Harshgill77/College-dropout-prediction-system'
  },
  {
    id: 4,
    title: 'Vision Pipeline using YOLO',
    description: 'A high-performance computer vision pipeline for real-time object detection and tracking using the YOLO architecture.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop',
    tags: ['OpenCV', 'Python', 'ML', 'YOLO'],
    liveUrl: 'https://github.com/Harshgill77/object-detection-system',
    githubUrl: 'https://github.com/Harshgill77/object-detection-system'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isPaused, setIsPaused] = useState(false);

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projectsData, ...projectsData];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="projects section" id="projects">
      <div className="container-full">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className="section-header">
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="title-underline"></div>
            <p className="section-description">
              Hover to pause • Explore my recent works
            </p>
          </div>

          {/* Removed hover from container - now on individual cards for accuracy */}
          <div className="projects-scroll-container">
            <div className={`projects-horizontal ${isPaused ? 'paused' : ''}`}>
              {duplicatedProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${index}`}
                  className="project-card glass"
                  variants={cardVariants}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="project-image-container">
                    <div className="project-overlay">
                      <div className="project-number">0{project.id}</div>
                    </div>
                    <div className="project-image-frame">
                      <img src={project.image} alt={project.title} className="project-image" />
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Visit Website
                      </a>
                      <a href={project.githubUrl} className="project-link-icon" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
