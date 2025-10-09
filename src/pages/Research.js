import React from 'react';
import { Network, Radio, Code, LineChart } from 'lucide-react';
import styles from './Research.module.css';

const Research = () => {
  const researchAreas = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Software-Defined Networking",
      description: "Exploring programmable network architectures and SDN controllers for dynamic traffic management"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Protocols",
      description: "Deep dive into TCP/IP, routing protocols, and modern networking standards"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Network Programming",
      description: "Building custom network tools and applications using socket programming and APIs"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Performance Analysis",
      description: "Benchmarking network throughput, latency, and optimization techniques"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <Network className={styles.headerIcon} />
            <h1 className={styles.title}>
              Networking Research
            </h1>
          </div>

          <p className={styles.subtitle}>
            Exploring the foundations and future of computer networking through research and experimentation
          </p>

          <div className={styles.overviewCard}>
            <h2 className={styles.overviewTitle}>Research Focus</h2>
            <div className={styles.overviewContent}>
              <p>
                My networking research focuses on understanding how modern networks operate at scale and exploring emerging technologies that are shaping the future of connectivity. This includes hands-on experimentation with network protocols, performance optimization, and infrastructure design.
              </p>
              <p>
                From studying fundamental concepts like packet switching and routing algorithms to implementing advanced techniques like load balancing and traffic shaping, research provides a deeper understanding of the systems that power the internet and enterprise networks.
              </p>
            </div>
          </div>

          <div className={styles.areasGrid}>
            {researchAreas.map((area, index) => (
              <div key={index} className={styles.areaCard}>
                <div className={styles.areaHeader}>
                  <div className={styles.areaIcon}>
                    {area.icon}
                  </div>
                  <h3 className={styles.areaTitle}>{area.title}</h3>
                </div>
                <p className={styles.areaDescription}>{area.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.toolsCard}>
            <h2 className={styles.toolsTitle}>Tools & Technologies</h2>
            <div className={styles.toolsGrid}>
              <div>
                <h4 className={styles.toolCategory}>Analysis</h4>
                <p className={styles.toolList}>Wireshark, tcpdump, iperf, nmap</p>
              </div>
              <div>
                <h4 className={styles.toolCategory}>Simulation</h4>
                <p className={styles.toolList}>GNS3, EVE-NG, Mininet</p>
              </div>
              <div>
                <h4 className={styles.toolCategory}>Programming</h4>
                <p className={styles.toolList}>Python (Scapy), Go, C/C++</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
