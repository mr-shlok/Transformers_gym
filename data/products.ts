export interface GymProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  features: string[];
}

export const gymProducts: GymProduct[] = [
  {
    id: 'dumbbell-pro',
    name: 'Pro Hex Dumbbell',
    description: 'Heavy-duty premium dumbbells engineered for elite strength training and durability.',
    price: '$129',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1637666217646-0ce8a47ba9ba?q=80&w=1470&auto=format&fit=crop',
    features: ['Steel Grip', 'Anti-Slip', 'Premium Finish']
  },
  {
    id: 'barbell-x',
    name: 'Olympic Barbell',
    description: 'Professional Olympic barbell crafted for explosive compound movements and maximum performance.',
    price: '$249',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
    features: ['Olympic Grade', 'High Tensile Steel', 'Balanced Rotation']
  },
  {
    id: 'kettlebell-elite',
    name: 'Elite Kettlebell',
    description: 'Precision-balanced kettlebells designed for endurance and functional fitness.',
    price: '$89',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1471&auto=format&fit=crop',
    features: ['Powder Coated', 'Ergonomic Grip', 'Competition Design']
  }
];
