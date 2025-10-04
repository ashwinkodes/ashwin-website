import React from 'react';
import { Server, Cpu, HardDrive, Network, Shield } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Server className="w-16 h-16 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Homelab Infrastructure
            </h1>
          </div>

          <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            A production-grade home infrastructure for learning, experimentation, and hosting personal services
          </p>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
            <div className="space-y-4 text-slate-300 text-lg">
              <p>
                My homelab serves as a powerful learning environment and production infrastructure for self-hosted services. Built on enterprise-grade virtualization technologies, it provides hands-on experience with systems administration, networking, and DevOps practices.
              </p>
              <p>
                The infrastructure is designed with redundancy, scalability, and security in mind—mirroring production environments while remaining cost-effective and energy-efficient.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {infrastructure.map((item, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-blue-400 mr-3">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Technologies</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-2">Virtualization</h4>
                <p className="text-slate-300">Proxmox VE, KVM, LXC Containers</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-2">Networking</h4>
                <p className="text-slate-300">pfSense, VLANs, WireGuard VPN</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-2">Monitoring</h4>
                <p className="text-slate-300">Prometheus, Grafana, Uptime Kuma</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homelab;
