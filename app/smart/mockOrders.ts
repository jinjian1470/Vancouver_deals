// mockOrders.ts
// 本地mock订单数据工具

export interface MockOrderItem {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
  image?: string;
}

export interface MockOrder {
  id: number;
  totalAmount: number;
  status: string;
  createTime: string;
  items: MockOrderItem[];
}

export function getMockOrders(): MockOrder[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem('mock_orders');
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveMockOrders(orders: MockOrder[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_orders', JSON.stringify(orders));
  }
}

// 用法：
// const orders = getMockOrders()
// saveMockOrders([...orders, newOrder])
