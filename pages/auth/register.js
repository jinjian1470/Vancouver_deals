// vancouver-deals/pages/auth/register.js
import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 注册逻辑
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">注册新账号</h2>
        <form onSubmit={handleSubmit}>
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
            注册
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          已有账号？{' '}
          <Link href="/auth/signin" className="text-blue-600 hover:underline">
            登录
          </Link>
        </div>
      </div>
    </div>
  );
}
