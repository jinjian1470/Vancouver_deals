'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripePayment({ amount, onSuccess, onError, orderId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // 1. 创建支付意图
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency: 'cad',
          metadata: {
            orderId: orderId?.toString() || 'unknown',
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // 2. 加载 Stripe
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // 3. 跳转到 Stripe Checkout
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: clientSecret,
      });

      if (stripeError) {
        throw stripeError;
      }

      // 支付成功回调
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError(err.message);
      if (onError) {
        onError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`w-full px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? '处理中...' : `支付 ￥${amount}`}
      </button>

      {error && <div className="mt-2 text-red-600 text-sm">支付失败: {error}</div>}

      <div className="mt-2 text-xs text-gray-500">支持信用卡、Apple Pay、Google Pay</div>
    </div>
  );
}
