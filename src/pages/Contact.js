import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            Let's Connect
          </h1>
          <p className={styles.subtitle}>
            Interested in collaborating or just want to chat about tech, bikes, or mountains?
          </p>

          {/* Contact Cards */}
          <div className={styles.contactGrid}>
            <a
              href="https://github.com/ashwinkodes"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <Github className={styles.contactIcon} />
              <h3 className={styles.contactTitle}>GitHub</h3>
              <p className={styles.contactDescription}>Check out my code</p>
            </a>

            <a
              href="https://www.linkedin.com/in/ashwin-kaushik"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <Linkedin className={styles.contactIcon} />
              <h3 className={styles.contactTitle}>LinkedIn</h3>
              <p className={styles.contactDescription}>Let's connect professionally</p>
            </a>

            <a
              href="mailto:ashwin22kaushik@gmail.com"
              className={styles.contactCard}
            >
              <Mail className={styles.contactIcon} />
              <h3 className={styles.contactTitle}>Email</h3>
              <p className={styles.contactDescription}>Send me a message</p>
            </a>
          </div>

          {/* Direct Email Button */}
          <div className={styles.emailCard}>
            <h2 className={styles.emailTitle}>Get In Touch</h2>
            <p className={styles.emailText}>
              Drop me an email at <span className={styles.emailAddress}>ashwin22kaushik@gmail.com</span>
            </p>
            <a
              href="mailto:ashwin22kaushik@gmail.com"
              className={styles.emailButton}
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
