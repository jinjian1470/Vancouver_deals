'use client';

import { HeartIcon, UserIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Link from 'next/link';

interface XiaohongshuItem {
  id: number;
  type: 'experience' | 'life' | 'deal';
  title: string;
  content: string;
  user?: string;
  date?: string;
  tags: string[];
  image: string;
  merchant?: string;
  discount?: string;
  validUntil?: string;
}

interface ExperienceCardProps {
  item: XiaohongshuItem;
}

export default function ExperienceCard({ item }: ExperienceCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleFavorite = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3">
          <button
            onClick={toggleFavorite}
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            {isLiked ? (
              <HeartIconSolid className="h-5 w-5 text-red-500" />
            ) : (
              <HeartIcon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            小红书
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <UserIcon className="h-4 w-4 text-gray-400" style={{ width: 32, height: 32 }} />
            <span className="text-sm text-gray-500">{item.user}</span>
          </div>
          {item.date && (
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4 text-gray-400" style={{ width: 32, height: 32 }} />
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link href={`/guide/${item.id}`} className="block">
          <button className="w-full btn-secondary">查看详细攻略</button>
        </Link>
      </div>
    </div>
  );
}
