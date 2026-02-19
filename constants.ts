import { BentoItem } from './types';

export const CATEGORIES = ['All', 'Design', 'Development', 'Marketing', 'Productivity'] as const;

export const ITEMS: BentoItem[] = [
  {
    id: '1',
    title: 'Lumina Interface',
    description: 'Next-gen dashboard analytics with real-time data processing capabilities.',
    category: 'Design',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    size: 'wide',
    cta: 'View Dashboard',
    date: 'Oct 24, 2023'
  },
  {
    id: '2',
    title: 'Abstract Geometric',
    description: 'A collection of 3D rendered shapes for modern web layouts.',
    category: 'Design',
    imageUrl: 'https://picsum.photos/600/800?random=2',
    size: 'tall',
    date: 'Nov 02, 2023'
  },
  {
    id: '3',
    title: 'Code Snippets',
    description: 'Optimized React hooks library.',
    category: 'Development',
    imageUrl: 'https://picsum.photos/400/400?random=3',
    size: 'small',
    cta: 'Get Code'
  },
  {
    id: '4',
    title: 'Marketing Kit',
    description: 'Social media templates.',
    category: 'Marketing',
    imageUrl: 'https://picsum.photos/400/400?random=4',
    size: 'small'
  },
  {
    id: '5',
    title: 'Task Master 3.0',
    description: 'The ultimate productivity suite for remote teams. Now with AI integration.',
    category: 'Productivity',
    imageUrl: 'https://picsum.photos/800/800?random=5',
    size: 'big',
    cta: 'Try Beta',
    date: 'Just Launched'
  },
  {
    id: '6',
    title: 'Neon Icons',
    description: 'Glowing SVG icons.',
    category: 'Design',
    imageUrl: 'https://picsum.photos/400/400?random=6',
    size: 'small'
  },
  {
    id: '7',
    title: 'Server Stats',
    description: 'Monitor your infrastructure.',
    category: 'Development',
    imageUrl: 'https://picsum.photos/400/400?random=7',
    size: 'small'
  },
  {
    id: '8',
    title: 'Gradient Pack',
    description: 'High-fidelity mesh gradients for backgrounds.',
    category: 'Design',
    imageUrl: 'https://picsum.photos/800/400?random=8',
    size: 'wide',
    cta: 'Download'
  },
  {
    id: '9',
    title: 'Mobile Layouts',
    description: 'Responsive primitives for iOS and Android web apps.',
    category: 'Development',
    imageUrl: 'https://picsum.photos/400/800?random=9',
    size: 'tall'
  },
  {
    id: '10',
    title: 'Analytics Pro',
    description: 'Deep dive into user behavior.',
    category: 'Marketing',
    imageUrl: 'https://picsum.photos/400/400?random=10',
    size: 'small'
  },
  {
    id: '11',
    title: 'Flow Charts',
    description: 'Visualizing complex logic.',
    category: 'Productivity',
    imageUrl: 'https://picsum.photos/400/400?random=11',
    size: 'small'
  },
  {
    id: '12',
    title: 'User Personas',
    description: 'Detailed user archetype cards.',
    category: 'Marketing',
    imageUrl: 'https://picsum.photos/400/400?random=12',
    size: 'small'
  }
];