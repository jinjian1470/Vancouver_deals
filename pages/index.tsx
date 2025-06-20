'use client';

import Head from 'next/head';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import DealGrid from '@/components/DealGrid';
import CategoryFilter from '@/components/CategoryFilter';
import ExperienceCard from '@/components/ExperienceCard';
import HotDealCard from '@/components/HotDealCard';
import { Deal } from '@/types';
import Link from 'next/link';

// 小红书内容类型
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

export default function Home() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [filteredDeals, setFilteredDeals] = useState<Deal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [xiaohongshuData, setXiaohongshuData] = useState<XiaohongshuItem[]>([]);

  useEffect(() => {
    // 模拟数据加载
    const mockDeals: Deal[] = [
      {
        id: 1,
        title: '温哥华水族馆门票8折优惠',
        description: '探索海洋世界，享受8折门票优惠，适合家庭出游',
        category: 'attractions',
        discount: '20%',
        originalPrice: 45,
        discountedPrice: 36,
        location: '温哥华市中心',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
        validUntil: '2024-12-31',
        tags: ['景点', '家庭', '教育'],
      },
      {
        id: 2,
        title: 'Granville Island美食节',
        description: '品尝当地特色美食，享受各种优惠套餐',
        category: 'food',
        discount: '15%',
        originalPrice: 80,
        discountedPrice: 68,
        location: 'Granville Island',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
        validUntil: '2024-11-30',
        tags: ['美食', '文化', '体验'],
      },
      {
        id: 3,
        title: 'Metrotown购物中心折扣',
        description: '各大品牌联合促销，最高可达7折优惠',
        category: 'shopping',
        discount: '30%',
        originalPrice: 200,
        discountedPrice: 140,
        location: 'Metrotown',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
        validUntil: '2024-12-15',
        tags: ['购物', '时尚', '折扣'],
      },
      {
        id: 4,
        title: 'Stanley Park自行车租赁',
        description: '环游Stanley Park，享受自行车租赁优惠',
        category: 'activities',
        discount: '25%',
        originalPrice: 40,
        discountedPrice: 30,
        location: 'Stanley Park',
        image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=400',
        validUntil: '2024-12-20',
        tags: ['户外', '运动', '自然'],
      },
      {
        id: 5,
        title: '温哥华艺术馆门票优惠',
        description: '欣赏世界级艺术作品，学生票享受特别优惠',
        category: 'culture',
        discount: '50%',
        originalPrice: 24,
        discountedPrice: 12,
        location: '温哥华艺术馆',
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400',
        validUntil: '2024-12-25',
        tags: ['艺术', '文化', '学生优惠'],
      },
      {
        id: 6,
        title: 'Capilano吊桥公园套票',
        description: '包含吊桥、树顶冒险和悬崖步道的完整体验',
        category: 'attractions',
        discount: '10%',
        originalPrice: 55,
        discountedPrice: 49.5,
        location: 'Capilano吊桥公园',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        validUntil: '2024-12-10',
        tags: ['景点', '自然', '冒险'],
      },
    ];

    setDeals(mockDeals);
    setFilteredDeals(mockDeals);
    setLoading(false);
  }, []);

  useEffect(() => {
    // 加载小红书数据
    const loadXiaohongshuData = async () => {
      try {
        const response = await fetch('/data/xiaohongshu.json');
        const data = await response.json();
        setXiaohongshuData(data);
      } catch (error) {
        console.error('加载小红书数据失败:', error);
      }
    };

    loadXiaohongshuData();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredDeals(deals);
    } else {
      setFilteredDeals(deals.filter((deal) => deal.category === selectedCategory));
    }
  }, [selectedCategory, deals]);

  // 筛选体验分享内容
  const experienceItems = xiaohongshuData
    .filter((item) => item.type === 'experience' || item.type === 'life')
    .slice(0, 6);

  // 筛选热门优惠内容
  const hotDealItems = xiaohongshuData.filter((item) => item.type === 'deal').slice(0, 3);

  return (
    <>
      <Head>
        <title>温哥华智慧生活 - 本地生活、团购、攻略一站式平台</title>
        <meta
          name="description"
          content="温哥华本地生活服务平台，提供团购优惠、生活攻略、美食推荐、景点门票、购物折扣等一站式服务。下载APP享受更多优惠！"
        />
        <meta
          name="keywords"
          content="温哥华,本地生活,团购,优惠,攻略,美食,景点,购物,温哥华生活,温哥华攻略"
        />
        <meta property="og:title" content="温哥华智慧生活 - 本地生活、团购、攻略一站式平台" />
        <meta
          property="og:description"
          content="温哥华本地生活服务平台，提供团购优惠、生活攻略、美食推荐、景点门票、购物折扣等一站式服务。"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://vancouver-deals.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="温哥华智慧生活 - 本地生活、团购、攻略一站式平台" />
        <meta
          name="twitter:description"
          content="温哥华本地生活服务平台，提供团购优惠、生活攻略、美食推荐、景点门票、购物折扣等一站式服务。"
        />
        <meta name="twitter:image" content="/logo.png" />
        <link rel="canonical" href="https://vancouver-deals.com" />
      </Head>

      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 下载APP按钮 */}
        <div className="flex justify-center mb-6">
          <a
            href="https://your-app-download-link.com" // 替换为你的App Store/TestFlight/apk下载地址
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition text-lg font-bold"
          >
            下载APP
          </a>
        </div>

        {/* 体验分享板块 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">体验分享</h2>
              <p className="text-gray-600">来自小红书用户的真实体验和感悟</p>
            </div>
            <Link href="/life" className="text-indigo-600 hover:text-indigo-500 font-medium">
              查看更多 →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceItems.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 热门优惠板块 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">热门优惠</h2>
              <p className="text-gray-600">精选热门团购和优惠信息</p>
            </div>
            <Link href="/deals" className="text-indigo-600 hover:text-indigo-500 font-medium">
              查看更多 →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotDealItems.map((item) => (
              <HotDealCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 分类筛选 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">精选优惠</h2>
              <p className="text-gray-600">按类别浏览最新优惠信息</p>
            </div>
            <Link href="/deals" className="text-indigo-600 hover:text-indigo-500 font-medium">
              查看全部 →
            </Link>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            <DealGrid deals={filteredDeals} />
          )}
        </section>
      </main>
    </>
  );
}
