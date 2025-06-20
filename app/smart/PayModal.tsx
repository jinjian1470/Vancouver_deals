'use client';
import React from 'react';

interface PayModalProps {
  visible: boolean;
  payType: 'alipay' | 'wechat' | 'stripe';
  payUrl: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const PayModal: React.FC<PayModalProps> = ({ visible, payType, payUrl, onClose, children }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 w-80 relative">
        <button className="absolute right-3 top-3 text-gray-400" onClick={onClose}>
          ×
        </button>
        <h2 className="text-lg font-bold mb-4">扫码支付</h2>
        <div className="flex flex-col items-center">
          {payType === 'alipay' && <span className="mb-2">支付宝</span>}
          {payType === 'wechat' && <span className="mb-2">微信支付</span>}
          {payType === 'stripe' && <span className="mb-2">信用卡/Stripe</span>}
          {payType === 'stripe' ? (
            <a href={payUrl} target="_blank" rel="noopener" className="text-blue-600 underline">
              点击跳转支付
            </a>
          ) : (
            <img src={payUrl} alt="支付二维码" className="w-40 h-40 object-contain border" />
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PayModal;
