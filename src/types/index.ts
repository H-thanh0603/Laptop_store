
export type UseCase = 'Học tập' | 'Văn phòng' | 'Gaming' | 'Đồ họa' | 'Lập trình' | 'Mỏng nhẹ' | 'Cao cấp' | 'MacBook';
export type Brand = 'Apple' | 'Dell' | 'HP' | 'Asus' | 'Acer' | 'Lenovo' | 'MSI' | 'Gigabyte';
export type StockStatus = 'in-stock' | 'low-stock' | 'out-of-stock';
export type OrderStatus = 'Chờ xác nhận' | 'Đã xác nhận' | 'Đang giao' | 'Hoàn thành' | 'Đã hủy';
export type PaymentMethod = 'COD' | 'Chuyển khoản ngân hàng' | 'Trả góp';
export type UserRole = 'user' | 'admin';

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  useCases: UseCase[];
  originalPrice: number;
  salePrice: number;
  discountPercent: number;
  images: string[];
  cpu: string;
  ram: '8GB' | '16GB' | '32GB';
  storage: string;
  gpu: string;
  screen: string;
  battery: string;
  weight: string;
  os: string;
  warranty: string;
  stock: number;
  rating: number;
  reviewCount: number;
  sold: number;
  isFeatured: boolean;
  isBestSeller: boolean;
  isNew: boolean;
  description: string;
  specifications: Record<string, string>;
  createdAt: string;
}

export interface CartItem { productId: string; quantity: number; }
export interface CartLine extends CartItem { product: Product; }
export interface CustomerInfo { fullName: string; phone: string; email?: string; city: string; district: string; address: string; note?: string; }
export interface Order { id: string; customer: CustomerInfo; items: CartLine[]; subtotal: number; shippingFee: number; discount: number; total: number; paymentMethod: PaymentMethod; status: OrderStatus; createdAt: string; }
export interface User { id: string; name: string; email: string; role: UserRole; }
export interface Toast { id: string; type: 'success' | 'error' | 'info'; title: string; message?: string; }
