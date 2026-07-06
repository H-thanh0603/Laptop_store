# Laptop Store

Website bán laptop hiện đại xây bằng React + Vite + TypeScript. Dự án mô phỏng một sàn thương mại điện tử laptop nghiêm túc với luồng người dùng, giỏ hàng, thanh toán local và admin panel quản lý dữ liệu.

## Công nghệ sử dụng

- React + Vite + TypeScript
- Tailwind CSS
- Zustand cho state management + localStorage persistence
- React Router cho routing
- react-hook-form + zod cho checkout validation
- lucide-react cho icons
- ESLint + TypeScript build check

## Tính năng chính

### Người dùng

- Trang chủ có hero banner, danh mục nhu cầu, sản phẩm nổi bật, giảm giá, bán chạy và cam kết dịch vụ.
- Danh sách laptop dạng grid responsive.
- Tìm kiếm theo tên sản phẩm.
- Lọc theo thương hiệu, khoảng giá, nhu cầu, RAM, CPU.
- Sắp xếp theo mới nhất, bán chạy, giá tăng/giảm, giảm giá nhiều nhất, đánh giá cao nhất.
- Card sản phẩm có ảnh, badge, cấu hình, giá gốc/khuyến mãi, rating, CTA.
- Chi tiết sản phẩm có gallery, giá, tồn kho, số lượng, khuyến mãi, chính sách, thông số kỹ thuật, sản phẩm liên quan.
- Giỏ hàng lưu localStorage, tăng/giảm/xóa/xóa toàn bộ.
- Checkout có validate thông tin khách hàng và phương thức thanh toán.
- Đặt hàng thành công, tạo mã đơn, lưu đơn vào localStorage và xóa giỏ hàng.
- Đăng nhập/đăng ký mock.

### Admin

- Admin layout có sidebar, dashboard, sản phẩm, đơn hàng, khách hàng, cài đặt.
- Dashboard thống kê tổng sản phẩm, tổng đơn, doanh thu, đơn chờ xác nhận, sắp hết hàng.
- Biểu đồ doanh thu đơn giản và danh sách đơn gần đây/sản phẩm bán chạy.
- Quản lý sản phẩm: tìm kiếm, lọc thương hiệu, thêm/sửa/xóa sản phẩm, form đầy đủ field chính.
- Quản lý đơn hàng: tìm kiếm, lọc trạng thái, xem chi tiết, đổi trạng thái và lưu localStorage.
- Quản lý khách hàng tổng hợp từ đơn hàng đã đặt.

## Tài khoản demo

- Admin: admin@laptopstore.vn / 123456
- User: user@laptopstore.vn / 123456

## Cài đặt

```bash
npm install
```

## Chạy local

```bash
npm run dev
```

Mặc định Vite sẽ hiển thị URL local, thường là:

```text
http://localhost:5173
```

## Build production

```bash
npm run build
```

## Kiểm tra lint

```bash
npm run lint
```

## Cấu trúc thư mục

```text
src/
  components/        Component tái sử dụng: ProductCard, ToastHost, ImageWithFallback
  data/              Mock data laptop
  layouts/           CustomerLayout, AdminLayout
  pages/             Trang người dùng
  pages/admin/       Trang admin
  store/             Zustand store và localStorage persistence
  types/             TypeScript interfaces
  utils/             Format tiền, storage helper, slug/order code
```

## Các trang chính

- `/` — Trang chủ
- `/products` — Danh sách laptop, filter/search/sort
- `/products/:id` — Chi tiết sản phẩm
- `/cart` — Giỏ hàng
- `/checkout` — Thanh toán
- `/order-success/:id` — Đặt hàng thành công
- `/login` — Đăng nhập/đăng ký mock
- `/admin` — Dashboard admin
- `/admin/products` — Quản lý sản phẩm
- `/admin/orders` — Quản lý đơn hàng
- `/admin/customers` — Quản lý khách hàng
- `/admin/settings` — Cài đặt demo

## Dữ liệu mẫu

Dự án có hơn 30 sản phẩm laptop đa dạng thương hiệu:

- Apple MacBook Air/Pro
- Dell XPS, Inspiron, Latitude, G series
- HP Pavilion, Victus, Envy, ProBook
- Asus Vivobook, Zenbook, ROG, TUF, ProArt
- Acer Aspire, Swift, Nitro, Predator
- Lenovo IdeaPad, ThinkPad, Legion, Yoga
- MSI Modern, Prestige, Katana, Creator
- Gigabyte G5, Aero

Mỗi sản phẩm có field đầy đủ: giá, ảnh, CPU, RAM, SSD, GPU, màn hình, pin, cân nặng, OS, bảo hành, tồn kho, rating, sold, flags và specifications.

## Hướng nâng cấp tiếp theo

- Thay Zustand/localStorage bằng API service layer gọi Node.js/Express hoặc Next.js API routes.
- Thêm database PostgreSQL/SQLite với Prisma.
- Thêm auth thật bằng session/JWT.
- Thêm upload ảnh sản phẩm.
- Thêm test E2E bằng Playwright cho luồng mua hàng và admin.
- Thêm quản lý mã giảm giá, tồn kho theo biến thể và thanh toán thật.

## Ghi chú bảo mật

Đây là frontend local demo. Tài khoản mock chỉ dùng để kiểm thử. Không có file `.env` hoặc secret production trong repo.