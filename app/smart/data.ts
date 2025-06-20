export const smartCategories = [
  { id: 'all', name: '全部' },
  { id: 'home', name: '家居' },
  { id: 'lighting', name: '照明' },
  { id: 'security', name: '安防' },
  { id: 'ai', name: 'AI' },
  { id: 'energy', name: '节能' },
];

export const smartProducts = [
  {
    id: 1,
    name: '智能音箱',
    desc: '语音助手，智能家居控制中心。',
    price: 399,
    image: '/data/smart/speaker.jpg',
    category: 'home',
    tags: ['家居', '语音', 'AI'],
  },
  {
    id: 2,
    name: '智能灯泡',
    desc: '手机远程控制，支持多色调节。',
    price: 59,
    image: '/data/smart/bulb.jpg',
    category: 'lighting',
    tags: ['照明', '节能', '智能'],
  },
  {
    id: 3,
    name: '智能门锁',
    desc: '指纹识别，远程开锁，安全便捷。',
    price: 899,
    image: '/data/smart/lock.jpg',
    category: 'security',
    tags: ['安防', '家居', '智能'],
  },
];
