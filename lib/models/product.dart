import 'package:flutter/material.dart';

class ProductColor {
  final String name;
  final Color color;
  final String label;

  const ProductColor({
    required this.name,
    required this.color,
    required this.label,
  });
}

class ProductReview {
  final String author;
  final double rating;
  final String comment;
  final String date;

  const ProductReview({
    required this.author,
    required this.rating,
    required this.comment,
    required this.date,
  });
}

class Product {
  final String id;
  final String name;
  final String nameEn;
  final String brand;
  final String category;
  final String categoryName;
  final double price;
  final double originalPrice;
  final double rating;
  final int reviewsCount;
  final int soldCount;
  final int stock;
  final bool isHot;
  final bool isNew;
  final String image;
  final List<String> gallery;
  final List<ProductColor> colors;
  final List<String> sizes;
  final String description;
  final List<String> features;
  final Map<String, String> specs;
  final List<ProductReview> reviews;

  Product({
    required this.id,
    required this.name,
    required this.nameEn,
    required this.brand,
    required this.category,
    required this.categoryName,
    required this.price,
    required this.originalPrice,
    required this.rating,
    required this.reviewsCount,
    required this.soldCount,
    required this.stock,
    required this.isHot,
    required this.isNew,
    required this.image,
    required this.gallery,
    required this.colors,
    required this.sizes,
    required this.description,
    required this.features,
    required this.specs,
    required this.reviews,
  });

  int get discountPercent =>
      (((originalPrice - price) / originalPrice) * 100).round();
}

// 16 Realistic Sports Catalog Products
final List<Product> sampleProducts = [
  Product(
    id: 'prod-01',
    name: 'Nike VaporFly 3 Next% Carbon',
    nameEn: 'Nike VaporFly 3 Racing Shoes',
    brand: 'Nike',
    category: 'shoes-running',
    categoryName: 'รองเท้าวิ่งมาราธอน',
    price: 7590,
    originalPrice: 8900,
    rating: 4.9,
    reviewsCount: 312,
    soldCount: 850,
    stock: 5,
    isHot: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80',
    ],
    colors: const [
      ProductColor(name: 'Red Flame', color: Color(0xFFEF4444), label: 'แดงสปอร์ต'),
      ProductColor(name: 'Neon Green', color: Color(0xFF10B981), label: 'เขียวนีออน'),
      ProductColor(name: 'Core Black', color: Color(0xFF1E293B), label: 'ดำออบซิเดียน'),
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    description: 'รองเท้าวิ่งทำลายสถิติ ออกแบบมาสำหรับนักวิ่งมาราธอนที่ต้องการความเร็วขั้นสุด แผ่นคาร์บอนไฟเบอร์ Flyplate เต็มแผ่น ผสานโฟม ZoomX ตอบสนองแรงส่งสูงสุดในทุกก้าว',
    features: [
      'แผ่นคาร์บอน Flyplate มอบแรงส่งไปข้างหน้าเต็มสปีด',
      'โฟม ZoomX น้ำหนักเบาที่สุด ให้พลังงานคืนกลับ 85%',
      'อัปเปอร์ Flyknit โปร่งสบายระบายอากาศ 360 องศา',
      'น้ำหนักเพียง 198 กรัม (ไซส์ 42)'
    ],
    specs: {
      'ประเภทกีฬา': 'วิ่งถนน / มาราธอน',
      'ดรอป': '8 มม.',
      'การรับประกัน': 'ของแท้ 100% ประกันศูนย์ 6 เดือน'
    },
    reviews: const [
      ProductReview(author: 'กิตติศักดิ์ ว.', rating: 5.0, comment: 'เบามาก ดีดเด้งทุกก้าว จบฮาล์ฟมาราธอนทำ New PB เลยครับ!', date: 'เมื่อวานนี้'),
      ProductReview(author: 'ธีรภัทร ช.', rating: 4.8, comment: 'ใส่ซ้อมคอร์ทและวิ่งยาว เยี่ยมยอดสมราคาครับ', date: '3 วันที่แล้ว')
    ],
  ),
  Product(
    id: 'prod-02',
    name: 'Adidas Adizero Boston 12 Pro',
    nameEn: 'Adidas Adizero Boston 12 Training & Race',
    brand: 'Adidas',
    category: 'shoes-running',
    categoryName: 'รองเท้าวิ่งทำความเร็ว',
    price: 4990,
    originalPrice: 5800,
    rating: 4.8,
    reviewsCount: 184,
    soldCount: 620,
    stock: 9,
    isHot: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80',
    ],
    colors: const [
      ProductColor(name: 'Solar Yellow', color: Color(0xFFFACC15), label: 'เหลืองนีออน'),
      ProductColor(name: 'Cloud White', color: Color(0xFFF8FAFC), label: 'ขาวสว่าง'),
      ProductColor(name: 'Cyan Blue', color: Color(0xFF06B6D4), label: 'ฟ้าไซแอน'),
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    description: 'คู่หูซ้อมวิ่งระยะไกลและลงแข่ง ผสานก้านคาร์บอน EnergyRods 2.0 เสริมความคล่องตัวด้วยพื้นสองชั้น Lightstrike Pro และ 2.0 ทนทาน นุ่มแน่น ไม่มีย้วย',
    features: [
      'ก้านไฟเบอร์กลาส EnergyRods 2.0 ลดการสูญเสียพลังงาน',
      'พื้นชั้นกลางแบบคู่ Lightstrike Pro + 2.0',
      'พื้นยาง Continental ยึดเกาะถนนเปียกได้ดีเยี่ยม'
    ],
    specs: {
      'ประเภทกีฬา': 'วิ่ง 5K - 42K / ซ้อมเทมโป',
      'ดรอป': '6.5 มม.',
      'การรับประกัน': 'เปลี่ยนไซส์ฟรีใน 14 วัน'
    },
    reviews: const [
      ProductReview(author: 'ปิยะวัฒน์ พ.', rating: 5.0, comment: 'วิ่งสบายเท้ามาก พื้นทนทาน Continental ยึดเกาะดีจริง', date: 'สัปดาห์ที่แล้ว')
    ],
  ),
  Product(
    id: 'prod-03',
    name: 'Air Jordan 38 Low "Cosmic Speed"',
    nameEn: 'Air Jordan XXXVIII Low Basketball',
    brand: 'Jordan',
    category: 'shoes-court',
    categoryName: 'รองเท้าบาสเก็ตบอล',
    price: 6490,
    originalPrice: 7200,
    rating: 4.9,
    reviewsCount: 142,
    soldCount: 390,
    stock: 4,
    isHot: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Hyper Royal', color: Color(0xFF2563EB), label: 'น้ำเงินไฮเปอร์'),
      ProductColor(name: 'Triple White', color: Color(0xFFFFFFFF), label: 'ขาวล้วน'),
      ProductColor(name: 'Infrared Black', color: Color(0xFF111827), label: 'ดำตัดส้ม'),
    ],
    sizes: ['41', '42', '43', '44', '45', '46'],
    description: 'รองเท้าบาสเก็ตบอลตัวท็อปสำหรับผู้เล่นที่ต้องการความเร็วและการครอสโอเวอร์รอบทิศทาง ระบบ X-Plate ช่วยล็อคข้อเท้าและรักษาความเสถียรสูงสุด',
    features: [
      'แผ่นประคอง X-Plate เพื่อความมั่นคงสูงเมื่อสไลด์ตัวด้านข้าง',
      'Zoom Air Strobel ซับแรงกระแทกได้นุ่มนวลที่สุด',
      'ลายก้างปลาแบบพิเศษ ยึดเกาะคอร์ทปาเก้ต์และพื้นปูนไร้ลื่น'
    ],
    specs: {
      'ประเภทกีฬา': 'บาสเก็ตบอล / วอลเลย์บอล',
      'ความสูงข้อ': 'Low-cut เพิ่มความคล่องตัว'
    },
    reviews: const [
      ProductReview(author: 'อัครพล ส.', rating: 5.0, comment: 'ครอสโอเวอร์มั่นใจ พื้นเกาะหนึบ กระโดดลงมานุ่มเข่ามาก', date: '5 วันที่แล้ว')
    ],
  ),
  Product(
    id: 'prod-04',
    name: 'Predator Elite FG "Solar Strike"',
    nameEn: 'Predator Elite Firm Ground Football Boots',
    brand: 'Adidas',
    category: 'shoes-football',
    categoryName: 'รองเท้าสตั๊ดฟุตบอล',
    price: 7990,
    originalPrice: 8500,
    rating: 4.9,
    reviewsCount: 98,
    soldCount: 270,
    stock: 6,
    isHot: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Solar Red', color: Color(0xFFDC2626), label: 'แดงสว่าง'),
      ProductColor(name: 'Lucid Lemon', color: Color(0xFFEAB308), label: 'เหลืองเลมอน'),
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    description: 'พลังในการปั่นไซด์โค้งและยิงประตูระดับมืออาชีพ ครีบยาง Strikeskin บนอัปเปอร์ HybridTouch 2.0 ให้สัมผัสบอลติดเท้าอย่างมหัศจรรย์',
    features: [
      'ครีบยาง Strikeskin เพิ่มแรงปั่นและคุมทิศทางบอล',
      'ชุดพื้น Controlframe 2.0 รองรับสปีดและความคล่องตัว',
      'ปุ่มสตั๊ด FG สำหรับสนามหญ้าจริงและหญ้าเทียมคุณภาพ'
    ],
    specs: {
      'ประเภทสนาม': 'หญ้าจริง (FG) / หญ้าเทียม (AG)',
      'น้ำหนัก': '180 กรัม'
    },
    reviews: const [
      ProductReview(author: 'ธนวัฒน์ ร.', rating: 5.0, comment: 'ปั่นโค้งเข้าเสาไกลสะใจมาก บอลติดเท้าดีสุดๆ', date: '2 สัปดาห์ก่อน')
    ],
  ),
  Product(
    id: 'prod-05',
    name: 'AeroDry Pro เสื้อวิ่งระบายอากาศ QuickDry (ชาย)',
    nameEn: 'AeroDry Pro Men Running Tee',
    brand: 'ActivePulse',
    category: 'apparel-men',
    categoryName: 'เสื้อผ้ากีฬาชาย',
    price: 690,
    originalPrice: 1290,
    rating: 4.8,
    reviewsCount: 420,
    soldCount: 1950,
    stock: 25,
    isHot: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Electric Cyan', color: Color(0xFF06B6D4), label: 'ฟ้าสปอร์ต'),
      ProductColor(name: 'Neon Lime', color: Color(0xFF10B981), label: 'เขียวนีออน'),
      ProductColor(name: 'Stealth Black', color: Color(0xFF1E293B), label: 'ดำด้าน'),
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'เสื้อวิ่งรุ่นยอดนิยม ผลิตจากเส้นใย Micro-Poly Honeycomb ระบายเหงื่อได้ไวกว่าผ้าทั่วไป 3 เท่า แห้งไว ไม่อมน้ำ ป้องกันกลิ่นอับชื้น พร้อมแถบสะท้อนแสง 3M',
    features: [
      'เทคโนโลยี Quick-Dry แห้งไวใน 10 นาที',
      'น้ำหนักเบาเพียง 95 กรัม สบายตัวราวกับไม่ได้ใส่',
      'แถบสะท้อนแสง 3M ปลอดภัยสำหรับวิ่งกลางคืน',
      'ป้องกันรังสียูวี UPF 40+'
    ],
    specs: {
      'เนื้อผ้า': 'Polyester 92%, Spandex 8%',
      'เหมาะสำหรับ': 'วิ่ง, เทรนนิ่งยิม, ปั่นจักรยาน'
    },
    reviews: const [
      ProductReview(author: 'วีรยุทธ ส.', rating: 5.0, comment: 'เหงื่อออกเยอะแค่ไหนก็ไม่อมน้ำ แห้งไวมาก คุ้มค่าสุดๆ', date: '1 วันที่แล้ว')
    ],
  ),
  Product(
    id: 'prod-06',
    name: 'HyperFlex กางเกงวิ่ง 2in1 มีซับในรัดกล้ามเนื้อ (ชาย)',
    nameEn: 'HyperFlex 2-in-1 Men Running Shorts',
    brand: 'ActivePulse',
    category: 'apparel-men',
    categoryName: 'เสื้อผ้ากีฬาชาย',
    price: 790,
    originalPrice: 1490,
    rating: 4.9,
    reviewsCount: 389,
    soldCount: 1420,
    stock: 18,
    isHot: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Charcoal Grey', color: Color(0xFF4B5563), label: 'เทากราไฟต์'),
      ProductColor(name: 'Midnight Black', color: Color(0xFF111827), label: 'ดำเข้ม'),
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'กางเกงวิ่ง 2in1 ตัวนอกเบาพริ้ว ตัวในซับรัดกล้ามเนื้อช่วยป้องกันขาเบียดเสียดสี พร้อมช่องใส่โทรศัพท์มือถือขนาดใหญ่ด้านใน ไม่แกว่งเวลาวิ่ง',
    features: [
      'ซับใน Compression ป้องกันขาเบียดและพยุงกล้ามเนื้อ',
      'ช่องเก็บสมาร์ทโฟน 6.7 นิ้ว แนบแน่นไม่กระเด้ง',
      'ช่องเสียบผ้าขนหนู/เสื้อที่ขอบเอวด้านหลัง',
      'กระเป๋าซิปกันน้ำสำหรับกุญแจ'
    ],
    specs: {
      'เนื้อผ้า': 'Nylon 88%, Spandex 12%',
      'ความยาว': '5 นิ้ว (Inseam 5")'
    },
    reviews: const [
      ProductReview(author: 'ชาญณรงค์ ธ.', rating: 5.0, comment: 'ช่องใส่มือถือเวิร์คมาก วิ่งมินิมาราธอนขาไม่เบียดเลย', date: '3 วันที่แล้ว')
    ],
  ),
  Product(
    id: 'prod-07',
    name: 'SculptFit High-Impact สปอร์ตบรากระชับสูง (หญิง)',
    nameEn: 'SculptFit High Support Women Sports Bra',
    brand: 'ActivePulse',
    category: 'apparel-women',
    categoryName: 'เสื้อผ้ากีฬาหญิง',
    price: 890,
    originalPrice: 1590,
    rating: 4.9,
    reviewsCount: 520,
    soldCount: 2200,
    stock: 14,
    isHot: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Sunset Peach', color: Color(0xFFFB7185), label: 'พีชซันเซ็ต'),
      ProductColor(name: 'Lilac Purple', color: Color(0xFFA855F7), label: 'ม่วงไลแลค'),
      ProductColor(name: 'Obsidian Black', color: Color(0xFF0F172A), label: 'ดำออบซิเดียน'),
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'สปอร์ตบราซัพพอร์ตระดับสูงสุด สำหรับกิจกรรมที่มีแรงกระแทกสูง เช่น วิ่ง เต้นแอโรบิก หรือครอสฟิต ล็อคทรงกระชับนุ่มนวล สายบ่าบุนวมไม่กดทับ',
    features: [
      'High Impact Support ลดการแกว่งตัวของหน้าอกถึง 78%',
      'ฟองน้ำชิ้นเดียวไร้รอยต่อ ถอดทำความสะอาดได้',
      'สายหลังแบบ Racerback เสริมตาข่ายระบายอากาศ',
      'ขอบเอวยางยืดกว้างนุ่ม ไม่ม้วนพับขณะเคลื่อนไหว'
    ],
    specs: {
      'วัสดุ': 'Polyamide 75%, Elastane 25%',
      'กิจกรรม': 'วิ่ง, HIIT, ฟิตเนส, มวยสากล'
    },
    reviews: const [
      ProductReview(author: 'พัชริดา บ.', rating: 5.0, comment: 'กระชับดีมากค่ะ กระโดดเชือกและวิ่งไม่อึดอัดเลย แนะนำ', date: '4 วันก่อน')
    ],
  ),
  Product(
    id: 'prod-08',
    name: 'CloudSoft เลกกิ้งโยคะเอวสูง Seamless (หญิง)',
    nameEn: 'CloudSoft Seamless High-Waist Yoga Leggings',
    brand: 'ActivePulse',
    category: 'apparel-women',
    categoryName: 'เสื้อผ้ากีฬาหญิง',
    price: 990,
    originalPrice: 1790,
    rating: 4.8,
    reviewsCount: 340,
    soldCount: 1680,
    stock: 22,
    isHot: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Olive Green', color: Color(0xFF4D7C0F), label: 'เขียวมะกอก'),
      ProductColor(name: 'Dusty Rose', color: Color(0xFFF43F5E), label: 'ชมพูกุหลาบ'),
      ProductColor(name: 'Midnight Navy', color: Color(0xFF1E293B), label: 'กรมท่าคลาสสิก'),
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'เลกกิ้งสัมผัสเนียนนุ่มราวกับผิวชั้นที่สอง เทคโนโลยี Seamless ทอไร้ตะเข็บข้าง ไม่บาดผิว ขอบเอวสูงกระชับหน้าท้อง มั่นใจในทุกท่าสควอทและโยคะ',
    features: [
      'Squat-Proof ไม่บาง ไม่ซีทรู มั่นใจ 100%',
      'เอวสูง 4 นิ้ว ช่วยเก็บหน้าท้องและพยุงแกนกลางลำตัว',
      'ยืดหยุ่น 4 ทิศทาง คล่องตัวสูงสุด',
      'ไม่ขึ้นขุย ผ่านการทดสอบซัก 200+ ครั้ง'
    ],
    specs: {
      'เนื้อผ้า': 'Nylon SoftTouch 80%, Lycra 20%',
      'ความยาว': '7/8 ขาเต่อ สวยเพรียว'
    },
    reviews: const [
      ProductReview(author: 'มนัสวี ก.', rating: 5.0, comment: 'ผ้านุ่มลื่นมาก เก็บพุงดีสุดๆ ทรงก้นสวยมากค่ะ', date: 'สัปดาห์ที่แล้ว')
    ],
  ),
  Product(
    id: 'prod-09',
    name: 'Puma Fast-R Nitro Elite 2 Cyber',
    nameEn: 'Puma Fast-R Nitro Elite 2 Running',
    brand: 'Puma',
    category: 'shoes-running',
    categoryName: 'รองเท้าวิ่งคาร์บอน',
    price: 7290,
    originalPrice: 8500,
    rating: 4.9,
    reviewsCount: 88,
    soldCount: 210,
    stock: 3,
    isHot: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Electric Cyan', color: Color(0xFF00F2FE), label: 'ฟ้านีออนไซเบอร์'),
      ProductColor(name: 'Fire Orange', color: Color(0xFFFF4B2B), label: 'ส้มเพลิง'),
    ],
    sizes: ['40', '41', '42', '43', '44'],
    description: 'รองเท้าวิ่งดีไซน์แยกระหว่างส้นกับหน้าเท้า ขับเคลื่อนด้วยแผ่นคาร์บอน PWRPLATE ยื่นยาวเหนือหน้าเท้า มอบแรงถีบส่งพลังงานที่เร็วกว่าเดิมถึง 22%',
    features: [
      'โฟมฉีดไนโตรเจน Nitro Elite เบา นุ่ม และเด้งคืนรูป',
      'โครงสร้างส้นแยกเพื่อความสมดุลเวลาลงส้น',
      'ยาง PUMAGRIP-LT ทนทาน ยึดเกาะถนนเปียกได้ดีเยี่ยม'
    ],
    specs: {
      'น้ำหนัก': '210 กรัม',
      'ระยะที่แนะนำ': '10K, 21K, 42K'
    },
    reviews: const [
      ProductReview(author: 'ชลิต อ.', rating: 5.0, comment: 'ดีไซน์ล้ำมาก ดีดส่งปลายเท้าแรง วิ่งเพซ 4 สบายเลยครับ', date: '3 วันก่อน')
    ],
  ),
  Product(
    id: 'prod-10',
    name: 'Asics Metaspeed Sky Paris',
    nameEn: 'Asics Metaspeed Sky Paris Edition',
    brand: 'Asics',
    category: 'shoes-running',
    categoryName: 'รองเท้าวิ่งแข่งขัน',
    price: 7990,
    originalPrice: 8900,
    rating: 5.0,
    reviewsCount: 215,
    soldCount: 460,
    stock: 5,
    isHot: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Sunrise Red', color: Color(0xFFDC2626), label: 'แดงตะวันรุ่ง'),
      ProductColor(name: 'Safety Yellow', color: Color(0xFFFACC15), label: 'เหลืองสว่าง'),
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    description: 'โฟมระดับท็อป FF TURBO PLUS นุ่มเบากว่าเดิม 8% พร้อมปรับองศาแผ่นคาร์บอนให้ขยายก้าววิ่งได้อย่างมีประสิทธิภาพสูงสุด น้ำหนักเบาที่สุดในประวัติศาสตร์ Asics',
    features: [
      'โฟมตัวท็อป FF TURBO PLUS ส่งแรงกระดอนสูงที่สุด',
      'แผ่นคาร์บอนไฟเบอร์วางกว้างขึ้น เพิ่มความเสถียร',
      'อัปเปอร์ MOTION WRAP 2.0 ล็อคกระชับเท้าไร้แรงกด'
    ],
    specs: {
      'น้ำหนัก': '183 กรัม',
      'ความหนาส้น': '39.5 มม. / หน้าเท้า 34.5 มม.'
    },
    reviews: const [
      ProductReview(author: 'วรพจน์ ม.', rating: 5.0, comment: '183 กรัมเบาหวิวราวกับขนนก คุ้มค่าที่สุดสำหรับวันแข่ง', date: 'เมื่อวานนี้')
    ],
  ),
  Product(
    id: 'prod-11',
    name: 'VaporGrip ถุงเท้าวิ่งลดการเสียดสี (เซ็ต 3 คู่)',
    nameEn: 'VaporGrip Anti-Blister Performance Socks 3-Pack',
    brand: 'ActivePulse',
    category: 'accessories',
    categoryName: 'อุปกรณ์และกระเป๋า',
    price: 390,
    originalPrice: 690,
    rating: 4.8,
    reviewsCount: 640,
    soldCount: 3100,
    stock: 50,
    isHot: false,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Sport Mix', color: Color(0xFF3B82F6), label: 'คละสีสปอร์ต'),
      ProductColor(name: 'Triple White', color: Color(0xFFF8FAFC), label: 'ขาวล้วน 3 คู่'),
    ],
    sizes: ['M (38-41)', 'L (42-45)'],
    description: 'ถุงเท้าวิ่งข้อสั้นเทคโนโลยี Dry-Cool ทอหนาพิเศษบริเวณส้นเท้าและปลายเท้า ป้องกันการเสียดสีและการเกิดตุ่มพองน้ำ (Blister) แถบรัดอุ้งเท้าช่วยพยุงไม่ให้เลื่อนหลุด',
    features: [
      'เส้นใย Anti-Friction ป้องกันตุ่มพองน้ำ 100%',
      'แถบยางพยุงอุ้งเท้า (Arch Support) ลดความเมื่อยล้า',
      'ตาข่ายทอด้านบนระบายความร้อนไม่อับชื้น'
    ],
    specs: {
      'บรรจุ': '1 กล่อง มี 3 คู่',
      'วัสดุ': 'Cotton 70%, CoolMax 25%, Spandex 5%'
    },
    reviews: const [
      ProductReview(author: 'สมบัติ น.', rating: 5.0, comment: 'วิ่งฟูลมาราธอนไม่พองเลย นุ่มกระชับดีมากครับ', date: 'สัปดาห์ก่อน')
    ],
  ),
  Product(
    id: 'prod-12',
    name: 'Titan Pro กระเป๋ายิมพร้อมช่องแยกใส่รองเท้า',
    nameEn: 'Titan Pro Gym Duffel Bag 40L',
    brand: 'ActivePulse',
    category: 'accessories',
    categoryName: 'อุปกรณ์และกระเป๋า',
    price: 890,
    originalPrice: 1590,
    rating: 4.9,
    reviewsCount: 230,
    soldCount: 890,
    stock: 16,
    isHot: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Obsidian Black', color: Color(0xFF111827), label: 'ดำด้านสปอร์ต'),
      ProductColor(name: 'Military Olive', color: Color(0xFF3F6212), label: 'เขียวทหาร'),
    ],
    sizes: ['Free Size (40L)'],
    description: 'กระเป๋าสะพายยิมและฟิตเนสความจุ 40 ลิตร ผ้า Oxford 900D กันน้ำ มีช่องแยกใส่รองเท้าพร้อมตาข่ายระบายกลิ่นอับ และช่องแยกใส่เสื้อผ้าเปียกเหงื่อโดยเฉพาะ',
    features: [
      'ช่องใส่รองเท้าด้านข้าง แยกขาดจากสัมภาระด้านใน',
      'ช่องพลาสติก TPU กันน้ำสำหรับเสื้อผ้าเปียกเหงื่อ',
      'สายสะพายบุนวมนุ่ม ถอดปรับได้ ไม่เจ็บไหล่'
    ],
    specs: {
      'ความจุ': '40 ลิตร',
      'ขนาด': '52 x 26 x 28 ซม.'
    },
    reviews: const [
      ProductReview(author: 'ก้องภพ อ.', rating: 5.0, comment: 'จุของไปฟิตเนสครบทั้งรองเท้า เข็มขัดยกเวท เสื้อผ้า แข็งแรงมาก', date: '4 วันก่อน')
    ],
  ),
  Product(
    id: 'prod-13',
    name: 'HydroPulse กระบอกน้ำเก็บเย็น 24 ชม. 1000ml',
    nameEn: 'HydroPulse 1000ml Insulated Bottle',
    brand: 'ActivePulse',
    category: 'accessories',
    categoryName: 'อุปกรณ์และกระเป๋า',
    price: 590,
    originalPrice: 990,
    rating: 4.9,
    reviewsCount: 310,
    soldCount: 1450,
    stock: 35,
    isHot: false,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Cyber Blue', color: Color(0xFF0284C7), label: 'ฟ้าเมทัลลิก'),
      ProductColor(name: 'Matte Black', color: Color(0xFF18181B), label: 'ดำแมตต์'),
    ],
    sizes: ['1,000 ml'],
    description: 'กระบอกน้ำเก็บอุณหภูมิสแตนเลสฟู้ดเกรด SUS316 ปลอดสนิม 100% รักษาความเย็นจัดได้นานถึง 24 ชั่วโมง ฝาเปิดแบบกดปุ่มคลิกเดียวพร้อมหลอดซิลิโคนดูดง่าย',
    features: [
      'ฉนวนสุญญากาศผนัง 3 ชั้น ไร้ไอน้ำเกาะรอบขวด',
      'ผลิตจากสแตนเลส SUS316 ปลอดสารก่อมะเร็ง BPA-Free',
      'หูหิ้วแข็งแรง พกพาไปฟิตเนสและวิ่งได้สะดวก'
    ],
    specs: {
      'ความจุ': '1,000 ml (1 ลิตร)',
      'การเก็บอุณหภูมิ': 'เย็น 24 ชม. / ร้อน 12 ชม.'
    },
    reviews: const [
      ProductReview(author: 'ธิดารัตน์ ส.', rating: 5.0, comment: 'ใส่น้ำแข็งไว้ตั้งแต่เช้า ตอนเย็นยังอยู่ครบเลย ดีมากค่ะ', date: '2 วันที่แล้ว')
    ],
  ),
  Product(
    id: 'prod-14',
    name: 'AeroPeak หมวกวิ่งมาราธอนน้ำหนักเบา UV50+',
    nameEn: 'AeroPeak Lightweight Marathon Cap UV50+',
    brand: 'ActivePulse',
    category: 'accessories',
    categoryName: 'อุปกรณ์และกระเป๋า',
    price: 390,
    originalPrice: 650,
    rating: 4.8,
    reviewsCount: 178,
    soldCount: 820,
    stock: 24,
    isHot: false,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
    ],
    colors: const [
      ProductColor(name: 'Laser White', color: Color(0xFFF8FAFC), label: 'ขาวสะท้อนแสง'),
      ProductColor(name: 'Stealth Black', color: Color(0xFF1E293B), label: 'ดำด้าน'),
    ],
    sizes: ['Free Size (54-62 ซม.)'],
    description: 'หมวกวิ่งน้ำหนักเบาเพียง 42 กรัม ปีกหมวกแบบนิ่มพับเก็บใส่กระเป๋ากางเกงได้ไม่เสียทรง ผ้าตาข่าย Laser-cut ระบายความร้อนได้รวดเร็ว แถบซับเหงื่อรอบศีรษะป้องกันเหงื่อไหลเข้าตา',
    features: [
      'ปีกหมวกพับงอได้คืนรูป ไม่หัก ไม่งอเสียทรง',
      'ป้องกันรังสียูวี UPF 50+ ปกป้องใบหน้าจากแดดแรง',
      'สายปรับขอยางยืดสปอร์ตด้านหลัง กระชับรับทุกสรีระ'
    ],
    specs: {
      'น้ำหนัก': '42 กรัม',
      'วัสดุ': 'Polyester Quick-Dry 100%'
    },
    reviews: const [
      ProductReview(author: 'อนุชา ต.', rating: 4.8, comment: 'พับใส่กระเป๋ากางเกงวิ่งได้สบาย เหงื่อไม่ไหลเข้าตาเลย', date: 'สัปดาห์ที่แล้ว')
    ],
  ),
];

