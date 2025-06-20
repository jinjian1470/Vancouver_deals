'use client';

import { useState, useEffect } from 'react';
import CategoryFilter from '@/components/CategoryFilter';
import DealGrid from '@/components/DealGrid';
import { Deal } from '@/types';

export default function DealsPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [filteredDeals, setFilteredDeals] = useState<Deal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟数据加载
    const mockDeals: Deal[] = [
      {
        id: 1,
        title: '温哥华水族馆门票8折优惠',
        description:
          '探索海洋世界，享受8折门票优惠，适合家庭出游。学生证还能再减5刀，记得提前在官网预约！',
        category: 'attractions',
        discount: '20%',
        originalPrice: 45,
        discountedPrice: 36,
        location: '温哥华市中心',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
        validUntil: '2024-12-31',
        tags: ['景点', '家庭', '教育', '学生优惠'],
      },
      {
        id: 2,
        title: 'Granville Island美食节',
        description:
          '品尝当地特色美食，享受各种优惠套餐。包含前菜、主菜和甜点，是约会和家庭聚餐的绝佳选择。',
        category: 'food',
        discount: '15%',
        originalPrice: 80,
        discountedPrice: 68,
        location: 'Granville Island',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
        validUntil: '2024-11-30',
        tags: ['美食', '文化', '体验', '团购'],
      },
      {
        id: 3,
        title: 'Metrotown购物中心折扣',
        description:
          '各大品牌联合促销，最高可达7折优惠。建议平日去人少还能慢慢逛，这是温哥华最大的购物中心。',
        category: 'shopping',
        discount: '30%',
        originalPrice: 200,
        discountedPrice: 140,
        location: 'Metrotown',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
        validUntil: '2024-12-15',
        tags: ['购物', '时尚', '折扣', '品牌'],
      },
      {
        id: 4,
        title: 'Stanley Park自行车租赁',
        description:
          '环游Stanley Park，享受自行车租赁优惠。全程约10公里，是体验温哥华自然风光的绝佳方式。',
        category: 'activities',
        discount: '25%',
        originalPrice: 40,
        discountedPrice: 30,
        location: 'Stanley Park',
        image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=400',
        validUntil: '2024-12-20',
        tags: ['户外', '运动', '自然', '骑行'],
      },
      {
        id: 5,
        title: '温哥华艺术馆门票优惠',
        description:
          '欣赏世界级艺术作品，学生票享受特别优惠。这里收藏了众多加拿大和国际艺术家的作品。',
        category: 'culture',
        discount: '50%',
        originalPrice: 24,
        discountedPrice: 12,
        location: '温哥华艺术馆',
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400',
        validUntil: '2024-12-25',
        tags: ['艺术', '文化', '学生优惠', '展览'],
      },
      {
        id: 6,
        title: 'Capilano吊桥公园套票',
        description: '包含吊桥、树顶冒险和悬崖步道的完整体验。世界著名的Capilano吊桥，刺激又安全。',
        category: 'attractions',
        discount: '10%',
        originalPrice: 55,
        discountedPrice: 49.5,
        location: 'Capilano吊桥公园',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        validUntil: '2024-12-10',
        tags: ['景点', '自然', '冒险', '刺激'],
      },
      {
        id: 7,
        title: '温哥华科学馆优惠',
        description: '探索科学奥秘，享受家庭套票优惠。这里有各种互动展览，适合带孩子一起学习。',
        category: 'education',
        discount: '25%',
        originalPrice: 60,
        discountedPrice: 45,
        location: '温哥华科学馆',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400',
        validUntil: '2024-12-30',
        tags: ['教育', '科学', '家庭', '互动'],
      },
      {
        id: 8,
        title: '温哥华植物园年票',
        description:
          '全年无限次访问植物园，享受四季不同的美景。春季樱花、夏季玫瑰、秋季枫叶、冬季温室。',
        category: 'nature',
        discount: '40%',
        originalPrice: 50,
        discountedPrice: 30,
        location: '温哥华植物园',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
        validUntil: '2024-12-31',
        tags: ['自然', '植物', '四季', '年票'],
      },
      {
        id: 9,
        title: '温哥华电影票优惠',
        description: '各大影院联合促销，学生和老年人享受特别优惠。IMAX、3D电影都有折扣。',
        category: 'entertainment',
        discount: '20%',
        originalPrice: 15,
        discountedPrice: 12,
        location: '温哥华各大影院',
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400',
        validUntil: '2024-12-31',
        tags: ['娱乐', '电影', '学生优惠', 'IMAX'],
      },
      {
        id: 10,
        title: '温哥华健身房会员',
        description: '多家健身房联合促销，新会员享受首月免费。包含器械、课程、游泳池等设施。',
        category: 'fitness',
        discount: '首月免费',
        originalPrice: 80,
        discountedPrice: 0,
        location: '温哥华各大健身房',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
        validUntil: '2024-12-31',
        tags: ['健身', '运动', '会员', '免费试用'],
      },
    ];

    setDeals(mockDeals);
    setFilteredDeals(mockDeals);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredDeals(deals);
    } else {
      setFilteredDeals(deals.filter((deal) => deal.category === selectedCategory));
    }
  }, [selectedCategory, deals]);

  const categories = [
    { id: 'all', name: '全部', icon: '🏠' },
    { id: 'attractions', name: '景点', icon: '🎡' },
    { id: 'food', name: '美食', icon: '🍽️' },
    { id: 'shopping', name: '购物', icon: '🛍️' },
    { id: 'activities', name: '活动', icon: '🎯' },
    { id: 'culture', name: '文化', icon: '🎨' },
    { id: 'education', name: '教育', icon: '📚' },
    { id: 'nature', name: '自然', icon: '🌲' },
    { id: 'entertainment', name: '娱乐', icon: '🎬' },
    { id: 'fitness', name: '健身', icon: '💪' },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 页面头部 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">温哥华优惠信息</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          发现温哥华最优惠的景点门票、美食折扣、购物优惠和活动信息，让您的温哥华之旅更加精彩实惠！
        </p>
      </div>

      {/* 分类筛选 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">按类别筛选</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedCategory === category.id
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-25'
              }`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="font-medium">{category.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* 优惠信息展示 */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory === 'all'
              ? '全部优惠'
              : categories.find((c) => c.id === selectedCategory)?.name + '优惠'}
          </h2>
          <div className="text-sm text-gray-500">共 {filteredDeals.length} 个优惠</div>
        </div>

        <DealGrid deals={filteredDeals} />
      </div>
    </main>
  );
}
