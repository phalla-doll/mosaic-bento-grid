import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import { BentoItem } from '../types';

interface BentoCardProps {
  item: BentoItem;
}

const BentoCard: React.FC<BentoCardProps> = ({ item }) => {
  // Determine grid spans based on size prop
  const getSpanClasses = (size: BentoItem['size']) => {
    switch (size) {
      case 'big':
        return 'md:col-span-2 md:row-span-2';
      case 'wide':
        return 'md:col-span-2 md:row-span-1';
      case 'tall':
        return 'md:col-span-1 md:row-span-2';
      case 'small':
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 ${getSpanClasses(
        item.size
      )}`}
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <div className="flex items-start justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-md">
            <Tag size={12} className="mr-1.5" />
            {item.category}
          </span>
          <button className="rounded-full bg-white p-2 text-black transition-transform hover:scale-110">
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="mt-auto transform transition-transform duration-300 group-hover:-translate-y-2">
           {item.date && (
            <div className="mb-2 flex items-center text-xs text-neutral-400">
              <Calendar size={12} className="mr-1.5" />
              {item.date}
            </div>
          )}
          <h3 className="text-xl font-semibold text-white md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-400 line-clamp-2 group-hover:text-neutral-200">
            {item.description}
          </p>
          
          {item.cta && (
            <div className="mt-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
              <span className="text-sm font-medium text-blue-400 hover:text-blue-300 cursor-pointer">
                {item.cta} &rarr;
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BentoCard;