import React from 'react';

function Portfolio() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <h2 className="title portfolio-title">Portfolio</h2>
      <ul id="filters" className="filters">
        <li className="filter active-filter" data-filter="all">All</li>
        <li className="filter" data-filter="web">HTML/CSS/JS</li>
        <li className="filter" data-filter="angular">Angular</li>
        <li className="filter" data-filter="react">ReactJS</li>
      </ul>
      <div className="section-content portfolio">
        <div className="project web">
          <div className="front">
            <h3 className="project-name">Digital Portfolio</h3>
            <img className="project-img" src="img/screenshot_portfolio.png" alt="portfolio" />
          </div>
          <div className="back">
            <h3 className="project-name">Digital Portfolio</h3>
            <p className="project-description">In this project, I developed my Digital Portfolio (this one) using solely Html, Css and Javascript.</p>
            <div className="project-links">
              <a href="https://github.com/AstleyS/astleys.github.io" target="_blank" rel="noopener noreferrer">
                <img src="img/github.svg" alt="my-github" />
              </a>
              <a href="https://astleys.github.io/" target="_blank" rel="noopener noreferrer">
                <span className="material-icons" style={{ fontSize: '35px' }}>language</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project web react">
          <div className="front">
            <h3 className="project-name">Path Finder</h3>
            <img className="project-img" src="img/screenshot_pathfinder.png" alt="pathfinder" />
          </div>
          <div className="back">
            <h3 className="project-name">Path Finder Visualizer</h3>
            <p className="project-description">
              In this project, I created a Path Finder Algorithm Visualizer using the React.js framework.
              You can visualize the process of certain algorithms for finding the shortest path between two nodes.
            </p>
            <div className="project-links">
              <a href="https://github.com/AstleyS/web-pathfinder-visualizer" target="_blank" rel="noopener noreferrer">
                <img src="img/github.svg" alt="my-github" />
              </a>
              <a href="https://astleys.github.io/web-pathfinder-visualizer" target="_blank" rel="noopener noreferrer">
                <span className="material-icons" style={{ fontSize: '35px' }}>language</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project web react">
          <div className="front">
            <h3 className="project-name">Sorting Algorithm Visualizer</h3>
          </div>
          <div className="back">
            <h3 className="project-name">Sorting Algorithm Visualizer</h3>
            <p className="project-description">
              In this project, I created a Sorting Algorithm Visualizer using the React.js framework.
              You can visualize the process of certain algorithms for sorting an array.
            </p>
            <div className="project-links">
              <a href="https://github.com/AstleyS/web-sorting-visualizer" target="_blank" rel="noopener noreferrer">
                <img src="img/github.svg" alt="my-github" />
              </a>
              {/* <a id="disabled_project" href="https://astleys.github.io/web-sorting-visualizer/" target="_blank">
                <span className="material-icons" style={{ fontSize: '35px' }}>language</span>
              </a> */}
            </div>
          </div>
        </div>
        {/* ANGULAR TODO LIST */}
        <div className="project web angular">
          <div className="front">
            <h3 className="project-name">Angular Todolist</h3>
          </div>
          <div className="back">
            <h3 className="project-name">Angular Todolist</h3>
            <p className="project-description">
              In this project, I created a simple todo-list using the Angular framework.
            </p>
            <div className="project-links">
              <a href="https://github.com/AstleyS/web-angular-todolist" target="_blank" rel="noopener noreferrer">
                <img src="img/github.svg" alt="my-github" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <span className="material-icons" style={{ fontSize: '35px' }}>language</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;