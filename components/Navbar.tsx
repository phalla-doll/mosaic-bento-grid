import React from 'react';
import { Layers, Menu, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <span className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                <Layers className="text-blue-500" />
                MOSAIC
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">Discover</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800 hover:text-white">Creators</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800 hover:text-white">Pricing</a>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search size={16} className="text-neutral-500" />
              </div>
              <input 
                type="text" 
                className="block w-full rounded-full border border-neutral-800 bg-neutral-900 py-1.5 pl-10 pr-3 text-sm text-neutral-300 placeholder-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                placeholder="Search resources..."
              />
            </div>
            <button className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-200 md:block">
              Sign In
            </button>
            <button className="md:hidden text-neutral-400 hover:text-white">
                <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;