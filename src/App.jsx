import { useState } from 'react'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Maintenance from './components/Maintenance/Maintenance'
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const VIEWS = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']
  const [activeView, setActiveView] = useState('HOME');

  if (maintenanceMode) {
    return <Maintenance />
  }

  return (
    <>
      <Nav active={'HOME'} views={VIEWS} setActiveView={setActiveView} />
      
      {/* If active view is HOME */}
      {activeView === 'HOME' && <Home />}
      {/* If active view is ABOUT */}
      {activeView === 'ABOUT' && <About />}

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Astley Santos. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App