'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-vancouver-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="ml-2 text-xl font-bold">温哥华优惠攻略</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              发现温哥华最棒的优惠信息、旅游攻略和生活指南，让您在温哥华的生活更加精彩！
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">微信</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.932 7.621-.55-.302-3.706-3.78-6.6-8.012-6.6z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">微博</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zm9.717-9.922c-.333-.033-.644.023-.928.168-.284.146-.512.354-.683.625-.171.271-.257.574-.257.908 0 .334.086.637.257.908.171.271.399.479.683.625.284.146.595.201.928.168.333-.033.644-.023.928-.168.284-.146.512-.354.683-.625.171-.271.257-.574.257-.908 0-.334-.086-.637-.257-.908-.171-.271-.399-.479-.683-.625-.284-.146-.595-.201-.928-.168z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/deals" className="text-gray-300 hover:text-white transition-colors">
                  优惠信息
                </Link>
              </li>
              <li>
                <Link href="/travel" className="text-gray-300 hover:text-white transition-colors">
                  旅游攻略
                </Link>
              </li>
              <li>
                <Link href="/life" className="text-gray-300 hover:text-white transition-colors">
                  生活指南
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-gray-300">
              <li>邮箱: info@vancouver-deals.com</li>
              <li>电话: +1 (604) 555-0123</li>
              <li>地址: 温哥华市中心</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 温哥华优惠攻略. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}
