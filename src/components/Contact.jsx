import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="s-contact target-section">
      <div className="row contact-top">
        <div className="column lg-12">
          <h2 className="text-pretitle">Get In Touch</h2>
          <p className="h1">
            I love to hear from you. Whether you have a question or just want to chat about design, tech & art — shoot me a message.
          </p>
        </div>
      </div>

      <div className="row contact-bottom">
        <div className="column lg-3 md-5 tab-6 stack-on-550 contact-block">
          <h3 className="text-pretitle">Reach me at</h3>
          <p className="contact-links">
            <a
              href="https://wa.me/2349154618869"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </p>
        </div>
        <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
          <h3 className="text-pretitle">Social</h3>
          <ul className="contact-social">
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
                href="https://www.instagram.com/dev_riho/?igsh=dGQ5YW1jaDI2Z3N1&utm_source=qr#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Rihofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
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
        <div className="column lg-4 md-12 contact-block">
          <a
            href="mailto:martinstimothy74@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mailtoui btn btn--medium u-fullwidth contact-btn"
          >
            Say Hello.
          </a>
        </div>
      </div>
    </section>
  );
}
