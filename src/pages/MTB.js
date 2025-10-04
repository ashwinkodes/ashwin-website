import React from 'react';
import { Bike } from 'lucide-react';

const MTB = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Bike className="w-16 h-16 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mountain Biking
            </h1>
          </div>

          <div className="mb-12">
            <img
              src="/images/mtb.jpeg"
              alt="Mountain Biking"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-center">Exploring Trails on Two Wheels</h2>
            <div className="space-y-4 text-slate-300 text-lg">
              <p>
                Mountain biking is more than just a hobby—it's a way to connect with nature, challenge myself, and experience pure freedom on the trails.
              </p>
              <p>
                From technical singletrack to flowing downhill runs, every ride offers a new adventure. Whether I'm navigating tight switchbacks, sending jumps, or just enjoying the scenery, mountain biking keeps me grounded and energized.
              </p>
              <p>
                The perfect blend of adrenaline, skill, and exploration makes every trail ride an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MTB;
