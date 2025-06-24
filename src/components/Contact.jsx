
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Me</h2>
        <p className={styles.description}>
          Feel free to reach out via email or the form below.
        </p>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!)");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
            required
          />
          <textarea
            placeholder="Your Message"
            className={styles.textarea}
            required
          />
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
        <p className={styles.emailNote}>
          Or email me directly at: <a href="mailto:feven@codes.com">feven@codes.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
