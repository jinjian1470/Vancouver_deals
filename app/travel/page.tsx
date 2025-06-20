'use client';

import { MapPinIcon, CalendarIcon, StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const travelGuides = [
  {
    id: 1,
    title: '温哥华必游景点攻略',
    description: '探索温哥华最著名的景点，包括Stanley Park、Granville Island、Capilano吊桥等',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
    duration: '3-5天',
    rating: 4.8,
    tags: ['景点', '自然', '文化'],
    highlights: ['Stanley Park', 'Granville Island', 'Capilano吊桥', '温哥华水族馆'],
  },
  {
    id: 2,
    title: '温哥华美食之旅',
    description: '品尝温哥华最地道的美食，从海鲜到亚洲料理，应有尽有',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
    duration: '2-3天',
    rating: 4.9,
    tags: ['美食', '文化', '体验'],
    highlights: ['海鲜餐厅', '亚洲美食', '咖啡文化', '农贸市场'],
  },
  {
    id: 3,
    title: '温哥华购物指南',
    description: '发现温哥华最佳购物地点，从奢侈品到本地手工艺品',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    duration: '1-2天',
    rating: 4.6,
    tags: ['购物', '时尚', '本地特色'],
    highlights: ['Metrotown', 'Robson Street', 'Granville Island', '本地手工艺品'],
  },
  {
    id: 4,
    title: '温哥华户外活动',
    description: '体验温哥华丰富的户外活动，从徒步到滑雪',
    image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=400',
    duration: '2-4天',
    rating: 4.7,
    tags: ['户外', '运动', '自然'],
    highlights: ['Stanley Park徒步', 'Grouse Mountain', 'Whistler滑雪', '自行车道'],
  },
];

export default function TravelPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">温哥华旅游攻略</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          发现温哥华最棒的旅游体验，从必游景点到隐藏宝藏，让您的温哥华之旅更加精彩
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {travelGuides.map((guide) => (
          <div
            key={guide.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img src={guide.image} alt={guide.title} className="w-full h-64 object-cover" />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                <div className="flex items-center">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-semibold">{guide.rating}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-500">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm">{guide.duration}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPinIcon className="w-8 h-8 mr-1" />
                  <span className="text-sm">温哥华</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {guide.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">亮点景点：</h4>
                <div className="grid grid-cols-2 gap-2">
                  {guide.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/guide/${guide.id}`}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition block text-center"
              >
                查看详细攻略
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">旅游小贴士</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 mt-1">
              <span className="text-indigo-600 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">最佳旅游时间</h3>
              <p className="text-gray-600 text-sm">
                5-9月是温哥华的最佳旅游季节，天气宜人，适合户外活动
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 mt-1">
              <span className="text-indigo-600 font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">交通出行</h3>
              <p className="text-gray-600 text-sm">
                温哥华公共交通发达，建议购买Compass卡，方便乘坐公交和天车
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 mt-1">
              <span className="text-indigo-600 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">住宿推荐</h3>
              <p className="text-gray-600 text-sm">
                市中心、West End和Yaletown是热门住宿区域，交通便利
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 mt-1">
              <span className="text-indigo-600 font-bold">4</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">美食推荐</h3>
              <p className="text-gray-600 text-sm">不要错过温哥华的海鲜、亚洲美食和本地咖啡文化</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 mt-1">
              <span className="text-indigo-600 font-bold">5</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">购物建议</h3>
              <p className="text-gray-600 text-sm">
                Metrotown是最大的购物中心，Granville Island适合购买手工艺品
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 mt-1">
              <span className="text-indigo-600 font-bold">6</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">安全提醒</h3>
              <p className="text-gray-600 text-sm">
                温哥华治安良好，但仍需注意个人财物安全，特别是在旅游景点
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
