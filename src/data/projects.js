import projectGif from '../assets/project_gif.gif';
import projectImg from '../assets/project_img.png';

import upcomingImg from '../assets/upcoming_project.png';
import flaskTodoList from '../assets/flask_todolist.png';
//import vanillaJsPortfolio from '../assets/vanilla_js_portfolio.png';
import reactPortfolio from '../assets/react_portfolio.png';
import pathfinderVisualizer from '../assets/pathfinder_visualizer.png';
import mnistSketchRecognition from '../assets/mnist_sketch_recognition.png';
// import violinPosture from '../assets/violin_posture.png';
// import angularTodoList from '../assets/angular_todolist.png';
// import inventoryManagement from '../assets/inventory_management.png';

const projects = [
  {
    title: 'Flask Todo List',
    technologies: ['Python', 'Flask'],
    image: flaskTodoList,
    gif: projectGif,
    website: null,
    github: 'https://github.com/AstleyS/web-flask-todolist',
    description: 'A lightweight Todo List application built with Flask and SQLAlchemy, allowing users to add, update, and delete tasks. It supports database configuration via environment variables and defaults to SQLite for local development.',
    available: true
  },
  {
    title: 'Vanilla JS Portfolio Website',
    technologies: ['vanilla JS'],
    image: projectImg,
    gif: projectGif,
    website: '',
    github: 'https://github.com/AstleyS/astleys.github.io/tree/vanillaJS',
    description: 'This is Astley\'s personal web portfolio, designed and developed using only HTML, CSS, and JavaScript to showcase projects, skills, and achievements.',
    available: true
},
  {
    title: 'React Portfolio Website',
    technologies: ['react'],
    image: reactPortfolio,
    gif: projectGif,
    website: '',
    github: 'https://github.com/AstleyS/astleys.github.io',
    description: 'Astley\'s personal portfolio website, redesigned using React.js for improved modularity, performance, and user experience.',
    available: true
  },
  {
    title: 'Pathfinder Algorithm Visualizer',
    technologies: ['react'],
    image: pathfinderVisualizer,
    gif: projectGif,
    website: 'https://astleys.github.io/web-pathfinder-visualizer',
    github: 'https://github.com/AstleyS/web-pathfinder-visualizer',
    description: 'A React-based visualization tool that demonstrates pathfinding algorithms like A* and Dijkstra, helping users understand how different algorithms navigate through a grid.',
    available: true
  },
  /*
  {
    title: 'Violin Posture Correction',
    technologies: ['Python', 'AI/ML'],
    image: upcomingImg,
    gif: projectGif,
    website: '#',
    github: 'https://github.com/AstleyS/ai-violin-posure-tutor',
    description: 'A Python and AI/ML-based project that detects and analyses the posture of violin and viola players, providing feedback and corrections to improve technique and ergonomics.',
    available: false
  },
  {
    title: 'Angular Todo List Application',
    technologies: ['angular'],
    image: upcomingImg,
    gif: projectGif,
    website: '#',
    github: 'https://github.com/AstleyS/web-angular-todolist',
    description: 'A simple and interactive Todo List application developed with Angular, allowing users to efficiently create, update, and delete tasks while maintaining a structured UI.',
    available: false
  },
  */
  {
    title: 'MNIST Sketch Recognition',
    technologies: ['AI/ML', 'python'],
    image: mnistSketchRecognition,
    gif: projectGif,
    website: 'https://astleys.github.io/mnist-sketch-digit-recognition/',
    github: 'https://github.com/AstleyS/mnist-sketch-digit-recognition',
    description: 'An interactive web app that lets users draw digits and instantly visualizes the live probabilities of what digit the model predicts, showing confidence levels for each digit from 0–9.',
    available: true
  },

  {
    title: 'University Management System',
    technologies: ['spring boot', 'angular'],
    image: upcomingImg,
    gif: projectGif,
    website: '',
    github: 'https://github.com/AstleyS/school-system-frontend',
    description: 'The University Management System is a full-stack web application designed to streamline and digitize the academic workflows of an educational institution.',
    available: false
  },
  {
    title: 'Gym Workout Classification',
    technologies: ['AI/ML', 'python'],
    image: upcomingImg,
    gif: projectGif,
    website: '#',
    github: 'https://github.com/AstleyS/gym-workout-classification',
    description: 'An AI/ML project to classify different gym workouts.',
    available: false
  },

  /*
  {
    title: 'Trends Sentiment Analysis',
    technologies: ['AI/ML', 'python'],
    image: upcomingImg,
    gif: projectGif,
    website: '#',
    github: 'https://github.com/AstleyS/trend-sentiment-analysis',
    description: ' ',
    available: false
  },
  */
];

const indexedProjects = projects.map((project, index) => ({
  id: index + 1,
  ...project
}));

export default indexedProjects;