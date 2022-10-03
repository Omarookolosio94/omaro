import React, { useState } from 'react';
import About from '../components/About';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Footer from '../components/shared/Footer';
import Nav from '../components/shared/Nav';
import AppContext from '../utils/Context';

function Home() {
  const [step, setStep] = useState(0);

  var pagecontext = {
    step,
    setStep,
  };

  return (
    <AppContext.Provider value={{ pagecontext }}>
      <div>
        <Nav />
        <div>
          {step === 0 && <Landing />}
          {step === 1 && <About />}
          {step === 2 && <Projects />}
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default Home;
