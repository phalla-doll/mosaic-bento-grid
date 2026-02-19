import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoItem, Category } from '../types';
import { CATEGORIES } from '../constants';
import BentoCard from './BentoCard';

interface BentoGridProps {
  items: BentoItem[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  return (
    <section className="w-full px-4 md:px-6 py-8">
      {/* Filter Bar */}
      <div className="mb-8 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Featured Projects
        </h2>
        
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar max-w-full">
            <div className="flex items-center rounded-full bg-neutral-900/50 p-1 border border-white/5 backdrop-blur-sm">
                {CATEGORIES.map((category) => (
                    <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                        selectedCategory === category
                        ? 'text-black'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                    >
                    {selectedCategory === category && (
                        <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 rounded-full bg-white"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{category}</span>
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-[280px] grid-flow-dense"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <BentoCard key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default BentoGrid;