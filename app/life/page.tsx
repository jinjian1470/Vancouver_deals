'use client';

import { useState } from 'react';
import {
  MapPinIcon,
  CalendarIcon,
  UserIcon,
  BookOpenIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface LifeGuide {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content: string;
}

const lifeGuides: LifeGuide[] = [
  {
    id: 1,
    title: '温哥华新移民生活指南',
    description:
      '刚来温哥华？这份完整的生活指南帮你快速适应新环境，包括租房、交通、医疗、银行开户等实用信息。',
    category: '新移民',
    author: '温哥华生活达人',
    date: '2024-06-15',
    readTime: '15分钟',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400',
    tags: ['新移民', '生活', '指南', '实用'],
    content: '温哥华是加拿大最宜居的城市之一，但作为新移民，你需要了解很多生活细节...',
  },
  {
    id: 2,
    title: '温哥华公共交通完全攻略',
    description:
      '从Compass卡使用到各种交通方式，详细解析温哥华的公共交通系统，帮你省钱又便捷地出行。',
    category: '交通',
    author: '交通专家',
    date: '2024-06-14',
    readTime: '12分钟',
    image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=400',
    tags: ['交通', '公交', '天车', '省钱'],
    content: '温哥华的公共交通系统非常发达，包括天车、公交车、海上巴士等多种方式...',
  },
  {
    id: 3,
    title: '温哥华租房攻略大全',
    description: '从找房到签约，从租金到押金，详细解析温哥华租房的所有要点，避免租房陷阱。',
    category: '租房',
    author: '租房达人',
    date: '2024-06-13',
    readTime: '18分钟',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
    tags: ['租房', '攻略', '合同', '押金'],
    content: '温哥华的租房市场相对紧张，租金也较高，但通过合理的策略可以找到合适的房子...',
  },
  {
    id: 4,
    title: '温哥华医疗保健指南',
    description: '了解加拿大的医疗体系，如何申请MSP，如何选择家庭医生，以及紧急医疗的处理方法。',
    category: '医疗',
    author: '医疗顾问',
    date: '2024-06-12',
    readTime: '10分钟',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
    tags: ['医疗', 'MSP', '保险', '健康'],
    content: '加拿大的医疗体系以全民医保著称，但新移民需要了解如何正确使用这些服务...',
  },
  {
    id: 5,
    title: '温哥华银行开户指南',
    description: '五大银行对比，开户流程详解，以及如何选择最适合自己的银行账户和信用卡。',
    category: '金融',
    author: '金融专家',
    date: '2024-06-11',
    readTime: '14分钟',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400',
    tags: ['银行', '开户', '信用卡', '金融'],
    content: '在温哥华生活，银行账户是必需品。了解各大银行的特点和开户流程很重要...',
  },
  {
    id: 6,
    title: '温哥华购物省钱攻略',
    description: '从超市到商场，从折扣信息到会员卡，教你如何在温哥华购物时最大程度地省钱。',
    category: '购物',
    author: '购物达人',
    date: '2024-06-10',
    readTime: '16分钟',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    tags: ['购物', '省钱', '折扣', '会员'],
    content: '温哥华的物价相对较高，但通过合理的购物策略可以大大降低生活成本...',
  },
  {
    id: 7,
    title: '温哥华美食地图',
    description: '从本地特色到各国美食，从高档餐厅到街边小吃，带你探索温哥华的美食世界。',
    category: '美食',
    author: '美食博主',
    date: '2024-06-09',
    readTime: '20分钟',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
    tags: ['美食', '餐厅', '本地', '推荐'],
    content: '温哥华是美食天堂，这里有来自世界各地的美食，从传统加拿大菜到亚洲美食...',
  },
  {
    id: 8,
    title: '温哥华四季活动指南',
    description: '春夏秋冬，每个季节都有不同的活动和节日，让你充分体验温哥华的四季魅力。',
    category: '活动',
    author: '活动策划师',
    date: '2024-06-08',
    readTime: '22分钟',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    tags: ['活动', '节日', '四季', '体验'],
    content: '温哥华的四季分明，每个季节都有独特的活动和节日，让生活充满乐趣...',
  },
];

const categories = [
  { id: 'all', name: '全部', icon: '🏠' },
  { id: '新移民', name: '新移民', icon: '🆕' },
  { id: '交通', name: '交通', icon: '🚗' },
  { id: '租房', name: '租房', icon: '🏠' },
  { id: '医疗', name: '医疗', icon: '🏥' },
  { id: '金融', name: '金融', icon: '💰' },
  { id: '购物', name: '购物', icon: '🛍️' },
  { id: '美食', name: '美食', icon: '🍽️' },
  { id: '活动', name: '活动', icon: '🎉' },
];

export default function LifePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGuides = lifeGuides.filter((guide) => {
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesSearch =
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 页面头部 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">温哥华生活指南</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          从新移民指南到日常生活技巧，这里有你需要的所有温哥华生活信息，让你快速融入这座美丽的城市！
        </p>
      </div>

      {/* 搜索栏 */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="搜索生活指南..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <BookOpenIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">选择分类</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* 生活指南网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <div
            key={guide.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img src={guide.image} alt={guide.title} className="w-full h-48 object-cover" />
              <div className="absolute top-4 left-4">
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {guide.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <Link href={`/life/${guide.id}`} className="block">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition">
                  {guide.title}
                </h3>
              </Link>

              <p className="text-gray-600 mb-4 line-clamp-2">{guide.description}</p>

              {/* 标签 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {guide.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 文章信息 */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <UserIcon className="w-4 h-4" style={{ width: 32, height: 32 }} />
                    <span>{guide.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CalendarIcon className="w-4 h-4" style={{ width: 32, height: 32 }} />
                    <span>{guide.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <LightBulbIcon className="w-4 h-4" />
                    <span>{guide.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 空状态 */}
      {filteredGuides.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">暂无相关生活指南</div>
          <p className="text-gray-400">试试选择其他分类或搜索其他关键词</p>
        </div>
      )}
    </main>
  );
}
