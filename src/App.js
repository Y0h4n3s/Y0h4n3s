import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import NavigationPanel from './components/NavigationPanel'
import HomePage from './components/HomePage'
import UnderConstruction from './components/UnderConstruction'
import './style/style.scss'


function App() {
  return (
    <BrowserRouter>
        <nav className="nav-section">
          <NavigationPanel />
        </nav>
        <main className="main-section">
          <Route  path="/home" component={HomePage} />
          <Route path="/profile" component={UnderConstruction} />
          <Route path="/projects" component={UnderConstruction} />
          <Route path="/contact-me" component={UnderConstruction} />

        </main>
    </BrowserRouter>
    
  )
}

export default App;
