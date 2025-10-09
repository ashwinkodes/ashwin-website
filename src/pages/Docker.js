import React from 'react';
import { Container, Network, Database, Globe, Lock } from 'lucide-react';
import styles from './Docker.module.css';

const Docker = () => {
  const dockerServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      category: "Web Services",
      apps: "Nginx Proxy Manager, Traefik, Caddy"
    },
    {
      icon: <Database className="w-8 h-8" />,
      category: "Databases",
      apps: "PostgreSQL, MongoDB, Redis, MariaDB"
    },
    {
      icon: <Network className="w-8 h-8" />,
      category: "Networking",
      apps: "Pi-hole, AdGuard Home, WireGuard"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      category: "Security",
      apps: "Vaultwarden, Authelia, Fail2ban"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <Container className={styles.headerIcon} />
            <h1 className={styles.title}>
              Docker Applications
            </h1>
          </div>

          <p className={styles.subtitle}>
            Containerized services for efficient, portable, and scalable deployments
          </p>

          <div className={styles.overviewCard}>
            <h2 className={styles.overviewTitle}>Container-First Approach</h2>
            <div className={styles.overviewContent}>
              <p>
                Docker enables me to deploy and manage applications with consistency across development and production environments. Each service runs in isolation with its own dependencies, making updates and rollbacks seamless.
              </p>
              <p>
                Using Docker Compose for orchestration, I maintain declarative configurations for multi-container applications, complete with custom networks, persistent volumes, and environment-specific settings.
              </p>
            </div>
          </div>

          <div className={styles.servicesGrid}>
            {dockerServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    {service.icon}
                  </div>
                  <h3 className={styles.serviceCategory}>{service.category}</h3>
                </div>
                <p className={styles.serviceApps}>{service.apps}</p>
              </div>
            ))}
          </div>

          <div className={styles.bestPracticesCard}>
            <h2 className={styles.bestPracticesTitle}>Best Practices</h2>
            <div className={styles.practicesGrid}>
              <div>
                <h4 className={styles.practiceTitle}>Networking</h4>
                <p className={styles.practiceDescription}>Custom bridge networks with service discovery and DNS resolution</p>
              </div>
              <div>
                <h4 className={styles.practiceTitle}>Storage</h4>
                <p className={styles.practiceDescription}>Named volumes and bind mounts for persistent data management</p>
              </div>
              <div>
                <h4 className={styles.practiceTitle}>Security</h4>
                <p className={styles.practiceDescription}>Least privilege containers, secrets management, and regular updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docker;
