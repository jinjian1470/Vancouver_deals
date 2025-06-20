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
  ];
}

import Footer from '@/components/Footer';
import { CalendarIcon, UserIcon, LightBulbIcon } from '@heroicons/react/24/outline';

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
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
    tags: ['新移民', '生活', '指南', '实用'],
    content: `# 温哥华新移民生活指南\n\n欢迎来到温哥华！本指南将帮助你快速适应新环境，包括租房、交通、医疗、银行开户等实用信息。\n\n## 1. 租房\n- 推荐网站：Craigslist、Facebook Marketplace、租房中介\n- 注意事项：签约前实地看房，确认押金和合同条款\n\n## 2. 交通\n- Compass卡办理：天车站或官网\n- 公共交通：天车、公交、海上巴士\n- 省钱技巧：购买月票、学生卡优惠\n\n## 3. 医疗\n- 申请MSP医疗保险\n- 选择家庭医生\n- 紧急医疗：拨打911\n\n## 4. 银行开户\n- 五大银行：RBC、TD、BMO、CIBC、Scotiabank\n- 需要证件：护照、工签/学签、住址证明\n\n## 5. 生活小贴士\n- 超市会员卡省钱\n- 多参加社区活动结识朋友\n- 关注天气变化，合理穿衣\n\n祝你在温哥华生活愉快！`,
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
    image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=800',
    tags: ['交通', '公交', '天车', '省钱'],
    content: `# 温哥华公共交通完全攻略\n\n## 1. 交通方式\n- 天车（SkyTrain）：三条主线覆盖大部分城区\n- 公交（Bus）：线路密集，班次频繁\n- 海上巴士（SeaBus）：连接市区与北温\n\n## 2. Compass卡\n- 办理地点：天车站、官网\n- 充值方式：自动充值、便利店充值\n- 月票/日票：适合通勤族和游客\n\n## 3. 省钱技巧\n- 学生/老年人优惠\n- 购买月票更划算\n- 合理规划换乘\n\n## 4. 实用建议\n- 下载TransLink App实时查车\n- 注意高峰期拥挤\n- 保管好个人物品`,
  },
  {
    id: 3,
    title: '温哥华租房攻略大全',
    description: '从找房到签约，从租金到押金，详细解析温哥华租房的所有要点，避免租房陷阱。',
    category: '租房',
    author: '租房达人',
    date: '2024-06-13',
    readTime: '18分钟',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    tags: ['租房', '攻略', '合同', '押金'],
    content: `# 温哥华租房攻略大全\n\n## 1. 找房渠道\n- Craigslist、Kijiji、Facebook群组\n- 租房中介、朋友推荐\n\n## 2. 签约注意事项\n- 仔细阅读合同条款\n- 明确押金金额和退还条件\n- 检查房屋设施并拍照留证\n\n## 3. 租金与费用\n- 市区租金较高，郊区相对便宜\n- 水电网费有时需自理\n\n## 4. 防止租房陷阱\n- 不要提前支付大额押金\n- 谨防虚假房源\n- 通过正规渠道签约`,
  },
  {
    id: 4,
    title: '温哥华医疗保健指南',
    description: '了解加拿大的医疗体系，如何申请MSP，如何选择家庭医生，以及紧急医疗的处理方法。',
    category: '医疗',
    author: '医疗顾问',
    date: '2024-06-12',
    readTime: '10分钟',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
    tags: ['医疗', 'MSP', '保险', '健康'],
    content: `# 温哥华医疗保健指南\n\n## 1. MSP医疗保险\n- 新移民需尽快申请\n- 覆盖大部分基础医疗服务\n\n## 2. 家庭医生\n- 建议尽早注册\n- 家庭医生可转诊专科\n\n## 3. 紧急医疗\n- 拨打911\n- 就近前往急诊室\n\n## 4. 其他医疗资源\n- 社区诊所\n- 药房咨询服务`,
  },
  {
    id: 5,
    title: '温哥华银行开户指南',
    description: '五大银行对比，开户流程详解，以及如何选择最适合自己的银行账户和信用卡。',
    category: '金融',
    author: '金融专家',
    date: '2024-06-11',
    readTime: '14分钟',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    tags: ['银行', '开户', '信用卡', '金融'],
    content: `# 温哥华银行开户指南\n\n## 1. 主流银行\n- RBC、TD、BMO、CIBC、Scotiabank\n\n## 2. 开户所需材料\n- 护照、工签/学签、住址证明\n\n## 3. 信用卡申请\n- 新移民可申请新移民信用卡\n- 注意年费和积分政策\n\n## 4. 账户类型选择\n- 日常账户、储蓄账户、学生账户\n- 根据需求选择合适账户`,
  },
  {
    id: 6,
    title: '温哥华购物省钱攻略',
    description: '从超市到商场，从折扣信息到会员卡，教你如何在温哥华购物时最大程度地省钱。',
    category: '购物',
    author: '购物达人',
    date: '2024-06-10',
    readTime: '16分钟',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    tags: ['购物', '省钱', '折扣', '会员'],
    content: `# 温哥华购物省钱攻略\n\n## 1. 超市省钱\n- 关注每周特价\n- 办理会员卡享受积分\n\n## 2. 商场折扣\n- 关注季末大促\n- 参加团购活动\n\n## 3. 购物小贴士\n- 多比价，货比三家\n- 关注本地折扣信息网站`,
  },
  {
    id: 7,
    title: '温哥华美食地图',
    description: '从本地特色到各国美食，从高档餐厅到街边小吃，带你探索温哥华的美食世界。',
    category: '美食',
    author: '美食博主',
    date: '2024-06-09',
    readTime: '20分钟',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    tags: ['美食', '餐厅', '本地', '推荐'],
    content: `# 温哥华美食地图\n\n## 1. 本地特色\n- 三文鱼、龙虾卷、枫糖浆甜品\n\n## 2. 各国美食\n- 中餐、日料、韩餐、意大利餐厅\n- 推荐：Richmond中餐、Downtown日料\n\n## 3. 美食小贴士\n- 关注美食节和团购\n- 试试本地咖啡馆和甜品店`,
  },
  {
    id: 8,
    title: '温哥华四季活动指南',
    description: '春夏秋冬，每个季节都有不同的活动和节日，让你充分体验温哥华的四季魅力。',
    category: '活动',
    author: '活动策划师',
    date: '2024-06-08',
    readTime: '22分钟',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    tags: ['活动', '节日', '四季', '体验'],
    content: `# 温哥华四季活动指南\n\n## 春季\n- 赏樱花、农夫市集、户外徒步\n\n## 夏季\n- 海滩烧烤、音乐节、户外运动\n\n## 秋季\n- 枫叶观赏、南瓜节、葡萄酒品鉴\n\n## 冬季\n- 滑雪、圣诞集市、温泉体验\n\n## 活动小贴士\n- 提前查好活动时间\n- 关注天气变化，合理安排行程`,
  },
];

export default function LifeGuideDetailPage({ params }: { params: { id: string } }) {
  const guide = lifeGuides.find((g) => g.id === Number(params.id));

  if (!guide) {
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
              <span className="bg-vancouver-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {guide.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{guide.date}</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{guide.title}</h1>
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <UserIcon className="h-5 w-5 text-gray-400" style={{ width: 32, height: 32 }} />
              <span className="text-gray-600">{guide.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-400" style={{ width: 32, height: 32 }} />
              <span className="text-gray-600">{guide.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <LightBulbIcon className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{guide.readTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {guide.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-vancouver-100 text-vancouver-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="prose prose-lg max-w-none">
            {guide.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.substring(2)}
                  </h1>
                );
              } else if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                    {paragraph.substring(3)}
                  </h2>
                );
              } else if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-gray-700 mb-1">
                    {paragraph.substring(2)}
                  </li>
                );
              } else if (paragraph.trim() === '') {
                return <br key={index} />;
              } else {
                return (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
