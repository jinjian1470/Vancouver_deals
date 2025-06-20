'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCart, updateCartCount, removeFromCart, clearCart, CartItem } from '../cartUtils';
import { useRouter } from 'next/navigation';
import PayModal from '../PayModal';
import { getMockOrders, saveMockOrders } from '../mockOrders';
import StripePayment from '@/components/StripePayment';

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showPay, setShowPay] = useState(false);
  const [payType, setPayType] = useState<'alipay' | 'wechat' | 'stripe'>('stripe');
  const [payUrl, setPayUrl] = useState('');
  const [orderId, setOrderId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleCountChange = (id: number, count: number) => {
    updateCartCount(id, count);
    setCart(getCart());
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const handleClear = () => {
    clearCart();
    setCart([]);
  };

  // 模拟下单并弹出支付
  const handleOrder = () => {
    if (!cart.length) return;
    // 生成订单号
    const newOrderId = Date.now();
    setOrderId(newOrderId);
    // 保存订单到本地
    const orders = getMockOrders();
    orders.push({
      id: newOrderId,
      totalAmount: cart.reduce((sum, item) => sum + item.price * item.count, 0),
      status: '待支付',
      createTime: new Date().toISOString(),
      items: cart.map((item) => ({
        productId: item.id,
        productName: item.name,
        productPrice: item.price,
        quantity: item.count,
        image: item.image,
      })),
    });
    saveMockOrders(orders);
    setPayUrl('/default.png');
    setShowPay(true);
  };

  // 支付完成后跳转订单详情
  const handlePaySuccess = () => {
    setShowPay(false);
    const orders = getMockOrders();
    const idx = orders.findIndex((o) => o.id === orderId);
    if (idx > -1) {
      orders[idx].status = '已支付';
      saveMockOrders(orders);
    }
    clearCart();
    setCart([]);
    router.push(`/smart/orders/${orderId}`);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">购物车</h2>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">购物车为空</div>
      ) : (
        <div>
          <ul className="flex flex-col gap-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between border rounded-lg shadow p-4 bg-white gap-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image || '/default.png'}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg shadow"
                  />
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      ￥{item.price} × {item.count}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <button
                    onClick={() => handleCountChange(item.id, item.count - 1)}
                    disabled={item.count <= 1}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    onClick={() => handleCountChange(item.id, item.count + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button onClick={() => handleRemove(item.id)} className="text-red-500 ml-2">
                    移除
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <button onClick={handleClear} className="text-gray-500">
              清空购物车
            </button>
            <div>
              总计：<span className="font-bold text-indigo-600">￥{totalAmount}</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleOrder}
              className="flex-1 px-6 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition text-lg"
            >
              去结算
            </button>
            <Link
              href="/smart"
              className="flex-1 px-6 py-2 border rounded text-center text-indigo-700 bg-gray-50 hover:bg-gray-100 transition text-lg"
            >
              继续购物
            </Link>
          </div>
        </div>
      )}
      {/* 支付弹窗 */}
      <PayModal
        visible={showPay}
        payType={payType}
        payUrl={payUrl}
        onClose={() => setShowPay(false)}
      >
        <div className="mt-4">
          <StripePayment
            amount={totalAmount}
            orderId={orderId}
            onSuccess={handlePaySuccess}
            onError={(error: Error) => console.error('Payment failed:', error)}
          />
        </div>
      </PayModal>
    </div>
  );
}
