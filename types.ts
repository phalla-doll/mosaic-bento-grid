export type GridSize = 'small' | 'wide' | 'tall' | 'big';

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  size: GridSize;
  cta?: string;
  date?: string;
}

export type Category = 'All' | 'Design' | 'Development' | 'Marketing' | 'Productivity';