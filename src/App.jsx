import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ContactButton from './components/ContactButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ContactButton />
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Harshpreet Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
