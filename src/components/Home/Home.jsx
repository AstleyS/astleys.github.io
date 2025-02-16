import React from 'react';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <img className="me-img" src="public/vite.svg" alt="Me, Myself and I" />
        <div className="presentation">
          <h1 className="intro">
            Hello World!<br />
            I am Astley.<br />
            I <span className="typing"></span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
