
import { create } from 'zustand';
import type { CartItem, Order, OrderStatus, Product, Toast, User } from '../types';
import { products as seedProducts } from '../data/products';
import { readStorage, writeStorage } from '../utils/storage';

const PRODUCT_KEY = 'laptop-store-products';
const CART_KEY = 'laptop-store-cart';
const ORDER_KEY = 'laptop-store-orders';
const USER_KEY = 'laptop-store-user';

interface StoreState {
  products: Product[];
  cart: CartItem[];
  orders: Order[];
  user: User | null;
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  addToCart: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
}

const persistProducts = (products: Product[]) => writeStorage(PRODUCT_KEY, products);
const persistCart = (cart: CartItem[]) => writeStorage(CART_KEY, cart);
const persistOrders = (orders: Order[]) => writeStorage(ORDER_KEY, orders);

export const useStore = create<StoreState>((set, get) => ({
  products: readStorage<Product[]>(PRODUCT_KEY, seedProducts),
  cart: readStorage<CartItem[]>(CART_KEY, []),
  orders: readStorage<Order[]>(ORDER_KEY, []),
  user: readStorage<User | null>(USER_KEY, null),
  toasts: [],
  addToast: (toast) => {
    const id = crypto.randomUUID();
    set((state) => ({ toasts: [...state.toasts, { ...toast, id }] }));
    window.setTimeout(() => get().removeToast(id), 3500);
  },
  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) })),
  addToCart: (productId, quantity = 1) => set((state) => {
    const exists = state.cart.find((item) => item.productId === productId);
    const cart = exists ? state.cart.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item) : [...state.cart, { productId, quantity }];
    persistCart(cart); return { cart };
  }),
  updateQuantity: (productId, quantity) => set((state) => {
    const cart = quantity <= 0 ? state.cart.filter((item) => item.productId !== productId) : state.cart.map((item) => item.productId === productId ? { ...item, quantity } : item);
    persistCart(cart); return { cart };
  }),
  removeFromCart: (productId) => set((state) => { const cart = state.cart.filter((item) => item.productId !== productId); persistCart(cart); return { cart }; }),
  clearCart: () => { persistCart([]); set({ cart: [] }); },
  addOrder: (order) => set((state) => { const orders = [order, ...state.orders]; persistOrders(orders); return { orders }; }),
  updateOrderStatus: (orderId, status) => set((state) => { const orders = state.orders.map((order) => order.id === orderId ? { ...order, status } : order); persistOrders(orders); return { orders }; }),
  login: (email, password) => {
    if (password !== '123456') return false;
    const normalized = email.toLowerCase().trim();
    const user = normalized === 'admin@laptopstore.vn' ? { id: 'admin-1', name: 'Admin Laptop Store', email: normalized, role: 'admin' as const } : normalized === 'user@laptopstore.vn' ? { id: 'user-1', name: 'Khách hàng mẫu', email: normalized, role: 'user' as const } : null;
    if (!user) return false;
    writeStorage(USER_KEY, user); set({ user }); return true;
  },
  logout: () => { localStorage.removeItem(USER_KEY); set({ user: null }); },
  addProduct: (product) => set((state) => { const products = [product, ...state.products]; persistProducts(products); return { products }; }),
  updateProduct: (product) => set((state) => { const products = state.products.map((item) => item.id === product.id ? product : item); persistProducts(products); return { products }; }),
  deleteProduct: (productId) => set((state) => { const products = state.products.filter((item) => item.id !== productId); persistProducts(products); return { products }; }),
}));

export const selectCartLines = (state: StoreState) => state.cart.map((item) => ({ ...item, product: state.products.find((product) => product.id === item.productId)! })).filter((line) => line.product);
