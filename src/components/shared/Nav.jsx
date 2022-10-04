import React, { useEffect, useState } from 'react';
// import hamburger from '../../static/icon/hamburger.svg';
import play from '../../static/play.png';
import pause from '../../static/pause.png';
import Container from './Container';

function Nav() {
  const [song, setSong] = useState(document.getElementById('playlist'));

  useEffect(() => {
    setSong(document.getElementById('playlist'));
  }, []);

  const [playing, setPlaying] = useState(false);

  const playsong = () => {
    if (song?.paused || song?.ended) {
      song.play();
      setPlaying(true);
    } else {
      song?.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-100"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
      }}
    >
      <Container>
        <div className="py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold">OMARO</h1>
            {playing && (
              <>
                <div className="music-icon">
                  <span />
                  <span />
                  <span />
                </div>
                <span>{song.dataset.title}</span>
              </>
            )}
          </div>
          <div>
            <button
              className="w-8 h-8 bg-black-color flex justify-center items-center rounded"
              onClick={playsong}
            >
              <img
                src={playing ? pause : play}
                className="text-white-color"
                alt="hamburger"
              />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Nav;
