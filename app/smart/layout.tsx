'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function SmartLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [orderMenuOpen, setOrderMenuOpen] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex items-center gap-6 p-4 bg-white border-b shadow-sm">
        {/* Logo */}
        {/* 菜单 */}
        <div className="flex gap-4 flex-1">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            返回首页
          </Link>
          <Link
            href="/smart"
            className={`font-medium ${pathname === '/smart' ? 'text-blue-600 underline' : 'text-gray-700 hover:text-blue-600'}`}
          >
            智慧生活首页
          </Link>
          {/* 订单历史下拉 */}
          <div
            className="relative"
            onMouseEnter={() => setOrderMenuOpen(true)}
            onMouseLeave={() => setOrderMenuOpen(false)}
          >
            <button
              className={`font-medium ${pathname?.startsWith('/smart/orders') ? 'text-blue-600 underline' : 'text-gray-700 hover:text-blue-600'}`}
            >
              订单历史
              <span className="ml-1">▼</span>
            </button>
            {orderMenuOpen && (
              <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow z-10">
                <Link href="/smart/orders" className="block px-4 py-2 hover:bg-gray-100">
                  全部订单
                </Link>
                {/* 可扩展更多子项 */}
              </div>
            )}
          </div>
          {/* 购物车下拉 */}
          <div
            className="relative"
            onMouseEnter={() => setCartMenuOpen(true)}
            onMouseLeave={() => setCartMenuOpen(false)}
          >
            <button
              className={`font-medium ${pathname?.startsWith('/smart/cart') ? 'text-blue-600 underline' : 'text-gray-700 hover:text-blue-600'}`}
            >
              购物车
              <span className="ml-1">▼</span>
            </button>
            {cartMenuOpen && (
              <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow z-10">
                <Link href="/smart/cart" className="block px-4 py-2 hover:bg-gray-100">
                  查看购物车
                </Link>
                {/* 可扩展更多子项 */}
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className="bg-gray-50 min-h-screen">{children}</main>
    </div>
  );
}
