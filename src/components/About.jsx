import React from 'react';
import { useViewAnimate } from '../hooks/useViewAnimate';

export function About() {
  const infoRef = useViewAnimate();
  const expertiseRef = useViewAnimate();
  const timelinesRef = useViewAnimate();

  return (
    <section id="about" className="s-about target-section">
      {/* About Info */}
      <div className="row about-info wide" data-animate-block ref={infoRef}>
        <div className="column lg-6 md-12 about-info__pic-block">
          <img
            src="/images/Riho_Official.png"
            srcSet="/images/Riho_Official.png 1x, /images/Riho_Official.png 2x"
            alt="Timothy Abejoye"
            className="about-info__pic"
            data-animate-el
          />
        </div>

        <div className="column lg-6 md-12">
          <div className="about-info__text">
            <h2 className="text-pretitle with-line" data-animate-el>
              About
            </h2>
            <p className="attention-getter" data-animate-el>
              I’m Abejoye Timothy, a Full-Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). With one year of experience, I build scalable and efficient web applications, from dynamic front-end interfaces to secure backends. I’m passionate about creating innovative solutions, staying updated with tech trends, and collaborating with clients to bring their ideas to life.
            </p>
            <a
              href="https://drive.google.com/file/d/1QcDt__TzUEk7Y6IgQ8GupH8oiZ5lJ_B4/view?usp=drive_link"
              className="btn btn--medium u-fullwidth"
              data-animate-el
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="row about-expertise" data-animate-block ref={expertiseRef}>
        <div className="column lg-12">
          <h2 className="text-pretitle" data-animate-el>
            Expertise
          </h2>

          <ul className="skills-list" data-animate-el>
            <li>Creating dynamic, responsive user interfaces with React and Redux</li>
            <li>Developing RESTful APIs using Express.js and Node.js</li>
            <li>Designing scalable databases with MongoDB and Mongoose</li>
            <li>Implementing authentication, authorization, and real-time features</li>
            <li>Managing version control and collaboration with Git</li>
            <li>Containerizing applications for consistency and scalability with Docker</li>
          </ul>
        </div>
      </div>

      {/* Timelines */}
      <div className="row about-timelines" data-animate-block ref={timelinesRef}>
        {/* Experience */}
        <div className="column lg-6 tab-12">
          <h2 className="text-pretitle" data-animate-el>
            Experience
          </h2>

          <div className="timeline" data-animate-el>
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">Learning Experience</h4>
              </div>
              <div className="timeline__desc">
                <p>
                  Dedicated to continuous learning and self-improvement, I’ve gained hands-on experience through personal projects, online courses, and real-world practice. I actively explore new technologies, refine my problem-solving skills, and apply what I learn to build efficient, user-centered web applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="column lg-6 tab-12">
          <h2 className="text-pretitle" data-animate-el>
            Education
          </h2>

          <div className="timeline" data-animate-el>
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">Neweds High School</h4>
                <h5 className="timeline__meta">Senior Secondary School</h5>
                <p className="timeline__timeframe">(2017–2020)</p>
              </div>
              <div className="timeline__desc"></div>
            </div>

            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">Codar Institute</h4>
                <h5 className="timeline__meta">Web Development Course</h5>
                <p className="timeline__timeframe">March-September 2024</p>
              </div>
              <div className="timeline__desc"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
