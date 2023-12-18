import React, { useState } from 'react';
import { PORTFOLIO } from '../core/consts/portfolio';
import { btnLg } from '../core/consts/styling';
import next from '../assets/next.png';
import prev from '../assets/prev.png';

const Projects = () => {
  // TODO: Include images frome each project
  // TODO: Make showcase a slideshow
  const projects = PORTFOLIO.projects;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(projects[0]);

  const getNext = () => {
    if (current < projects?.length - 1) {
      setCurrent(current + 1);
      setSelected(projects[current + 1]);
    } else {
      setCurrent(0);
      setSelected(projects[0]);
    }
  };

  const getPrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(projects[current - 1]);
    } else {
      setCurrent(projects?.length - 1);
      setSelected(projects[projects?.length - 1]);
    }
  };

  return (
    <div className="mt-[80px]">
      <div
        className={`overflow-hidden h-screen mx-auto relative flex flex-col items-center justify-center`}
      >
        <div
          className={`w-11/12 mx-auto md:container md:mx-auto mt-[-40px] transition-[margin] duration-150 ease-in-out`}
        >
          <p className="w-full mb-[20px] text-center font-feijoa-display text-[24px] font-black text-black">
            {selected?.name}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 font-sohne">
            <div className="w-full md:w-2/4 lg:w-1/4">
              {selected?.about?.map((work) => (
                <p className="w-full my-[16px] text-normal text-black/90">
                  {work}
                </p>
              ))}
            </div>
            <div className="w-full md:w-2/4 lg:w-1/4">
              <div className="mb-5">
                <div className="mb-5">
                  <p className="uppercase font-bold mb-2">Technologies</p>
                  <div className="flex gap-2">
                    {selected?.tech?.map((tec) => (
                      <span className="squircle text-[12px] bg-gray-500 text-gray-100 px-2 py-[2px]">
                        {tec}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="uppercase font-bold mb-2">License</p>
                  <div>
                    <span className="squircle text-[12px] bg-gray-500 text-gray-100 px-2 py-[2px]">
                      {selected?.license}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-[40px]">
                {selected?.url?.web?.length > 1 && (
                  <a
                    href={selected?.url?.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnLg} text-[12px] bg-gray-900 text-gray-300 hover:scale-105 gap-2 hover:text-gray-300`}
                  >
                    Visit Website
                  </a>
                )}
                {selected?.url?.api?.length > 1 && (
                  <a
                    href={selected?.url?.api}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnLg} text-[12px]  bg-gray-900 text-gray-300 hover:scale-105 gap-2 hover:text-gray-300`}
                  >
                    Explore API
                  </a>
                )}
                {selected?.url?.github?.length > 1 && (
                  <a
                    href={selected?.url?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnLg} text-[12px]  bg-gray-900 text-gray-300 hover:scale-105 gap-2 hover:text-gray-300`}
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-3">
          <button onClick={() => getPrev()} className="flex items-center gap-2">
            <span className="text-[14px] font-bold">Previous</span>
            <img src={prev} alt="" className="w-[35px] h-[35px]" />
          </button>
          <span className="text-[14px]">
            {current + 1}/ {projects?.length}
          </span>
          <button onClick={() => getNext()} className="flex items-center gap-2">
            <img src={next} alt="" className="w-[35px] h-[35px]" />
            <span className="text-[14px] font-bold">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
