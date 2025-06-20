'use client';

import { Deal } from '@/types';
import { HeartIcon, MapPinIcon, CalendarIcon, TagIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Link from 'next/link';

interface DealGridProps {
  deals: Deal[];
}

export default function DealGrid({ deals }: DealGridProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (dealId: number) => {
    setFavorites((prev) =>
      prev.includes(dealId) ? prev.filter((id) => id !== dealId) : [...prev, dealId],
    );
  };

  if (deals.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">暂无优惠信息</div>
        <p className="text-gray-400 mt-2">请稍后再来查看最新优惠</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {deals.map((deal) => (
        <div key={deal.id} className="card overflow-hidden">
          <div className="relative">
            <img src={deal.image} alt={deal.title} className="w-full h-48 object-cover" />
            <div className="absolute top-3 right-3">
              <button
                onClick={() => toggleFavorite(deal.id)}
                className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                {favorites.includes(deal.id) ? (
                  <HeartIconSolid className="h-5 w-5 text-red-500" />
                ) : (
                  <HeartIcon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
            <div className="absolute top-3 left-3">
              <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                {deal.discount} OFF
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{deal.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{deal.description}</p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="w-8 h-8 text-gray-400" />
                <span className="text-sm text-gray-500">{deal.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">有效期至 {deal.validUntil}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-vancouver-600">
                  ${deal.discountedPrice}
                </span>
                <span className="text-gray-400 line-through">${deal.originalPrice}</span>
              </div>
              <span className="text-sm text-gray-500">
                节省 ${(deal.originalPrice - deal.discountedPrice).toFixed(2)}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {deal.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-vancouver-100 text-vancouver-800"
                >
                  <TagIcon className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <Link href={`/deal/${deal.id}`} className="w-full btn-primary block text-center">
              查看详情
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
