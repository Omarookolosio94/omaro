import React from 'react';
import twitter from '../../static/icon/twitter.svg';
import linkedin from '../../static/icon/linkedin.svg';
import github from '../../static/icon/github.svg';
import cv from '../../static/icon/cv.svg';
import mail from '../../static/icon/mail.svg';
import Container from './Container';
import { PERSONAL_DATA as data } from '../../utils/personalData';

function Footer() {
  return (
    <div className="bg-black-color text-white">
      <Container>
        <div className="py-16 text-center">
          <p className="text-xl font-light mb-6">Oghenemaro Prosper Okolosio</p>
          <p className="font-light">
            &copy; {new Date().getFullYear()} omaro | All Rights Reserved
          </p>

          <div className="flex justify-center mt-4 gap-4">
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
              href={data.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center rounded-full w-10 h-10 border border-white hover:border-opacity-70 hover:bg-dark-green-color"
            >
              <img src={twitter} alt={data.socials.twitter} />
            </a>
            <a
              href={data.socials.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center rounded-full w-10 h-10 border border-white hover:border-opacity-70 hover:bg-dark-green-color"
            >
              <img src={cv} alt={data.socials.cv} />
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
