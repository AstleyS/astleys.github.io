import { useState } from 'react'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Maintenance from './components/Maintenance/Maintenance'
import Nav from './components/Nav/Nav';

function App() {
  
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const VIEWS = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']

  if (maintenanceMode) {
    return <Maintenance />
  }
  const components = [<Nav active={'HOME'} views={VIEWS} />]

  return (
    <>
      <Nav active={'HOME'} views={VIEWS} />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Astley Santos. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App