import React from 'react';
import { Mountain } from 'lucide-react';

const Skiing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Mountain className="w-16 h-16 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skiing
            </h1>
          </div>

          <div className="mb-12">
            <img
              src="/images/skiing.jpeg"
              alt="Skiing"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold mb-6">Carving Down the Mountains</h2>
            <div className="space-y-4 text-slate-300 text-lg">
              <p>
                There's nothing quite like the feeling of fresh powder beneath your skis and the rush of carving down a pristine slope.
              </p>
              <p>
                Skiing combines technical skill, speed, and the raw beauty of mountain landscapes. Whether I'm chasing powder days, tackling moguls, or enjoying groomed runs, every moment on the mountain is exhilarating.
              </p>
              <p>
                Winter in the mountains is where I feel most alive—flying down slopes, surrounded by snow-covered peaks and endless adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skiing;
