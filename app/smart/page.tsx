'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { smartProducts, smartCategories } from './data';
import { addToCart } from './cartUtils';
import type { Product } from '../../types';

// 获取所有标签
const allTags = Array.from(new Set(smartProducts.flatMap((p) => p.tags)));

export default function SmartHome() {
  const [added, setAdded] = useState<number | null>(null);
  const [category, setCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleAddToCart = (product: Product) => {
    addToCart(product.id, 1);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1000);
  };

  // 标签多选切换
  const toggleTag = (tag: string) => {
    setSelectedTags((tags) =>
      tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag],
    );
  };

  // 分类和标签筛选
  const filtered = smartProducts.filter((p) => {
    const matchCategory = category === 'all' ? true : p.category === category;
    const matchTags =
      selectedTags.length === 0 ? true : selectedTags.every((tag) => p.tags.includes(tag));
    return matchCategory && matchTags;
  });

  return (
    <>
      <Head>
        <title>智慧生活商城 - 智能家居、AI设备、节能产品 | 温哥华智慧生活</title>
        <meta
          name="description"
          content="智慧生活商城提供智能音箱、智能灯泡、智能门锁等智能家居产品，支持AI控制、节能环保，让生活更智能便捷。"
        />
        <meta
          name="keywords"
          content="智能家居,智能音箱,智能灯泡,智能门锁,AI设备,节能产品,温哥华智能家居"
        />
        <meta property="og:title" content="智慧生活商城 - 智能家居、AI设备、节能产品" />
        <meta
          property="og:description"
          content="智慧生活商城提供智能音箱、智能灯泡、智能门锁等智能家居产品，支持AI控制、节能环保。"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://vancouver-deals.com/smart" />
        <link rel="canonical" href="https://vancouver-deals.com/smart" />
      </Head>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-indigo-700 text-center">智慧生活商城</h1>
        {/* 分类筛选区 */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {smartCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-1 rounded-full border transition text-sm font-medium ${category === cat.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        {/* 标签多选筛选区 */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full border transition text-xs font-medium ${selectedTags.includes(tag) ? 'bg-indigo-100 text-indigo-700 border-indigo-400' : 'bg-white text-indigo-500 border-indigo-100 hover:bg-indigo-50'}`}
            >
              {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="ml-2 px-3 py-1 rounded-full border text-xs text-gray-500 bg-gray-50 hover:bg-gray-100"
            >
              清除标签
            </button>
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link
            href="/smart/orders"
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition text-center"
          >
            订单历史
          </Link>
          <Link
            href="/smart/cart"
            className="flex-1 px-4 py-2 bg-gray-100 text-indigo-700 rounded shadow hover:bg-indigo-200 transition text-center"
          >
            购物车
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center bg-white"
            >
              <img
                src={product.image || '/default.png'}
                alt={product.name}
                className="w-28 h-28 object-cover rounded mb-4"
              />
              <div className="font-bold text-lg mb-2 text-center">{product.name}</div>
              <div className="text-indigo-600 font-bold mb-2">￥{product.price}</div>
              <div className="flex flex-wrap gap-1 mb-2">
                {product.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className={`mt-auto px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition w-full ${added === product.id ? 'opacity-60' : ''}`}
                disabled={added === product.id}
              >
                {added === product.id ? '已加入' : '加入购物车'}
              </button>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-gray-400 py-12">暂无符合条件的商品</div>
        )}
      </div>
    </>
  );
}
