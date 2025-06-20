'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const navigation = [
    { name: '首页', href: '/' },
    { name: '团购', href: '/deals' },
    { name: '论坛', href: '/forum' },
    { name: '智慧生活', href: '/smart' },
    { name: '生活指南', href: '/life' },
    { name: '旅游', href: '/travel' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* Logo content removed */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
            ) : session ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 focus:outline-none"
                >
                  <img
                    src={session.user?.image || '/default-avatar.png'}
                    alt="用户头像"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium">
                    {session.user?.name || session.user?.email}
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      个人资料
                    </Link>
                    <Link
                      href="/smart/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      我的订单
                    </Link>
                    <button
                      onClick={() => {
                        signOut({ callbackUrl: '/' });
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      退出登录
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/signin"
                className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                登录
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile User Menu */}
              {status === 'loading' ? (
                <div className="px-3 py-2">
                  <div className="animate-pulse bg-gray-200 h-6 w-20 rounded"></div>
                </div>
              ) : session ? (
                <div className="px-3 py-2 border-t border-gray-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={session.user?.image || '/default-avatar.png'}
                      alt="用户头像"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium">
                      {session.user?.name || session.user?.email}
                    </span>
                  </div>
                  <Link
                    href="/profile"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    个人资料
                  </Link>
                  <Link
                    href="/smart/orders"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    我的订单
                  </Link>
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: '/' });
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    退出登录
                  </button>
                </div>
              ) : (
                <div className="px-3 py-2 border-t border-gray-200">
                  <Link
                    href="/auth/signin"
                    className="block px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    登录
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
