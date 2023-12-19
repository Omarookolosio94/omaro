import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Nav from './core/components/navbar';
import Footer from './core/components/footer';
import routes from './routes';
import burna23 from './assets/music/BurnaBoy23.mp3';
import cavemen from './assets/music/TheCavemenLoveTrials.mp3';

function App() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route path={`/${prop.path}`} element={prop.component} key={key} />
      );
    });
  };

  const [hours, getHours] = useState(new Date().getHours());

  // TODO: Add dark theme

  return (
    <Router>
      <div className="relative">
        <Nav />
        <div style={{ zIndex: 50 }}>
          <Routes>
            {getRoutes(routes)}
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
        <Footer />
        <div></div>
        <audio
          id="playlist"
          data-title={
            hours % 2 !== 0 ? 'Love&Trials - The Cavemen' : '23 - Burnaboy'
          }
        >
          <source src={hours % 2 !== 0 ? cavemen : burna23} type="audio/mp3" />
        </audio>
      </div>
    </Router>
  );
}

export default App;
