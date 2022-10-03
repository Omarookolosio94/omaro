import React from 'react';
import hamburger from '../../static/icon/hamburger.svg';
import Container from './Container';

function Nav() {
  return (
    <Container>
      <div className="py-6 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">OMARO</h1>
        </div>
        <div>
          <button className='w-8 h-8 bg-black-color flex justify-center items-center rounded'>
            <img src={hamburger} className="text-white-color" alt="hamburger" />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Nav;
