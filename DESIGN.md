---
version: alpha
name: Laptop Store
description: Tech-premium Vietnamese laptop ecommerce with energetic sale moments.
colors:
  primary: "#0B5FFF"
  primaryDark: "#073EAA"
  secondary: "#EF233C"
  ink: "#0B1220"
  muted: "#64748B"
  surface: "#F5F7FB"
  card: "#FFFFFF"
  border: "#E2E8F0"
  success: "#16A34A"
  warning: "#F59E0B"
  danger: "#DC2626"
  info: "#0284C7"
typography:
  h1:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  h2:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: 700
    lineHeight: 1.2
rounded:
  sm: 8px
  md: 12px
  lg: 20px
  xl: 28px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primaryDark}"
  badge-sale:
    backgroundColor: "{colors.secondary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
  card-product:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 16px
---

## Overview
Laptop Store dùng nền xanh công nghệ, sale red có kiểm soát, card trắng nổi trên nền xám xanh nhạt để tạo cảm giác thương mại điện tử thật.

## Colors
Primary blue dành cho CTA và focus. Secondary red chỉ dùng cho khuyến mãi, badge và urgency. Ink giữ cảm giác cao cấp.

## Typography
Inter giúp UI hiện đại, đọc tốt trên bảng thông số và danh sách sản phẩm dày thông tin.

## Layout
Grid responsive 12 cột desktop, 2 cột tablet, 1 cột mobile. Spacing balanced-dense để phù hợp e-commerce.

## Elevation & Depth
Card có shadow mềm, hover nâng nhẹ; hero dùng glow gradient nhưng không neon.

## Shapes
Bo góc 12-20px cho card/filter/form; pill cho badge và category chips.

## Components
Button primary xanh, sale badge đỏ, cards có image area cố định để không vỡ layout.

## Do's and Don'ts
Do dùng token màu/spacing thống nhất. Don't hard-code secret, đừng tạo UI trắng trơn, đừng để admin chỉ có placeholder.
