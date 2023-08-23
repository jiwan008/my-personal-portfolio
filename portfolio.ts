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
  name: 'Jeevan Kumar Sah',
  title: "Hi all, I'm Jeevan Kumar Sah",
  description:
    "I am a passionate MERN Stack developer currently pursuing my Master's in Computer Applications at NIT Jamshedpur. With a strong foundation in MERN (MongoDB, Express.js, React, Node.js) technology stack, I have successfully crafted numerous projects that demonstrate my expertise and commitment to delivering high-quality web applications.",
  resumeLink:
    'https://drive.google.com/file/d/1quS-MI44q7NR97Z4VGbv9z_ANI7ijUen/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'jiwan008',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
   url: 'https://leetcode.com/jeevan_rishu/',
  linkedin: 'https://www.linkedin.com/in/jeevan-kumar-sah-497a2614a/',
  github: 'https://github.com/jiwan008',
  instagram: 'https://www.instagram.com/jeevan_rishu/',
  facebook: 'https://www.facebook.com/profile.php?id=100076642455788',
  leetcode : 'https://leetcode.com/jeevan_rishu/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY MERN STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'MERN Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji(
          '⚡ Building fully responsive MERN Stack website'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in NodeJs & ExpressJs using MongoDB'),
      ],
      softwareSkills: [
         {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'Tailwind',
          iconifyTag: 'vscode-icons:file-type-tailwind',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'NodeJs',
          iconifyTag: 'logos:nodejs',
        },
        {
          skillName: 'ExpressJs',
          iconifyTag: 'logos:express',
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
          skillName: 'MongoDB',
          iconifyTag: 'logos:mongodb',
        },
        {
          skillName: 'MySQL',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'C',
          iconifyTag: 'vscode-icons:file-type-c',
        },
        {
          skillName: 'CPP',
          iconifyTag: 'vscode-icons:file-type-cpp',
        },
      ],
    },
   
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming and Problem Solving',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'National Institute Of Technology, Jamshedpur',
    subHeader: 'Master of Computer Application (MCA)',
    duration: 'October 2021 - May 2024',
    grade: '7.85',
  },
  {
    schoolName: 'Guru Gobind Singh Indraprastha University, New Delhi',
    subHeader: 'Bachelor of Computer Application (BCA)',
    duration: 'August 2018 - May 2021',
    grade: '9.39',
  },
  {
    schoolName: 'Jawahar Navodaya Vidyalaya, Banka, Bihar',
    subHeader: 'Intermediate (12th)',
    duration: 'April 2016 - May 2017',
    grade: '70.16 %',
  },
  {
    schoolName: 'Jawahar Navodaya Vidyalaya, Banka, Bihar',
    subHeader: 'Matriculation (10th)',
    duration: 'April 2014 - May 2015',
    grade: '9.6',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Teaching Assistant',
    company: 'Coding Ninjas',
    companyLogo: '/img/icons/common/codingNinjas.png',
    date: 'Sept 2022 – Jan 2023',
    desc: 'Mentoring 800+ students in Data Structures and Algorithms with C++, clarifying doubts, explaining problem-solving approaches, debugging code, and enhancing logic building skills'
  },
  {
    role: 'Web Developer',
    company: 'Akaaro Consulting and Training',
    companyLogo: '/img/icons/common/aakaro.jpg',
    date: 'Aug 2020 – Oct 2020',
    desc: 'Interned in frontend developer team, built a company website using HTML, CSS, JavaScript, ReactJS, and integrated APIs'
  },
];

export const projects: ProjectType[] = [
  {
    name: 'StudyNotion Ed-Teach Platform ',
    desc: ' A comprehensive ed-teach platform leveraging the MERN stack (MongoDB, Express.js, ReactJS, Node.js), facilitating content creation, consumption, and rating through CRUD operations. Highlights include OTP-based authentication, Course management, Payment Integration, Cloud-based media handling, and personalized Student/Teacher Dashboards.',
    github: 'https://github.com/jiwan008/studyNotion',
    link: 'https://study-notion-orcin.vercel.app/',
  },
  {
    name: 'Ecommerce Website',
    desc: 'A feature-rich MERN Stack ecommerce website that seamlessly connects buyers and sellers. Sellers can easily list products, while buyers can effortlessly make purchases. Enjoy secure user authentication, smooth payment integration, and distinct user experiences for buyers and sellers, all managed through intuitive and personalized dashboards',
    github: 'https://github.com/jiwan008/Ecommerce-MERN',
    link: 'https://study-notion-orcin.vercel.app/',
  },
  
  {
    name: 'Sorting Visualizer',
    desc: 'A React-based sorting visualizer showcasing algorithms like Bubble Sort, Insertion Sort, Quick Sort, and Merge Sort in action, enhancing understanding through dynamic animations.',
    github: 'https://github.com/jiwan008/Sorting-Visualizer-React',
    link: 'https://jiwan008.github.io/Sorting-Visualizer-React/',
  },
  {
    name: 'Personal Portfolio Website',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/jiwan008/my-personal-portfolio',
    link: 'https://jeevan-portfolio-omega.vercel.app/',
  },
  {
    name: 'Real Time Weather App',
    desc: 'A sleek and responsive weather website crafted using HTML, CSS, and JavaScript, powered by Tailwind CSS, providing real-time weather updates and forecasts with an intuitive user interface."',
    github: 'https://github.com/jiwan008/Weather-App-Project',
    link: 'https://jiwan008.github.io/Weather-App-Project/',
  },
  {
    name: 'Password Generator',
    desc: 'An innovative password generator project crafted with HTML, CSS, and Tailwind CSS for a modern UI, along with JavaScript to create robust and secure passwords, enhancing online security effortlessly."',
    github: 'https://github.com/jiwan008/Password-Generator',
    link: 'https://jiwan008.github.io/Password-Generator/',
  },
  {
    name: 'Netflix Clone',
    desc: ' An immersive Netflix clone UI meticulously crafted with React.js, replicating the captivating user experience of the original streaming platform, complete with dynamic content rendering and responsive design."',
    github: 'https://github.com/jiwan008/Netflix-Clone',
    link: 'https://jiwan008.github.io/Netflix-Clone/',
  },
  {
    name: 'Todo List',
    desc: 'A dynamic and user-friendly ToDo list application developed using HTML, CSS, and JavaScript, providing an intuitive interface for efficiently managing tasks, creating reminders, and enhancing productivity."',
    github: 'https://github.com/jiwan008/Todo-List',
    link: 'https://jiwan008.github.io/Todo-List/',
  },
  {
    name: 'Contact-Management-App',
    desc: "I've crafted a dynamic React and TypeScript-based contact management app that offers a trio of essential features: adding, editing, and deleting contacts. Users can seamlessly input, modify, and remove contact details, ensuring a comprehensive and efficient approach to maintaining their contact list.",
    github: 'https://github.com/jiwan008/Contact-Management-App',
    link: 'https://jiwan008.github.io/Contact-Management-App/',
  },

];


// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Jeevan's Portfolio",
  description:
    'A passionate MERN Stack Web Developer',
  author: 'Jeevan Kumar Sah',
  image: 'profile_pic',
  url: 'https://jeevan-portfolio-omega.vercel.app/',
  keywords: [
    'Jeevan portfolio',
    "jeevan's portfolio",
    "jeevan kumar sah portfolio",
    "rishu portfolio",
    'Jeevan Kumar Sah',
    'jiwan008',
    'jeevan_rishu',
    'Portfolio',
    'Jeevan Portfolio ',
    'Jeevan Kumar Sah Portfolio',
  ],
};
