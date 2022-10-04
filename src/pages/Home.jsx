import React, { useEffect, useState } from 'react';
import About from '../components/About';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Footer from '../components/shared/Footer';
import Nav from '../components/shared/Nav';
import AppContext from '../utils/Context';
import burna23 from '../static/BurnaBoy23.mp3';
import cavemen from '../static/TheCavemenLoveTrials.mp3';

function Home() {
  const [step] = useState(0);
  const [hours, getHours] = useState(new Date().getHours());

  useEffect(() => {
    getHours(new Date().getHours());
  }, []);

  var pagecontext = {
    step,
  };

  return (
    <AppContext.Provider value={{ pagecontext }}>
      <div className="relative">
        <Nav />
        <div>
          {step === 0 && <Landing />}
          {step === 1 && <About />}
          {step === 2 && <Projects />}
        </div>
        <Footer />

        <audio
          id="playlist"
          data-title={
            hours % 2 !== 0 ? 'Love&Trials - The Cavemen' : '23 - Burnaboy'
          }
        >
          <source src={hours % 2 !== 0 ? cavemen : burna23} type="audio/mp3" />
        </audio>
      </div>
    </AppContext.Provider>
  );
}

export default Home;
