import React from 'react';
import { Server, Cpu, HardDrive, Network, Shield } from 'lucide-react';
import styles from './Homelab.module.css';

const Homelab = () => {
  const infrastructure = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Compute Resources",
      description: "Multi-node Proxmox cluster with high availability and live migration capabilities"
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Storage Solutions",
      description: "ZFS-based storage pools with automated snapshots and replication"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Segmentation",
      description: "VLAN-based network isolation with pfSense firewall and VPN access"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Monitoring & Security",
      description: "Comprehensive monitoring with Prometheus/Grafana and security hardening"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <Server className={styles.headerIcon} />
            <h1 className={styles.title}>
              Homelab Infrastructure
            </h1>
          </div>

          <p className={styles.subtitle}>
            A production-grade home infrastructure for learning, experimentation, and hosting personal services
          </p>

          <div className={styles.overviewCard}>
            <h2 className={styles.overviewTitle}>Overview</h2>
            <div className={styles.overviewContent}>
              <p>
                My homelab serves as a powerful learning environment and production infrastructure for self-hosted services. Built on enterprise-grade virtualization technologies, it provides hands-on experience with systems administration, networking, and DevOps practices.
              </p>
              <p>
                The infrastructure is designed with redundancy, scalability, and security in mind—mirroring production environments while remaining cost-effective and energy-efficient.
              </p>
            </div>
          </div>

          <div className={styles.infrastructureGrid}>
            {infrastructure.map((item, index) => (
              <div key={index} className={styles.infrastructureCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    {item.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.technologiesCard}>
            <h2 className={styles.technologiesTitle}>Key Technologies</h2>
            <div className={styles.technologiesGrid}>
              <div>
                <h4 className={styles.techCategory}>Virtualization</h4>
                <p className={styles.techList}>Proxmox VE, KVM, LXC Containers</p>
              </div>
              <div>
                <h4 className={styles.techCategory}>Networking</h4>
                <p className={styles.techList}>pfSense, VLANs, WireGuard VPN</p>
              </div>
              <div>
                <h4 className={styles.techCategory}>Monitoring</h4>
                <p className={styles.techList}>Prometheus, Grafana, Uptime Kuma</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homelab;
