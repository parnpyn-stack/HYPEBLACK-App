/**
 * ACTIVEPULSE SPORTS E-COMMERCE ENGINE
 * Full-featured Shopping Application Logic
 */

// ==========================================
// 1. PRODUCT CATALOG DATA (16 Realistic Items)
// ==========================================
const PRODUCTS = [
  {
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
    isHot: true,
    isNew: true,
    stock: 5,
    tag: '⚡ ลดแรง 15%',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Red Flame', hex: '#EF4444', label: 'แดงสปอร์ต' },
      { name: 'Neon Green', hex: '#10B981', label: 'เขียวนีออน' },
      { name: 'Core Black', hex: '#1E293B', label: 'ดำออบซิเดียน' }
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    description: 'รองเท้าวิ่งทำลายสถิติ ออกแบบมาสำหรับนักวิ่งมาราธอนและฮาล์ฟมาราธอนที่ต้องการความเร็วขั้นสุด แผ่นคาร์บอนไฟเบอร์ Flyplate เต็มความยาวเท้า ผสานโฟม ZoomX ตอบสนองแรงส่งสูงสุดในทุกก้าว',
    features: [
      'แผ่นคาร์บอนไฟเบอร์ Flyplate มอบแรงส่งไปข้างหน้า',
      'โฟม ZoomX น้ำหนักเบาที่สุด ให้พลังงานคืนกลับ 85%',
      'อัปเปอร์ Flyknit โปร่งสบายระบายอากาศ 360 องศา',
      'น้ำหนักเพียง 198 กรัม (ไซส์ 42)'
    ],
    specs: {
      'ประเภทกีฬา': 'วิ่งถนน / มาราธอน',
      'ดรอป': '8 มม. (ส้นเท้า 40 มม. / หน้าเท้า 32 มม.)',
      'การรับประกัน': 'ของแท้ 100% ประกันศูนย์ 6 เดือน'
    }
  },
  {
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
    isHot: true,
    isNew: false,
    stock: 9,
    tag: '🔥 ขายดีอันดับ 1',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Solar Yellow', hex: '#FACC15', label: 'เหลืองนีออน' },
      { name: 'Cloud White', hex: '#F8FAFC', label: 'ขาวสว่าง' },
      { name: 'Cyan Blue', hex: '#06B6D4', label: 'ฟ้าไซแอน' }
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    description: 'คู่หูซ้อมวิ่งระยะไกลและลงแข่ง ผสานก้านคาร์บอน EnergyRods 2.0 เสริมความคล่องตัวด้วยพื้นสองชั้น Lightstrike Pro และ Lightstrike 2.0 ทนทาน นุ่มแน่น ไม่มีย้วย',
    features: [
      'ก้านไฟเบอร์กลาส EnergyRods 2.0 ลดการสูญเสียพลังงาน',
      'พื้นชั้นกลางแบบคู่ Lightstrike Pro + 2.0',
      'พื้นยาง Continental ยึดเกาะถนนเปียกได้ดีเยี่ยม'
    ],
    specs: {
      'ประเภทกีฬา': 'วิ่งระยะ 5K - 42.195K / วิ่งเทมโป',
      'ดรอป': '6.5 มม.',
      'การรับประกัน': 'ของแท้ 100% เปลี่ยนไซส์ฟรีใน 14 วัน'
    }
  },
  {
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
    isHot: false,
    isNew: true,
    stock: 4,
    tag: '✨ รุ่นลิมิเต็ด',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Hyper Royal', hex: '#2563EB', label: 'น้ำเงินไฮเปอร์' },
      { name: 'Triple White', hex: '#FFFFFF', label: 'ขาวล้วน' },
      { name: 'Infrared Black', hex: '#111827', label: 'ดำตัดส้ม' }
    ],
    sizes: ['41', '42', '43', '44', '45', '46'],
    description: 'รองเท้าบาสเก็ตบอลตัวท็อปสำหรับผู้เล่นที่ต้องการการเคลื่อนไหวรอบทิศทางอย่างรวดเร็ว ระบบ X-Plate ช่วยล็อคข้อเท้าและรักษาความเสถียรเมื่อครอสโอเวอร์และขึ้นชู้ต',
    features: [
      'เทคโนโลยี X-Plate เพื่อความมั่นคงสูงเมื่อสไลด์ตัวด้านข้าง',
      'Zoom Air Strobel เต็มแผ่น ซับแรงกระแทกได้นุ่มนวลที่สุด',
      'ลายก้างปลาแบบพิเศษ ยึดเกาะคอร์ทปาเก้ต์และพื้นปูนไร้ลื่น'
    ],
    specs: {
      'ประเภทกีฬา': 'บาสเก็ตบอล / วอลเลย์บอล / แบดมินตัน',
      'ความสูงข้อ': 'Low-cut เพิ่มความคล่องตัว',
      'การรับประกัน': 'รับประกันศูนย์ไทย 6 เดือน'
    }
  },
  {
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
    isHot: true,
    isNew: true,
    stock: 6,
    tag: '⚽ พรีเมียมสตั๊ด',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Solar Red', hex: '#DC2626', label: 'แดงสว่าง' },
      { name: 'Lucid Lemon', hex: '#EAB308', label: 'เหลืองเลมอน' }
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    description: 'พลังในการปั่นไซด์โค้งและยิงประตูระดับมืออาชีพ ชิ้นยาง Strikeskin จัดวางตามหลักสรีรศาสตร์บนอัปเปอร์ HybridTouch 2.0 ให้สัมผัสบอลติดเท้าอย่างมหัศจรรย์',
    features: [
      'ครีบยาง Strikeskin เพิ่มแรงปั่นและคุมทิศทางลูกฟุตบอล',
      'ชุดพื้น Controlframe 2.0 รองรับสปีดและความคล่องตัว',
      'ปุ่มสตั๊ด FG เหมาะสำหรับสนามหญ้าจริงและหญ้าเทียมคุณภาพ'
    ],
    specs: {
      'ประเภทสนาม': 'หญ้าจริง (Firm Ground) / หญ้าเทียม (AG)',
      'น้ำหนัก': '180 กรัม',
      'การรับประกัน': 'ของแท้ 100%'
    }
  },
  {
    id: 'prod-05',
    name: 'AeroDry Pro เสื้อวิ่งระบายอากาศ Quick-Dry (ชาย)',
    nameEn: 'AeroDry Pro Men Breathable Running Tee',
    brand: 'ActivePulse',
    category: 'apparel-men',
    categoryName: 'เสื้อผ้ากีฬาชาย',
    price: 690,
    originalPrice: 1290,
    rating: 4.8,
    reviewsCount: 420,
    soldCount: 1950,
    isHot: true,
    isNew: false,
    stock: 25,
    tag: '💥 ลด 46%',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Electric Cyan', hex: '#06B6D4', label: 'ฟ้าสปอร์ต' },
      { name: 'Neon Lime', hex: '#10B981', label: 'เขียวนีออน' },
      { name: 'Stealth Black', hex: '#1E293B', label: 'ดำด้าน' },
      { name: 'Pure White', hex: '#F1F5F9', label: 'ขาวสว่าง' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'เสื้อวิ่งรุ่นยอดนิยม ผลิตจากเส้นใย Micro-Poly Honeycomb ระบายเหงื่อได้ไวกว่าผ้าทั่วไป 3 เท่า แห้งไว ไม่อมน้ำ ป้องกันกลิ่นอับชื้น พร้อมแถบสะท้อนแสง 3M สำหรับวิ่งกลางคืน',
    features: [
      'เทคโนโลยี Quick-Dry แห้งไวใน 10 นาที',
      'น้ำหนักเบาเพียง 95 กรัม สบายตัวราวกับไม่ได้ใส่',
      'แถบสะท้อนแสง 3M Scotchlite บริเวณหน้าอกและหลัง',
      'ป้องกันรังสี UV UPF 40+'
    ],
    specs: {
      'เนื้อผ้า': 'Polyester 92%, Spandex 8%',
      'เหมาะสำหรับ': 'วิ่ง, เทรนนิ่งยิม, ปั่นจักรยาน, บาสเก็ตบอล',
      'การดูแล': 'ซักเครื่องได้ แห้งไวโดยไม่ต้องรีด'
    }
  },
  {
    id: 'prod-06',
    name: 'HyperFlex กางเกงวิ่ง 2in1 มีซับในกระชับกล้ามเนื้อ (ชาย)',
    nameEn: 'HyperFlex 2-in-1 Men Running Shorts',
    brand: 'ActivePulse',
    category: 'apparel-men',
    categoryName: 'เสื้อผ้ากีฬาชาย',
    price: 790,
    originalPrice: 1490,
    rating: 4.9,
    reviewsCount: 389,
    soldCount: 1420,
    isHot: true,
    isNew: true,
    stock: 18,
    tag: '⚡ ซับในรัดกล้ามเนื้อ',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Charcoal Grey', hex: '#4B5563', label: 'เทากราไฟต์' },
      { name: 'Midnight Black', hex: '#111827', label: 'ดำเข้ม' },
      { name: 'Navy Blue', hex: '#1E3A8A', label: 'กรมท่า' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'กางเกงวิ่งตัวท็อป 2in1 ตัวนอกเบาพริ้วมีช่องระบาย ตัวในซับรัดกล้ามเนื้อช่วยป้องกันการเสียดสีของต้นขา พร้อมกระเป๋าใส่โทรศัพท์มือถือขนาดใหญ่ด้านใน ไม่แกว่งเวลาวิ่ง',
    features: [
      'ซับใน Compression ป้องกันขาเบียดและพยุงกล้ามเนื้อ',
      'ช่องเก็บสมาร์ทโฟน 6.7 นิ้ว แนบแน่นไม่กระเด้ง',
      'ช่องเสียบผ้าขนหนู/เสื้อที่ขอบเอวด้านหลัง',
      'กระเป๋าซิปกันน้ำสำหรับกุญแจและบัตร'
    ],
    specs: {
      'เนื้อผ้า': 'Nylon 88%, Spandex 12%',
      'ความยาว': '5 นิ้ว (Inseam 5")',
      'ฟังก์ชัน': 'Anti-Chafing / Sweat-Wicking'
    }
  },
  {
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
    isHot: true,
    isNew: false,
    stock: 14,
    tag: '🌸 ยอดฮิตสาวฟิตเนส',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Sunset Peach', hex: '#FB7185', label: 'พีชซันเซ็ต' },
      { name: 'Lilac Purple', hex: '#A855F7', label: 'ม่วงไลแลค' },
      { name: 'Obsidian Black', hex: '#0F172A', label: 'ดำออบซิเดียน' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'สปอร์ตบราซัพพอร์ตระดับสูงสุด สำหรับกิจกรรมที่มีแรงกระแทกสูง เช่น วิ่ง เต้นแอโรบิก หรือครอสฟิต ล็อคทรงอกกระชับนุ่มนวล สายบ่าบุนวมไม่กดทับ ผ้าระบายเหงื่อเย็นสบาย',
    features: [
      'High Impact Support ลดการแกว่งตัวของหน้าอกถึง 78%',
      'ฟองน้ำชิ้นเดียวไร้รอยต่อ ถอดทำความสะอาดได้',
      'สายหลังแบบ Racerback เสริมตาข่ายระบายอากาศ',
      'ขอบเอวยางยืดกว้างนุ่ม ไม่ม้วนพับขณะเคลื่อนไหว'
    ],
    specs: {
      'วัสดุ': 'Polyamide 75%, Elastane 25%',
      'การใช้งาน': 'วิ่งมาราธอน, HIIT, ฟิตเนส, มวยสากล',
      'ขนาดคัพรองรับ': 'A, B, C, D'
    }
  },
  {
    id: 'prod-08',
    name: 'CloudSoft กางเกงเลกกิ้งโยคะเอวสูง Seamless (หญิง)',
    nameEn: 'CloudSoft Seamless High-Waist Yoga Leggings',
    brand: 'ActivePulse',
    category: 'apparel-women',
    categoryName: 'เสื้อผ้ากีฬาหญิง',
    price: 990,
    originalPrice: 1790,
    rating: 4.8,
    reviewsCount: 340,
    soldCount: 1680,
    isHot: false,
    isNew: true,
    stock: 22,
    tag: '✨ ไร้รอยต่อ เก็บพุง',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Olive Green', hex: '#4D7C0F', label: 'เขียวมะกอก' },
      { name: 'Dusty Rose', hex: '#F43F5E', label: 'ชมพูกุหลาบ' },
      { name: 'Midnight Navy', hex: '#1E293B', label: 'กรมท่าคลาสสิก' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'เลกกิ้งสัมผัสเนียนนุ่มราวกับผิวชั้นที่สอง เทคโนโลยี Seamless ทอไร้ตะเข็บข้าง ไม่บาดผิว ขอบเอวสูงกระชับหน้าท้อง ก้นทรงพีชสวย มั่นใจในทุกท่าสควอทและโยคะ',
    features: [
      'Squat-Proof ไม่บาง ไม่ซีทรู มั่นใจ 100%',
      'เอวสูง 4 นิ้ว ช่วยเก็บหน้าท้องและพยุงแกนกลางลำตัว',
      'ยืดหยุ่น 4 ทิศทาง (4-Way Stretch) คล่องตัวสูงสุด',
      'ไม่ขึ้นขุย ไม่ย้วย ผ่านการทดสอบซัก 200+ ครั้ง'
    ],
    specs: {
      'เนื้อผ้า': 'Nylon SoftTouch 80%, Lycra 20%',
      'ความยาว': '7/8 ขาเต่อ สวยเพรียว',
      'ฟังก์ชัน': 'Tummy Control & Butt Lift'
    }
  },
  {
    id: 'prod-09',
    name: 'StormShield แจ็คเก็ตวิ่งกันลมสะท้อนแสง Ultra-Light',
    nameEn: 'StormShield Ultra-Light Windbreaker Jacket',
    brand: 'ActivePulse',
    category: 'apparel-men',
    categoryName: 'เสื้อผ้ากีฬาชาย',
    price: 1390,
    originalPrice: 2290,
    rating: 4.9,
    reviewsCount: 165,
    soldCount: 510,
    isHot: false,
    isNew: true,
    stock: 11,
    tag: '🌧️ กันละอองฝน & ลม',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Neon Coral', hex: '#FF5E36', label: 'ส้มสปอร์ต' },
      { name: 'Cyber Lime', hex: '#10B981', label: 'เขียวนีออน' },
      { name: 'Jet Black', hex: '#0B0F19', label: 'ดำสนิท' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'แจ็คเก็ตวิ่งพับเก็บได้ขนาดเล็กพกพาง่าย เคลือบสาร DWR ป้องกันละอองฝนและลมหนาว ด้านหลังมีช่องระบายอากาศป้องกันการอบอ้าว แถบสะท้อนแสงจัดเต็มปลอดภัยยามค่ำคืน',
    features: [
      'พับเก็บเป็นกระเป๋าพกพาขนาดเท่าฝ่ามือในตัว',
      'เคลือบกันละอองฝน DWR (Durable Water Repellent)',
      'แถบสะท้อนแสง 360 องศา ปลอดภัยบนท้องถนน',
      'ฮู้ดกระชับมีเชือกปรับระดับไม่หลุดเวลาวิ่งโต้ลม'
    ],
    specs: {
      'น้ำหนัก': '125 กรัม',
      'วัสดุ': 'Ripstop 100% Nylon DWR',
      'การใช้งาน': 'วิ่งถนน, เดินป่า, ปั่นจักรยาน'
    }
  },
  {
    id: 'prod-10',
    name: 'BreezeFit เสื้อกล้ามเทรนนิ่งหลังเว้า (หญิง)',
    nameEn: 'BreezeFit Women Cross-Back Training Tank',
    brand: 'ActivePulse',
    category: 'apparel-women',
    categoryName: 'เสื้อผ้ากีฬาหญิง',
    price: 490,
    originalPrice: 890,
    rating: 4.7,
    reviewsCount: 195,
    soldCount: 930,
    isHot: false,
    isNew: false,
    stock: 30,
    tag: '🍃 เบาสบาย ไม่อมเหงื่อ',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Mint Green', hex: '#34D399', label: 'เขียวมิ้นต์' },
      { name: 'Lavender', hex: '#C084FC', label: 'ม่วงลาเวนเดอร์' },
      { name: 'Cloud White', hex: '#F8FAFC', label: 'ขาวบริสุทธิ์' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'เสื้อกล้ามเว้าหลังดีไซน์สปอร์ตชิค ช่วยโชว์สายบราด้านหลังอย่างมีสไตล์ ผ้าเนื้อโปร่งนุ่ม ทิ้งตัวสวย แห้งไว เหมาะกับฟิตเนส เวทเทรนนิ่ง และพิลาทิส',
    features: [
      'ดีไซน์หลังเปิดรูปตัว Y เพิ่มการระบายความร้อน',
      'ผ้าคูลลิ่งทัช ให้ความรู้สึกเย็นทันทีที่สวมใส่',
      'ชายเสื้อหน้าสั้นหลังยาว พรางสะโพกสวยงาม'
    ],
    specs: {
      'วัสดุ': 'Rayon 65%, Polyester 30%, Spandex 5%',
      'เหมาะกับ': 'Pilates, Weight Training, Yoga',
      'คำแนะนำ': 'ซักมือหรือซักเครื่องใส่ถุงถนอมผ้า'
    }
  },
  {
    id: 'prod-11',
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
    isHot: true,
    isNew: true,
    stock: 3,
    tag: '⚡ ตัวท็อปแห่งปี 2026',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Electric Cyan', hex: '#00F2FE', label: 'ฟ้านีออนไซเบอร์' },
      { name: 'Fire Orange', hex: '#FF4B2B', label: 'ส้มเพลิง' }
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
      'ระยะที่แนะนำ': '10KM, 21KM, มาราธอน',
      'การรับประกัน': 'ของแท้ศูนย์ Puma'
    }
  },
  {
    id: 'prod-12',
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
    isHot: true,
    isNew: true,
    stock: 5,
    tag: '🥇 เหรียญทองโอลิมปิก',
    image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Sunrise Red', hex: '#DC2626', label: 'แดงตะวันรุ่ง' },
      { name: 'Safety Yellow', hex: '#FACC15', label: 'เหลืองสว่าง' }
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    description: 'ออกแบบมาเพื่อนักวิ่งสายก้าวยาว (Stride Runners) โฟม FF TURBO PLUS ตัวใหม่ นุ่มเบากว่าเดิม 8% พร้อมปรับองศาแผ่นคาร์บอนให้ขยายก้าววิ่งได้อย่างมีประสิทธิภาพสูงสุด',
    features: [
      'โฟมระดับท็อป FF TURBO PLUS ส่งแรงกระดอนสูงที่สุด',
      'แผ่นคาร์บอนไฟเบอร์วางกว้างขึ้น เพิ่มความเสถียร',
      'อัปเปอร์ MOTION WRAP 2.0 ล็อคกระชับเท้าไร้แรงกด'
    ],
    specs: {
      'น้ำหนัก': '183 กรัม (เบาที่สุดในประวัติศาสตร์ Asics)',
      'ความหนาส้น': '39.5 มม. / หน้าเท้า 34.5 มม.',
      'การรับประกัน': 'ของแท้ 100%'
    }
  },
  {
    id: 'prod-13',
    name: 'VaporGrip ถุงเท้าวิ่งลดการเสียดสี Anti-Blister (เซ็ต 3 คู่)',
    nameEn: 'VaporGrip Anti-Blister Performance Socks 3-Pack',
    brand: 'ActivePulse',
    category: 'accessories',
    categoryName: 'อุปกรณ์และกระเป๋า',
    price: 390,
    originalPrice: 690,
    rating: 4.8,
    reviewsCount: 640,
    soldCount: 3100,
    isHot: false,
    isNew: false,
    stock: 50,
    tag: '🧦 เซ็ตสุดคุ้ม 3 คู่',
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Sport Mix', hex: '#3B82F6', label: 'คละสีสปอร์ต (ขาว/ดำ/ส้ม)' },
      { name: 'Triple White', hex: '#F8FAFC', label: 'ขาวล้วน 3 คู่' },
      { name: 'All Black', hex: '#111827', label: 'ดำล้วน 3 คู่' }
    ],
    sizes: ['M (38-41)', 'L (42-45)'],
    description: 'ถุงเท้าวิ่งข้อสั้นเทคโนโลยี Dry-Cool ทอหนาพิเศษบริเวณส้นเท้าและปลายเท้า ป้องกันการเสียดสีและการพองน้ำ (Blister) แถบรัดอุ้งเท้าช่วยพยุงไม่ให้ถุงเท้าเลื่อนหลุด',
    features: [
      'เส้นใย Anti-Friction ป้องกันตุ่มพองน้ำ 100%',
      'แถบยางพยุงอุ้งเท้า (Arch Support) ลดความเมื่อยล้า',
      'ตาข่ายทอด้านบนระบายความร้อนไม่อับชื้น'
    ],
    specs: {
      'บรรจุ': '1 กล่อง มี 3 คู่',
      'วัสดุ': 'Cotton 70%, CoolMax 25%, Spandex 5%'
    }
  },
  {
    id: 'prod-14',
    name: 'Titan Pro กระเป๋ายิมพร้อมช่องแยกใส่รองเท้ากันน้ำ',
    nameEn: 'Titan Pro Gym Duffel Bag with Shoe Compartment',
    brand: 'ActivePulse',
    category: 'accessories',
    categoryName: 'อุปกรณ์และกระเป๋า',
    price: 890,
    originalPrice: 1590,
    rating: 4.9,
    reviewsCount: 230,
    soldCount: 890,
    isHot: false,
    isNew: true,
    stock: 16,
    tag: '🎒 จุสะใจ 40 ลิตร',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#111827', label: 'ดำด้านสปอร์ต' },
      { name: 'Military Olive', hex: '#3F6212', label: 'เขียวทหาร' },
      { name: 'Navy Cobalt', hex: '#1E3A8A', label: 'น้ำเงินโคบอลต์' }
    ],
    sizes: ['Free Size (40L)'],
    description: 'กระเป๋าสะพายยิมและฟิตเนสความจุ 40 ลิตร ผ้า Oxford 900D กันน้ำ 100% มีช่องแยกใส่รองเท้าพร้อมตาข่ายระบายกลิ่นอับ และช่องแยกใส่เสื้อผ้าเปียกเหงื่อโดยเฉพาะ',
    features: [
      'ช่องใส่รองเท้าด้านข้าง แยกขาดจากสัมภาระด้านใน',
      'ช่องพลาสติก TPU กันน้ำสำหรับเสื้อผ้าเปียกเหงื่อ',
      'สายสะพายบุนวมนุ่ม ถอดปรับได้ ไม่เจ็บไหล่'
    ],
    specs: {
      'ความจุ': '40 ลิตร',
      'ขนาด': '52 x 26 x 28 ซม.',
      'วัสดุ': 'Heavy Duty Waterproof 900D Polyester'
    }
  },
  {
    id: 'prod-15',
    name: 'HydroPulse กระบอกน้ำเก็บเย็น 24 ชม. 1000ml สแตนเลส 316',
    nameEn: 'HydroPulse 1000ml Vacuum Insulated Sports Bottle',
    brand: 'ActivePulse',
    category: 'accessories',
    categoryName: 'อุปกรณ์และกระเป๋า',
    price: 590,
    originalPrice: 990,
    rating: 4.9,
    reviewsCount: 310,
    soldCount: 1450,
    isHot: false,
    isNew: false,
    stock: 35,
    tag: '❄️ เก็บความเย็น 24 ชม.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Neon Cyber Blue', hex: '#0284C7', label: 'ฟ้าเมทัลลิก' },
      { name: 'Matte Black', hex: '#18181B', label: 'ดำแมตต์' },
      { name: 'Flame Orange', hex: '#EA580C', label: 'ส้มเฟลม' }
    ],
    sizes: ['1,000 ml'],
    description: 'กระบอกน้ำเก็บอุณหภูมิสแตนเลสฟู้ดเกรด SUS316 ปลอดสนิม 100% รักษาความเย็นจัดได้นานถึง 24 ชั่วโมง และร้อน 12 ชั่วโมง ฝาเปิดแบบกดปุ่มคลิกเดียวพร้อมหลอดซิลิโคนดูดง่าย',
    features: [
      'ฉนวนสุญญากาศผนัง 3 ชั้น ไร้ไอน้ำเกาะรอบขวด',
      'ผลิตจากสแตนเลส SUS316 ปลอดสารก่อมะเร็ง BPA-Free',
      'หูหิ้วแข็งแรง พกพาไปฟิตเนสและวิ่งได้สะดวก'
    ],
    specs: {
      'ความจุ': '1,000 ml (1 ลิตร)',
      'การเก็บอุณหภูมิ': 'เย็น 24 ชม. / ร้อน 12 ชม.',
      'การรับประกัน': 'ประกันการรั่วซึม 1 ปี'
    }
  },
  {
    id: 'prod-16',
    name: 'AeroPeak หมวกวิ่งมาราธอนน้ำหนักเบา กันแดด UV50+',
    nameEn: 'AeroPeak Lightweight Marathon Cap UV50+',
    brand: 'ActivePulse',
    category: 'accessories',
    categoryName: 'อุปกรณ์และกระเป๋า',
    price: 390,
    originalPrice: 650,
    rating: 4.8,
    reviewsCount: 178,
    soldCount: 820,
    isHot: false,
    isNew: false,
    stock: 24,
    tag: '☀️ กันแดด UPF50+',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Laser White', hex: '#F8FAFC', label: 'ขาวสะท้อนแสง' },
      { name: 'Stealth Black', hex: '#1E293B', label: 'ดำด้าน' },
      { name: 'Volt Lime', hex: '#84CC16', label: 'เหลืองโวลต์' }
    ],
    sizes: ['Free Size (ปรับได้ 54-62 ซม.)'],
    description: 'หมวกวิ่งน้ำหนักเบาเพียง 42 กรัม ปีกหมวกแบบนิ่มพับเก็บใส่กระเป๋ากางเกงได้ไม่เสียทรง ผ้าตาข่าย Laser-cut ระบายความร้อนได้รวดเร็ว แถบซับเหงื่อรอบศีรษะป้องกันเหงื่อไหลเข้าตา',
    features: [
      'ปีกหมวกพับงอได้คืนรูป ไม่หัก ไม่งอเสียทรง',
      'ป้องกันรังสียูวี UPF 50+ ปกป้องใบหน้าจากแดดแรง',
      'สายปรับขอยางยืดสปอร์ตด้านหลัง กระชับรับทุกสรีระศีรษะ'
    ],
    specs: {
      'น้ำหนัก': '42 กรัม',
      'วัสดุ': 'Polyester Quick-Dry 100%'
    }
  }
];

// Coupon Codes database
const COUPONS = {
  'SPORT20': { discountPercent: 20, description: 'ลด 20% ทั้งตะกร้าสำหรับสายสปอร์ต' },
  'WELCOME10': { discountPercent: 10, description: 'ลด 10% ต้อนรับลูกค้าใหม่' },
  'PULSE100': { discountAmount: 100, minSpend: 800, description: 'ลดทันที 100 บาท เมื่อช้อปครบ 800 บาท' },
  'FREESHIP': { freeShipping: true, description: 'ส่งฟรีทันที ไม่มียอดขั้นต่ำ' }
};

// ==========================================
// 2. APPLICATION STATE
// ==========================================
const AppState = {
  products: PRODUCTS,
  cart: [],
  wishlist: [],
  activeCategory: 'all',
  selectedBrand: 'all',
  searchQuery: '',
  priceRange: 10000,
  sortBy: 'popular',
  appliedCoupon: null,
  activeProductModal: null,
  selectedColorIndex: 0,
  selectedSize: null,
  selectedQuantity: 1,
  checkoutStep: 1, // 1: Cart, 2: Address & Payment, 3: Success
  shippingFee: 50,
  freeShippingThreshold: 1500
};

// ==========================================
// 3. STORAGE & INITIALIZATION
// ==========================================
function initApp() {
  loadFromStorage();
  setupEventListeners();
  renderCategories();
  renderProducts();
  updateCartUI();
  updateWishlistBadges();
  startFlashSaleTimer();
}

function loadFromStorage() {
  try {
    const savedCart = localStorage.getItem('activepulse_cart');
    if (savedCart) AppState.cart = JSON.parse(savedCart);
    
    const savedWishlist = localStorage.getItem('activepulse_wishlist');
    if (savedWishlist) AppState.wishlist = JSON.parse(savedWishlist);
  } catch (e) {
    console.warn('Storage read error, using default state', e);
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('activepulse_cart', JSON.stringify(AppState.cart));
  } catch (e) {
    console.error('Storage write error', e);
  }
}

function saveWishlistToStorage() {
  try {
    localStorage.setItem('activepulse_wishlist', JSON.stringify(AppState.wishlist));
  } catch (e) {
    console.error('Storage write error', e);
  }
}

// ==========================================
// 4. RENDERING FUNCTIONS
// ==========================================

function renderCategories() {
  const categories = [
    { id: 'all', label: '🔥 ทั้งหมด', count: PRODUCTS.length },
    { id: 'shoes-running', label: '👟 รองเท้าวิ่ง', count: PRODUCTS.filter(p => p.category === 'shoes-running').length },
    { id: 'shoes-court', label: '🏀 บาสเก็ตบอล', count: PRODUCTS.filter(p => p.category === 'shoes-court').length },
    { id: 'shoes-football', label: '⚽ สตั๊ดฟุตบอล', count: PRODUCTS.filter(p => p.category === 'shoes-football').length },
    { id: 'apparel-men', label: '🎽 เสื้อผ้าชาย', count: PRODUCTS.filter(p => p.category === 'apparel-men').length },
    { id: 'apparel-women', label: '🧘‍♀️ เสื้อผ้าหญิง', count: PRODUCTS.filter(p => p.category === 'apparel-women').length },
    { id: 'accessories', label: '🎒 อุปกรณ์ & กระเป๋า', count: PRODUCTS.filter(p => p.category === 'accessories').length }
  ];

  const container = document.getElementById('category-pills');
  if (!container) return;

  container.innerHTML = categories.map(cat => `
    <button 
      onclick="filterByCategory('${cat.id}')"
      class="category-pill whitespace-nowrap px-5 py-2.5 rounded-full font-medium text-sm transition-all flex items-center gap-2 ${
        AppState.activeCategory === cat.id 
          ? 'active bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/25 ring-2 ring-orange-400' 
          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
      }">
      <span>${cat.label}</span>
      <span class="text-xs px-2 py-0.5 rounded-full ${AppState.activeCategory === cat.id ? 'bg-white/30 text-white' : 'bg-slate-100 text-slate-500'}">${cat.count}</span>
    </button>
  `).join('');
}

function getFilteredProducts() {
  return AppState.products.filter(item => {
    // Category match
    const matchesCategory = (AppState.activeCategory === 'all' || item.category === AppState.activeCategory);
    
    // Brand match
    const matchesBrand = (AppState.selectedBrand === 'all' || item.brand.toLowerCase() === AppState.selectedBrand.toLowerCase());

    // Search query match (name, nameEn, description, brand, categoryName)
    const q = AppState.searchQuery.toLowerCase().trim();
    const matchesSearch = !q || (
      item.name.toLowerCase().includes(q) ||
      item.nameEn.toLowerCase().includes(q) ||
      item.brand.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );

    // Price range match
    const matchesPrice = item.price <= AppState.priceRange;

    return matchesCategory && matchesBrand && matchesSearch && matchesPrice;
  }).sort((a, b) => {
    switch (AppState.sortBy) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'discount-desc': return (b.originalPrice - b.price) - (a.originalPrice - a.price);
      case 'rating-desc': return b.rating - a.rating;
      case 'newest': return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case 'popular':
      default:
        return b.soldCount - a.soldCount;
    }
  });
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const countEl = document.getElementById('products-count');
  if (!grid) return;

  const filtered = getFilteredProducts();
  if (countEl) countEl.innerText = `${filtered.length} รายการ`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center text-4xl">
          🔍
        </div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">ไม่พบสินค้าที่ตรงกับเงื่อนไข</h3>
        <p class="text-slate-500 mb-6">ลองปรับคำค้นหา หรือรีเซ็ตตัวกรองเพื่อดูสินค้าทั้งหมด</p>
        <button onclick="resetFilters()" class="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all">
          รีเซ็ตตัวกรองทั้งหมด
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = AppState.wishlist.includes(product.id);
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return `
      <div class="product-card group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative">
        
        <!-- Top Badges & Wishlist -->
        <div class="relative product-image-container bg-gradient-to-b from-slate-100 to-slate-200 aspect-square overflow-hidden cursor-pointer" onclick="openProductModal('${product.id}')">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80';"
            class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
          />

          <!-- Discount badge -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            <span class="bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
              🔥 -${discountPercent}%
            </span>
            ${product.isNew ? '<span class="bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">NEW</span>' : ''}
          </div>

          <!-- Wishlist Heart Button -->
          <button 
            onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
            aria-label="บันทึกรายการโปรด"
            class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white backdrop-blur shadow-md flex items-center justify-center transition-all duration-200 z-10 ${
              isWishlisted ? 'text-red-500 scale-110' : 'text-slate-400 hover:text-red-500'
            }">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>

          <!-- Quick view hint overlay -->
          <div class="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span class="bg-white/95 text-slate-800 text-xs font-semibold px-4 py-2 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5">
              👁️ ดูรายละเอียด
            </span>
          </div>

          <!-- Stock alert if low -->
          ${product.stock <= 5 ? `
            <div class="absolute bottom-2 left-2 bg-amber-500/90 text-white text-[11px] font-semibold px-2 py-0.5 rounded backdrop-blur">
              ⚡ เหลือเพียง ${product.stock} ชิ้น
            </div>
          ` : ''}
        </div>

        <!-- Product Details -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <!-- Brand & Category -->
            <div class="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
              <span class="uppercase tracking-wider text-orange-600 font-semibold">${product.brand}</span>
              <div class="flex items-center gap-1 text-amber-500 font-semibold">
                <span>★</span>
                <span>${product.rating}</span>
                <span class="text-slate-400 font-normal">(${product.reviewsCount})</span>
              </div>
            </div>

            <!-- Title -->
            <h4 class="font-bold text-slate-800 text-base leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors cursor-pointer" onclick="openProductModal('${product.id}')">
              ${product.name}
            </h4>
            <p class="text-xs text-slate-400 line-clamp-1 mt-0.5 mb-2">${product.nameEn}</p>

            <!-- Color Swatches preview -->
            <div class="flex items-center gap-1.5 mb-3">
              ${product.colors.map(c => `
                <span class="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-inner" style="background-color: ${c.hex};" title="${c.label}"></span>
              `).join('')}
              <span class="text-[11px] text-slate-400 ml-1">(${product.colors.length} สี)</span>
            </div>
          </div>

          <!-- Price & Add To Cart Button -->
          <div class="pt-3 border-t border-slate-100 mt-2">
            <div class="flex items-baseline gap-2 mb-3">
              <span class="text-xl font-extrabold text-slate-900">฿${product.price.toLocaleString()}</span>
              <span class="text-xs text-slate-400 line-through">฿${product.originalPrice.toLocaleString()}</span>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button 
                onclick="openProductModal('${product.id}')"
                class="w-full py-2 px-3 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1">
                <span>รายละเอียด</span>
              </button>

              <button 
                onclick="quickAddToCart('${product.id}')"
                class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-1">
                <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span>ใส่ตะกร้า</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    `;
  }).join('');
}

// ==========================================
// 5. QUICK VIEW / PRODUCT MODAL
// ==========================================
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  AppState.activeProductModal = product;
  AppState.selectedColorIndex = 0;
  AppState.selectedSize = product.sizes[0];
  AppState.selectedQuantity = 1;

  const modal = document.getElementById('product-detail-modal');
  const content = document.getElementById('product-modal-content');
  if (!modal || !content) return;

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
      
      <!-- Left: Image Gallery -->
      <div class="flex flex-col gap-4">
        <div class="relative bg-slate-100 rounded-2xl overflow-hidden aspect-square border border-slate-200/80 shadow-inner">
          <img 
            id="modal-main-img" 
            src="${product.image}" 
            alt="${product.name}" 
            class="w-full h-full object-cover object-center transition-all duration-300"
          />
          <div class="absolute top-4 left-4 flex flex-col gap-2">
            <span class="bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              🔥 ส่วนลด ${discountPercent}%
            </span>
            <span class="bg-slate-900/80 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
              ${product.categoryName}
            </span>
          </div>
        </div>

        <!-- Thumbnails -->
        <div class="flex items-center gap-3 overflow-x-auto pb-2">
          ${(product.gallery || [product.image]).map((img, idx) => `
            <button 
              onclick="setModalImage('${img}')"
              class="w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 hover:border-orange-500 focus:border-orange-500 ${idx === 0 ? 'border-orange-500' : 'border-slate-200'}">
              <img src="${img}" alt="Thumbnail" class="w-full h-full object-cover" />
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Right: Product Information & Purchase Controls -->
      <div class="flex flex-col justify-between">
        <div>
          <!-- Brand & Ratings -->
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-extrabold tracking-wider text-orange-600 uppercase bg-orange-50 px-2.5 py-1 rounded-md">
              แบรนด์แท้ 100% : ${product.brand}
            </span>
            <div class="flex items-center gap-1 text-sm font-semibold text-amber-500">
              <span>★</span>
              <span>${product.rating}</span>
              <span class="text-slate-400 font-normal">(${product.reviewsCount} รีวิว)</span>
              <span class="text-slate-300">•</span>
              <span class="text-slate-500 font-normal">ขายแล้ว ${product.soldCount} ชิ้น</span>
            </div>
          </div>

          <!-- Product Title -->
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-1">
            ${product.name}
          </h2>
          <p class="text-sm text-slate-500 mb-4">${product.nameEn}</p>

          <!-- Price Display -->
          <div class="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-200/60 flex items-baseline gap-3">
            <span class="text-3xl font-black text-slate-900">฿${product.price.toLocaleString()}</span>
            <span class="text-base text-slate-400 line-through">฿${product.originalPrice.toLocaleString()}</span>
            <span class="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full ml-auto">
              ประหยัด ฿${(product.originalPrice - product.price).toLocaleString()}
            </span>
          </div>

          <!-- Color Selector -->
          <div class="mb-5">
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              เลือกสี: <span id="selected-color-label" class="text-slate-900 font-bold">${product.colors[0].label}</span>
            </label>
            <div class="flex items-center gap-3">
              ${product.colors.map((c, idx) => `
                <button 
                  onclick="selectModalColor(${idx}, '${c.label}')"
                  class="color-swatch w-9 h-9 rounded-full border-2 border-white shadow-md flex items-center justify-center transition-all ${idx === 0 ? 'active' : ''}"
                  style="background-color: ${c.hex};"
                  title="${c.label}">
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Size Selector -->
          <div class="mb-5">
            <div class="flex items-center justify-between mb-2">
              <label class="text-xs font-bold uppercase tracking-wider text-slate-500">
                เลือกขนาด (ไซส์):
              </label>
              <button onclick="openSizeGuide()" class="text-xs text-orange-600 hover:text-orange-700 font-semibold underline flex items-center gap-1">
                📏 ตารางเทียบไซส์
              </button>
            </div>
            <div class="flex flex-wrap gap-2">
              ${product.sizes.map((s, idx) => `
                <button 
                  onclick="selectModalSize('${s}', this)"
                  class="size-btn px-4 py-2 rounded-xl text-sm font-semibold border ${idx === 0 ? 'active' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}">
                  ${s}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Quantity Control -->
          <div class="mb-6 flex items-center gap-4">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">จำนวน:</span>
            <div class="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
              <button onclick="adjustModalQty(-1)" class="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold text-lg">-</button>
              <span id="modal-qty" class="w-12 text-center font-bold text-slate-800 text-sm">1</span>
              <button onclick="adjustModalQty(1)" class="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold text-lg">+</button>
            </div>
            <span class="text-xs text-slate-400">คลังเหลือ ${product.stock} ชิ้น</span>
          </div>

          <!-- Features Bullets -->
          <div class="mb-6 bg-slate-50 rounded-2xl p-4 border border-slate-200/60 text-xs text-slate-600 space-y-1.5">
            <p class="font-bold text-slate-800 mb-1">จุดเด่นเทคโนโลยี:</p>
            ${product.features.map(f => `<p class="flex items-start gap-2"><span class="text-emerald-500">✓</span> <span>${f}</span></p>`).join('')}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
          <button 
            onclick="addModalProductToCart(false)"
            class="flex-1 py-3.5 px-6 rounded-2xl border-2 border-orange-500 text-orange-600 font-bold text-sm hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
            <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span>เพิ่มลงตะกร้า</span>
          </button>

          <button 
            onclick="addModalProductToCart(true)"
            class="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold text-sm shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2">
            <span>⚡ สั่งซื้อทันที</span>
          </button>
        </div>

      </div>

    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('product-detail-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function setModalImage(src) {
  const mainImg = document.getElementById('modal-main-img');
  if (mainImg) mainImg.src = src;
}

function selectModalColor(index, label) {
  AppState.selectedColorIndex = index;
  const labelEl = document.getElementById('selected-color-label');
  if (labelEl) labelEl.innerText = label;

  document.querySelectorAll('.color-swatch').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === index);
  });
}

function selectModalSize(size, el) {
  AppState.selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
  if (el) el.classList.add('active');
}

function adjustModalQty(delta) {
  const newQty = AppState.selectedQuantity + delta;
  const maxStock = AppState.activeProductModal?.stock || 10;
  if (newQty >= 1 && newQty <= maxStock) {
    AppState.selectedQuantity = newQty;
    const qtyEl = document.getElementById('modal-qty');
    if (qtyEl) qtyEl.innerText = newQty;
  }
}

// ==========================================
// 6. CART OPERATIONS & DRAWER
// ==========================================

function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const defaultColor = product.colors[0];
  const defaultSize = product.sizes[0];

  addToCartInternal(product, defaultColor, defaultSize, 1);
  showToast(`เพิ่ม "${product.name}" ลงในตะกร้าเรียบร้อยแล้ว`, 'success');
}

function addModalProductToCart(isBuyNow = false) {
  const product = AppState.activeProductModal;
  if (!product) return;

  const color = product.colors[AppState.selectedColorIndex] || product.colors[0];
  const size = AppState.selectedSize || product.sizes[0];
  const qty = AppState.selectedQuantity || 1;

  addToCartInternal(product, color, size, qty);
  closeProductModal();

  if (isBuyNow) {
    openCartDrawer();
    openCheckoutModal();
  } else {
    showToast(`เพิ่ม "${product.name}" (ไซส์ ${size}) ลงตะกร้าแล้ว`, 'success');
    openCartDrawer();
  }
}

function addToCartInternal(product, color, size, qty) {
  const cartItemId = `${product.id}-${color.name}-${size}`;
  const existingItem = AppState.cart.find(item => item.cartItemId === cartItemId);

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    AppState.cart.push({
      cartItemId,
      productId: product.id,
      name: product.name,
      nameEn: product.nameEn,
      brand: product.brand,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      color: color,
      size: size,
      quantity: qty,
      stock: product.stock
    });
  }

  saveCartToStorage();
  updateCartUI();
  triggerCartBadgeAnimation();
}

function updateCartQuantity(cartItemId, delta) {
  const itemIndex = AppState.cart.findIndex(i => i.cartItemId === cartItemId);
  if (itemIndex === -1) return;

  const newQty = AppState.cart[itemIndex].quantity + delta;
  if (newQty <= 0) {
    AppState.cart.splice(itemIndex, 1);
    showToast('ลบสินค้าออกจากตะกร้าแล้ว', 'info');
  } else {
    AppState.cart[itemIndex].quantity = newQty;
  }

  saveCartToStorage();
  updateCartUI();
}

function removeCartItem(cartItemId) {
  AppState.cart = AppState.cart.filter(item => item.cartItemId !== cartItemId);
  saveCartToStorage();
  updateCartUI();
  showToast('นำสินค้าออกจากตะกร้าแล้ว', 'info');
}

function clearCart() {
  if (confirm('คุณต้องการลบสินค้าทั้งหมดในตะกร้าหรือไม่?')) {
    AppState.cart = [];
    AppState.appliedCoupon = null;
    saveCartToStorage();
    updateCartUI();
    showToast('ล้างตะกร้าสินค้าเรียบร้อยแล้ว', 'info');
  }
}

function calculateCartTotals() {
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discount = 0;
  let isFreeShippingByCoupon = false;

  if (AppState.appliedCoupon) {
    const coupon = COUPONS[AppState.appliedCoupon];
    if (coupon) {
      if (coupon.discountPercent) {
        discount = Math.round(subtotal * (coupon.discountPercent / 100));
      } else if (coupon.discountAmount) {
        if (!coupon.minSpend || subtotal >= coupon.minSpend) {
          discount = coupon.discountAmount;
        }
      }
      if (coupon.freeShipping) {
        isFreeShippingByCoupon = true;
      }
    }
  }

  const shipping = (subtotal >= AppState.freeShippingThreshold || isFreeShippingByCoupon || subtotal === 0) 
    ? 0 
    : AppState.shippingFee;

  const total = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, total, isFreeShipping: shipping === 0 && subtotal > 0 };
}

function updateCartUI() {
  const countBadges = document.querySelectorAll('.cart-count-badge');
  const totalItems = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);

  countBadges.forEach(badge => {
    badge.innerText = totalItems;
    badge.classList.toggle('hidden', totalItems === 0);
  });

  const cartListContainer = document.getElementById('cart-items-list');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartDiscountEl = document.getElementById('cart-discount');
  const cartShippingEl = document.getElementById('cart-shipping');
  const cartTotalEl = document.getElementById('cart-total');
  const freeShipBar = document.getElementById('free-shipping-progress');
  const freeShipText = document.getElementById('free-shipping-text');
  const emptyCartState = document.getElementById('empty-cart-view');
  const filledCartState = document.getElementById('filled-cart-view');

  const { subtotal, discount, shipping, total, isFreeShipping } = calculateCartTotals();

  // Free shipping progress calculation
  if (freeShipBar && freeShipText) {
    const remainingForFreeShip = Math.max(0, AppState.freeShippingThreshold - subtotal);
    const progressPercent = Math.min(100, Math.round((subtotal / AppState.freeShippingThreshold) * 100));
    freeShipBar.style.width = `${progressPercent}%`;

    if (remainingForFreeShip === 0 && subtotal > 0) {
      freeShipText.innerHTML = `🎉 <span class="font-bold text-emerald-600">ยินดีด้วย! คุณได้รับสิทธิ์จัดส่งฟรีแล้ว</span>`;
    } else {
      freeShipText.innerHTML = `ช้อปอีก <span class="font-bold text-orange-600">฿${remainingForFreeShip.toLocaleString()}</span> เพื่อรับส่งฟรี!`;
    }
  }

  if (AppState.cart.length === 0) {
    if (emptyCartState) emptyCartState.classList.remove('hidden');
    if (filledCartState) filledCartState.classList.add('hidden');
    return;
  }

  if (emptyCartState) emptyCartState.classList.add('hidden');
  if (filledCartState) filledCartState.classList.remove('hidden');

  if (cartSubtotalEl) cartSubtotalEl.innerText = `฿${subtotal.toLocaleString()}`;
  if (cartDiscountEl) cartDiscountEl.innerText = discount > 0 ? `-฿${discount.toLocaleString()}` : '฿0';
  if (cartShippingEl) {
    cartShippingEl.innerHTML = shipping === 0 
      ? '<span class="text-emerald-600 font-bold">ฟรี</span>' 
      : `฿${shipping}`;
  }
  if (cartTotalEl) cartTotalEl.innerText = `฿${total.toLocaleString()}`;

  if (cartListContainer) {
    cartListContainer.innerHTML = AppState.cart.map(item => `
      <div class="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm relative group">
        
        <!-- Thumbnail -->
        <div class="w-20 h-20 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-200/60">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
        </div>

        <!-- Info -->
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2">
              <h5 class="text-sm font-bold text-slate-800 line-clamp-1">${item.name}</h5>
              <button 
                onclick="removeCartItem('${item.cartItemId}')" 
                class="text-slate-400 hover:text-red-500 p-1 -mr-1 transition-colors"
                title="ลบรายการ">
                <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="flex items-center gap-2 text-xs text-slate-500 mt-1">
              <span class="inline-flex items-center gap-1">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${item.color.hex};"></span>
                <span>${item.color.label}</span>
              </span>
              <span>•</span>
              <span class="font-semibold text-slate-700">ไซส์ ${item.size}</span>
            </div>
          </div>

          <!-- Price & Quantity -->
          <div class="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
            <span class="font-extrabold text-sm text-slate-900">฿${(item.price * item.quantity).toLocaleString()}</span>
            
            <div class="flex items-center border border-slate-200 rounded-lg bg-slate-50 overflow-hidden">
              <button onclick="updateCartQuantity('${item.cartItemId}', -1)" class="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-slate-200 font-bold text-sm">-</button>
              <span class="w-8 text-center font-bold text-xs text-slate-800">${item.quantity}</span>
              <button onclick="updateCartQuantity('${item.cartItemId}', 1)" class="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-slate-200 font-bold text-sm">+</button>
            </div>
          </div>

        </div>

      </div>
    `).join('');
  }
}

function triggerCartBadgeAnimation() {
  const badge = document.querySelector('.cart-button-trigger');
  if (badge) {
    badge.classList.remove('animate-cart-bounce');
    void badge.offsetWidth; // trigger reflow
    badge.classList.add('animate-cart-bounce');
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const panel = document.getElementById('cart-drawer-panel');
  if (!drawer || !panel) return;

  drawer.classList.remove('hidden');
  setTimeout(() => {
    panel.classList.remove('translate-x-full');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const panel = document.getElementById('cart-drawer-panel');
  if (!drawer || !panel) return;

  panel.classList.add('translate-x-full');
  setTimeout(() => {
    drawer.classList.add('hidden');
    document.body.style.overflow = '';
  }, 300);
}

// ==========================================
// 7. COUPON CODE ENGINE
// ==========================================

function applyCouponCode() {
  const input = document.getElementById('coupon-code-input');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast('กรุณากรอกโค้ดส่วนลด', 'error');
    return;
  }

  if (COUPONS[code]) {
    AppState.appliedCoupon = code;
    showToast(`ใช้โค้ด "${code}" สำเร็จ! (${COUPONS[code].description})`, 'success');
    updateCartUI();
  } else {
    showToast('โค้ดส่วนลดไม่ถูกต้อง หรือหมดอายุแล้ว', 'error');
  }
}

function applyPresetCoupon(code) {
  const input = document.getElementById('coupon-code-input');
  if (input) input.value = code;
  applyCouponCode();
}

// ==========================================
// 8. WISHLIST FUNCTIONALITY
// ==========================================

function toggleWishlist(productId) {
  const index = AppState.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);

  if (index === -1) {
    AppState.wishlist.push(productId);
    showToast(`บันทึก "${product ? product.name : 'สินค้า'}" ไว้ในรายการโปรด`, 'success');
  } else {
    AppState.wishlist.splice(index, 1);
    showToast('นำออกจากรายการโปรดแล้ว', 'info');
  }

  saveWishlistToStorage();
  updateWishlistBadges();
  renderProducts(); // Re-render to update heart icons
}

function updateWishlistBadges() {
  const badges = document.querySelectorAll('.wishlist-count-badge');
  badges.forEach(b => {
    b.innerText = AppState.wishlist.length;
    b.classList.toggle('hidden', AppState.wishlist.length === 0);
  });
}

function showWishlistModal() {
  const wishlistProducts = PRODUCTS.filter(p => AppState.wishlist.includes(p.id));
  const container = document.getElementById('wishlist-modal-items');
  const modal = document.getElementById('wishlist-modal');
  if (!container || !modal) return;

  if (wishlistProducts.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12">
        <div class="text-5xl mb-3">❤️</div>
        <p class="text-slate-600 font-bold mb-1">ยังไม่มีสินค้าในรายการโปรด</p>
        <p class="text-xs text-slate-400">กดไอคอนหัวใจที่สินค้าเพื่อบันทึกไว้ดูภายหลัง</p>
      </div>
    `;
  } else {
    container.innerHTML = wishlistProducts.map(p => `
      <div class="flex items-center gap-4 p-3 bg-white rounded-xl border border-slate-200">
        <img src="${p.image}" alt="${p.name}" class="w-16 h-16 rounded-lg object-cover" />
        <div class="flex-1">
          <h5 class="text-sm font-bold text-slate-800 line-clamp-1">${p.name}</h5>
          <p class="text-xs text-orange-600 font-extrabold mt-0.5">฿${p.price.toLocaleString()}</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="quickAddToCart('${p.id}'); closeWishlistModal();" class="px-3 py-1.5 bg-orange-500 text-white rounded-lg text-xs font-semibold hover:bg-orange-600">
            ใส่ตะกร้า
          </button>
          <button onclick="toggleWishlist('${p.id}'); showWishlistModal();" class="text-slate-400 hover:text-red-500 p-1">
            ✕
          </button>
        </div>
      </div>
    `).join('');
  }

  modal.classList.remove('hidden');
}

function closeWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  if (modal) modal.classList.add('hidden');
}

// ==========================================
// 9. CHECKOUT SIMULATION FLOW
// ==========================================

function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast('กรุณาเลือกสินค้าลงในตะกร้าก่อนดำเนินการชำระเงิน', 'error');
    return;
  }

  closeCartDrawer();
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  AppState.checkoutStep = 1;
  renderCheckoutSummary();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function renderCheckoutSummary() {
  const summaryList = document.getElementById('checkout-items-summary');
  const totalAmountEl = document.getElementById('checkout-total-amount');
  const { subtotal, discount, shipping, total } = calculateCartTotals();

  if (totalAmountEl) totalAmountEl.innerText = `฿${total.toLocaleString()}`;

  if (summaryList) {
    summaryList.innerHTML = AppState.cart.map(i => `
      <div class="flex justify-between items-center text-xs text-slate-600 py-1 border-b border-slate-100">
        <span class="line-clamp-1 flex-1 pr-2">${i.name} (x${i.quantity})</span>
        <span class="font-semibold text-slate-800">฿${(i.price * i.quantity).toLocaleString()}</span>
      </div>
    `).join('');
  }
}

function submitCheckoutOrder(event) {
  event.preventDefault();

  const name = document.getElementById('cust-name')?.value;
  const phone = document.getElementById('cust-phone')?.value;
  const address = document.getElementById('cust-address')?.value;
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value || 'promptpay';

  if (!name || !phone || !address) {
    showToast('กรุณากรอกข้อมูลที่อยู่จัดส่งให้ครบถ้วน', 'error');
    return;
  }

  const orderId = 'AP-' + Math.floor(100000 + Math.random() * 900000);
  const { total } = calculateCartTotals();

  // Show Success Screen
  const checkoutBody = document.getElementById('checkout-form-container');
  const successBody = document.getElementById('checkout-success-container');
  const orderIdEl = document.getElementById('success-order-id');
  const orderTotalEl = document.getElementById('success-order-total');
  const orderPaymentEl = document.getElementById('success-order-payment');

  if (orderIdEl) orderIdEl.innerText = orderId;
  if (orderTotalEl) orderTotalEl.innerText = `฿${total.toLocaleString()}`;
  if (orderPaymentEl) {
    const paymentNames = {
      'promptpay': 'พร้อมเพย์ QR Code (ชำระแล้ว)',
      'card': 'บัตรเครดิต/เดบิต (สำเร็จ)',
      'cod': 'เก็บเงินปลายทาง (COD)'
    };
    orderPaymentEl.innerText = paymentNames[paymentMethod] || paymentMethod;
  }

  if (checkoutBody) checkoutBody.classList.add('hidden');
  if (successBody) successBody.classList.remove('hidden');

  // Clear Cart
  AppState.cart = [];
  AppState.appliedCoupon = null;
  saveCartToStorage();
  updateCartUI();

  showToast('🎉 สั่งซื้อสินค้าสำเร็จแล้ว! ขอขอบคุณที่ไว้วางใจ ActivePulse', 'success');
}

function finishOrderAndClose() {
  const checkoutBody = document.getElementById('checkout-form-container');
  const successBody = document.getElementById('checkout-success-container');
  if (checkoutBody) checkoutBody.classList.remove('hidden');
  if (successBody) successBody.classList.add('hidden');

  closeCheckoutModal();
}

// ==========================================
// 10. FILTER & SEARCH HANDLERS
// ==========================================

function filterByCategory(categoryId) {
  AppState.activeCategory = categoryId;
  renderCategories();
  renderProducts();

  // Smooth scroll down to products section if clicked on mobile
  const catalog = document.getElementById('catalog-section');
  if (catalog && window.innerWidth < 768) {
    catalog.scrollIntoView({ behavior: 'smooth' });
  }
}

function filterByBrand(brand) {
  AppState.selectedBrand = brand;
  renderProducts();
}

function handleSearchInput(e) {
  AppState.searchQuery = e.target.value;
  renderProducts();
}

function handlePriceRangeChange(e) {
  AppState.priceRange = Number(e.target.value);
  const label = document.getElementById('price-range-label');
  if (label) label.innerText = `฿${AppState.priceRange.toLocaleString()}`;
  renderProducts();
}

function handleSortChange(e) {
  AppState.sortBy = e.target.value;
  renderProducts();
}

function resetFilters() {
  AppState.activeCategory = 'all';
  AppState.selectedBrand = 'all';
  AppState.searchQuery = '';
  AppState.priceRange = 10000;
  AppState.sortBy = 'popular';

  const searchInput = document.getElementById('global-search');
  if (searchInput) searchInput.value = '';

  const priceRange = document.getElementById('price-range-slider');
  if (priceRange) priceRange.value = 10000;

  const label = document.getElementById('price-range-label');
  if (label) label.innerText = '฿10,000';

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'popular';

  renderCategories();
  renderProducts();
  showToast('รีเซ็ตตัวกรองสินค้าทั้งหมดแล้ว', 'info');
}

// ==========================================
// 11. TOAST NOTIFICATIONS
// ==========================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgColors = {
    success: 'bg-slate-900 border-emerald-500 text-white',
    error: 'bg-red-600 border-red-700 text-white',
    info: 'bg-slate-900 border-orange-500 text-white'
  };

  const icons = {
    success: '✅',
    error: '⚠️',
    info: '⚡'
  };

  toast.className = `flex items-center gap-3 px-5 py-3 rounded-2xl border-l-4 shadow-2xl text-sm font-medium transition-all duration-300 transform translate-y-3 opacity-0 ${bgColors[type] || bgColors.info}`;
  toast.innerHTML = `
    <span class="text-base">${icons[type] || '🔔'}</span>
    <span class="flex-1">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', '-translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 12. FLASH SALE COUNTDOWN TIMER
// ==========================================

function startFlashSaleTimer() {
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-mins');
  const secsEl = document.getElementById('timer-secs');

  if (!hoursEl || !minsEl || !secsEl) return;

  // Set flash sale target: 14 hours from now
  let totalSeconds = 14 * 3600 + 45 * 60 + 20;

  setInterval(() => {
    if (totalSeconds <= 0) totalSeconds = 24 * 3600;
    totalSeconds--;

    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    hoursEl.innerText = String(h).padStart(2, '0');
    minsEl.innerText = String(m).padStart(2, '0');
    secsEl.innerText = String(s).padStart(2, '0');
  }, 1000);
}

// Size guide modal
function openSizeGuide() {
  const modal = document.getElementById('size-guide-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeSizeGuide() {
  const modal = document.getElementById('size-guide-modal');
  if (modal) modal.classList.add('hidden');
}

// ==========================================
// 13. EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  const searchInput = document.getElementById('global-search');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
  }

  const priceSlider = document.getElementById('price-range-slider');
  if (priceSlider) {
    priceSlider.addEventListener('input', handlePriceRangeChange);
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', handleSortChange);
  }

  // Keyboard shortcut (Escape closes modal)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
      closeCheckoutModal();
      closeWishlistModal();
      closeSizeGuide();
    }
  });
}

// Boot app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

