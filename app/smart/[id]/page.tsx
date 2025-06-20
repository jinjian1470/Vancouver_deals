export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

import { smartProducts } from '../data';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const product = smartProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-8 text-center">
        商品不存在，
        <Link href="/smart" className="text-indigo-600 underline">
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row gap-8 items-center">
        <img
          src={product.image || '/default.png'}
          alt={product.name}
          className="w-40 h-40 object-cover rounded-lg shadow"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">{product.name}</h2>
          <div className="text-indigo-600 font-bold text-xl mb-2">￥{product.price}</div>
          <div className="text-gray-500 mb-4">{product.desc || '暂无商品描述'}</div>
          <button
            className="px-6 py-2 bg-indigo-600 text-white rounded shadow text-lg opacity-60"
            disabled
          >
            加入购物车
          </button>
          <Link href="/smart" className="text-indigo-500 underline mt-2">
            返回
          </Link>
        </div>
      </div>
    </div>
  );
}
