import './App.css';

function App() {
  return (
    <div className="cv-container">
      <header>
        <h1>Jeremiah Karanja</h1>
        <h2>Software Developer</h2>
        <p>Nairobi County, Kenya | Open to: On-site, Hybrid, Remote | Available Immediately</p>
      </header>

      <section>
        <h3>Professional Summary</h3>
        <p>
          Passionate Software Developer with hands-on experience in building scalable web
          applications, APIs, and management systems. Skilled in both frontend and backend
          development with a strong focus on clean code, responsive design, and performance.
          Proven ability to deliver real-world projects including POS systems, Leave Management
          solutions, and task tracking applications. Fast learner, adaptable, and eager to
          contribute to dynamic teams.
        </p>
      </section>

      <section>
        <h3>Current Position</h3>
        <div className="job">
          <h4>Software Developer – Freelancer</h4>
          <p className="date">Jan 2025 – Present · Nairobi County, Kenya</p>
          <ul>
            <li>Developing freelance web and software solutions using modern technologies.</li>
            <li>
              Technologies: React (with Tailwind CSS), Python, Nest.js, Node.js, Next.js, Django,
              MySQL, PostgreSQL
            </li>
            <li>Built responsive user interfaces and reusable UI components with React & Tailwind.</li>
            <li>Designed and implemented secure RESTful APIs with Django & Node.js.</li>
            <li>Delivered management systems with real-time reporting and notifications.</li>
            <li>Ensured cross-device and cross-browser compatibility.</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Education</h3>
        <p>
          <strong>ALX Foundation</strong>
          <br />
          Software Engineering Program
        </p>
      </section>

      <section>
        <h3>Certifications</h3>
        <p>
          <strong>ALX Professional Foundation Certificate in Digital Agile</strong>
          <br />
          Issued by ALX – Apr 2025
        </p>
      </section>

      <section>
        <h3>Skills</h3>
        <div>
          <strong>Frontend:</strong>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Redux</li>
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
            <li>Git & GitHub</li>
            <li>REST APIs</li>
            <li>Docker (basic)</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Honors & Awards</h3>
        <p>
          <strong>ALX Professional Foundation</strong>
          <br />
          Issued by ALX · Apr 2025
        </p>
      </section>

      <section>
        <h3>Projects</h3>

        <div className="project">
          <h4>Leave Management System</h4>
          <p>
            <strong>Description:</strong> A system that streamlines employee leave requests,
            approvals, and tracking. Provides managers with dashboards for monitoring leave
            balances, generates reports, and sends notifications for approvals or rejections.
          </p>
          <p>
            <strong>Technologies Used:</strong> React, Node.js, PostgreSQL
          </p>
        </div>

        <div className="project">
          <h4>POS System</h4>
          <p>
            <strong>Description:</strong> A Point of Sale system designed for small businesses,
            featuring sales tracking, inventory management, and reporting.
          </p>
          <p>
            <strong>Technologies Used:</strong> Node.js, MySQL, React, Redux
          </p>
        </div>

        <div className="project">
          <h4>Task Management API</h4>
          <p>
            <strong>Description:</strong> A management tool that helps managers track workers’
            progress. Sends notifications on task completion and highlights overdue tasks.
          </p>
          <p>
            <strong>Technologies Used:</strong> Python, Django, PostgreSQL
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
