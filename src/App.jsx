import { useState } from 'react'
import './App.css'

import Maintenance from './components/Maintenance/Maintenance'
import MouseFollower from './components/MouseFollower/MouseFollower';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const VIEWS = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']
  const [activeView, setActiveView] = useState('HOME');

  if (maintenanceMode) {
    return <Maintenance />
  }

  return (
    <div className="app-shell">
      <MouseFollower />
      <Nav active={activeView} views={VIEWS} setActiveView={setActiveView} />

      <main className="view-shell">
        {activeView === 'HOME' && <Home setActiveView={setActiveView} />}
        {activeView === 'ABOUT' && <About />}
        {activeView === 'PROJECTS' && <Projects />}
        {activeView === 'CONTACT' && <Contact />}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Astley Santos.</p>
      </footer>
    </div>
  )
}

export default App