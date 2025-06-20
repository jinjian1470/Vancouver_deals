export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

import Footer from '@/components/Footer';
import {
  MapPinIcon,
  CalendarIcon,
  UserIcon,
  HeartIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface GuideDetail {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  location: string;
  tags: string[];
  images: string[];
  tips: string[];
  rating: number;
  views: number;
  likes: number;
}

const guideData: Record<string, GuideDetail> = {
  '1': {
    id: '1',
    title: 'Granville Island美食体验完整攻略',
    author: '小红薯_美食控',
    date: '2024-06-10',
    location: 'Granville Island',
    content: `
      # Granville Island美食体验完整攻略

      ## 🍽️ 市场概览
      Granville Island Public Market是温哥华最著名的室内市场，位于False Creek的一座小岛上。这里汇集了各种新鲜食材、手工食品和特色小吃。

      ## 🥐 必尝美食推荐

      ### 1. 龙虾卷 (Lobster Roll)
      **推荐店铺**: Go Fish
      **价格**: $18-25
      **特色**: 新鲜龙虾肉配黄油面包，口感鲜美
      **最佳时间**: 午餐时间，建议11:30-13:00

      ### 2. 手工面包
      **推荐店铺**: Terra Breads
      **价格**: $4-8
      **特色**: 有机原料，传统工艺
      **推荐**: 酸面包、法式长棍

      ### 3. 手工冰淇淋
      **推荐店铺**: La Casa Gelato
      **价格**: $5-8
      **特色**: 218种口味可选
      **推荐**: 薰衣草、枫糖浆、蓝莓

      ## 🛍️ 购物攻略

      ### 最佳购物时间
      - **平日**: 9:00-18:00 (人少，体验好)
      - **周末**: 10:00-19:00 (热闹，但人多)
      - **避开时间**: 雨天和节假日

      ### 必买清单
      1. 新鲜海鲜 (三文鱼、螃蟹)
      2. 手工奶酪
      3. 本地蜂蜜
      4. 有机蔬菜
      5. 手工巧克力

      ## 🚗 交通指南

      ### 公共交通
      - **天车**: 乘坐Canada Line到Broadway-City Hall站
      - **公交**: 50路公交车直达
      - **水上巴士**: False Creek Ferry (风景最美)

      ### 自驾停车
      - **停车场**: 市场附近有多个停车场
      - **费用**: $2-4/小时
      - **建议**: 周末建议使用公共交通

      ## 💡 实用小贴士

      1. **最佳游览时间**: 2-3小时
      2. **建议携带**: 购物袋、现金、相机
      3. **拍照建议**: 早上光线最佳
      4. **用餐建议**: 可以买食材在市场外野餐
      5. **购物建议**: 货比三家，注意保质期

      ## 🎭 周边活动

      - **艺术工作室**: 参观本地艺术家工作室
      - **现场表演**: 周末有街头艺人表演
      - **游船**: 可以乘坐游船游览False Creek
      - **儿童活动**: 有专门的儿童游乐区

      ## 📸 拍照打卡点

      1. 市场入口的彩色标志
      2. 海鲜摊位的彩色鱼缸
      3. 面包店的橱窗
      4. 岛上的艺术装置
      5. False Creek的日落景色

      ## 💰 预算建议

      - **经济型**: $30-50 (小吃+纪念品)
      - **标准型**: $80-120 (正餐+购物)
      - **豪华型**: $200+ (海鲜大餐+精品购物)

      ## 🌟 个人体验分享

      作为一个在温哥华生活了3年的美食爱好者，Granville Island是我最喜欢的地方之一。每次有朋友来访，我都会带他们来这里体验真正的温哥华美食文化。

      最让我印象深刻的是这里的氛围，既有游客的热闹，又有本地人的生活气息。建议大家在非周末时间去，可以更好地体验当地人的生活节奏。

      特别推荐大家尝试Go Fish的龙虾卷，虽然价格不便宜，但绝对值得。另外，La Casa Gelato的冰淇淋种类之多让人眼花缭乱，建议选择当季水果口味。
    `,
    tags: ['美食', '市场', '本地体验', '购物', '拍照'],
    images: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
      'https://images.unsplash.com/photo-1504674900240-9a9049b7d8ce?w=800',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
    ],
    tips: [
      '建议早上9点到达，避开人流高峰',
      '带现金，部分小摊只收现金',
      '可以买食材在市场外野餐',
      '周末人很多，建议平日去',
      '拍照时注意不要影响其他顾客',
    ],
    rating: 4.8,
    views: 1250,
    likes: 89,
  },
  '2': {
    id: '2',
    title: 'Stanley Park骑行完整攻略',
    author: '小红薯_骑行少女',
    date: '2024-06-12',
    location: 'Stanley Park',
    content: `
      # Stanley Park骑行完整攻略

      ## 🚴‍♀️ 骑行路线介绍
      Stanley Park是温哥华最著名的城市公园，环岛骑行路线全长约10公里，是体验温哥华自然风光的绝佳方式。

      ## 🛣️ 详细路线规划

      ### 起点：Denman Street入口
      - **位置**: Denman Street与Georgia Street交叉口
      - **设施**: 自行车租赁店、停车场、洗手间
      - **建议**: 从这里开始顺时针骑行

      ### 第一段：English Bay到Prospect Point (3km)
      - **特色**: 海景、沙滩、日落
      - **拍照点**: English Bay Beach、Second Beach
      - **休息点**: Prospect Point Lookout

      ### 第二段：Prospect Point到Lions Gate Bridge (2km)
      - **特色**: 森林小径、海景
      - **注意**: 这段路有上下坡
      - **拍照点**: Lions Gate Bridge全景

      ### 第三段：Lions Gate Bridge到Third Beach (2km)
      - **特色**: 森林、海景、岩石海岸
      - **休息点**: Third Beach
      - **设施**: 洗手间、饮水机

      ### 第四段：Third Beach到起点 (3km)
      - **特色**: 内湖、花园、儿童游乐区
      - **拍照点**: Lost Lagoon、Rose Garden

      ## 🚲 自行车租赁

      ### 推荐租赁店
      1. **Spokes Bicycle Rentals**
         - 位置: Denman Street入口
         - 价格: $8-15/小时
         - 特色: 种类齐全，服务好

      2. **Bayshore Bicycle Rentals**
         - 位置: 靠近English Bay
         - 价格: $10-18/小时
         - 特色: 高端车型多

      ### 车型选择
      - **普通自行车**: 适合初学者，$8-12/小时
      - **山地车**: 适合有经验者，$12-15/小时
      - **电动自行车**: 适合体力不佳者，$15-20/小时
      - **双人自行车**: 适合情侣，$20-25/小时

      ## ⏰ 最佳骑行时间

      ### 季节推荐
      - **春季** (3-5月): 樱花盛开，温度适宜
      - **夏季** (6-8月): 天气最好，但游客多
      - **秋季** (9-11月): 枫叶红，景色美
      - **冬季** (12-2月): 人少，但天气较冷

      ### 每日时间
      - **清晨** (6-9点): 人少，光线好
      - **下午** (2-5点): 温度适宜，游客多
      - **傍晚** (6-8点): 日落美景，但要注意时间

      ## 📸 拍照打卡点

      1. **English Bay Beach**: 海景、日落
      2. **Prospect Point**: 全景、Lions Gate Bridge
      3. **Third Beach**: 岩石海岸、海景
      4. **Lost Lagoon**: 湖景、天鹅
      5. **Rose Garden**: 花园、喷泉

      ## 🍽️ 休息用餐

      ### 推荐餐厅
      1. **Teahouse Restaurant**: 海景餐厅，价格较高
      2. **Prospect Point Bar & Grill**: 简餐，价格适中
      3. **Stanley Park Brewing**: 啤酒花园，氛围好

      ### 野餐地点
      - **Second Beach**: 靠近沙滩，设施齐全
      - **Third Beach**: 安静，适合小团体
      - **Lost Lagoon**: 湖边，风景优美

      ## 💡 实用小贴士

      1. **安全第一**: 戴头盔，遵守交通规则
      2. **天气检查**: 出发前查看天气预报
      3. **装备准备**: 水、防晒、相机、小零食
      4. **时间安排**: 建议2-3小时，包括休息时间
      5. **路线选择**: 新手建议顺时针骑行

      ## 🚨 注意事项

      - **交通规则**: 靠右骑行，注意行人
      - **天气变化**: 温哥华天气多变，带雨具
      - **体力考虑**: 全程约10公里，量力而行
      - **设施使用**: 注意洗手间和饮水机位置
      - **紧急联系**: 记住租赁店电话

      ## 💰 费用预算

      - **自行车租赁**: $8-25/小时
      - **餐饮**: $15-50/人
      - **纪念品**: $10-30
      - **总计**: $50-150/人

      ## 🌟 个人体验分享

      作为一个骑行爱好者，Stanley Park是我在温哥华最喜欢的地方之一。每次骑行都能发现新的美景，特别是傍晚时分，夕阳西下的景色让人难忘。

      建议大家在春季或秋季去，这时候天气最舒适，景色也最美。如果是第一次骑行，建议选择普通自行车，路线相对平缓，适合初学者。

      最让我印象深刻的是Prospect Point的景色，站在那里可以看到整个温哥华市中心和北岸山脉，是拍照的绝佳地点。
    `,
    tags: ['骑行', '公园', '自然', '运动', '拍照'],
    images: [
      'https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    ],
    tips: [
      '建议早上或傍晚骑行，避开正午高温',
      '戴头盔是必须的，安全第一',
      '带足够的水和防晒用品',
      '可以在途中野餐，体验更丰富',
      '注意天气变化，温哥华天气多变',
    ],
    rating: 4.9,
    views: 2100,
    likes: 156,
  },
  '3': {
    id: '3',
    title: 'Capilano吊桥冒险完整攻略',
    author: '小红薯_冒险家',
    date: '2024-06-15',
    location: 'Capilano吊桥公园',
    content: `
      # Capilano吊桥冒险完整攻略

      ## 🌉 公园概览
      Capilano吊桥公园是温哥华最著名的景点之一，拥有世界著名的Capilano吊桥，以及树顶冒险和悬崖步道等精彩体验。

      ## 🎫 门票信息

      ### 成人票
      - **价格**: $55
      - **包含**: 吊桥、树顶冒险、悬崖步道
      - **建议**: 提前在线购买可享受折扣

      ### 学生票
      - **价格**: $45 (需出示学生证)
      - **包含**: 所有景点
      - **注意**: 仅限全日制学生

      ### 儿童票
      - **价格**: $29 (6-12岁)
      - **包含**: 所有景点
      - **免费**: 6岁以下儿童免费

      ## 🚗 交通指南

      ### 自驾
      - **地址**: 3735 Capilano Road, North Vancouver
      - **停车**: 免费停车场
      - **时间**: 从温哥华市中心约30分钟

      ### 公共交通
      - **天车**: 乘坐Canada Line到Waterfront站
      - **公交**: 236路公交车直达
      - **时间**: 约45分钟

      ### 免费班车
      - **起点**: Canada Place
      - **时间**: 每30分钟一班
      - **费用**: 免费

      ## 🎯 必玩项目

      ### 1. Capilano吊桥
      - **长度**: 137米
      - **高度**: 70米
      - **特色**: 世界著名吊桥
      - **建议**: 早上人少，光线好

      ### 2. 树顶冒险 (Treetops Adventure)
      - **特色**: 7座吊桥连接
      - **高度**: 30米
      - **适合**: 所有年龄段
      - **时间**: 约30分钟

      ### 3. 悬崖步道 (Cliffwalk)
      - **特色**: 悬空玻璃步道
      - **长度**: 213米
      - **高度**: 70米
      - **刺激**: 适合寻求刺激的游客

      ## ⏰ 最佳游览时间

      ### 季节推荐
      - **春季** (3-5月): 樱花盛开，温度适宜
      - **夏季** (6-8月): 天气最好，游客最多
      - **秋季** (9-11月): 枫叶红，景色美
      - **冬季** (12-2月): 人少，但天气较冷

      ### 每日时间
      - **早上** (9-11点): 人少，光线好
      - **下午** (2-4点): 温度适宜
      - **傍晚** (4-6点): 日落美景

      ## 📸 拍照攻略

      ### 最佳拍照点
      1. **吊桥中央**: 全景拍摄
      2. **树顶平台**: 森林视角
      3. **悬崖步道**: 玻璃地面效果
      4. **入口处**: 标志性建筑
      5. **观景台**: 峡谷全景

      ### 拍照技巧
      - 使用广角镜头
      - 注意光线角度
      - 避开人群高峰
      - 注意安全，不要冒险

      ## 🍽️ 餐饮选择

      ### 园内餐厅
      1. **Capilano Coffee Company**: 咖啡和小食
      2. **Loggers' Grill**: 简餐和烧烤
      3. **Gift Shop Café**: 轻食和饮料

      ### 野餐
      - **允许**: 可以带食物入园
      - **地点**: 指定野餐区
      - **注意**: 保持环境清洁

      ## 💡 实用小贴士

      1. **提前购票**: 避免排队，享受折扣
      2. **穿舒适鞋**: 需要大量步行
      3. **带相机**: 景色太美，必须拍照
      4. **注意天气**: 雨天吊桥会湿滑
      5. **预留时间**: 建议3-4小时

      ## 🚨 安全注意事项

      - **恐高症**: 吊桥和悬崖步道不适合恐高者
      - **儿童安全**: 必须成人陪同
      - **天气条件**: 大风或雨天可能关闭
      - **身体状况**: 心脏病患者需谨慎

      ## 💰 费用预算

      - **门票**: $45-55/人
      - **交通**: $5-15/人
      - **餐饮**: $15-30/人
      - **纪念品**: $10-50
      - **总计**: $75-150/人

      ## 🌟 个人体验分享

      作为一个喜欢冒险的旅行者，Capilano吊桥给了我难忘的体验。站在137米长的吊桥上，脚下是湍急的Capilano河，那种刺激感无法言喻。

      树顶冒险也很有趣，在30米高的树冠间穿行，感觉自己像森林精灵一样。悬崖步道是最刺激的，玻璃地面让人心跳加速。

      建议大家在早上9点到达，这时候人少，可以慢慢体验每个项目。记得带相机，这里的每个角度都很美。
    `,
    tags: ['景点', '冒险', '亲子', '自然', '刺激'],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      'https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=800',
    ],
    tips: [
      '提前在线购票可享受折扣',
      '早上9点到达避开人流',
      '穿舒适防滑的鞋子',
      '带相机记录美景',
      '注意天气，雨天可能关闭',
    ],
    rating: 4.7,
    views: 1800,
    likes: 134,
  },
  '4': {
    id: '4',
    title: '温哥华咖啡馆打卡完整攻略',
    author: '小红薯_咖啡控',
    date: '2024-06-08',
    location: '温哥华市中心',
    content: `
      # 温哥华咖啡馆打卡完整攻略

      ## ☕ 咖啡文化概览
      温哥华是加拿大咖啡文化最发达的城市之一，拥有众多精品咖啡馆和特色咖啡店。从传统的意式浓缩到创新的手冲咖啡，这里能满足各种咖啡爱好者的需求。

      ## 🏆 必打卡咖啡馆

      ### 1. Revolver Coffee
      - **地址**: 325 Cambie Street
      - **特色**: 手冲咖啡、精品豆
      - **推荐**: 埃塞俄比亚耶加雪菲
      - **价格**: $4-8
      - **氛围**: 工业风、专业

      ### 2. 49th Parallel Coffee Roasters
      - **地址**: 2902 Main Street
      - **特色**: 自家烘焙、甜甜圈
      - **推荐**: 拿铁、甜甜圈
      - **价格**: $4-12
      - **氛围**: 温馨、社区感

      ### 3. Timbertrain Coffee Roasters
      - **地址**: 311 West Cordova Street
      - **特色**: 火车主题、精品咖啡
      - **推荐**: 手冲咖啡
      - **价格**: $4-10
      - **氛围**: 复古、文艺

      ### 4. Matchstick Coffee Roasters
      - **地址**: 213 E Georgia Street
      - **特色**: 北欧风格、简约设计
      - **推荐**: 美式咖啡、卡布奇诺
      - **价格**: $3-8
      - **氛围**: 现代、简约

      ## 🚗 交通指南

      ### 公共交通
      - **天车**: Canada Line、Expo Line、Millennium Line
      - **公交**: 多条公交线路覆盖
      - **步行**: 市中心咖啡馆密集，适合步行

      ### 推荐路线
      1. **Gastown路线**: Revolver → Timbertrain → 其他
      2. **Main Street路线**: 49th Parallel → Matchstick → 其他
      3. **West End路线**: 多家精品咖啡馆

      ## ⏰ 最佳时间

      ### 早上 (7-10点)
      - **优点**: 人少、咖啡新鲜
      - **推荐**: 早餐咖啡
      - **注意**: 部分店可能还未营业

      ### 下午 (2-5点)
      - **优点**: 温度适宜、光线好
      - **推荐**: 下午茶时间
      - **注意**: 学生较多

      ### 晚上 (7-9点)
      - **优点**: 氛围好、适合聊天
      - **推荐**: 晚餐后咖啡
      - **注意**: 部分店可能已关门

      ## 📸 拍照攻略

      ### 最佳拍照点
      1. **咖啡拉花**: 精美的拉花艺术
      2. **店内装饰**: 独特的装修风格
      3. **咖啡器具**: 专业的咖啡设备
      4. **窗外风景**: 温哥华街景
      5. **咖啡豆**: 各种精品咖啡豆

      ### 拍照技巧
      - 使用自然光
      - 注意构图
      - 捕捉细节
      - 尊重其他顾客

      ## 🍰 搭配美食

      ### 经典搭配
      1. **拿铁 + 牛角包**: 经典早餐
      2. **美式 + 甜甜圈**: 49th Parallel特色
      3. **手冲 + 饼干**: 下午茶
      4. **卡布奇诺 + 三明治**: 午餐

      ### 素食选择
      - 燕麦奶拿铁
      - 杏仁奶卡布奇诺
      - 植物奶美式

      ## 💡 实用小贴士

      1. **小费文化**: 通常给15-20%小费
      2. **环保意识**: 自带杯子可享受折扣
      3. **WiFi**: 大部分咖啡馆提供免费WiFi
      4. **插座**: 适合工作学习的咖啡馆
      5. **营业时间**: 提前查看营业时间

      ## 🛒 咖啡豆购买

      ### 推荐品牌
      1. **49th Parallel**: 本地烘焙
      2. **Revolver**: 精品豆
      3. **Timbertrain**: 特色豆
      4. **Matchstick**: 北欧风格

      ### 购买建议
      - 询问烘焙日期
      - 选择适合的烘焙度
      - 考虑包装大小
      - 询问冲泡建议

      ## 💰 费用预算

      - **单杯咖啡**: $4-8
      - **咖啡豆**: $15-30/包
      - **甜点**: $3-8
      - **小费**: $1-2/杯
      - **总计**: $20-50/人

      ## 🌟 个人体验分享

      作为一个咖啡爱好者，温哥华的咖啡文化让我印象深刻。每个咖啡馆都有自己独特的风格和特色，从工业风的Revolver到温馨的49th Parallel，都值得体验。

      最让我惊喜的是这里的咖啡品质，无论是手冲还是意式咖啡，都能感受到咖啡师的专业和用心。另外，这里的咖啡馆氛围很好，适合工作、学习或和朋友聊天。

      建议大家可以制定一个咖啡馆打卡计划，每天体验不同的咖啡馆，感受温哥华独特的咖啡文化。
    `,
    tags: ['咖啡馆', '生活', '打卡', '咖啡', '文化'],
    images: [
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
    ],
    tips: [
      '早上7-10点人少咖啡新鲜',
      '自带杯子可享受折扣',
      '记得给小费15-20%',
      '询问咖啡豆烘焙日期',
      '选择适合的营业时间',
    ],
    rating: 4.6,
    views: 1650,
    likes: 98,
  },
  '5': {
    id: '5',
    title: '本地农夫市集完整攻略',
    author: '小红薯_慢生活',
    date: '2024-06-09',
    location: '温哥华各地',
    content: `
      # 本地农夫市集完整攻略

      ## 🥬 市集概览
      温哥华的农夫市集是体验本地生活的最佳方式，这里有最新鲜的蔬果、手工制品和本地特色产品。每个市集都有独特的氛围和特色。

      ## 🏪 主要市集推荐

      ### 1. Granville Island Public Market
      - **地址**: 1689 Johnston Street
      - **时间**: 每日9:00-18:00
      - **特色**: 室内市场、全年开放
      - **推荐**: 海鲜、面包、奶酪
      - **交通**: 公交50路、水上巴士

      ### 2. Trout Lake Farmers Market
      - **地址**: 3300 Victoria Drive
      - **时间**: 周六9:00-14:00 (5-10月)
      - **特色**: 户外市集、社区氛围
      - **推荐**: 有机蔬菜、手工蜂蜜
      - **交通**: 公交20路

      ### 3. Kitsilano Farmers Market
      - **地址**: 2690 Larch Street
      - **时间**: 周日10:00-14:00 (5-10月)
      - **特色**: 海滨位置、艺术氛围
      - **推荐**: 鲜花、手工艺品
      - **交通**: 公交4路、22路

      ### 4. West End Farmers Market
      - **地址**: 1100 Comox Street
      - **时间**: 周六9:00-14:00 (6-10月)
      - **特色**: 市中心位置、便利
      - **推荐**: 新鲜蔬果、烘焙食品
      - **交通**: 天车Canada Line

      ## 🚗 交通指南

      ### 公共交通
      - **天车**: 多条线路覆盖
      - **公交**: 各市集都有公交到达
      - **步行**: 市中心市集适合步行

      ### 自驾停车
      - **Granville Island**: 付费停车场
      - **其他市集**: 路边停车或附近停车场
      - **建议**: 周末停车较难，建议公共交通

      ## ⏰ 最佳时间

      ### 季节推荐
      - **春季** (3-5月): 新鲜蔬菜、鲜花
      - **夏季** (6-8月): 水果丰富、户外活动
      - **秋季** (9-11月): 收获季节、南瓜
      - **冬季** (12-2月): 室内市场为主

      ### 每日时间
      - **早上** (9-11点): 选择最多、人少
      - **中午** (11-13点): 人最多、热闹
      - **下午** (13-15点): 可能打折、人少

      ## 🛒 购物攻略

      ### 必买清单
      1. **新鲜蔬果**: 当季最佳
      2. **手工面包**: 传统工艺
      3. **本地蜂蜜**: 纯天然
      4. **手工奶酪**: 特色风味
      5. **鲜花**: 装饰家居

      ### 购物技巧
      - 早去选择多
      - 货比三家
      - 询问产地
      - 支持本地农民
      - 带购物袋

      ## 📸 拍照攻略

      ### 最佳拍照点
      1. **彩色蔬果**: 鲜艳的色彩
      2. **手工艺品**: 独特的创意
      3. **市集氛围**: 热闹的场景
      4. **鲜花摊位**: 美丽的鲜花
      5. **美食摊位**: 诱人的食物

      ### 拍照技巧
      - 使用自然光
      - 注意色彩搭配
      - 捕捉细节
      - 尊重摊主

      ## 🍽️ 美食体验

      ### 现场美食
      1. **新鲜果汁**: 现榨果汁
      2. **手工冰淇淋**: 特色口味
      3. **烘焙食品**: 新鲜出炉
      4. **小吃摊位**: 各国美食

      ### 野餐选择
      - 购买食材现场野餐
      - 市集附近公园
      - 海边野餐
      - 社区公园

      ## 💡 实用小贴士

      1. **现金支付**: 部分摊位只收现金
      2. **环保购物**: 自带购物袋
      3. **季节选择**: 选择当季产品
      4. **价格比较**: 货比三家
      5. **支持本地**: 优先选择本地产品

      ## 🎭 文化活动

      ### 现场表演
      - 音乐表演
      - 舞蹈表演
      - 儿童活动
      - 艺术展示

      ### 互动体验
      - 制作工作坊
      - 烹饪演示
      - 品尝活动
      - 儿童游戏

      ## 💰 费用预算

      - **蔬果**: $20-50
      - **面包**: $5-15
      - **蜂蜜**: $10-25
      - **手工艺品**: $10-50
      - **现场美食**: $10-30
      - **总计**: $50-150/人

      ## 🌟 个人体验分享

      作为一个喜欢慢生活的人，农夫市集是我在温哥华最喜欢的地方之一。每次去市集都能感受到浓浓的社区氛围和本地文化。

      最让我印象深刻的是这里的农产品质量，无论是蔬菜还是水果，都能感受到农民的用心。另外，这里的手工艺品也很有特色，是购买纪念品的好地方。

      建议大家在周末早上9点去，这时候选择最多，人也相对较少。记得带现金和购物袋，支持环保购物。
    `,
    tags: ['市集', '本地生活', '手工艺', '有机', '社区'],
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    ],
    tips: [
      '周末早上9点去选择最多',
      '带现金，部分摊位只收现金',
      '自带购物袋支持环保',
      '选择当季产品最新鲜',
      '货比三家找到最优惠',
    ],
    rating: 4.5,
    views: 1420,
    likes: 87,
  },
};

export default function GuideDetailPage({ params }: { params: { id: string } }) {
  const guide = guideData[params.id];
  const currentImageIndex = 0; // 轮播静态展示第一张

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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 文章头部 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                小红书攻略
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{guide.date}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
                disabled
              >
                <HeartIcon className="h-5 w-5" />
                <span>{guide.likes}</span>
              </button>
              <button
                className="flex items-center space-x-1 text-gray-500 hover:text-vancouver-600 transition-colors"
                disabled
              >
                <ShareIcon className="h-5 w-5" />
                <span>分享</span>
              </button>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{guide.title}</h1>
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <UserIcon className="h-5 w-5 text-gray-400" style={{ width: 32, height: 32 }} />
              <span className="text-gray-600">{guide.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{guide.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-400" style={{ width: 32, height: 32 }} />
              <span className="text-gray-600">{guide.date}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="font-semibold">{guide.rating}</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{guide.views} 次浏览</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {guide.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-vancouver-100 text-vancouver-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* 图片轮播（静态第一张） */}
        {guide.images.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="relative">
              <img
                src={guide.images[currentImageIndex]}
                alt={guide.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        )}
        {/* 文章内容 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
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
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                    {paragraph.substring(4)}
                  </h3>
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
        {/* 实用小贴士 */}
        {guide.tips.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💡 实用小贴士</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-vancouver-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* 评论区（静态展示） */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">💬 评论区</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-vancouver-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  用
                </div>
                <span className="font-medium text-gray-900">温哥华小达人</span>
                <span className="text-gray-500 text-sm">2小时前</span>
              </div>
              <p className="text-gray-700">
                这个攻略太详细了！我按照攻略去了Granville Island，体验真的很棒，特别是Go
                Fish的龙虾卷，强烈推荐！
              </p>
            </div>
            <div className="border-b pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  游
                </div>
                <span className="font-medium text-gray-900">游记达人</span>
                <span className="text-gray-500 text-sm">1天前</span>
              </div>
              <p className="text-gray-700">
                Stanley Park的骑行路线真的很美，秋天枫叶红的时候去最棒！
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
