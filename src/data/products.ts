
import type { Brand, Product, UseCase } from '../types';

const img = (seed: string) => `https://picsum.photos/seed/${seed}/900/650`;
const desc = (name: string, target: string) => `${name} được chọn cho nhóm ${target}, cân bằng hiệu năng, độ bền và trải nghiệm sử dụng hằng ngày. Máy phù hợp cho học tập, làm việc, giải trí và các tác vụ chuyên sâu tùy cấu hình.`;

type Seed = [string, Brand, UseCase[], number, number, string, Product['ram'], string, string, string, string, string, string, number, number, number, boolean, boolean, boolean];
const seeds: Seed[] = [
['MacBook Air M2 13 inch','Apple',['Mỏng nhẹ','Học tập','Văn phòng','MacBook'],27990000,22490000,'Apple M2 8-core','8GB','256GB SSD','Apple 8-core GPU','13.6 inch Liquid Retina','18 giờ','1.24kg','macOS',18,4.8,512,true,true,false],
['MacBook Air M3 13 inch','Apple',['Mỏng nhẹ','Văn phòng','Lập trình','MacBook'],32990000,27990000,'Apple M3 8-core','16GB','512GB SSD','Apple 10-core GPU','13.6 inch Liquid Retina','18 giờ','1.24kg','macOS',15,4.9,360,true,true,true],
['MacBook Pro M3 Pro 14 inch','Apple',['Đồ họa','Lập trình','Cao cấp','MacBook'],54990000,49990000,'Apple M3 Pro 11-core','18GB' as Product['ram'],'512GB SSD','Apple 14-core GPU','14.2 inch Liquid Retina XDR','18 giờ','1.55kg','macOS',8,4.9,180,true,false,true],
['Dell XPS 13 Plus 9340','Dell',['Mỏng nhẹ','Văn phòng','Cao cấp'],44990000,39990000,'Intel Core Ultra 7','16GB','1TB SSD','Intel Arc','13.4 inch 3.5K OLED','14 giờ','1.26kg','Windows 11',10,4.7,154,true,false,true],
['Dell Inspiron 15 3530','Dell',['Học tập','Văn phòng'],17990000,13990000,'Intel Core i5-1335U','16GB','512GB SSD','Intel Iris Xe','15.6 inch FHD 120Hz','8 giờ','1.65kg','Windows 11',25,4.5,420,false,true,false],
['Dell Latitude 5440','Dell',['Văn phòng','Lập trình'],26990000,22990000,'Intel Core i7-1365U','16GB','512GB SSD','Intel Iris Xe','14 inch FHD','10 giờ','1.39kg','Windows 11 Pro',12,4.6,210,false,false,false],
['HP Pavilion 15 eg3093TU','HP',['Học tập','Văn phòng'],18990000,14990000,'Intel Core i5-1335U','16GB','512GB SSD','Intel Iris Xe','15.6 inch FHD','8 giờ','1.74kg','Windows 11',30,4.5,380,false,true,false],
['HP Victus 16 r0128TX','HP',['Gaming','Đồ họa'],32990000,27990000,'Intel Core i7-13700H','16GB','512GB SSD','RTX 4060 8GB','16.1 inch FHD 144Hz','6 giờ','2.33kg','Windows 11',9,4.7,260,true,true,false],
['HP Envy x360 14','HP',['Mỏng nhẹ','Cao cấp','Văn phòng'],30990000,25990000,'AMD Ryzen 7 8840HS','16GB','1TB SSD','Radeon 780M','14 inch OLED Touch','12 giờ','1.39kg','Windows 11',11,4.6,130,false,false,true],
['Asus Vivobook 15 OLED','Asus',['Học tập','Văn phòng'],20990000,16990000,'Intel Core i5-13500H','16GB','512GB SSD','Intel Iris Xe','15.6 inch OLED FHD','8 giờ','1.7kg','Windows 11',24,4.6,510,true,true,false],
['Asus Zenbook 14 OLED','Asus',['Mỏng nhẹ','Cao cấp','Lập trình'],32990000,28490000,'Intel Core Ultra 7','16GB','1TB SSD','Intel Arc','14 inch 3K OLED 120Hz','15 giờ','1.2kg','Windows 11',14,4.8,290,true,false,true],
['Asus ROG Strix G16','Asus',['Gaming','Đồ họa'],45990000,39990000,'Intel Core i7-14650HX','16GB','1TB SSD','RTX 4060 8GB','16 inch QHD 240Hz','5 giờ','2.5kg','Windows 11',7,4.8,340,true,true,true],
['Asus TUF Gaming A15','Asus',['Gaming'],28990000,23990000,'AMD Ryzen 7 7735HS','16GB','512GB SSD','RTX 4050 6GB','15.6 inch FHD 144Hz','7 giờ','2.2kg','Windows 11',18,4.6,460,false,true,false],
['Acer Aspire 5 A515','Acer',['Học tập','Văn phòng'],15990000,11990000,'Intel Core i5-1235U','8GB','512GB SSD','Intel Iris Xe','15.6 inch FHD','7 giờ','1.7kg','Windows 11',32,4.4,620,false,true,false],
['Acer Swift Go 14 OLED','Acer',['Mỏng nhẹ','Văn phòng','Lập trình'],26990000,22490000,'Intel Core Ultra 5','16GB','512GB SSD','Intel Arc','14 inch 2.8K OLED','12 giờ','1.25kg','Windows 11',16,4.6,180,false,false,true],
['Acer Nitro V 15','Acer',['Gaming','Đồ họa'],25990000,21990000,'Intel Core i5-13420H','16GB','512GB SSD','RTX 4050 6GB','15.6 inch FHD 144Hz','5 giờ','2.1kg','Windows 11',20,4.5,510,true,true,false],
['Lenovo IdeaPad Slim 5','Lenovo',['Học tập','Văn phòng','Mỏng nhẹ'],18990000,15490000,'AMD Ryzen 5 7530U','16GB','512GB SSD','Radeon Graphics','14 inch WUXGA','10 giờ','1.46kg','Windows 11',28,4.5,440,false,true,false],
['Lenovo ThinkPad E14 Gen 5','Lenovo',['Văn phòng','Lập trình'],23990000,19990000,'Intel Core i5-1335U','16GB','512GB SSD','Intel Iris Xe','14 inch WUXGA','11 giờ','1.41kg','Windows 11 Pro',17,4.7,260,true,false,false],
['Lenovo ThinkPad X1 Carbon Gen 12','Lenovo',['Cao cấp','Mỏng nhẹ','Lập trình'],52990000,47990000,'Intel Core Ultra 7','32GB','1TB SSD','Intel Arc','14 inch 2.8K OLED','13 giờ','1.09kg','Windows 11 Pro',6,4.9,95,true,false,true],
['Lenovo Legion 5 Pro','Lenovo',['Gaming','Đồ họa'],42990000,36990000,'AMD Ryzen 7 7745HX','16GB','1TB SSD','RTX 4060 8GB','16 inch QHD 165Hz','6 giờ','2.5kg','Windows 11',13,4.8,310,true,true,false],
['MSI Modern 14 C13M','MSI',['Học tập','Văn phòng','Mỏng nhẹ'],14990000,11990000,'Intel Core i5-1335U','8GB','512GB SSD','Intel Iris Xe','14 inch FHD','8 giờ','1.4kg','Windows 11',27,4.4,390,false,false,false],
['MSI Prestige 14 AI Evo','MSI',['Mỏng nhẹ','Cao cấp','Lập trình'],34990000,29990000,'Intel Core Ultra 7','32GB','1TB SSD','Intel Arc','14 inch OLED','13 giờ','1.29kg','Windows 11',9,4.7,120,true,false,true],
['MSI Katana 15 B13V','MSI',['Gaming','Đồ họa'],31990000,26990000,'Intel Core i7-13620H','16GB','1TB SSD','RTX 4060 8GB','15.6 inch FHD 144Hz','5 giờ','2.25kg','Windows 11',15,4.6,270,false,true,false],
['Gigabyte G5 KF5','Gigabyte',['Gaming'],27990000,22990000,'Intel Core i5-13500H','16GB','512GB SSD','RTX 4060 8GB','15.6 inch FHD 144Hz','5 giờ','2.08kg','Windows 11',19,4.5,335,false,true,false],
['Gigabyte Aero 16 OLED','Gigabyte',['Đồ họa','Cao cấp'],52990000,46990000,'Intel Core i7-13700H','32GB','1TB SSD','RTX 4070 8GB','16 inch 4K OLED','7 giờ','2.1kg','Windows 11',5,4.8,82,true,false,false],
['Dell G15 5530 Gaming','Dell',['Gaming'],29990000,24990000,'Intel Core i7-13650HX','16GB','512GB SSD','RTX 4050 6GB','15.6 inch FHD 165Hz','5 giờ','2.65kg','Windows 11',16,4.5,288,false,false,false],
['HP ProBook 450 G10','HP',['Văn phòng'],21990000,18490000,'Intel Core i5-1335U','16GB','512GB SSD','Intel Iris Xe','15.6 inch FHD','9 giờ','1.79kg','Windows 11 Pro',22,4.4,190,false,false,false],
['Asus ProArt Studiobook 16','Asus',['Đồ họa','Cao cấp'],64990000,57990000,'Intel Core i9-13980HX','32GB','1TB SSD','RTX 4070 8GB','16 inch 3.2K OLED','6 giờ','2.4kg','Windows 11 Pro',4,4.9,70,true,false,false],
['Acer Predator Helios Neo 16','Acer',['Gaming','Đồ họa'],39990000,33990000,'Intel Core i7-13700HX','16GB','1TB SSD','RTX 4060 8GB','16 inch WQXGA 165Hz','5 giờ','2.6kg','Windows 11',8,4.7,205,false,true,true],
['Lenovo Yoga Slim 7','Lenovo',['Mỏng nhẹ','Văn phòng','Cao cấp'],29990000,24990000,'AMD Ryzen 7 7840S','16GB','1TB SSD','Radeon 780M','14.5 inch 2.9K OLED','12 giờ','1.35kg','Windows 11',14,4.6,165,false,false,true],
['MSI Creator Z16 HX','MSI',['Đồ họa','Cao cấp'],58990000,51990000,'Intel Core i9-13950HX','32GB','1TB SSD','RTX 4070 8GB','16 inch QHD+ 165Hz','6 giờ','2.35kg','Windows 11 Pro',6,4.8,68,false,false,false],
['Apple MacBook Pro M3 Max 16 inch','Apple',['Đồ họa','Lập trình','Cao cấp','MacBook'],89990000,82990000,'Apple M3 Max 14-core','32GB','1TB SSD','Apple 30-core GPU','16.2 inch Liquid Retina XDR','22 giờ','2.14kg','macOS',3,5.0,42,true,false,true]
];

export const products: Product[] = seeds.map((s, i) => {
  const [name, brand, useCases, originalPrice, salePrice, cpu, ram, storage, gpu, screen, battery, weight, os, stock, rating, sold, isFeatured, isBestSeller, isNew] = s;
  const discountPercent = Math.round((1 - salePrice / originalPrice) * 100);
  return {
    id: `lap-${String(i + 1).padStart(3, '0')}`,
    name, brand, useCases, originalPrice, salePrice, discountPercent,
    images: [img(`${brand}-${i}-a`), img(`${brand}-${i}-b`), img(`${brand}-${i}-c`)],
    cpu, ram, storage, gpu, screen, battery, weight, os, warranty: '12 tháng chính hãng', stock, rating, reviewCount: Math.round(sold * 1.7 + 28), sold,
    isFeatured, isBestSeller, isNew,
    description: desc(name, useCases.join(', ')),
    specifications: { CPU: cpu, RAM: ram, 'Ổ cứng': storage, GPU: gpu, 'Màn hình': screen, Pin: battery, 'Trọng lượng': weight, 'Hệ điều hành': os, 'Cổng kết nối': 'USB-C, USB-A, HDMI, Wi-Fi 6/6E, Bluetooth 5.x', 'Bảo hành': '12 tháng chính hãng' },
    createdAt: new Date(Date.now() - i * 86400000).toISOString()
  };
});

export const brands: Brand[] = ['Apple','Dell','HP','Asus','Acer','Lenovo','MSI','Gigabyte'];
export const useCases: UseCase[] = ['Học tập','Văn phòng','Gaming','Đồ họa','Lập trình','Mỏng nhẹ','Cao cấp','MacBook'];
export const ramOptions = ['8GB','16GB','32GB'] as const;
export const cpuOptions = ['Intel Core i5','Intel Core i7','AMD Ryzen 5','AMD Ryzen 7','Apple M-series'];
