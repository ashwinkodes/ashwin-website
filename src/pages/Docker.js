import React from 'react';
import { Container, Network, Database, Globe, Lock } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Container className="w-16 h-16 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Docker Applications
            </h1>
          </div>

          <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Containerized services for efficient, portable, and scalable deployments
          </p>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Container-First Approach</h2>
            <div className="space-y-4 text-slate-300 text-lg">
              <p>
                Docker enables me to deploy and manage applications with consistency across development and production environments. Each service runs in isolation with its own dependencies, making updates and rollbacks seamless.
              </p>
              <p>
                Using Docker Compose for orchestration, I maintain declarative configurations for multi-container applications, complete with custom networks, persistent volumes, and environment-specific settings.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {dockerServices.map((service, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-blue-400 mr-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.category}</h3>
                </div>
                <p className="text-slate-400">{service.apps}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-center">Best Practices</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold text-blue-400 mb-2">Networking</h4>
                <p className="text-slate-300">Custom bridge networks with service discovery and DNS resolution</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-blue-400 mb-2">Storage</h4>
                <p className="text-slate-300">Named volumes and bind mounts for persistent data management</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-blue-400 mb-2">Security</h4>
                <p className="text-slate-300">Least privilege containers, secrets management, and regular updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docker;
