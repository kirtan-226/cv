import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Cell from '../components/Projects/Cell';
// import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';
import projects from '../data/projects';

import Main from '../layouts/Main';

const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
};

const Index = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  }, []);

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main description="Kirtan Limbachiya's personal website.">

      {/* About */}
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>About Me</h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
      </article>

      {/* Resume */}
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2>Resume</h2>
            <div className="link-container">
              {Object.keys(sections).map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>
              ))}
            </div>
          </div>
        </header>
        {Object.entries(sections).map(([name, Section]) => (
          <Section key={name} />
        ))}
      </article>

      {/* Projects */}
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>Projects</h2>
            <p>A selection of projects that I&apos;m not too ashamed of</p>
          </div>
        </header>
        {projects.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </article>

      {/* Stats */}
      {/* <article className="post" id="stats">
        <header>
          <div className="title">
            <h2>Stats</h2>
          </div>
        </header>
        <Personal />
        <Site />
      </article> */}

      {/* Contact */}
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>Contact</h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch. You can email me at: </p>
          <EmailLink />
        </div>
        <ContactIcons />
      </article>
    </Main>
  );
};
export default Index;
