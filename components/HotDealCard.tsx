'use client';

import { FireIcon, CalendarIcon, TagIcon } from '@heroicons/react/24/outline';
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

interface HotDealCardProps {
  item: XiaohongshuItem;
}

export default function HotDealCard({ item }: HotDealCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="card overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3">
          <button
            onClick={toggleSave}
            className={`p-2 rounded-full shadow-md hover:shadow-lg transition-shadow ${
              isSaved ? 'bg-yellow-500 text-white' : 'bg-white text-gray-600'
            }`}
          >
            <FireIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            小红书
          </span>
        </div>
        {item.discount && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-green-500 text-white px-3 py-1 rounded text-sm font-bold">
              {item.discount}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>

        {item.merchant && (
          <div className="mb-4">
            <span className="text-sm text-gray-500">商家：</span>
            <span className="text-sm font-medium text-gray-900">{item.merchant}</span>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          {item.validUntil && (
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-500">有效期至 {item.validUntil}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
            >
              <TagIcon className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <Link href={`/deal/${item.id}`} className="block">
          <button className="w-full btn-primary">立即抢购</button>
        </Link>
      </div>
    </div>
  );
}
