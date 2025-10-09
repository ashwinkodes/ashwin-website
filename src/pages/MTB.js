import React from 'react';
import { Bike } from 'lucide-react';
import styles from './MTB.module.css';

const MTB = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <Bike className={styles.headerIcon} />
            <h1 className={styles.title}>
              Mountain Biking
            </h1>
          </div>

          <div className={styles.imageContainer}>
            <img
              src="/images/mtb.jpeg"
              alt="Mountain Biking"
              className={styles.heroImage}
            />
          </div>

          <div className={styles.contentCard}>
            <h2 className={styles.contentTitle}>Exploring Trails on Two Wheels</h2>
            <div className={styles.contentText}>
              <p>
                Mountain biking is more than just a hobby—it's a way to connect with nature, challenge myself, and experience pure freedom on the trails.
              </p>
              <p>
                From technical singletrack to flowing downhill runs, every ride offers a new adventure. Whether I'm navigating tight switchbacks, sending jumps, or just enjoying the scenery, mountain biking keeps me grounded and energized.
              </p>
              <p>
                The perfect blend of adrenaline, skill, and exploration makes every trail ride an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MTB;
