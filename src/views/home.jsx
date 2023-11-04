import React from 'react';
import mugshot from '../assets/maro_sm.jpeg';
import { PORTFOLIO as data } from '../core/consts/portfolio';
import { getCurrentDate } from '../core/services/helpers';
import chalkbg from '../assets/blackbg.jpg';

const Home = () => {
  return (
    <div>
      <div
        className="overflow-hidden h-screen mx-auto relative flex justify-center font-sohne"
        style={{
          backgroundImage: `url(${mugshot})`,
          backgroundPosition: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%, contain',
        }}
      >
        <div
          className="w-4/5 absolute left-8 bottom-20 text-white border border-2 border-muted-color bg-black-color p-4 md:w-96 md:left-auto md:p-6 md:bottom-20"
          style={{
            backgroundImage: `url(${chalkbg})`,
            backgroundPosition: '100%',
            backgroundRepeat: 'no-repeat',
            borderRadius: '0.375rem',
          }}
        >
          <div className="p-2 flex justify-between text-exs">
            {data.skills.map((x) => (
              <span>{x}</span>
            ))}
          </div>
          <div className="flex border border-muted-color border-r-0 border-l-0 gap-6 p-2 font-sohne">
            <span className="text-exs">name:</span>
            <span className="text-light text-center text-md md:text-lg">
              {data.bio.fullname}
            </span>
          </div>
          <div className="flex border border-muted-color border-r-0 border-l-0">
            <div className="flex border-r border-r-muted-color gap-6 p-2">
              <span className="text-exs">date:</span>
              <span className="text-light text-center">{getCurrentDate()}</span>
            </div>
            <div className="flex gap-4 justify-between p-2 md:gap-6">
              <span className="text-exs">location:</span>
              <span className="text-light text-center">
                {data.bio.location}
              </span>
            </div>
          </div>
          <div className="text-center border border-muted-color p-4">
            <span className="text-light text-center text-md md:text-lg">
              {data.bio.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
