import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kirtan J Limbachiya</h2>
        <p>
          <a href="mailto:kirtanjlimbachiya@gmail.com">kirtanjlimbachiya@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I&apos;m Kirtan J Limbachiya, a passionate software developer dedicated to learning and
        staying updated with the latest technologies. With experience in backend and frontend
        development, I specialize in PHP, Laravel, Node, and React. Currently pursuing an MS
        in Digital Engineering at Otto von Guericke University, I bring a strong foundation in
        creating efficient and innovative solutions.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        <Link to="https://cv-kirtans-projects-1b2e5e4a.vercel.app/">&copy; Kirtan J Limbachiya </Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
