import React from 'react';
import { Network, Radio, Code, LineChart } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Software-Defined Networking",
      description: "Exploring programmable network architectures and SDN controllers for dynamic traffic management"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Protocols",
      description: "Deep dive into TCP/IP, routing protocols, and modern networking standards"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Network Programming",
      description: "Building custom network tools and applications using socket programming and APIs"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Performance Analysis",
      description: "Benchmarking network throughput, latency, and optimization techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Network className="w-16 h-16 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent pb-2">
              Networking Research
            </h1>
          </div>

          <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Exploring the foundations and future of computer networking through research and experimentation
          </p>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Research Focus</h2>
            <div className="space-y-4 text-slate-300 text-lg">
              <p>
                My networking research focuses on understanding how modern networks operate at scale and exploring emerging technologies that are shaping the future of connectivity. This includes hands-on experimentation with network protocols, performance optimization, and infrastructure design.
              </p>
              <p>
                From studying fundamental concepts like packet switching and routing algorithms to implementing advanced techniques like load balancing and traffic shaping, research provides a deeper understanding of the systems that power the internet and enterprise networks.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-blue-400 mr-3">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold">{area.title}</h3>
                </div>
                <p className="text-slate-400">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-center">Tools & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-2">Analysis</h4>
                <p className="text-slate-300">Wireshark, tcpdump, iperf, nmap</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-2">Simulation</h4>
                <p className="text-slate-300">GNS3, EVE-NG, Mininet</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-2">Programming</h4>
                <p className="text-slate-300">Python (Scapy), Go, C/C++</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
