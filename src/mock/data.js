import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'David Huang | Developer ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'David Huang',
  subtitle: "I'm the Experimenting Developer.",
  cta: 'Know More About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'dface.jpeg',
  paragraphOne: 'I am at Jersey City, New Jersey.',
  paragraphTwo:
    'I love coding. Software Engineering is a never-ending puzzle that I am passinately engaged in solving. I believe in the power of programming to transform and improve the lives of people around the world.',
  paragraphThree:
    "I love to explore. I believe there's certainly yet more to learn, yet more problems to solve, and yet more to build.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'worktual_reality.jpg',
    title: 'Worktual Reality',
    info: 'Worktual Reality is a virtual reality application that allows people with ASD to learn workplace norms, culture, boundaries and priorities.',
    info2:
      'Unreal Engine 4 for building the environment and interactions. Character Creator 3 to build human like characters with animations. Oculus Quest to run the application and test it.',
    url: 'https://youtu.be/DaoYVc5uyCE',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'data.jpg',
    title: 'NYC-air-quality-data-visualization',
    info: 'Dispalying NYC air quality in 2019. Showing how different factors might effect the air quality.',
    info2:
      'Dash library for building the data visualization. Using Flask as micro back-end for having the webpage temaplate and being deployed on Heroku. Using pandas to handle the data.',
    url: 'https://nyc-air-quality-data-visualiza.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Manila Board Game',
    info: 'Personal Project. Working on it.',
    info2:
      'Using React as front end. Using Firebase Bundle to handle the database, deploying and Auth.',
    url: 'https://manila-game.web.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to chat with me? Cool!',
  btn: 'Connect Me!',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/david-huang-1a7305aa/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jiahaodavid',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
