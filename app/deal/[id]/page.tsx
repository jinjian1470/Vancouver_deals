export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
  ];
}

import Footer from '@/components/Footer';
import {
  MapPinIcon,
  CalendarIcon,
  TagIcon,
  FireIcon,
  ShareIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

interface DealDetail {
  id: string;
  title: string;
  description: string;
  merchant: string;
  discount: string;
  originalPrice: number;
  discountedPrice: number;
  location: string;
  image: string;
  validUntil: string;
  tags: string[];
  contact: string;
  website: string;
  terms: string[];
  howToUse: string[];
}

const dealData: Record<string, DealDetail> = {
  '1': {
    id: '1',
    title: '温哥华水族馆门票8折优惠',
    description:
      '探索海洋世界，享受8折门票优惠，适合家庭出游。学生证还能再减5刀，记得提前在官网预约！',
    merchant: '温哥华水族馆',
    discount: '20%',
    originalPrice: 45,
    discountedPrice: 36,
    location: '温哥华市中心',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    validUntil: '2024-12-31',
    tags: ['景点', '家庭', '教育', '学生优惠'],
    contact: '+1 (604) 659-3474',
    website: 'https://www.vanaqua.org',
    terms: [
      '需要提前在官网预约',
      '学生证可享受额外5刀优惠',
      '优惠不可与其他促销同时使用',
      '门票不可退换',
      '建议提前30分钟到达',
    ],
    howToUse: [
      '访问温哥华水族馆官网',
      '选择参观日期和时间',
      '输入优惠码：VANCOUVER20',
      '完成在线支付',
      '收到确认邮件',
      '当天凭邮件和身份证件入场',
    ],
  },
  '2': {
    id: '2',
    title: 'Granville Island美食节',
    description:
      '品尝当地特色美食，享受各种优惠套餐。包含前菜、主菜和甜点，是约会和家庭聚餐的绝佳选择。',
    merchant: 'Granville Island',
    discount: '15%',
    originalPrice: 80,
    discountedPrice: 68,
    location: 'Granville Island',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    validUntil: '2024-11-30',
    tags: ['美食', '文化', '体验', '团购'],
    contact: '',
    website: 'https://www.granvilleisland.com',
    terms: ['套餐包含前菜、主菜和甜点', '饮料另收费', '不可与其他优惠同时使用'],
    howToUse: ['在官网或现场购买套餐', '享受美食体验'],
  },
  '3': {
    id: '3',
    title: 'Metrotown购物中心折扣',
    description:
      '各大品牌联合促销，最高可达7折优惠。建议平日去人少还能慢慢逛，这是温哥华最大的购物中心。',
    merchant: 'Metrotown',
    discount: '30%',
    originalPrice: 200,
    discountedPrice: 140,
    location: 'Metrotown',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    validUntil: '2024-12-15',
    tags: ['购物', '时尚', '折扣', '品牌'],
    contact: '',
    website: 'https://www.metrotown.com',
    terms: ['部分品牌参与活动', '折扣力度因品牌而异', '库存有限，先到先得'],
    howToUse: ['到店出示优惠信息', '享受折扣'],
  },
  '4': {
    id: '4',
    title: 'Stanley Park自行车租赁',
    description:
      '环游Stanley Park，享受自行车租赁优惠。全程约10公里，是体验温哥华自然风光的绝佳方式。',
    merchant: 'Stanley Park',
    discount: '25%',
    originalPrice: 40,
    discountedPrice: 30,
    location: 'Stanley Park',
    image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=800',
    validUntil: '2024-12-20',
    tags: ['户外', '运动', '自然', '骑行'],
    contact: '',
    website: '',
    terms: ['需现场租赁', '数量有限'],
    howToUse: ['到租赁点出示优惠信息', '租赁自行车'],
  },
  '5': {
    id: '5',
    title: '温哥华艺术馆门票优惠',
    description: '欣赏世界级艺术作品，学生票享受特别优惠。这里收藏了众多加拿大和国际艺术家的作品。',
    merchant: '温哥华艺术馆',
    discount: '50%',
    originalPrice: 24,
    discountedPrice: 12,
    location: '温哥华艺术馆',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
    validUntil: '2024-12-25',
    tags: ['艺术', '文化', '学生优惠', '展览'],
    contact: '',
    website: 'https://www.vanartgallery.bc.ca',
    terms: ['学生票需出示学生证', '不可与其他优惠同时使用'],
    howToUse: ['现场购票', '出示学生证'],
  },
  '6': {
    id: '6',
    title: 'Capilano吊桥公园套票',
    description: '包含吊桥、树顶冒险和悬崖步道的完整体验。世界著名的Capilano吊桥，刺激又安全。',
    merchant: 'Capilano吊桥公园',
    discount: '10%',
    originalPrice: 55,
    discountedPrice: 49.5,
    location: 'Capilano吊桥公园',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    validUntil: '2024-12-10',
    tags: ['景点', '自然', '冒险', '刺激'],
    contact: '',
    website: 'https://www.capbridge.com',
    terms: ['门票不可退换', '不可与其他优惠同时使用'],
    howToUse: ['官网购票', '现场出示门票'],
  },
  '7': {
    id: '7',
    title: '温哥华科学馆优惠',
    description: '探索科学奥秘，享受家庭套票优惠。这里有各种互动展览，适合带孩子一起学习。',
    merchant: '温哥华科学馆',
    discount: '25%',
    originalPrice: 60,
    discountedPrice: 45,
    location: '温哥华科学馆',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
    validUntil: '2024-12-30',
    tags: ['教育', '科学', '家庭', '互动'],
    contact: '',
    website: 'https://www.scienceworld.ca',
    terms: ['家庭套票需2大2小', '不可与其他优惠同时使用'],
    howToUse: ['官网购票', '现场出示门票'],
  },
  '8': {
    id: '8',
    title: '温哥华植物园年票',
    description:
      '全年无限次访问植物园，享受四季不同的美景。春季樱花、夏季玫瑰、秋季枫叶、冬季温室。',
    merchant: '温哥华植物园',
    discount: '40%',
    originalPrice: 50,
    discountedPrice: 30,
    location: '温哥华植物园',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    validUntil: '2024-12-31',
    tags: ['自然', '植物', '四季', '年票'],
    contact: '',
    website: 'https://vandusengarden.org',
    terms: ['年票仅限本人使用'],
    howToUse: ['官网购票', '现场出示年票'],
  },
  '9': {
    id: '9',
    title: '温哥华电影票优惠',
    description: '各大影院联合促销，学生和老年人享受特别优惠。IMAX、3D电影都有折扣。',
    merchant: '温哥华各大影院',
    discount: '20%',
    originalPrice: 15,
    discountedPrice: 12,
    location: '温哥华各大影院',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800',
    validUntil: '2024-12-31',
    tags: ['娱乐', '电影', '学生优惠', 'IMAX'],
    contact: '',
    website: '',
    terms: ['需出示学生证或老年卡', '不可与其他优惠同时使用'],
    howToUse: ['现场购票', '出示证件'],
  },
  '10': {
    id: '10',
    title: '温哥华健身房会员',
    description: '多家健身房联合促销，新会员享受首月免费。包含器械、课程、游泳池等设施。',
    merchant: '温哥华各大健身房',
    discount: '首月免费',
    originalPrice: 80,
    discountedPrice: 0,
    location: '温哥华各大健身房',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    validUntil: '2024-12-31',
    tags: ['健身', '运动', '会员', '免费试用'],
    contact: '',
    website: '',
    terms: ['仅限新会员', '不可与其他优惠同时使用'],
    howToUse: ['现场办理会员', '享受首月免费'],
  },
};

export default function DealDetailPage({ params }: { params: { id: string } }) {
  const deal = dealData[params.id];

  if (!deal) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vancouver-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                优惠活动
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{deal.validUntil} 截止</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
                disabled
              >
                <ShareIcon className="h-5 w-5" />
                <span>分享</span>
              </button>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{deal.title}</h1>
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{deal.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{deal.validUntil} 截止</span>
            </div>
            <div className="flex items-center space-x-2">
              <TagIcon className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{deal.discount} 优惠</span>
            </div>
          </div>
          <img
            src={deal.image}
            alt={deal.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">{deal.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {deal.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-6">
            <div className="font-bold mb-2">
              原价：<span className="line-through text-gray-400">￥{deal.originalPrice}</span>{' '}
              <span className="ml-4 text-green-600">现价：￥{deal.discountedPrice}</span>
            </div>
            <div className="mb-2">商户：{deal.merchant}</div>
            {deal.contact && (
              <div className="mb-2 flex items-center">
                <PhoneIcon className="h-5 w-5 mr-1 text-gray-400" />
                {deal.contact}
              </div>
            )}
            {deal.website && (
              <div className="mb-2">
                <a
                  href={deal.website}
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline"
                >
                  商户官网
                </a>
              </div>
            )}
          </div>
          <div className="mb-6">
            <h3 className="font-bold mb-2">使用说明</h3>
            <ul className="list-disc pl-6">
              {deal.howToUse.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-bold mb-2">活动条款</h3>
            <ul className="list-disc pl-6">
              {deal.terms.map((term, idx) => (
                <li key={idx}>{term}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
