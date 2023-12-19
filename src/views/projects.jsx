import React, { useState } from 'react';
import { PORTFOLIO } from '../core/consts/portfolio';
import { btnLg } from '../core/consts/styling';
import next from '../assets/icon/next.png';
import prev from '../assets/icon/prev.png';
import repo from '../assets/icon/repo.svg';
import api from '../assets/icon/api.svg';
import web from '../assets/icon/web.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  // TODO: Include images frome each project
  // TODO: Make showcase a slideshow
  const projects = PORTFOLIO.projects;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <img src={next} alt="Next" />,
    prevArrow: <img src={prev} alt="Previous" />,
  };

  return (
    <div className="mt-[100px]">
      <Slider
        {...settings}
        className="z-[500] w-10/12 h-auto md:h-[70vh] mx-auto mb-[40px]"
      >
        {projects?.map((project, index) => (
          <div>
            <p className="w-full mb-[16px] text-center font-feijoa-display text-[24px] font-black text-black">
              {project?.name}
            </p>
            <div
              key={index}
              className={`w-full flex flex-row items-center justify-center`}
            >
              <div className="font-sohne w-full md:3/4 lg:w-2/4 px-[25px] py-[25px] rounded-[5px] bg-black bg-opacity-10 border-[3px] border-muted-color border-backdrop-blur-sm backdrop-filter">
                <div>
                  {project?.about?.map((work) => (
                    <p className="w-full mb-[16px] text-normal text-black/90">
                      {work}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="uppercase font-[500] text-[14px] mb-2">
                    Technologies & Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project?.tech?.map((tec) => (
                      <div className="mx-2">{tec}</div>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 mt-[40px]">
                    {project?.url?.web?.length > 1 && (
                      <a
                        href={project?.url?.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnLg} text-[12px] bg-gray-900 text-gray-300 hover:scale-105 gap-2 hover:text-gray-300`}
                      >
                        <div className="flex items-center gap-2">
                          <img className="w-[25px] h-[25px]" src={web} alt="" />
                          Visit Website
                        </div>
                      </a>
                    )}
                    {project?.url?.api?.length > 1 && (
                      <a
                        href={project?.url?.api}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnLg} text-[12px]  bg-gray-900 text-gray-300 hover:scale-105 gap-2 hover:text-gray-300`}
                      >
                        <div className="flex items-center gap-2">
                          <img className="w-[25px] h-[25px]" src={api} alt="" />
                          Explore API
                        </div>
                      </a>
                    )}
                    {project?.url?.github?.length > 1 && (
                      <a
                        href={project?.url?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnLg} text-[12px]  bg-gray-900 text-gray-300 hover:scale-105 gap-2 hover:text-gray-300`}
                      >
                        <div className="flex items-center gap-2">
                          <img
                            className="w-[25px] h-[25px]"
                            src={repo}
                            alt=""
                          />
                          View Code
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
