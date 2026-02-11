import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="hero section" id="home">
      <div className="container">
        <motion.div
          ref={ref}
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="badge">👋 Welcome to my portfolio</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span className="gradient-text">Harshpreet Singh</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Full Stack Developer & <span className="gradient-text-accent">Creative Designer</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="hero-description">
            I craft beautiful, interactive web experiences with modern technologies.
            Specializing in React, Three.js, and creating stunning 3D interfaces.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/Harsh_resume.pdf" download="Harshpreet_Singh_Resume.pdf" className="btn btn-outline">
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="hero-scroll"
        >
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-arrow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
