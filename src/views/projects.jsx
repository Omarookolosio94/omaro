import React from 'react';
import { PORTFOLIO } from '../core/consts/portfolio';

const Projects = () => {
  return (
    <div className="mt-[80px]">
      {PORTFOLIO?.projects?.map((proj) => (
        <div
          className={`overflow-hidden h-screen mx-auto relative flex justify-center ${proj?.color}`}
        >
          <div className="w-full text-white border border-2 border-muted-color p-4 rounded">
            <h3 className="text-[26px] mt-[40px]">{proj?.name}</h3>
            <p className="my-[30px] w-full md:w-2/5">{proj?.about}</p>

            {proj?.workdone?.map((work) => (
              <p className="w-full mb-2 md:w-2/5">{work}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
