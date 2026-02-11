import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';
import MapCard from './MapCard';
import profileImg from '../assets/profile.jpg';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={cardVariants} className="section-header">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="halcyon-grid">

            {/* 1. Profile Photo (Top Right) */}
            <motion.div variants={cardVariants} className="h-card h-profile">
              <div className="h-profile-bg"></div>
              <img 
                src={profileImg} 
                alt="Harsh Profile" 
                className="h-profile-img" 
              />
              <div className="h-profile-overlay"></div>
            </motion.div>


            {/* 2. Experience/Container (Bottom Left - Wide) */}
            <motion.div variants={cardVariants} className="h-card h-experience">
               
               <div className="exp-content">
                 <h3 className="exp-label">About</h3>
                 <p className="exp-bio">
                   I am an <span className="highlight">AI Engineer</span> and <span className="highlight">Frontend Developer</span> passionate about building intelligent, pixel-perfect web experiences that merge creativity with cutting-edge technology.
                 </p>
                 <div className="exp-tags">
                   <span className="exp-tag">React</span>
                   <span className="exp-tag">TensorFlow</span>
                   <span className="exp-tag">Three.js</span>
                 </div>
               </div>
               
            </motion.div>

            {/* 3. Education Stack (Top Middle) */}
            <div className="h-stack">
              <motion.div variants={cardVariants} className="h-card h-edu h-college">
                <div className="edu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div className="edu-details">
                    <span className="edu-name">Guru Nanak Dev Engineering College</span>
                    <span className="edu-score">CSE • GPA: 8.0</span>
                </div>
              </motion.div>
              <motion.div variants={cardVariants} className="h-card h-edu h-school">
                <div className="edu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M8 21v-4h8v4"/><path d="M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
                </div>
                <div className="edu-details">
                    <span className="edu-name">TSSM</span>
                    <span className="edu-score">Science • 93%</span>
                </div>
              </motion.div>
            </div>


            {/* 4. Visual Card (Top Left) */}
            <motion.div variants={cardVariants} className="h-card h-visual">
              <div className="h-visual-bg"></div>
              <div className="status-badge">
                <span className="pulsing-dot"></span>
                Available to Work
              </div>
              <div className="h-notification">
                <div className="h-avatar">👨‍💻</div>
                <div className="h-notif-content">
                  <span className="h-notif-name">Harsh</span>
                  <a href="mailto:harshgill7994@gmail.com" className="h-notif-msg">harshgill7994@gmail.com</a>
                </div>
                <span className="h-notif-time">Just now</span>
              </div>
            </motion.div>

           
            
            

            {/* 5. Location/Map (Bottom Right) */}
            <motion.a 
              href="https://maps.apple.com/?q=30.84501,75.86165" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={cardVariants} 
              className="h-card h-map"
            >
              <div className="map-frame-container">
                <MapCard />
              </div>
              <div className="apple-map-ui">
                 <div className="am-control am-location">
                    <span className="am-icon">↗</span>
                 </div>
                 <div className="am-control am-settings">
                    <span className="am-icon">ⓘ</span>
                 </div>
              </div>
            </motion.a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
