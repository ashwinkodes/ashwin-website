import React from 'react';
import { Wind } from 'lucide-react';
import styles from './Motorcycling.module.css';

const Motorcycling = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <Wind className={styles.headerIcon} />
            <h1 className={styles.title}>
              Motorcycling
            </h1>
          </div>

          <div className={styles.imageContainer}>
            <img
              src="/images/motorcycle.jpeg"
              alt="Motorcycling"
              className={styles.heroImage}
            />
          </div>

          <div className={styles.contentCard}>
            <h2 className={styles.contentTitle}>Freedom on Two Wheels</h2>
            <div className={styles.contentText}>
              <p>
                Motorcycling represents pure freedom—the open road, the wind in your face, and the connection between rider and machine.
              </p>
              <p>
                There's a meditative quality to riding that clears the mind and sharpens focus. Whether cruising scenic backroads, tackling twisty mountain passes, or exploring new destinations, every ride is an adventure.
              </p>
              <p>
                The motorcycle isn't just transportation—it's a way to experience the world differently, with nothing between you and the journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Motorcycling;
