'use client';

import { useState, useEffect } from 'react';
import {
  PlusIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
  EyeIcon,
  CalendarIcon,
  UserIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import type { ForumUser } from '../../types';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

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

const categories = [
  { id: 'all', name: '全部', icon: '🏠' },
  { id: 'food', name: '美食', icon: '🍽️' },
  { id: 'travel', name: '旅游', icon: '✈️' },
  { id: 'life', name: '生活', icon: '🏠' },
  { id: 'shopping', name: '购物', icon: '🛍️' },
  { id: 'sports', name: '运动', icon: '🏃' },
  { id: 'transport', name: '交通', icon: '🚗' },
  { id: 'education', name: '教育', icon: '📚' },
];

const LOCAL_KEY = 'vancouver_forum_posts';
const USER_KEY = 'vancouver_forum_user';
const defaultUser: ForumUser = { nickname: '游客', avatar: '👤' };

function loadPosts(): ForumPost[] {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(LOCAL_KEY);
    if (data) {
      try {
        return JSON.parse(data);
      } catch {
        // 数据损坏，重置为mock
        localStorage.setItem(LOCAL_KEY, JSON.stringify(forumPosts));
        return forumPosts;
      }
    } else {
      // localStorage没有数据，自动写入mock数据
      localStorage.setItem(LOCAL_KEY, JSON.stringify(forumPosts));
      return forumPosts;
    }
  }
  return forumPosts;
}

function savePosts(posts: ForumPost[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(posts));
  }
}

function loadUser() {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(USER_KEY);
    if (data) {
      try {
        return JSON.parse(data);
      } catch {
        return defaultUser;
      }
    }
  }
  return defaultUser;
}

function saveUser(user: ForumUser) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

export default function ForumPage() {
  // posts初始值直接用loadPosts，保证刷新后有数据
  const [posts, setPosts] = useState<ForumPost[]>(() => loadPosts());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'food',
    tags: '',
  });
  const [user, setUser] = useState<ForumUser>(defaultUser);
  const [showUserModal, setShowUserModal] = useState(false);
  const [userInput, setUserInput] = useState({ nickname: '', avatar: '' });

  // 只同步user，不再setPosts
  useEffect(() => {
    setUser(loadUser());
  }, []);

  // 每次posts变化时保存到localStorage
  useEffect(() => {
    savePosts(posts);
  }, [posts]);

  // 调试输出
  console.log('所有帖子:', posts);
  console.log('当前选中分类:', selectedCategory);

  // 更健壮的筛选逻辑
  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter(
          (post) =>
            String(post.category).trim().toLowerCase() ===
            String(selectedCategory).trim().toLowerCase(),
        );

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              isLiked: !post.isLiked,
            }
          : post,
      ),
    );
  };

  const handleUserSave = () => {
    const updatedUser = { ...user, ...userInput };
    setUser(updatedUser);
    saveUser(updatedUser);
    setShowUserModal(false);
    setUserInput({ nickname: '', avatar: '' });
  };

  const handleSubmitPost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) {
      alert('请填写标题和内容');
      return;
    }

    const post: ForumPost = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      author: user.nickname,
      date: new Date().toISOString().split('T')[0],
      category: newPost.category,
      tags: newPost.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag),
      likes: 0,
      comments: 0,
      views: 0,
    };

    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', category: 'food', tags: '' });
    setShowNewPostForm(false);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 页面头部 */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">温哥华生活论坛</h1>
          <p className="text-gray-600">分享生活经验，交流实用信息</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowUserModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
          >
            <span className="text-xl">{user.avatar}</span>
            <span>{user.nickname}</span>
            <UserIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowNewPostForm(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            <PlusIcon className="w-4 h-4" />
            <span>发布帖子</span>
          </button>
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg border transition ${
              selectedCategory === category.id
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* 帖子列表 */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <Link href={`/forum/${post.id}`} className="block">
                  <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition mb-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 line-clamp-2 mb-3">{post.content}</p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 帖子信息 */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <UserCircleIcon className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <EyeIcon className="w-4 h-4" />
                  <span>{post.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ChatBubbleLeftIcon className="w-4 h-4" />
                  <span>{post.comments}</span>
                </div>
              </div>

              <button
                onClick={() => handleLike(post.id)}
                className={`flex items-center space-x-1 transition ${
                  post.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                }`}
              >
                {post.isLiked ? (
                  <HeartIconSolid className="w-4 h-4" />
                ) : (
                  <HeartIcon className="w-4 h-4" />
                )}
                <span>{post.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 发布新帖子模态框 */}
      {showNewPostForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">发布新帖子</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">标题</label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="请输入帖子标题"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">分类</label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {categories
                      .filter((c) => c.id !== 'all')
                      .map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.icon} {category.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    标签（用逗号分隔）
                  </label>
                  <input
                    type="text"
                    value={newPost.tags}
                    onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="例如：美食,推荐,川菜"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">内容</label>
                  <ReactQuill
                    value={newPost.content}
                    onChange={(content) => setNewPost({ ...newPost, content })}
                    placeholder="请输入帖子内容..."
                    className="h-32"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowNewPostForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition"
                >
                  取消
                </button>
                <button
                  onClick={handleSubmitPost}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  发布
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 用户设置模态框 */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">用户设置</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">昵称</label>
                  <input
                    type="text"
                    value={userInput.nickname}
                    onChange={(e) => setUserInput({ ...userInput, nickname: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={user.nickname}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">头像</label>
                  <input
                    type="text"
                    value={userInput.avatar}
                    onChange={(e) => setUserInput({ ...userInput, avatar: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={user.avatar}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowUserModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition"
                >
                  取消
                </button>
                <button
                  onClick={handleUserSave}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  保存
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
