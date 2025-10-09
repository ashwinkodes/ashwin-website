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
    <div className="page-container">
      <section className="section">
        <div className="content-wrapper">
          <h1 className="page-title">
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
                className="interest-card"
              >
                <div className="icon-blue">
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
