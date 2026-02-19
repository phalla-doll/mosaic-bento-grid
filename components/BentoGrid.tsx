import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
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
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Filter Bar */}
      <div className="mb-10 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Showcase
        </h2>
        
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar max-w-full">
            <div className="flex items-center rounded-full bg-neutral-900 p-1 border border-neutral-800">
                {CATEGORIES.map((category) => (
                    <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
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
        className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px]"
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