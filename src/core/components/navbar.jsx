import React, { useEffect, useState } from 'react';
import play from '../../assets/play.png';
import pause from '../../assets/pause.png';
import Container from './container';
import { Link, NavLink } from 'react-router-dom';

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

  // TODO: On scroll change color of navbar
  return (
    <div
      className="fixed top-0 left-0 right-0"
      style={{
        background: 'rgba(255, 255, 255)',
        zIndex: 9999,
      }}
    >
      <Container>
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
          }}
          className="py-6 flex justify-between items-center"
        >
          <div className="flex items-center gap-2">
            <Link to="/home" className="text-lg font-bold">
              OMARO
            </Link>
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
          <div className="flex items-center gap-3 font-black">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? `text-blue-600` : 'text-black'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? `text-blue-600` : 'text-black'
              }
            >
              Projects
            </NavLink>
            <button
              className={`w-8 h-8 flex justify-center items-center rounded ${
                playing ? 'bg-blue-600' : 'bg-black'
              }`}
              onClick={playsong}
            >
              <img src={playing ? pause : play} alt="hamburger" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Nav;
