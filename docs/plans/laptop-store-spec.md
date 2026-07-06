# Laptop Store Implementation Spec

## 1. Outcomes
Website React/Vite/TypeScript chạy được, có người dùng mua laptop từ home → listing/filter → detail → cart → checkout → success; admin đăng nhập mock để quản lý sản phẩm, đơn hàng, khách hàng; build không lỗi và có README.

## 2. In-Scope
- Frontend local demo nghiêm túc với mock data/localStorage.
- Ít nhất 30 laptop đầy đủ fields, filter/sort/search/pagination.
- Cart/order/auth/admin persistence qua localStorage.
- Responsive desktop/tablet/mobile, loading/empty/error/toast states.
- Commit/push theo phần lớn trên nhánh main.

## 3. Out-of-Scope
- Backend thật, thanh toán thật, email/SMS thật.
- Production security/auth thật.
- Multi-seller marketplace, inventory reservation concurrency.

## 4. Constraints
React + Vite + TypeScript, Tailwind CSS, Zustand, React Router, lucide-react, react-hook-form + zod. Làm trực tiếp nhánh main repo GitHub đã clone tại D:/Laptop_store.

## 5. Decisions Already Made
Brand: tech blue + sale red + premium dark ink. Mock accounts: admin@laptopstore.vn / 123456, user@laptopstore.vn / 123456. Data layer tách utils/store để dễ thay API sau.

## 6. Task Breakdown
1. Init Vite/Tailwind structure + brand/DESIGN/spec.
2. Add types, mock products, utilities, Zustand stores.
3. Build customer layout, home, listing, detail, cart, checkout, success, auth.
4. Build admin layout, dashboard, products/orders/customers/settings.
5. Polish responsive, loading/empty/toast, README, build verification.

## 7. Verification
- npm install
- npm run build
- npm run lint nếu cấu hình lint chạy được
- Browser smoke: home, products filter, detail add cart, checkout, admin login, product CRUD/order status.
