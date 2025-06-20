'use client';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: '全部', icon: '🏠' },
  { id: 'attractions', name: '景点', icon: '🎡' },
  { id: 'food', name: '美食', icon: '🍽️' },
  { id: 'shopping', name: '购物', icon: '🛍️' },
  { id: 'activities', name: '活动', icon: '🎯' },
  { id: 'culture', name: '文化', icon: '🎨' },
  { id: 'transport', name: '交通', icon: '🚗' },
  { id: 'hotel', name: '住宿', icon: '🏨' },
];

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedCategory === category.id
              ? 'bg-vancouver-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
}
