import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Mountain, Bike, Compass, Monitor, Wind } from 'lucide-react';

const Home = () => {
  const interests = [
    {
      icon: <Bike className="w-12 h-12" />,
      title: "Mountain Biking",
      description: "Exploring trails and pushing limits on two wheels",
      image: "/images/mtb.jpeg",
      link: "/about/mtb"
    },
    {
      icon: <Mountain className="w-12 h-12" />,
      title: "Skiing",
      description: "Carving down slopes and chasing powder days",
      image: "/images/skiing.jpeg",
      link: "/about/skiing"
    },
    {
      icon: <Compass className="w-12 h-12" />,
      title: "Tramping",
      description: "Backpacking through New Zealand's backcountry (hiking for my US friends)",
      image: "/images/tramping.jpg",
      link: "/about/tramping"
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Computers & Homelabs",
      description: "Building infrastructure, exploring DevOps, and tinkering with tech",
      image: "/images/homelab.jpeg",
      link: "/projects"
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Motorcycling",
      description: "Freedom on two wheels, exploring roads less traveled",
      image: "/images/motorcycle.jpeg",
      link: "/about/motorcycling"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/RuapehuSnowSchool.JPG)',
            backgroundPosition: 'center 45%',
            filter: 'brightness(0.4)'
          }}
        />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent pb-2">
            Hey, I'm Ashwin
          </h2>
          <p className="text-2xl text-slate-300 mb-8">
            Software Developer | Infrastructure Enthusiast | Outdoor Adventurer
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
            I build scalable systems, automate infrastructure, and when I'm not coding,
            you'll find me on a mountain bike, ski slope, hiking trail, or tinkering with my homelab.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/ashwinkodes" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ashwin-kaushik" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ashwin22kaushik@gmail.com"
               className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">What I'm Into</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <Link
                key={index}
                to={interest.link}
                className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:scale-105 flex flex-col items-center text-center"
              >
                <div className="mb-4 text-blue-400">
                  {interest.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{interest.title}</h4>
                <p className="text-slate-400 mb-4">{interest.description}</p>
                <img
                  src={interest.image}
                  alt={interest.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">Tech I Work With</h3>
          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
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
            <div className="mt-8 text-center">
              <Link to="/projects" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Let's Connect</h3>
          <p className="text-xl text-slate-300 mb-8">
            Interested in collaborating or just want to chat about tech, bikes, or mountains?
          </p>
          <Link to="/contact"
             className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Ashwin Kaushik. Built with React, deployed on a Raspberry Pi.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
