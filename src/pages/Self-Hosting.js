import React from 'react';
import { Workflow, Cloud, Film, Shield, Calendar } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Workflow className="w-16 h-16 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Self-Hosting Solutions
            </h1>
          </div>

          <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Taking control of data and services by hosting alternatives to cloud platforms
          </p>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Self-Host?</h2>
            <div className="space-y-4 text-slate-300 text-lg">
              <p>
                Self-hosting puts me in control of my data, privacy, and costs. Instead of relying on third-party services that can change terms, raise prices, or shut down unexpectedly, I run open-source alternatives on my own infrastructure.
              </p>
              <p>
                Beyond privacy benefits, self-hosting is an invaluable learning experience—covering system administration, security hardening, backup strategies, and service integration. Each service teaches something new about infrastructure and operations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-blue-400 mr-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.category}</h3>
                </div>
                <p className="text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold text-blue-400 mb-2">Data Ownership</h4>
                <p className="text-slate-300">Full control over personal data with no third-party dependencies</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-blue-400 mb-2">Automated Backups</h4>
                <p className="text-slate-300">Regular snapshots and off-site replication for disaster recovery</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-blue-400 mb-2">Secure Access</h4>
                <p className="text-slate-300">VPN, reverse proxy with SSL, and authentication layers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfHosting;
