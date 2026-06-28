import React, { useState, useEffect } from 'react';

export function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-is-open');
    } else {
      document.body.classList.remove('menu-is-open');
    }
    return () => {
      document.body.classList.remove('menu-is-open');
    };
  }, [menuOpen]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="s-header">
      <div className="header-mobile">
        <span className="mobile-home-link">
          <a href="#" onClick={(e) => handleLinkClick(e, 'intro')}>
            Rihofficial.
          </a>
        </span>
        <a
          className={`mobile-menu-toggle ${menuOpen ? 'is-clicked' : ''}`}
          href="#0"
          onClick={toggleMenu}
        >
          <span>Menu</span>
        </a>
      </div>

      <div className="row wide main-nav-wrap">
        <nav className="column lg-12 main-nav">
          <ul>
            <li>
              <a
                href="#"
                className="home-link"
                onClick={(e) => handleLinkClick(e, 'intro')}
              >
                Timothy.
              </a>
            </li>
            <li className={activeSection === 'intro' ? 'current' : ''}>
              <a
                href="#intro"
                className="smoothscroll"
                onClick={(e) => handleLinkClick(e, 'intro')}
              >
                Intro
              </a>
            </li>
            <li className={activeSection === 'about' ? 'current' : ''}>
              <a
                href="#about"
                className="smoothscroll"
                onClick={(e) => handleLinkClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li className={activeSection === 'works' ? 'current' : ''}>
              <a
                href="#works"
                className="smoothscroll"
                onClick={(e) => handleLinkClick(e, 'works')}
              >
                Works
              </a>
            </li>
            <li className={activeSection === 'contact' ? 'current' : ''}>
              <a
                href="#contact"
                className="smoothscroll"
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
