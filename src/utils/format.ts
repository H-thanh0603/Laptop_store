
export const formatVND = (value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(value);
export const formatCompact = (value: number) => new Intl.NumberFormat('vi-VN', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
export const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');
export const slugify = (value: string) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const orderCode = () => `LS${Date.now().toString().slice(-8)}${Math.floor(Math.random()*90+10)}`;
