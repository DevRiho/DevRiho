import React, { useState, useEffect } from 'react';
import { useViewAnimate } from '../hooks/useViewAnimate';

const projects = [
  {
    id: 'modal-01',
    category: 'Website',
    title: 'Pneuma Global.',
    cardImage: '/images/pneuma_global.png',
    modalImage: '/images/pneuma_global.png',
    projectUrl: 'https://www.pneumaglobal.org/',
    description: 'A global brand website for Pneuma Global, built to present brand values, experience, and services with modern, responsive layout elements.',
    modalCategories: ['Website']
  },
  {
    id: 'modal-02',
    category: 'Website',
    title: 'Thrift Store',
    cardImage: '/images/Screenshot 2025-10-17 090049.png',
    modalImage: '/images/Thrift.png',
    projectUrl: 'https://thriftstor.netlify.netlify.app/#/', // Wait, in original HTML it is https://thriftstor.netlify.app/#/ but let's check
    // Ah, line 298 in original HTML: "https://thriftstor.netlify.app/#/"
    projectUrlRaw: 'https://thriftstor.netlify.app/#/',
    description: 'React.js web application designed for showcasing and managing thrift fashion collections, built with a clean user interface and responsive design principles.',
    modalCategories: ['E-commerce']
  },
  {
    id: 'modal-03',
    category: 'Website', // original was lowercase 'website', let's use capital 'Website' for consistency
    title: 'Green Haven',
    cardImage: '/images/Screenshot 2025-10-24 183036.png',
    modalImage: '/images/Screenshot 2025-10-24 183036.png',
    projectUrl: 'https://greenhavenco.netlify.app/',
    description: 'A responsive plant shop website created using HTML, CSS and JavaScript. The project demonstrates my skills in front-end development, focusing on clean layout design, responsive styling, and user interaction through JavaScript.',
    modalCategories: ['Landing page website']
  },
  {
    id: 'modal-04',
    category: 'Website',
    title: 'Lunéva.',
    cardImage: '/images/lun_va.png',
    modalImage: '/images/lun_va.png',
    projectUrl: 'https://lun-va.vercel.app/',
    description: 'An e-commerce platform showcasing luxury ladies\' bags, featuring collections of totes, crossbody bags, and clutches with an elegant design.',
    modalCategories: ['E-commerce']
  },
  {
    id: 'modal-05',
    category: 'Website',
    title: 'Meridian.',
    cardImage: '/images/Meridian.png',
    modalImage: '/images/Meridian.png',
    projectUrl: 'https://meridio.netlify.app/',
    description: 'Meridian is a modern, responsive real estate landing page template designed to showcase premium properties and provide an elegant user experience for property search and browsing.',
    modalCategories: ['Website']
  }
];

// Correct some URLs based on actual values
projects[1].projectUrl = 'https://thriftstor.netlify.app/#/';

export function Works() {
  const [activeModalId, setActiveModalId] = useState(null);
  const worksRef = useViewAnimate();

  const handleCardClick = (e, id) => {
    e.preventDefault();
    setActiveModalId(id);
  };

  const closeModal = () => {
    setActiveModalId(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (activeModalId) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalId]);

  const activeProject = projects.find(p => p.id === activeModalId);

  return (
    <section id="works" className="s-works target-section">
      <div className="row works-portfolio">
        <div className="column lg-12" data-animate-block ref={worksRef}>
          <h2 className="text-pretitle" data-animate-el>
            Recent Works
          </h2>
          <p className="h1" data-animate-el>
            Here are some of my favorite projects I have done lately. Feel free to check them out.
          </p>

          <ul className="folio-list row block-lg-one-half block-stack-on-1000">
            {projects.map((project, idx) => (
              <li className="folio-list__item column" data-animate-el key={project.id}>
                <a
                  className="folio-list__item-link"
                  href={`#${project.id}`}
                  onClick={(e) => handleCardClick(e, project.id)}
                >
                  <div className="folio-list__item-pic">
                    <img src={project.cardImage} alt={project.title} />
                  </div>
                  <div className="folio-list__item-text">
                    <div className="folio-list__item-cat">{project.category}</div>
                    <div className="folio-list__item-title">{project.title}</div>
                  </div>
                </a>
                <a
                  className="folio-list__proj-link"
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="project link"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal Popup overlay */}
      {activeModalId && activeProject && (
        <div className="basicLightbox basicLightbox--visible" onClick={closeModal}>
          <div className="modal-popup" onClick={(e) => e.stopPropagation()}>
            <img src={activeProject.modalImage} alt={activeProject.title} />

            <div className="modal-popup__desc">
              <h5>{activeProject.title}</h5>
              <p>{activeProject.description}</p>
              <ul className="modal-popup__cat">
                {activeProject.modalCategories.map((cat, idx) => (
                  <li key={idx}>{cat}</li>
                ))}
              </ul>
            </div>

            <a
              href={activeProject.projectUrl}
              className="modal-popup__details"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project link
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
