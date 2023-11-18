import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  vuejs,
  plick,
  valtec,
  feedingminds,
  propertysearch,
  feedingmindslogo,
  valteclogo,
  plicklogo,
  trem,
} from '../assets';

export const navLinks = [
  {
    id: '#about',
    title: 'About',
  },
  {
    id: '#projects',
    title: 'Projects',
  },
  {
    id: '#contact',
    title: 'Contact',
  },
  {
    id: 'https://www.linkedin.com/in/valerianomacuri/',
    title: 'Resume',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Vue JS',
    icon: vuejs,
  },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  {
    name: 'graphql',
    icon: graphql,
  },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Plick México',
    icon: plicklogo,
    iconBg: '#333333',
    date: 'Oct 2021 - Nov 2021',
  },
  {
    title: 'Front-End Developer',
    company_name: 'Valtec Consultores',
    icon: valteclogo,
    iconBg: '#333333',
    date: 'Nov 2021 - Abr 2022',
  },
  {
    title: 'CTO',
    company_name: 'Feeding Minds',
    icon: feedingmindslogo,
    iconBg: '#333333',
    date: 'May 2022 - Present',
  },
  {
    title: 'Front-End Developer',
    company_name: 'TREM Group',
    icon: trem,
    iconBg: '#333333',
    date: 'Jul 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Plick',
    description: 'It is a web system that allows you to place your order quickly, easily and simply, without having to download any App.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    image: plick,
    demo: 'https://www.plick.com.mx/',
  },
  {
    id: 'project-2',
    name: 'Valtec',
    description: 'Valtec Consultores official website.',
    tags: [
      {
        name: 'html',
        color: 'red-text-gradient',
      },
      {
        name: 'css',
        color: 'skyblue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: valtec,
    demo: 'https://www.valtecconsultores.com.pe/',
  },
  {
    id: 'project-3',
    name: 'Feeding Minds',
    description: 'Psychological help service that you can access at any time through a video call, which provides support so that young people can positively face their path to university.',
    tags: [
      {
        name: 'html',
        color: 'red-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    image: feedingminds,
    demo: 'https://feedingmindsperu.com/',
  },
  {
    id: 'project-4',
    name: 'Property Search',
    description: 'Web app developed for TREM Group, exclusive digital marketing agency for the real estate sector.',
    tags: [
      {
        name: 'html',
        color: 'red-text-gradient',
      },
      {
        name: 'css',
        color: 'skyblue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    image: propertysearch,
    demo: 'https://tremgroup.com/',
  },
  // {
  //   id: 'project-1',
  //   name: 'KomiKult',
  //   description: 'A comic characters list app that displays Marvel characters.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'mongodb',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: komikult,
  //   repo: 'https://github.com/shaqdeff/KomiKult',
  //   demo: 'https://shaqdeff.github.io/KomiKult/',
  // },
  // {
  //   id: 'project-2',
  //   name: 'Leaderboard',
  //   description:
  //     'A leaderboard list app that displays scores submitted by different players.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: leaderboard,
  //   repo: 'https://github.com/shaqdeff/Leaderboard',
  //   demo: 'https://shaqdeff.github.io/Leaderboard/',
  // },
  // {
  //   id: 'project-3',
  //   name: 'Math Magicians',
  //   description: 'This is a single-page calculator app built with React',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/shaqdeff/Math-Magicians',
  //   demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  // },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
