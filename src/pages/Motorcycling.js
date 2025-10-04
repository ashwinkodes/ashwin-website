import React from 'react';
import { Wind } from 'lucide-react';

const Motorcycling = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Wind className="w-16 h-16 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent pb-2">
              Motorcycling
            </h1>
          </div>

          <div className="mb-12">
            <img
              src="/images/motorcycle.jpeg"
              alt="Motorcycling"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-center">Freedom on Two Wheels</h2>
            <div className="space-y-4 text-slate-300 text-lg">
              <p>
                Motorcycling represents pure freedom—the open road, the wind in your face, and the connection between rider and machine.
              </p>
              <p>
                There's a meditative quality to riding that clears the mind and sharpens focus. Whether cruising scenic backroads, tackling twisty mountain passes, or exploring new destinations, every ride is an adventure.
              </p>
              <p>
                The motorcycle isn't just transportation—it's a way to experience the world differently, with nothing between you and the journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Motorcycling;
