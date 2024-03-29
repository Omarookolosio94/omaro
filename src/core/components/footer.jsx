import React from 'react';
import linkedin from '../../assets/icon/linkedin.svg';
import github from '../../assets/icon/github.svg';
import mail from '../../assets/icon/mail.svg';
import resume from '../../assets/icon/resume.svg';
import Container from './container';
import { PORTFOLIO as data } from '../consts/portfolio';

function Footer() {
  return (
    <div className="text-white bg-black bg-opacity-10 backdrop-blur-sm backdrop-filter">
      <Container>
        <div className="py-16 text-center">
          <a
            href={data.socials.cv}
            target="_blank"
            rel="noopener noreferrer"
            className={`squircle inline-block font-sohne text-9pt font-semibold transition duration-300 ease-in-out  bg-gray-900 text-gray-400 px-8 py-4 hover:bg-[#338a07] hover:text-darkwhite`}
          >
            <div className="flex items-center gap-2">
              <img src={resume} className="w-[25px] h-[25px]" alt="" />
              My Résumé
            </div>
          </a>
          {/* 
          <p className="text-xl font-light mb-6">Oghenemaro Prosper Okolosio</p>
          */}
          <p className="font-light mt-10 uppercase">
            &copy; {new Date().getFullYear()} omaro | All Rights Reserved
          </p>

          <div className="flex justify-center mt-5 gap-4">
            <a
              href={data.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center rounded-full w-10 h-10 border border-white hover:border-blue-500 hover:bg-blue-500"
            >
              <img src={linkedin} alt={data?.socials.linkedin} />
            </a>
            <a
              href={data?.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center rounded-full w-10 h-10 border border-white hover:border-green-500 hover:bg-green-500"
            >
              <img src={github} alt={data.socials.github} />
            </a>
            <a
              href={`mailto:${data.socials.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center rounded-full w-10 h-10 border border-white hover:border-yellow-500 hover:bg-yellow-500"
            >
              <img src={mail} alt={data.socials.email} className="pt-0.5" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
