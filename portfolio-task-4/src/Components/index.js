import React from "react";
import "./style.css";
import {
  photo,
  linkedin,
  education,
  github,
  instagram,
  arrow,
  buddypro,
  checkmark,
  ITG,
  email,
} from "./assets/index.js";
import resumePDF from "./assets/Resume.pdf";
function Nav() {
  return (
    <div>
      <nav id="desktop-nav">
        <div class="logo">Gokul R</div>
        <div>
          <ul class="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div class="logo">Gokul R</div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li>
              <a href="#about" onclick="toggleMenu()">
                About
              </a>
            </li>
            <li>
              <a href="#experience" onclick="toggleMenu()">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onclick="toggleMenu()">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onclick="toggleMenu()">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
}

function Profile() {
  const openPdf = () => {
    window.open(resumePDF, "_blank");
  };
  return (
    <section id="profile">
      <div class="section__pic-container">
        <img class="profileimage" src={photo} alt="Gokul Profile Photo" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Gokul R</h1>
        <p class="section__text__p2">Frontend Developer</p>
        <div class="btn-container">
          <button class="btn btn-color-2" onClick={openPdf}>
            Resume
          </button>
          <a href="#contact">
            <button class="btn btn-color-1">Contact Info</button>{" "}
          </a>
        </div>
        <div id="socials-container">
          <a href="https://linkedin.com/in/gokul-becse">
            {" "}
            <img src={linkedin} alt="My LinkedIn profile" class="icon" />
          </a>
          <a href="https://github.com/Gokul0616/">
            <img src={github} alt="My Github profile" class="icon" />
          </a>
          <a href="https://www.instagram.com/misty_gokul_offl/">
            <img src={instagram} alt="My Instagram profile" class="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        {/* <!-- <div class="section__pic-container">
          <img
            src="./assets/about-pic.png"
            alt="Profile picture"
            class="about-pic"
          />
        </div> --> */}
        <div class="about-details-container">
          <div class="about-containers">
            {/*  <div class="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>2+ years <br />Frontend Development</p>
            </div> */}
            <div class="details-container">
              <img src={education} alt="Education icon" class="icon" />
              <h3>Education</h3>
              <p>B.E. Computer Science and Engineering</p>
            </div>
          </div>
          <div class="text-container">
            <p>
              I am a creative and adaptable engineer, eager to contribute fresh
              ideas and continuously expand my skill set. With a strong
              foundation in problem-solving, I thrive in team-based
              environments, where I collaborate effectively to tackle complex
              challenges. My passion for innovation drives me to seek a career
              with a forward-thinking organization, where I can apply my
              knowledge and expertise to help the company achieve its goals. I
              am committed to making a meaningful impact and contributing to the
              success of the organization through my dedication and innovative
              thinking.
            </p>
          </div>
        </div>
      </div>

      <a href="#experience">
        <img src={arrow} alt="Arrow icon" class="icon arrow" />
      </a>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>UI/UX</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>ReactJS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <a href="#projects">
        <img src={arrow} alt="Arrow icon" class="icon arrow" />
      </a>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img src={ITG} alt="Project 1" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">ITG</h2>
            <div class="btn-container">
              <a href="https://github.com/Gokul0616/ITG">
                <button class="btn btn-color-2 project-btn">Github</button>
              </a>
              <a href="https://gokul0616.github.io/ITG/">
                <button class="btn btn-color-2 project-btn">Live Demo</button>
              </a>
            </div>
          </div>
          {/* <!-- <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-2.png"
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Two</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div> --> */}
          <div class="details-container color-container">
            <div class="article-container">
              <img src={buddypro} alt="Project 3" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">BuddyPro</h2>
            <div class="btn-container">
              <a href="https://github.com/Gokul0616/BuddyPro-client">
                {" "}
                <button class="btn btn-color-2 project-btn">Github</button>
              </a>
              <a href="https://buddypro.netlify.app/">
                <button
                  class="btn btn-color-2 project-btn"
                  // onclick="location.href='https://buddypro.netlify.app/'"
                >
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#contact">
        <img src={arrow} alt="Arrow icon" class="icon arrow" />
      </a>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:gokul363info@gmail.com">gokul363info@gmail.com</a>
          </p>
        </div>
        <div class="contact-info-container">
          <img src={linkedin} alt="LinkedIn icon" class="icon contact-icon" />
          <p>
            <a href="https://www.linkedin.com/in/gokul-becse">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Gokul. All Rights Reserved.</p>
    </footer>
  );
}

export { Nav, Profile, About, Experience, Projects, Contact, Footer };
