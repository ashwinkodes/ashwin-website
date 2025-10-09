import React from 'react';
import { Mountain } from 'lucide-react';
import styles from './Skiing.module.css';

const Skiing = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <Mountain className={styles.headerIcon} />
            <h1 className={styles.title}>
              Skiing
            </h1>
          </div>

          <div className={styles.imageContainer}>
            <img
              src="/images/skiing.jpeg"
              alt="Skiing"
              className={styles.heroImage}
            />
          </div>

          <div className={styles.contentCard}>
            <h2 className={styles.contentTitle}>Carving Down the Mountains</h2>
            <div className={styles.contentText}>
              <p>
                There's nothing quite like the feeling of fresh powder beneath your skis and the rush of carving down a pristine slope.
              </p>
              <p>
                Skiing combines technical skill, speed, and the raw beauty of mountain landscapes. Whether I'm chasing powder days, tackling moguls, or enjoying groomed runs, every moment on the mountain is exhilarating.
              </p>
              <p>
                Winter in the mountains is where I feel most alive—flying down slopes, surrounded by snow-covered peaks and endless adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skiing;
