import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';
export const greetings: GreetingsType = {
  name: 'Muhammad Junaid Khan',
  title: "Hi all, I'm Junaid" ,
  description:
    "I'm Results-driven Full Stack web developer having more than 10 years experience in the software industry, working on platforms such as Javascript, C#, NodeJS, SQL/NoSQL, React JS, Asp net,Micro-Services and cloud computing (AWS, GCP).",
  resumeLink:
    'https://drive.google.com/file/d/15DFG43e-Awm1r5yKhAYKqXvBUhiJ-JJa/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'mjunaid86',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://mjunaid86.github.io/myportfolio/',
  linkedin: 'https://www.linkedin.com/in/muhammadjkhan/',
  github: 'https://github.com/mjunaid86',
  //instagram: 'https://www.instagram.com/__hanzla100',
  //facebook: 'https://www.facebook.com/1hanzla100',
  twitter: 'https://twitter.com/mjunaid86',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building RESTful APIs Microservices in NodeJS & Express REST Framework'),

        emoji(
          '⚡ Building responsive  MRO Aap & PWA in React.js'
        ),
        emoji('⚡ Design and Implement Database using SQL, NoSQL, Postgres, SQL Server and MongoDb'),
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'C-sharp',
          iconifyTag: 'vscode-icons:file-type-csharp2',
        },


        {
          skillName: 'Typescript',
          iconifyTag: 'logos:typescript',
        },
        {
          skillName: 'SQL',
          iconifyTag: 'vscode-icons:file-type-sql',
        },
        {
          skillName: 'NodeJs',
          iconifyTag: 'logos:nodejs',
        },

        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        ,
        {
          skillName: 'Postgres',
          iconifyTag: 'vscode-icons:file-type-pgsql',
        },

        {
          skillName: 'Mongo',
          iconifyTag: 'vscode-icons:file-type-mongo',
        },
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms like GCP and AWS'),
        emoji(
          '⚡ Managing web APP hosting, deployment, and maintenance on Cloud Run and Cloud Function, while integrating databases using Atlas Mongo and Postgres'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Gitlab and Team city '
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Google Cloud Platform',
          iconifyTag: 'logos:google-cloud',
        },
        // {
        //   skillName: 'Heroku',
        //   iconifyTag: 'logos:heroku-icon',
        // },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Team City',
          iconifyTag: 'logos:teamcity',
        },


      ],
    },
   
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Architecture Design', //Insert stack or technology you have experience in
    progressPercentage: '60', //Insert relative proficiency in percentage
  },

  {
    Stack: 'Programming',
    progressPercentage: '60',
  },

  {
    Stack: 'Frontend',
    progressPercentage: '30',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'UNIVERSITY OF MANCHESTER, MANCHESTER UK',
    subHeader: 'Master of Science in Computer Science',
    duration: 'September 2010 - February 2012',

  },
  {
    schoolName: 'SIR SYED UNIVERSITY OF ENGINEERING AND TECHNOLGY',
    subHeader: 'Bachelor of Science in Computer Science',
    duration: 'January 2004 - Dec 2007',

  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Sr. Software Engineer',
    company: 'Airasia (Malaysia)',
    companyLogo: '/portfolioblue/img/icons/common/airasia_logo_PNG1.png',
    date: 'Jan 2022 – Present',
    desc: 'Led and managed the ongoing MRO project "Elevade Document" which focused on managing aviation and aircraft records.',

    descBullets: [
      " Designed and implemented the application architecture and microservices using NodeJS Express",
      "Implemented interactive UI components using ReactJS, and JavaScript delivering a responsive",
      "Implemented PostgreSQL database for efficient storage.",
      "Leveraged GraphQL to optimize data fetching and manipulation",
      "Configured Google Cloud Platform (GCP) to establish CICD",
      "Utilized TypeScript and Vite to enhance code maintainability",
      "Actively participated in code reviews,team meetings, stand-ups,  identifying areas for improvement and brainstorming sessions.",
      "Worked on the development of another project called `AEROTRADE` an MRO application which facilitated seamless browsing, purchasing, and selling of aircraft parts."
    ]
  },
  {
    role: 'Senior Application Developer ',
    company: 'Maxis Broadband (Malaysia)',
    companyLogo: '/portfolioblue/img/icons/common/maxisbroad.png',
    date: 'Oct 2019 – Dec 2021',
    desc: 'Responsible for full application development life cycle management, including analysis, technical requirements gathering, design, coding, testing, and implementation within Malaysia telecommunications provider.',
    descBullets: [
      "Developed and managed back-end services using Nodejs-Express.",
      "Configured and managed TeamCity builds for DevOps.",
      "Successfully migrated a traditional monolithic application architecture to a microservices architecture.",
      "Managed a messaging queuing service using Kafka to handle 3 million+ transactions daily.",
      "Designed and managed databases for various services, leveraging SQL, PostgreSQL, DynamoDB, and MongoDB."
    ],
  },
  {
    role: 'Software Engineer',
    company: 'IRS Software Solutions (Malaysia)',
    companyLogo: '/portfolioblue/img/icons/common/new-irs-logo.png',
    date: 'Apr 2015 - Sept 2019',
    desc: 'Facilitate full application development of Accounting Product (Alaya) from scratch including Sales, Purchase, and Inventory module.',
    descBullets: [
      "Designed and Developed a Security Module using role-based access control (RBAC) approach, to allow access to users to an authorized Module using Asp.Net.",
      "Created and Manage a highly configurable Reporting module using the Fast Report tool. ",
      "Designed and Developed Advanced Search Control for All Modules using C# and Asp.Net.",
      "Integrate and implement the above application with the DevExpress tool using Asp.Net."
    ]

  },
  {
    role: 'Software Engineer',
    company: 'EA link System (Malaysia)',
    companyLogo: '/portfolioblue/img/icons/common/104_Ea_logo_logos-512.webp',
    date: 'Apr 2012 - Feb 2015',
    desc: '● Managed and enhanced the Tax application (Brasstax) to achieve scalability and performance using ASP.Net C#.',
    descBullets: [
      "Developed and oversaw the Efiling Module, automating the data transfer from Brasstax to the Government Tax system for seamless submission",
      "Implemented a highly configurable and customizable reporting functionality within the tax software",
      "Provided technical guidance and support to team members",

    ]
  },
];

export const projects: ProjectType[] = [
  
{
  name: 'Elevade Document',
  desc: 'Currently leading and managing the ongoing MRO project which focuses on the efficient management of aviation and aircraft records.',
  // github: 'https://github.com/1hanzla100/developer-portfolio',
  //link: 'https://ade.aero/aerotrade/marketplace',
},
  {
    name: 'Aerotrade',
    desc: 'Developed and launched an MRO (Maintenance, Repair, and Overhaul) application `Aerotrade` that revolutionized aviation operations for B2B companies. This application streamlined the browsing, purchasing, and selling of aircraft parts, resulting in improved efficiency and reduced downtime.',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://ade.aero/aerotrade/marketplace',
  },
  {
    name: 'Hotlink APP',
    desc: 'stablished and maintained a prepaid and internet service APP for a Telco company, providing customers with convenient options to check their balance, instantly top-up, and purchase mobile internet passes. Implemented a secure payment gateway that processed over 3 million transactions daily, enhancing the overall customer experience.',
    // github: 'https://github.com/1hanzla100/Django-React-Marketplace',
    link:'https://www.hotlink.com.my/en/home/'
  },
 
];

// export const feedbacks: FeedbackType[] = [
//   // {
//   //   name: 'John Smith',
//   //   feedback:
//   //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   // },
//   // {
//   //   name: 'John Smith',
//   //   feedback:
//   //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   // },
//  ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Muhammad Junaid Khan',
  description:
    'A passionate Full Stack Web Developer.',
  author: 'Muhammad Junaid Khan',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Junaid',
    'Muhammad Junaid Khan',
    '@m.junaid86',
    'junaid khan',
    'Portfolio',
    'Junaid Portfolio ',
    'Muhammad Junaid Khan Portfolio',
  ],
};
