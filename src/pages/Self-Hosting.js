import React from 'react';
import { Workflow, Cloud, Film, Shield, Calendar } from 'lucide-react';
import styles from './Self-Hosting.module.css';

const SelfHosting = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      category: "Cloud Storage",
      description: "Nextcloud for file sync, calendar, contacts, and collaborative document editing"
    },
    {
      icon: <Film className="w-8 h-8" />,
      category: "Media Services",
      description: "Plex/Jellyfin media servers with automated organization and streaming"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      category: "Security & Privacy",
      description: "Vaultwarden for password management, Pi-hole for network-wide ad blocking"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      category: "Automation",
      description: "Home Assistant, n8n workflows, and custom automation scripts"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <Workflow className={styles.headerIcon} />
            <h1 className={styles.title}>
              Self-Hosting Solutions
            </h1>
          </div>

          <p className={styles.subtitle}>
            Taking control of data and services by hosting alternatives to cloud platforms
          </p>

          <div className={styles.overviewCard}>
            <h2 className={styles.overviewTitle}>Why Self-Host?</h2>
            <div className={styles.overviewContent}>
              <p>
                Self-hosting puts me in control of my data, privacy, and costs. Instead of relying on third-party services that can change terms, raise prices, or shut down unexpectedly, I run open-source alternatives on my own infrastructure.
              </p>
              <p>
                Beyond privacy benefits, self-hosting is an invaluable learning experience—covering system administration, security hardening, backup strategies, and service integration. Each service teaches something new about infrastructure and operations.
              </p>
            </div>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    {service.icon}
                  </div>
                  <h3 className={styles.serviceCategory}>{service.category}</h3>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.principlesCard}>
            <h2 className={styles.principlesTitle}>Key Principles</h2>
            <div className={styles.principlesGrid}>
              <div className={styles.principleItem}>
                <h4 className={styles.principleTitle}>Data Ownership</h4>
                <p className={styles.principleDescription}>Full control over personal data with no third-party dependencies</p>
              </div>
              <div className={styles.principleItem}>
                <h4 className={styles.principleTitle}>Automated Backups</h4>
                <p className={styles.principleDescription}>Regular snapshots and off-site replication for disaster recovery</p>
              </div>
              <div className={styles.principleItem}>
                <h4 className={styles.principleTitle}>Secure Access</h4>
                <p className={styles.principleDescription}>VPN, reverse proxy with SSL, and authentication layers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfHosting;
