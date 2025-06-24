
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
          I'm <span className="text-primary">Simone Olivia,</span> a Web Developer
        </h2>
        <p>
          I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. When an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p>
          Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
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
