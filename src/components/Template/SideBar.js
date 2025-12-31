import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
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
        A result-oriented software developer with a strong passion for full-stack development
        and data-driven innovation. I specialize in PHP (Laravel, CodeIgniter), Vue.js, Node.js,
        and Python. I have experience building scalable backend systems and intuitive user
        interfaces. Currently pursuing an MSc in Digital Engineering at Otto von Guericke
        University, I strive to merge academic knowledge with real-world problem-solving to
        create impactful solutions.
      </p>
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
