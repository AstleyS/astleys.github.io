import projectGif from '../assets/project_gif.gif';
import projectImg from '../assets/upcoming_project.png';


const projects = [
  {
    id: 1,
    title: 'Flask Todo List',
    technologies: ['Python', 'Flask'],
    image: projectImg,
    gif: projectGif,
    website: null,
    github: 'https://github.com/AstleyS/web-flask-todolist',
    description: 'A lightweight Todo List application built with Flask and SQLAlchemy, allowing users to add, update, and delete tasks. It supports database configuration via environment variables and defaults to SQLite for local development.',
    available: true
  },
  {
    id: 2,
    title: 'Vanilla JS Portfolio Website',
    technologies: ['vanilla JS'],
    image: projectImg,
    gif: projectGif,
    website: '#',
    github: 'https://github.com/AstleyS/astleys.github.io',
    description: 'This is Astley\'s personal web portfolio, designed and developed using only HTML, CSS, and JavaScript to showcase projects, skills, and achievements.',
    available: true
},
  {
    id: 3,
    title: 'React Portfolio Website',
    technologies: ['react'],
    image: projectImg,
    gif: projectGif,
    website: '#',
    github: 'https://github.com/AstleyS/astleys.github.io-react',
    description: 'Astley\'s personal portfolio website, redesigned using React.js for improved modularity, performance, and user experience.',
    available: true
  },
  {
    id: 4,
    title: 'Pathfinder Algorithm Visualizer',
    technologies: ['react'],
    image: projectImg,
    gif: projectGif,
    website: 'https://astleys.github.io/web-pathfinder-visualizer',
    github: 'https://github.com/AstleyS/web-pathfinder-visualizer',
    description: 'A React-based visualization tool that demonstrates pathfinding algorithms like A* and Dijkstra, helping users understand how different algorithms navigate through a grid.',
    available: false
  },
  {
    id: 5,
    title: 'Violin Posture Correction',
    technologies: ['Python', 'AI/ML'],
    image: projectImg,
    gif: projectGif,
    website: '#',
    github: 'https://github.com/AstleyS',
    description: 'A Python and AI/ML-based project that detects and analyses the posture of violin and viola players, providing feedback and corrections to improve technique and ergonomics.',
    available: false
  },
  {
    id: 6,
    title: 'Angular Todo List Application',
    technologies: ['angular'],
    image: projectImg,
    gif: projectGif,
    website: '#',
    github: 'https://github.com/AstleyS/ai-violin-posure-tutor',
    description: 'A simple and interactive Todo List application developed with Angular, allowing users to efficiently create, update, and delete tasks while maintaining a structured UI.',
    available: false
  },
  {
    id: 7,
    title: 'Inventory Management System',
    technologies: ['spring boot', 'angular'],
    image: projectImg,
    gif: projectGif,
    website: '#',
    github: 'https://github.com/AstleyS/inventory-management',
    description: 'A robust inventory management system built using Spring Boot (backend) and Angular (frontend), providing features for tracking products, managing stock levels, and generating reports.',
    available: false
  },
];

export default projects;