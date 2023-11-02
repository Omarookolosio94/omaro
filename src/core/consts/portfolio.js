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
      name: 'Inventory Hub',
      color: 'bg-blue-600',
      url: {
        web: 'https://heroic-banoffee-58162f.netlify.app/',
        api: 'https://usewebeffect-001-site1.itempurl.com/swagger/index.html',
      },
      github: 'https://github.com/Omarookolosio94/InventoryHub',
      about:
        'Inventory Hub helps businesses manage inventory, sales and employees. With this service users can manage multiple shop locations and track sales records across all the different shop locations',
      workdone: [
        'Designed and built system from scratch to full functionality',
      ],
      roles: 'Fullstack developer',
    },
    {
      name: 'Stanbic IBTC EZ Cash',
      color: 'bg-pink-600',
      url: { web: 'https://ezcash.stanbicibtc.com/ezcash' },
      github: '',
      about:
        'EZ Cash offers eligible active account holders, instant access to funds ranging from N20,000 up to N4,000,000 for a period of 24month, anytime, anywhere with no documentation required.',
      workdone: [
        'Optimised the administrative platform of EZ Cash to efficiently process bulk record uploads (> 100,000) within a reduced timeframe, slashing processing time from over 25 minutes to under 6 minutes',
        'Continuously upheld and executed enhancements on the EZ Cash retail suites, an instant loan application, resulting in a noteworthy 24% surge in the overall uptime percentage',
      ],
      roles: 'Fullstack developer',
    },
    {
      name: 'Stanbic IBTC Online Account Onboarding',
      color: 'bg-green-600',
      url: {
        web: 'https://ienroll.stanbicibtc.com:8444/OnlineAccountOnboarding',
      },
      github: '',
      about:
        'Online Account onboarding enables customers open a full functional bank account digitally',
      workdone: [
        'Enhance the feedback mechanisms employed by Online Account Onboarding administrators to effectively capture more precise errors and deliver valuable, actionable guidance to customers',
      ],
      roles: 'Fullstack developer',
    },
  ],
};
