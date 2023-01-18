import React from 'react';
import linkedin from '../../static/icon/linkedin.svg';
import github from '../../static/icon/github.svg';
import mail from '../../static/icon/mail.svg';
import Container from './Container';
import { PERSONAL_DATA as data } from '../../utils/personalData';

function Footer() {
  return (
    <div className="bg-black-color text-white">
      <Container>
        <div className="py-16 text-center">
          <a
            href={data.socials.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block items-center rounded px-8 py-4 w-auto border border-white hover:border-opacity-70 hover:bg-dark-green-color"
          >
            My Résumé
          </a>
          {/* 
          <p className="text-xl font-light mb-6">Oghenemaro Prosper Okolosio</p>
          */}
          <p className="font-light mt-10">
            &copy; {new Date().getFullYear()} omaro | All Rights Reserved
          </p>

          <div className="flex justify-center mt-5 gap-4">
            <a
              href={data.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center rounded-full w-10 h-10 border border-white hover:border-opacity-70 hover:bg-dark-green-color"
            >
              <img src={linkedin} alt={data?.socials.linkedin} />
            </a>
            <a
              href={data?.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center rounded-full w-10 h-10 border border-white hover:border-opacity-70 hover:bg-dark-green-color"
            >
              <img src={github} alt={data.socials.github} />
            </a>
            <a
              href={`mailto:${data.socials.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center rounded-full w-10 h-10 border border-white hover:border-opacity-70 hover:bg-dark-green-color"
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
