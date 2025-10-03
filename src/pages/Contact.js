import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            Interested in collaborating or just want to chat about tech, bikes, or mountains?
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="https://github.com/ashwinkodes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:scale-105"
            >
              <Github className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-slate-400">Check out my code</p>
            </a>

            <a
              href="https://www.linkedin.com/in/ashwin-kaushik"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:scale-105"
            >
              <Linkedin className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-slate-400">Let's connect professionally</p>
            </a>

            <a
              href="mailto:ashwin22kaushik@gmail.com"
              className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:scale-105"
            >
              <Mail className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-slate-400">Send me a message</p>
            </a>
          </div>

          {/* Direct Email Button */}
          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="text-slate-300 mb-6">
              Drop me an email at <span className="text-blue-400">ashwin22kaushik@gmail.com</span>
            </p>
            <a
              href="mailto:ashwin22kaushik@gmail.com"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
