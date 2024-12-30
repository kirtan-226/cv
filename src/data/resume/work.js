/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Techomax Solutions',
    position: 'Jr. Software Development',
    url: 'https://techomaxsolution.com/',
    startDate: '2023-08-16',
    endDate: '2024-07-30',
    summary: `As a Junior Software Developer at Techomax Solutions from August 2023 to July 2024, I specialized in developing robust and scalable backend solutions using Node.js and creating dynamic, user-friendly frontend interfaces with React.
    In this role, I contributed to full-stack development projects, focusing on delivering high-quality software aligned with client needs and industry standards.`,
    highlights: [
      'Led the team to complete two successful software development projects within tight deadlines.',
      'Focused on building and optimizing backend systems to ensure scalable and efficient application performance.',
      'Facilitated team collaboration and mentored peers on best practices for backend architecture and development.',
      'Addressed and resolved technical challenges, ensuring smooth project delivery and client satisfaction.',
      'Gained hands-on experience with tools, frameworks, and methodologies critical to modern software development.',
    ],
  },
  {
    name: 'Techomax Solutions',
    position: 'Software Development Intern',
    url: 'https://techomaxsolution.com/',
    startDate: '2023-02-01',
    endDate: '2023-04-30',
    summary: `As a Software Development Intern at Techomax Solutions from February 2023 to April 2023, I successfully led a team through two impactful projects, focusing on backend development.
    This role allowed me to contribute to the design, implementation, and optimization of software solutions while honing my leadership and technical skills in a collaborative environment.`,
    highlights: [
      'Specialized in building backend services with Node.js and responsive frontends with React.',
      'Successfully implemented new features and optimized existing ones for improved performance and user experience.',
      'Worked closely with designers, product managers, and QA teams to deliver seamless software solutions.',
      'Ensured clean, maintainable code by adhering to best practices and participating in peer code reviews.',
      'Actively expanded knowledge in modern web development technologies to stay current with industry trends.',
    ],
  },
  {
    name: 'Gujarat Technological Univeristy Startup and Innovation Council',
    position: 'Associate Graphic Designer',
    url: '',
    startDate: '2021-09-01',
    endDate: '2022-02-28',
    summary: `As an Associate Graphic Designer certified by GTU Innovation Startup and Innovation Council, I demonstrated expertise in creating innovative and visually compelling graphic solutions. 
    This certification reflects a commitment to design excellence, creativity, and the ability to contribute effectively to branding, visual storytelling, and communication projects.`,
    highlights: [
      'Created professional-grade visual assets for projects, showcasing innovative design thinking and attention to detail.',
      'Proficient in industry-standard software such as Adobe Photoshop, Illustrator, and InDesign, enabling high-quality deliverables.',
      'Applied creative problem-solving techniques to craft unique visual content aligned with project goals.',
      'Worked collaboratively with teams to align graphic design elements with branding and messaging objectives.',
      'Earned certification as a testament to expertise in graphic design and innovation principles.',
    ],
  },
];

export default work;
