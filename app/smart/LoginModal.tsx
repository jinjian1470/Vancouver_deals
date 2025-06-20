'use client';
import { useState } from 'react';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onLogin: (user: { nickname: string; avatar: string }) => void;
}

const avatars = ['/avatar1.png', '/avatar2.png', '/avatar3.png', '/avatar4.png'];

export default function LoginModal({ open, onClose, onLogin }: LoginModalProps) {
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState(avatars[0]);

  const handleLogin = () => {
    if (!nickname.trim()) return;
    onLogin({ nickname, avatar });
    onClose();
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        <h2 className="text-xl font-bold mb-4">用户登录</h2>
        <input
          className="w-full border rounded px-3 py-2 mb-4"
          placeholder="请输入昵称"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <div className="mb-4">
          <div className="mb-2 text-sm text-gray-600">选择头像：</div>
          <div className="flex gap-2">
            {avatars.map((a) => (
              <img
                key={a}
                src={a}
                alt="avatar"
                className={`w-10 h-10 rounded-full border-2 cursor-pointer ${avatar === a ? 'border-blue-500' : 'border-gray-200'}`}
                onClick={() => setAvatar(a)}
              />
            ))}
          </div>
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
          onClick={handleLogin}
        >
          登录
        </button>
      </div>
    </div>
  );
}
