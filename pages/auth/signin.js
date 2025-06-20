'use client';

import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

// ...你的其他代码...

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    if (res?.error) {
      setError('登录失败，请检查邮箱和密码');
    }
  };

  // 客户端检查登录状态
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('登录失败，请检查邮箱和密码');
      }
    } catch (err) {
      setError('登录失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('status:', status, 'session:', session);
  }, [status, session]);

  // 如果正在加载或已登录，显示加载状态
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>登录 - 温哥华生活</title>
        <meta name="description" content="登录您的账户，享受更多服务" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">登录</h2>
          <form onSubmit={handleSignIn}>
            <input
              className="w-full mb-4 px-3 py-2 border rounded"
              type="email"
              placeholder="邮箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full mb-4 px-3 py-2 border rounded"
              type="password"
              placeholder="密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              type="submit"
            >
              登录
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            还没有账号？{' '}
            <Link href="/auth/register" className="text-blue-600 hover:underline">
              注册
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
