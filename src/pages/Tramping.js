import React from 'react';
import { Compass } from 'lucide-react';
import styles from './Tramping.module.css';

const Tramping = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <Compass className={styles.headerIcon} />
            <h1 className={styles.title}>
              Tramping
            </h1>
          </div>

          <div className={styles.imageContainer}>
            <img
              src="/images/tramping.jpg"
              alt="Tramping"
              className={styles.heroImage}
            />
          </div>

          <div className={styles.contentCard}>
            <h2 className={styles.contentTitle}>Exploring New Zealand's Backcountry</h2>
            <div className={styles.contentText}>
              <p>
                Tramping (or hiking, for my American friends) is the ultimate way to disconnect from the digital world and immerse myself in nature.
              </p>
              <p>
                New Zealand's backcountry offers some of the world's most spectacular multi-day treks—from rugged mountain passes to pristine rivers and ancient forests. With a pack on my back and a trail ahead, I find clarity, peace, and a deep appreciation for the wilderness.
              </p>
              <p>
                Whether it's a weekend trip or a week-long expedition, tramping reminds me why exploring the outdoors is essential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tramping;
