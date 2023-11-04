import React from 'react';
import { PORTFOLIO } from '../core/consts/portfolio';
import { btnLg } from '../core/consts/styling';
import Container from '../core/components/container';

const Projects = () => {
  return (
    <div className="mt-[80px]">
      {PORTFOLIO?.projects?.map((proj) => (
        <div
          className={`overflow-hidden h-screen mx-auto relative flex flex-col items-center justify-center ${proj?.color}`}
        >
          <Container>
            <p class="w-full mb-[40px] text-center font-feijoa-display text-[32px] font-black text-black">
              {proj?.name}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 font-sohne">
              <div className="w-full md:w-2/4 lg:w-1/4">
                {proj?.about?.map((work) => (
                  <p className="w-full my-[16px] text-lg text-black/90">
                    {work}
                  </p>
                ))}
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4">
                <div className="mb-5">
                  <div className="mb-5">
                    <p className="uppercase font-bold">Technologies</p>
                    <div className="flex gap-2">
                      {proj?.tech?.map((tec) => (
                        <span className="squircle bg-gray-900 text-gray-400 px-2 py-1">
                          {tec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="uppercase font-bold mb-[2px]">License</p>
                    <div>
                      <span className="squircle bg-pink-800 text-gray-200 px-2 py-1">
                        {proj?.license}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5 my-5">
                  {proj?.url?.web?.length > 1 && (
                    <a
                      href={proj?.url?.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${btnLg} bg-white text-black hover:scale-105 gap-2`}
                    >
                      Visit Website
                    </a>
                  )}
                  {proj?.url?.api?.length > 1 && (
                    <a
                      href={proj?.url?.api}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${btnLg} bg-white text-black hover:scale-105 gap-2`}
                    >
                      Explore API
                    </a>
                  )}
                  {proj?.url?.github?.length > 1 && (
                    <a
                      href={proj?.url?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${btnLg} bg-white text-black hover:scale-105 gap-2`}
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default Projects;
