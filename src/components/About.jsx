
// import React from 'react'
// import styles from './About.module.css'

// const About = () => (
//   <section className={styles.about}>
//     <h2>About Me</h2>
//     <p>I’m an enthusiastic web developer passionate about creating modern, responsive websites and learning new technologies.</p>
//   </section>

// )

// export default About
import React from 'react';

export default function About() {
  return (
    <div className="row gy-5">
      {/* About me content start */}
      <div className="col-lg-7 col-xl-8 text-center text-lg-start">
        <h2 className="text-7 fw-600 mb-3">
          I'm <span className="text-primary">Feven Zeray,</span> a Full Stack Web Developer
        </h2>
        <p>
         I'm a creative Full Stack Web Developer based in Gondar, Ethiopia. Skilled at building responsive, user-friendly websites that meet modern web standards. My focus is on writing clean, efficient code and creating scalable web applications that meet the latest web standards.
        </p>
        <p>
         Alongside my development skills, I also have experience in social media marketing, allowing me to understand how websites and online presence can work together to engage audiences and drive results. By combining my technical knowledge with my marketing background, I can create websites that are not only functional but also optimized to help businesses grow and reach their target audience. I’m always eager to take on new challenges, trying to learn new skills to improve myself and my work.
        </p>
      </div>
      {/* About me content end */}

      {/* About me personal details start */}
      <div className="col-lg-5 col-xl-4">
        <div className="ps-lg-4">
          <ul className="list-style-2">
            <li>
              <span className="fw-600 me-2">Name:</span>Simone Olivia
            </li>
            <li>
              <span className="fw-600 me-2">Email:</span>
              <a href="mailto:chat@simone.com">chat@simone.com</a>
            </li>
            <li>
              <span className="fw-600 me-2">Age:</span>28
            </li>
            <li className="border-0">
              <span className="fw-600 me-2">From:</span>Los Angeles, California
            </li>
          </ul>
        </div>
      </div>
      {/* About me personal details end */}
    </div>
  );
}
