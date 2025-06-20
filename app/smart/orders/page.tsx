'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { MockOrder, MockOrderItem } from '../mockOrders';

export default function OrdersPage() {
  const [orders, setOrders] = useState<MockOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem('userId') || '1';
    fetch('/api/order/list', { headers: { userId: userId } })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.data || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">加载中...</div>;
  if (!orders.length) return <div className="p-8 text-center">暂无订单</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">订单历史</h2>
      <ul className="flex flex-col gap-4">
        {orders.map((order) => (
          <li key={order.id} className="p-4 border rounded-lg shadow bg-white flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div>
                <span className="font-bold">订单号：</span>
                {order.id}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(order.createTime).toLocaleString()}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {order.items?.map((item: MockOrderItem) => (
                <span
                  key={item.productId}
                  className="inline-block px-2 py-1 bg-gray-100 rounded text-sm text-gray-700"
                >
                  {item.productName} × {item.quantity}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-2">
              <div>
                总金额：<span className="font-bold text-indigo-600">￥{order.totalAmount}</span>
              </div>
              <div>
                状态：
                <span className={order.status === '已支付' ? 'text-green-600' : 'text-yellow-600'}>
                  {order.status}
                </span>
              </div>
            </div>
            <div className="flex gap-4 mt-2 flex-wrap">
              <Link
                href={`/smart/orders/${order.id}`}
                className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition text-sm"
              >
                查看详情
              </Link>
              {/* 可加删除、再次购买等按钮 */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
