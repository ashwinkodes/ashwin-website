import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Mountain, Compass, Monitor, Wind } from 'lucide-react';

const About = () => {
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
            Beyond the keyboard, I'm passionate about adventure and exploration. Here's what drives me when I'm not coding.
          </p>

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
    </div>
  );
};

export default About;
