import React from 'react';
import { PORTFOLIO } from '../core/consts/portfolio';
import { btnLg } from '../core/consts/styling';

const Projects = () => {
  return (
    <div className="mt-[80px]">
      {PORTFOLIO?.projects?.map((proj) => (
        <div
          className={`overflow-hidden h-screen mx-auto relative flex flex-col items-center justify-center`}
        >
          <div className="w-11/12 mx-auto md:container md:mx-auto mt-[-40px]">
            <p class="w-full mb-[20px] text-center font-feijoa-display text-[24px] font-black text-black">
              {proj?.name}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 font-sohne">
              <div className="w-full md:w-2/4 lg:w-1/4">
                {proj?.about?.map((work) => (
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
                      {proj?.tech?.map((tec) => (
                        <span className="squircle bg-gray-500 text-gray-100 px-2 py-[1px]">
                          {tec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="uppercase font-bold mb-2">License</p>
                    <div>
                      <span className="squircle bg-gray-500 text-gray-100 px-2 py-[1px]">
                        {proj?.license}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5 mt-[40px]">
                  {proj?.url?.web?.length > 1 && (
                    <a
                      href={proj?.url?.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${btnLg} bg-gray-900 text-gray-300 hover:scale-105 gap-2 hover:text-gray-300`}
                    >
                      Visit Website
                    </a>
                  )}
                  {proj?.url?.api?.length > 1 && (
                    <a
                      href={proj?.url?.api}
                      target="_blank"
                      rel="noopener noreferrer"
                       className={`${btnLg} bg-gray-900 text-gray-300 hover:scale-105 gap-2 hover:text-gray-300`}
                    >
                      Explore API
                    </a>
                  )}
                  {proj?.url?.github?.length > 1 && (
                    <a
                      href={proj?.url?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                       className={`${btnLg} bg-gray-900 text-gray-300 hover:scale-105 gap-2 hover:text-gray-300`}
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
