import React from 'react';
import mugshot from '../assets/icon/maro_sm.png';
import { PORTFOLIO as data } from '../core/consts/portfolio';
import { getCurrentDate } from '../core/services/helpers';

const Home = () => {
  // TODO: Add about info
  // TODO: Add contact form
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
        <div className="w-4/5 absolute left-8 bottom-20 text-white border border-2 border-muted-color p-4 md:w-96 md:left-auto md:p-6 md:bottom-20 bg-black rounded-[5px] bg-opacity-3 border-[3px] border-muted-color border-backdrop-blur-sm backdrop-filter">
          <div className="p-2 flex justify-between text-exs">
            {data.skills.map((x) => (
              <span>{x}</span>
            ))}
          </div>
          <div className="flex border border-muted-color border-r-0 border-l-0 gap-6 p-2 font-sohne">
            <span className="text-exs">name:</span>
            <span className="text-light mx-auto text-center text-[12px] sm:text-[14px]">
              {data.bio.fullname}
            </span>
          </div>
          <div className="flex border border-muted-color border-r-0 border-l-0">
            <div className="flex border-r border-r-muted-color gap-6 p-2">
              <span className="text-exs">date:</span>
              <span className="text-light text-center text-[12px] sm:text-[14px]">
                {getCurrentDate()}
              </span>
            </div>
            <div className="flex gap-4 justify-between p-2 md:gap-6">
              <span className="text-exs">location:</span>
              <span className="text-light text-[12px] sm:text-[14px] text-center">
                {data.bio.location}
              </span>
            </div>
          </div>
          <div className="text-center border border-muted-color p-4">
            <span className="text-light text-[12px] sm:text-[14px] text-center">
              {data.bio.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
