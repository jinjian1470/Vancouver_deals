export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];
}

import Footer from '@/components/Footer';
import { CalendarIcon, UserIcon, ChatBubbleLeftIcon, HeartIcon } from '@heroicons/react/24/outline';

interface ForumPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  likes: number;
  comments: number;
  views: number;
  isLiked?: boolean;
}

const forumPosts: ForumPost[] = [
  {
    id: 1,
    title: '温哥华新移民求推荐好吃的川菜馆',
    content:
      '刚来温哥华不久，特别想念家乡的川菜。请问大家有什么推荐的川菜馆吗？最好是正宗一点的，价格不要太贵。谢谢！',
    author: '新移民小王',
    date: '2024-06-15',
    category: 'food',
    tags: ['川菜', '新移民', '推荐'],
    likes: 12,
    comments: 8,
    views: 156,
  },
  {
    id: 2,
    title: 'Stanley Park骑行路线分享',
    content:
      '今天在Stanley Park骑行了一圈，路线真的很美！分享一下我的路线和拍照点，希望对大家有帮助。',
    author: '骑行爱好者',
    date: '2024-06-14',
    category: 'sports',
    tags: ['骑行', 'Stanley Park', '路线'],
    likes: 25,
    comments: 15,
    views: 342,
  },
  {
    id: 3,
    title: '温哥华租房经验分享',
    content: '在温哥华租房3年了，分享一下我的租房经验和注意事项，希望能帮到新来的朋友。',
    author: '租房达人',
    date: '2024-06-13',
    category: 'life',
    tags: ['租房', '经验', '生活'],
    likes: 18,
    comments: 12,
    views: 289,
  },
  {
    id: 4,
    title: 'Metrotown购物攻略',
    content: 'Metrotown是温哥华最大的购物中心，分享一下我的购物攻略和优惠信息。',
    author: '购物狂',
    date: '2024-06-12',
    category: 'shopping',
    tags: ['购物', 'Metrotown', '优惠'],
    likes: 31,
    comments: 20,
    views: 456,
  },
  {
    id: 5,
    title: '温哥华公共交通使用指南',
    content: '刚来温哥华的朋友可能对公共交通不太熟悉，分享一下Compass卡的使用方法和省钱技巧。',
    author: '交通达人',
    date: '2024-06-11',
    category: 'transport',
    tags: ['公共交通', 'Compass卡', '省钱'],
    likes: 22,
    comments: 14,
    views: 378,
  },
  {
    id: 6,
    title: '温哥华周末好去处推荐',
    content: '周末不知道去哪里玩？推荐几个温哥华周边的好去处，适合一日游。',
    author: '周末玩家',
    date: '2024-06-10',
    category: 'travel',
    tags: ['周末', '一日游', '推荐'],
    likes: 28,
    comments: 18,
    views: 423,
  },
];

const mockComments = [
  {
    user: '温哥华吃货',
    avatar: '吃',
    time: '1小时前',
    content: '推荐"蜀九香"，味道很正宗，价格也不贵！',
  },
  {
    user: '辣妹子',
    avatar: '辣',
    time: '2小时前',
    content: '我喜欢"川味轩"，环境也不错。',
  },
  {
    user: '美食家',
    avatar: '美',
    time: '3小时前',
    content: '可以试试"渝味坊"，他们家的水煮鱼很好吃。',
  },
];

export default function ForumPostDetailPage({ params }: { params: { id: string } }) {
  const post = forumPosts.find((p) => p.id === Number(params.id));
  if (!post) {
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
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                论坛帖子
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{post.date}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
                disabled
              >
                <HeartIcon className="h-5 w-5" />
                <span>{post.likes}</span>
              </button>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <UserIcon className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChatBubbleLeftIcon className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{post.comments} 评论</span>
            </div>
            <span className="text-gray-500">{post.views} 浏览</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="prose max-w-none text-gray-800 mb-8">
            <p>{post.content}</p>
          </div>
        </div>
        {/* 评论区静态展示 */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">💬 评论区</h3>
          <div className="space-y-4">
            {mockComments.map((c, idx) => (
              <div key={idx} className="border-b pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {c.avatar}
                  </div>
                  <span className="font-medium text-gray-900">{c.user}</span>
                  <span className="text-gray-500 text-sm">{c.time}</span>
                </div>
                <p className="text-gray-700">{c.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
