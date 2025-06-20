export interface Deal {
  id: number;
  title: string;
  description: string;
  category: string;
  discount: string;
  originalPrice: number;
  discountedPrice: number;
  location: string;
  image: string;
  validUntil: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  favorites: number[];
}

export interface Review {
  id: number;
  dealId: number;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

export interface ForumUser {
  nickname: string;
  avatar: string;
}
