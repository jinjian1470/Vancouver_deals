'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理搜索逻辑
    console.log('搜索:', searchQuery);
  };

  return (
    <div className="relative bg-gradient-to-r from-vancouver-600 to-vancouver-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200"
          alt="温哥华风景"
        />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">发现温哥华</span>
            <span className="block text-vancouver-200">最佳优惠信息</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-vancouver-100">
            探索温哥华最棒的旅游景点、美食餐厅、购物中心和娱乐活动，享受独家优惠折扣
          </p>

          <div className="mt-10 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon
                  className="w-8 h-8 text-gray-400 absolute left-3 top-3"
                  style={{ width: 32, height: 32 }}
                />
                <input
                  type="text"
                  placeholder="搜索优惠信息、景点、餐厅..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-vancouver-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                搜索
              </button>
            </form>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-vancouver-200">
            <div className="flex items-center">
              <MapPinIcon className="w-8 h-8 mr-1" style={{ width: 32, height: 32 }} />
              <span>温哥华市中心</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-8 h-8 mr-1" style={{ width: 32, height: 32 }} />
              <span>Granville Island</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-8 h-8 mr-1" style={{ width: 32, height: 32 }} />
              <span>Stanley Park</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-8 h-8 mr-1" style={{ width: 32, height: 32 }} />
              <span>Metrotown</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
