import React, { useEffect, useState } from 'react';
import play from '../../assets/play.png';
import pause from '../../assets/pause.png';
import Container from './container';
import { Link, NavLink } from 'react-router-dom';
import { btn } from '../consts/styling';

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
      className="fixed top-0 left-0 right-0 border border-b-darkwhite"
      style={{
        background: 'rgb(254, 254, 254)',
        zIndex: 9999,
      }}
    >
      <Container>
        <div
          style={{
            background: 'rgba(254, 254, 254, 0.15)',
          }}
          className="py-6 flex justify-between items-center"
        >
          <div className="flex items-center gap-2">
            <Link
              to="/home"
              className="font-sohne text-black/90 text-[24px] font-bold"
            >
              omaro
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
          <div className="flex items-center gap-3">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? `${btn} bg-green-500 text-black`
                  : `${btn} bg-gray-900 text-gray-400 hover:bg-green-500`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? `${btn} bg-yellow-500 text-black`
                  : `${btn} bg-gray-900 text-gray-400 hover:bg-yellow-500`
              }
            >
              Projects
            </NavLink>
            <button
              className={`w-7 h-7 flex justify-center items-center rounded transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-500 ${
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
