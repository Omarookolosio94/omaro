import dotnetmvc from '../../assets/icon/dotnetmvc.png';
import dotnet from '../../assets/icon/dotnetcore.png';
import dotnetcore from '../../assets/icon/dotnet.png';
import typescript from '../../assets/icon/typescript.png';
// import angular from '../../assets/icon/angular.png';
import csharp from '../../assets/icon/csharp.png';
import mssql from '../../assets/icon/mssql.png';
import reactlogo from '../../assets/icon/react.png';
import tailwindcss from '../../assets/icon/tailwind.png';
import bootstrap from '../../assets/icon/bootstrap.png';

const style = 'w-auto h-[40px]';

const mvc = <img alt="dotnetmvc" src={dotnetmvc} className={style} />;
const net = <img alt="dotnet" src={dotnet} className={style} />;
const netcore = <img alt="dotnetcore" src={dotnetcore} className={style} />;
const ts = <img alt="typescript" src={typescript} className={style} />;
// const ang = <img alt="angular" src={angular} className={style} />;
const reactjs = <img alt="react" src={reactlogo} className={style} />;
const cs = <img alt="csharp" src={csharp} className={style} />;
const sql = <img alt="mssql" src={mssql} className={style} />;
const tailcss = <img alt="tailwindcss" src={tailwindcss} className={style} />;
const botcss = <img alt="bootstrap" src={bootstrap} className={style} />;

export const PORTFOLIO = {
  bio: {
    fullname: 'Oghenemaro Prosper Okolosio',
    firstname: 'Oghenemaro',
    surname: 'Okolosio',
    middlename: 'Prosper',
    role: 'Software Engineer',
    location: 'Lagos, Nigeria',
  },
  skills: ['C#', 'Javascript', 'Git/Github', 'MSSQL', 'Typescript'],
  socials: {
    linkedin: 'https://www.linkedin.com/in/oghenemaro-okolosio/',
    github: 'https://github.com/omarookolosio94',
    twitter: 'https://www.twitter.com/maro_okolosio/',
    instagram: 'https://www.instagram.com/maro_okolosio/',
    email: 'omarookolosio94@gmail.com',
    cv: 'https://docs.google.com/document/d/1Ym8Yju7XsK1uO9oL3P6YlO0rQCv3v0Ua27kDCi7PKpQ/edit?usp=sharing',
  },
  projects: [
    {
      name: 'Stanbic IBTC EZ Cash',
      color: 'bg-blue-gradient',
      url: {
        web: 'https://ezcash.stanbicibtc.com/ezcash',
        api: '',
        github: '',
      },
      about: [
        'EZ Cash offers eligible active account holders, instant access to funds ranging from N20,000 up to N4,000,000 for a period of 24month, anytime, anywhere with no documentation required.',
        'I supported this system for a period of 2 years during which a noteworthy 24% increase in the overall system uptime percentage',
        'I also optimized the administrative platform of the system to efficiently process bulk record uploads (> 100,000). This reduced upload time from over 25 minutes to under 6 minutes',
      ],
      roles: 'Fullstack developer',
      tech: [cs, mvc, netcore, botcss],
      license: 'Commercial',
    },
    {
      name: 'Inventory Hub',
      color: 'bg-green-gradient',
      url: {
        web: 'https://myinventoryhub.netlify.app',
        api: 'https://usewebeffect-001-site1.itempurl.com/swagger/index.html',
        github: 'https://github.com/Omarookolosio94/InventoryHub',
      },
      about: [
        'Inventory Hub is a cloud-based inventory and sales management solution that helps businesses manage multiple shop locations from a single platform. Inventory Hub helps businesses to save time and money, improve efficiency and accuracy, and get real-time insights into their inventory and sales data ',
        'I designed and built this solution from scratch. The backend runs on a .NET core API, while the frontend website was developed using React',
      ],
      roles: 'Fullstack developer',
      tech: [cs, netcore, reactjs, ts, sql, tailcss],
      license: 'Open Source',
    },

    {
      name: 'Stanbic IBTC Online Account Onboarding',
      color: 'bg-yellow-gradient',
      url: {
        web: 'https://ienroll.stanbicibtc.com:8444/OnlineAccountOnboarding',
        api: '',
        github: '',
      },
      about: [
        'Online Account onboarding enables customers open a full functional bank account digitally',
        'On this product, I implemented a feedback mechanisms. This was employed by the administrators of the system to effectively capture more precise errors and deliver valuable, actionable guidance to customers',
      ],
      tech: [cs, mvc, net, botcss],
      roles: 'Fullstack developer',
      license: 'Commercial',
    },
  ],
};
