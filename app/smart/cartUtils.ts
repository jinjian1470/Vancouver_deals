import { smartProducts } from './data';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  count: number;
}

const CART_KEY = 'smart_cart';

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(CART_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data) as CartItem[];
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
}

export function addToCart(productId: number, count: number = 1): void {
  const cart = getCart();
  const product = smartProducts.find((p) => p.id === productId);
  if (!product) return;
  const idx = cart.findIndex((item: CartItem) => item.id === productId);
  if (idx > -1) {
    cart[idx].count += count;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      count,
    });
  }
  saveCart(cart);
}

export function removeFromCart(productId: number): void {
  const cart = getCart().filter((item: CartItem) => item.id !== productId);
  saveCart(cart);
}

export function updateCartCount(productId: number, count: number): void {
  const cart = getCart();
  const idx = cart.findIndex((item: CartItem) => item.id === productId);
  if (idx > -1) {
    cart[idx].count = count;
    if (cart[idx].count <= 0) cart.splice(idx, 1);
    saveCart(cart);
  }
}

export function clearCart(): void {
  saveCart([]);
}
