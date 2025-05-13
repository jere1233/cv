import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cv-container">
      <header>
        <h1>Jeremiah Karanja</h1>
        <h2>Software Developer</h2>
        <p>Nairobi, Nairobi County, Kenya | Open to: On-site, Hybrid, Remote | Available Immediately</p>

        <div className="cv-links">
          <a href="https://www.linkedin.com/in/jeremiah-karanja-aaa97b358/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      <section>
        <h3>Current Position</h3>
        <div className="job">
          <h4>Software Developer at Freelancer</h4>
          <p className="date">Jan 2025 – Present · Nairobi County, Kenya</p>
          <ul>
            <li>Working on freelance web development projects using modern stacks.</li>
            <li>Technologies: React(using tailwind css), Python, Nest.js, Node.js, Next.js, Django, MySQL, PostgreSQL</li>
            <li>Design and develop responsive user interfaces using React and Tailwind CSS</li>
            <li>Implement reusable UI components to maintain consistency and accelerate development</li>
            <li>Ensure cross-device compatibility with Tailwind’s mobile-first design system</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Education</h3>
        <p><strong>ALX Foundation</strong><br /></p>
      </section>

      <section>
        <h3>Certifications</h3>
        <p><strong>ALX Professional Foundation Certificate in Digital Agile</strong><br />Issued by ALX – Apr 2025</p>
      </section>

      <section>
        <h3>Skills</h3>
        <div>
          <strong>Frontend:</strong>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li> {/* Added Tailwind CSS here too */}
          </ul>
        </div>
        <div>
          <strong>Backend:</strong>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>Nest.js</li>
            <li>Django</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div>
          <strong>Tools & Others:</strong>
          <ul>
            <li>Postman</li>
            <li>Git</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Honors & Awards</h3>
        <p><strong>ALX Professional Foundation</strong><br />Issued by ALX · Apr 2025</p>
      </section>

      <section>
        <h3>Projects</h3>
        <div className="project">
          <h4>POS System</h4>
          <p><strong>Description:</strong> A Point of Sale system designed for small businesses, with features like sales tracking, inventory management, and transaction reports.</p>
          <p><strong>Technologies Used:</strong> Node.js, MySQL, React, Redux</p>
        </div>
      </section>

      <button className="print-button" onClick={() => window.print()}>
        Download / Print CV
      </button>
    </div>
  );
}

export default App;










