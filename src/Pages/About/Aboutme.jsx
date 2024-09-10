import "./About.css";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Aboutme = () => {
  return (
    <section className="section-about">
      <div className="about-container">
        <div className="about-content">
          <div className="personal-details">
            <h2>Personal Details</h2>
            <div>
              <h3>Full Name</h3>
              <p>Sandesh Khadka</p>
            </div>
            <div>
              <h3>Address</h3>
              <p>Chandragiri, Kathmandu</p>
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>9860295650, 9808840129</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>sandeshk850@gmail.com</p>
            </div>
          </div>

          <div className="biography">
            <h2>Biography</h2>
            <p>
              I&apos;m a passionate full-stack developer 💻 with a background in
              computer science 🎓 and a love for building innovative web
              applications 🚀. I hold a bachelor&apos;s degree 🎓 and have over
              a year of professional experience working with technologies such
              as React ⚛️, Node.js 🌐, and MongoDB 📊.
            </p>
          </div>

          <div className="skills">
            <h2>Skills</h2>
            <ul>
              <li>
                <strong>JavaScript</strong> (React, Node.js)
              </li>
              <li>
                <strong>Frontend Technologies</strong> (HTML, CSS, Tailwind,
                Material UI)
              </li>
              <li>
                <strong>Backend Technologies</strong> (Express, MongoDB, MySQL)
              </li>
              <li>
                <strong>Version Control</strong> (Git)
              </li>
            </ul>
          </div>

          <div className="education">
            <h2>Education</h2>
            <ul>
              <li>
                <h3>Sagarmatha College of Science & Technology</h3>
                <p>Bachelor&apos;s Degree in Computer Science</p>
                <p>
                  <strong>Lalitpur, sanepa</strong>
                </p>
              </li>
              <li>
                <h3>National Institute of Science & Technology</h3>
                <p>Higher level</p>
                <p>
                  <strong>Lainchour, kathmandu</strong>
                </p>
              </li>
            </ul>
          </div>

          <div className="experience">
            <h2>Professional Experience</h2>

            <div>
              <h3>Internship</h3>
              <p>
                <strong>
                  Dakshyata Institute of Research and Studies Pvt. Ltd.
                </strong>
              </p>
              <p>
                Worked on webpage and mobile app development. Contributed to the
                development of user-friendly interfaces and participated in the
                creation of mobile applications.
              </p>
            </div>

            <div>
              <h3>Self-Learning</h3>
              <p>
                Gained over a year of experience as a full-stack developer
                through self-learning. Focused on building responsive and
                dynamic web applications. Notable projects include developing a
                portfolio website using React and Node.js, and experimenting
                with various technologies to enhance skills.
              </p>
            </div>
            <NavLink to="/projects">
              <span>View My project</span> <ArrowRightIcon width={12} />
            </NavLink>
          </div>

          <div className="interests">
            <h2>Interests</h2>
            <p>
              In my free time, I enjoy listening to music, exploring new
              technologies, and working on personal coding projects. I also like
              to stay updated with the latest trends in web development.
            </p>
          </div>

          {/* 

          

         

         

          <div className="interests">
            <h3>Interests</h3>
            <p>In my free time, I enjoy listening to music, exploring new technologies, and working on personal coding projects. I also like to stay updated with the latest trends in web development.</p>
          </div>

          <div className="goals">
            <h3>Goals</h3>
            <p>I aim to continue growing as a developer by working on challenging projects and learning new technologies. I am also passionate about contributing to open-source projects and collaborating with like-minded professionals.</p>
          </div>

          <div className="social-media">
            <h3>Connect with Me</h3>
            <p>
              <a href="https://www.linkedin.com/in/sandesh-khadka" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
              <a href="https://github.com/sandeshkhadka" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
