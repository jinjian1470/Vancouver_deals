'use client';

import { useParams, useRouter } from 'next/navigation';
import { getMockOrders } from '../../../app/smart/mockOrders';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { MockOrder, MockOrderItem } from '../../../app/smart/mockOrders';

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id);
  const [order, setOrder] = useState<MockOrder | null>(null);

  useEffect(() => {
    const orders = getMockOrders();
    setOrder(orders.find((o) => o.id === id) as MockOrder);
  }, [id]);

  if (!order) {
    return (
      <div className="p-8 text-center">
        订单不存在，
        <Link href="/smart/orders" className="text-indigo-600 underline">
          返回订单历史
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">订单详情</h2>
      <div className="mb-4 p-4 bg-white rounded-lg shadow flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <span className="font-bold">订单号：</span>
            {order.id}
          </div>
          <div className="text-sm text-gray-500">{new Date(order.createTime).toLocaleString()}</div>
        </div>
        <div>
          状态：
          <span className={order.status === '已支付' ? 'text-green-600' : 'text-yellow-600'}>
            {order.status}
          </span>
        </div>
        <div>
          总金额：<span className="font-bold text-indigo-600">￥{order.totalAmount}</span>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-2">商品明细</h3>
        <ul className="flex flex-col gap-3">
          {order.items.map((item: MockOrderItem) => (
            <li key={item.productId} className="flex items-center gap-4 border-b pb-2">
              <img
                src={item.image || '/default.png'}
                alt={item.productName}
                className="w-14 h-14 object-cover rounded-lg shadow"
              />
              <div>
                <div>{item.productName}</div>
                <div className="text-sm text-gray-500">
                  ￥{item.productPrice} × {item.quantity}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex gap-4">
        <Link
          href="/smart/orders"
          className="flex-1 px-4 py-2 border rounded text-center text-indigo-700 bg-gray-50 hover:bg-gray-100 transition"
        >
          返回订单历史
        </Link>
      </div>
    </div>
  );
}
