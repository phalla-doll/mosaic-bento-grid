import React from 'react';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import { ITEMS } from './constants';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-foreground font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden pt-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 text-center">
                    <div className="mb-8 flex justify-center">
                         <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-400 ring-1 ring-white/10 hover:ring-white/20">
                            Announcing our new templates. <a href="#" className="font-semibold text-blue-400"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                        Curated designs for<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">modern interfaces</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-400">
                        Explore our extensive library of grid layouts, UI components, and design systems. Built for speed and visual impact.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Get Started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white flex items-center gap-1 group">
                            View Documentation <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Background Gradient Blob */}
            <div className="absolute top-0 -z-10 transform-gpu overflow-hidden blur-3xl w-full flex justify-center" aria-hidden="true">
                <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
            </div>
        </div>

        {/* The Grid */}
        <BentoGrid items={ITEMS} />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-12">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
            <p>&copy; 2024 Mosaic Design Systems. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;