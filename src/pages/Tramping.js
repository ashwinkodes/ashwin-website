import React from 'react';
import { Compass } from 'lucide-react';

const Tramping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Compass className="w-16 h-16 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tramping
            </h1>
          </div>

          <div className="mb-12">
            <img
              src="/images/tramping.jpg"
              alt="Tramping"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-center">Exploring New Zealand's Backcountry</h2>
            <div className="space-y-4 text-slate-300 text-lg">
              <p>
                Tramping (or hiking, for my American friends) is the ultimate way to disconnect from the digital world and immerse myself in nature.
              </p>
              <p>
                New Zealand's backcountry offers some of the world's most spectacular multi-day treks—from rugged mountain passes to pristine rivers and ancient forests. With a pack on my back and a trail ahead, I find clarity, peace, and a deep appreciation for the wilderness.
              </p>
              <p>
                Whether it's a weekend trip or a week-long expedition, tramping reminds me why exploring the outdoors is essential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tramping;
