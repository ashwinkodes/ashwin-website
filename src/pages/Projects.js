import React from 'react';
import { Server, Container, Network, Workflow, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      icon: <Server className="w-12 h-12" />,
      title: "Homelab Infrastructure",
      description: "Building and maintaining a multi-node homelab running on Proxmox, featuring high availability, network segmentation, and comprehensive monitoring.",
      path: "/homelab"
    },
    {
      icon: <Container className="w-12 h-12" />,
      title: "Docker Applications",
      description: "Deploying and managing containerized applications with Docker, including custom networking, volume management, and orchestration.",
      path: "/docker"
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Networking Research",
      description: "Exploring advanced networking concepts, protocols, and architectures through research and practical implementation.",
      path: "/research"
    },
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "Self-Hosting Solutions",
      description: "Running self-hosted alternatives to cloud services, including media servers, cloud storage, password management, and automation tools.",
      path: "/self-hosting"
    }
  ];

  return (
    <div className="page-container">
      <section className="section">
        <div className="content-wrapper">
          <h1 className="page-title">
            Projects & Tech
          </h1>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
            A showcase of my infrastructure projects and technical interests.
          </p>

          {/* Tech Stack */}
          <div className="card p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-4 text-blue-400">Languages</h4>
                <p className="text-slate-300">Python, Java, JavaScript, Kotlin, C#</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-4 text-blue-400">Infrastructure</h4>
                <p className="text-slate-300">Docker, Kubernetes, Proxmox, Terraform, Ansible</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-4 text-blue-400">Frameworks</h4>
                <p className="text-slate-300">React, Svelte, Node.js, .NET</p>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => navigate(project.path)}
                className="card-clickable flex flex-col items-center text-center"
              >
                <div className="icon-blue">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-400">{project.description}</p>
              </div>
            ))}
          </div>

          {/* Resume Link */}
          <div className="card p-8 text-center">
            <FileText className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-4">Full Resume</h3>
            <p className="text-slate-300 mb-6">
              Want to learn more about my experience and skills?
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/Ashwin KAUSHIK.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                View Resume
              </a>
              <a
                href="/Ashwin KAUSHIK.pdf"
                download
                className="btn-secondary inline-flex items-center gap-2"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
