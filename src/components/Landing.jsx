import React from 'react';
import mugshot from '../static/maro_sm.jpeg';
import { getCurrentDate } from '../utils/Helpers';
import { PERSONAL_DATA as data } from '../utils/personalData';

function Landing() {
  return (
    <div>
      <div
        className="overflow-hidden h-screen mx-auto relative flex justify-center"
        style={{
          backgroundImage: `url(${mugshot})`,
          backgroundPosition: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%, contain',
        }}
      >
        <div className="w-4/5 absolute left-8 bottom-20 text-white border border-2 border-muted-color bg-black-color p-4 md:w-96 md:left-auto md:p-6 md:bottom-20 rounded">
          <div className="p-2 flex justify-between text-exs">
            <span>Javascript</span>
            <span>C#</span>
            <span>Typescript</span>
            <span>Node</span>
          </div>
          <div className="flex border border-muted-color border-r-0 border-l-0 gap-6 p-2">
            <span className="text-exs">name:</span>
            <span className="text-light text-center text-md md:text-lg">
              {data.bio.fullname}
            </span>
          </div>
          <div className="flex border border-muted-color border-r-0 border-l-0">
            <div className="flex border-r border-r-muted-color gap-6 p-2">
              <span className="text-exs">Date:</span>
              <span className="text-light text-center">{getCurrentDate()}</span>
            </div>
            <div className="flex gap-4 justify-between p-2 md:gap-6">
              <span className="text-exs">Loc:</span>
              <span className="text-light text-center">Nigeria</span>
            </div>
          </div>
          <div className="text-center border border-muted-color p-2">
            Full stack Developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
