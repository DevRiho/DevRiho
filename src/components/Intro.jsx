import React from 'react';

export function Intro() {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="s-intro target-section">
      <div className="row intro-content wide">
        <div className="column">
          <div className="text-pretitle with-line">Hi, I'm Timothy</div>
          <h1 className="text-huge-title">
            Full-Stack Web Developer, <br />
            Specializing in MERN Stack <br />
          </h1>
        </div>

        <ul className="intro-social">
          <li>
            <a
              href="https://x.com/dev_riho?s=21"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dev_riho?igsh=dGQ5YW1jaDI2Z3N1&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abejoye-timothy-36b6b9161/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>

      <a
        href="#about"
        className="intro-scrolldown smoothscroll"
        onClick={handleScrollToAbout}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
        </svg>
      </a>
    </section>
  );
}
