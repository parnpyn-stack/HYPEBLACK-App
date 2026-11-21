/**
 * HYPEBLACK LUXURY, SNEAKERS & ACCESSORIES MARKETPLACE
 * Thailand's #1 Authentic Trading Engine
 */

// ==========================================
// 1. PRODUCT CATALOG DATA (22 Curated Authentic Items)
// ==========================================
const PRODUCTS = [
  // --- 👜 LUXURY BRANDNAME BAGS ---
  {
    id: 'hb-01',
    name: 'Goyard Saint Louis PM Tote Bag - Black/Tan',
    nameEn: 'Goyard Saint Louis PM Bag Coated Canvas',
    brand: 'Goyard',
    category: 'luxury',
    categoryName: 'กระเป๋าแบรนด์เนม',
    price: 68900,
    originalPrice: 75000,
    rating: 4.9,
    reviewsCount: 148,
    soldCount: 320,
    isHot: true,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง อุปกรณ์ครบ (กล่อง, ถุงผ้า, ถุงกระดาษ)',
    tag: '⚡ พร้อมส่งทันที',
    image: 'https://images.stockx.com/images/Goyard-Tote-Saint-Louis-Chevron-PM-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500',
    gallery: [
      'https://images.stockx.com/images/Goyard-Tote-Saint-Louis-Chevron-PM-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500'
    ],
    colors: [
      { name: 'Black & Tan', hex: '#2A2521', label: 'ดำตัดแทนคลาสสิก' },
      { name: 'Special Green', hex: '#1E4620', label: 'เขียวโกยาร์ด' }
    ],
    sizes: ['PM (34x28x15 cm)', 'GM (40x34x20 cm)'],
    description: 'กระเป๋าโท้ทไอคอนิคระดับโลก ลาย Goyardine ทอละเอียดด้วยเทคโนโลยีพิมพ์มืออันเป็นเอกลักษณ์ เบา ทนทาน กันน้ำ ด้านในมาพร้อมกระเป๋าใบเล็กแบบถอดได้ ตรวจสอบแท้ 100% โดยผู้เชี่ยวชาญ HYPEBLACK',
    features: [
      'ผ้าแคนวาส Goyardine เคลือบพิเศษ ทนทานต่อการขีดข่วนและละอองน้ำ',
      'หูหิ้วทำจากหนังวัว Chevroches แท้ นุ่มสบายมือ',
      'พร้อมใบรับประกันและป้ายตรวจสอบของแท้จาก HYPEBLACK',
      'ขนาด PM จุของในชีวิตประจำวันและเดินทางได้อย่างลงตัว'
    ],
    specs: {
      'แบรนด์': 'Goyard (Paris)',
      'วัสดุ': 'Goyardine Canvas & Chevroches Calfskin',
      'แหล่งผลิต': 'Made in France',
      'การรับประกัน': 'HYPEBLACK Verified 100% Authentic Guarantee'
    }
  },
  {
    id: 'hb-02',
    name: 'Louis Vuitton Keepall Bandoulière 50 Eclipse',
    nameEn: 'LV Keepall Bandouliere 50 Monogram Eclipse',
    brand: 'Louis Vuitton',
    category: 'luxury',
    categoryName: 'กระเป๋าแบรนด์เนม',
    price: 92500,
    originalPrice: 98000,
    rating: 5.0,
    reviewsCount: 92,
    soldCount: 180,
    isHot: true,
    isNew: false,
    isReadyToShip: true,
    condition: 'มือหนึ่ง อุปกรณ์ครบจากช็อปไทย (กล่อง, ถุงผ้า, กุญแจ, สายสะพาย)',
    tag: '👑 ไอเทมยอดนิยม',
    image: 'https://images.stockx.com/images/Louis-Vuitton-Keepall-Bandouliere-Monogram-Eclipse-50-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500',
    gallery: [
      'https://images.stockx.com/images/Louis-Vuitton-Keepall-Bandouliere-Monogram-Eclipse-50-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500'
    ],
    colors: [
      { name: 'Monogram Eclipse', hex: '#1E232A', label: 'ดำโมโนแกรม' }
    ],
    sizes: ['Size 45', 'Size 50 (Cabin Size)', 'Size 55'],
    description: 'กระเป๋าเดินทางรุ่นในตำนานของหลุยส์ วิตตอง ในโทนสีเทาดำ Monogram Eclipse สุภาพ เรียบหรู ขนาดพอดีสำหรับถือขึ้นเครื่องบิน (Carry-on) พร้อมสายสะพายไหล่ปรับระดับได้',
    features: [
      'แคนวาส Monogram Eclipse และหนังคาวไฮด์ย้อมสีดำ',
      'อะไหล่โลหะสีเงินด้านเมทัลลิก แข็งแรงทนทาน',
      'มาพร้อมแม่กุญแจ กุญแจ ป้ายชื่อ และห่วงรัดหูหิ้วครบชุด',
      'ผ่านการตรวจเช็ค Hologram / Microchip แท้โดย HYPEBLACK'
    ],
    specs: {
      'แบรนด์': 'Louis Vuitton',
      'วัสดุ': 'Coated Canvas & Cowhide Leather',
      'ขนาด': '50 x 29 x 23 ซม. (ยาว x สูง x กว้าง)',
      'การรับประกัน': 'รับประกันของแท้ตลอดชีพ 100%'
    }
  },
  {
    id: 'hb-03',
    name: 'Chanel Classic Double Flap Medium 10" Caviar GHW',
    nameEn: 'Chanel Classic Double Flap Bag Medium Black Caviar',
    brand: 'Chanel',
    category: 'luxury',
    categoryName: 'กระเป๋าแบรนด์เนม',
    price: 375000,
    originalPrice: 395000,
    rating: 5.0,
    reviewsCount: 64,
    soldCount: 85,
    isHot: true,
    isNew: true,
    isReadyToShip: false,
    condition: 'มือหนึ่ง Microchip อุปกรณ์ครบกล่องแม่เหล็ก ริบบิ้น ดอกคามิลเลีย ใบเสร็จช็อป',
    tag: '💎 ระดับไฮเอนด์',
    image: 'https://images.stockx.com/images/Chanel-Classic-Double-Flap-Quilted-Medium-Black-Caviar-Goldtone.png?fit=fill&bg=FFFFFF&w=700&h=500',
    gallery: [
      'https://images.stockx.com/images/Chanel-Classic-Double-Flap-Quilted-Medium-Black-Caviar-Goldtone.png?fit=fill&bg=FFFFFF&w=700&h=500'
    ],
    colors: [
      { name: 'Black Caviar Gold', hex: '#0B0B0E', label: 'ดำคาเวียร์อะไหล่ทอง' }
    ],
    sizes: ['Medium 10" (25.5x15.5x6.5 cm)'],
    description: 'ที่สุดแห่งความคลาสสิกเหนือกาลเวลา หนังเกรนคาเวียร์ทนทานต่อรอยขีดข่วน ตัดกับอะไหล่ทองเปล่งประกาย ฝาเปิดสองชั้น (Double Flap) พร้อมตัวล็อค CC Lock สัญลักษณ์ระดับตำนาน',
    features: [
      'หนังคาเวียร์ (Grained Calfskin) คัดเกรดสูงสุด',
      'อะไหล่ทอง Gold-tone Metal เงางามไม่ลอก',
      'ฝังชิป Microchip แท้ตรวจสอบระบบ Chanel ทั่วโลก',
      'ผ่านการประเมินสภาพและตรวจแท้ 2 ชั้นโดยผู้เชี่ยวชาญ'
    ],
    specs: {
      'แบรนด์': 'Chanel (Paris)',
      'วัสดุ': 'Grained Calfskin & Gold-Finish Metal',
      'ขนาด': '15.5 × 25.5 × 6.5 ซม.',
      'การรับประกัน': 'HYPEBLACK Luxury Verified 100%'
    }
  },
  {
    id: 'hb-04',
    name: 'Celine Teen Triomphe Bag in Shiny Calfskin - Black',
    nameEn: 'Celine Teen Triomphe Shoulder Bag Black',
    brand: 'Celine',
    category: 'luxury',
    categoryName: 'กระเป๋าแบรนด์เนม',
    price: 135000,
    originalPrice: 145000,
    rating: 4.9,
    reviewsCount: 52,
    soldCount: 110,
    isHot: false,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง อุปกรณ์ครบ (กล่อง ถุงผ้า การ์ด)',
    tag: '⚡ พร้อมส่งด่วน',
    image: 'https://images.stockx.com/images/Celine-Teen-Triomphe-Bag-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500',
    gallery: [
      'https://images.stockx.com/images/Celine-Teen-Triomphe-Bag-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500'
    ],
    colors: [
      { name: 'Shiny Black', hex: '#141417', label: 'ดำเงาพรีเมียม' }
    ],
    sizes: ['Teen (18.5 x 13.5 x 7 cm)'],
    description: 'กระเป๋าสะพายรุ่นยอดนิยมที่สร้างปรากฏการณ์ระดับโลก ตัวล็อคโลหะสีทองลาย Triomphe เอกลักษณ์ของแบรนด์เซลีน หนังลูกวัวเรียบเงางาม คล่องตัวในทุกสไตล์',
    features: [
      'หนังลูกวัว Shiny Calfskin ผิวสัมผัสเนียนละเอียด',
      'ซับในหนังแกะ Lambskin นุ่มนวล',
      'ตัวล็อค Triomphe แบบสแน็ปทองเหลืองชุบทอง',
      'สายสะพายหนังปรับระดับได้ เหมาะกับทั้งสะพายไหล่และครอสบอดี้'
    ],
    specs: {
      'แบรนด์': 'Celine',
      'วัสดุ': 'Calfskin & Lambskin Lining',
      'ขนาด': '18.5 X 13.5 X 7 ซม.',
      'การรับประกัน': 'ตรวจแท้ 100% โดย HYPEBLACK'
    }
  },
  {
    id: 'hb-05',
    name: 'Prada Re-Edition 2005 Re-Nylon Shoulder Bag',
    nameEn: 'Prada Re-Edition 2005 Re-Nylon Bag Black',
    brand: 'Prada',
    category: 'luxury',
    categoryName: 'กระเป๋าแบรนด์เนม',
    price: 49500,
    originalPrice: 55000,
    rating: 4.8,
    reviewsCount: 115,
    soldCount: 420,
    isHot: true,
    isNew: false,
    isReadyToShip: true,
    condition: 'มือหนึ่ง อุปกรณ์ครบ สายโซ่ สายผ้า กระเป๋าใบเล็ก การ์ด ถุงผ้า',
    tag: '⚡ พร้อมส่งทันที',
    image: 'https://images.stockx.com/images/Prada-Re-Edition-2005-Re-Nylon-Bag-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500',
    gallery: [
      'https://images.stockx.com/images/Prada-Re-Edition-2005-Re-Nylon-Bag-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500'
    ],
    colors: [
      { name: 'Nero Black', hex: '#0B0D11', label: 'ดำไนลอนเนโร' }
    ],
    sizes: ['One Size (22x18x6.5 cm)'],
    description: 'กระเป๋าที่ครองใจสายแฟชั่นทั่วโลก ดีไซน์มัลติฟังก์ชันจากวัสดุ Re-Nylon รีไซเคิลเอกสิทธิ์ของปราด้า มาพร้อมกระเป๋าเพาช์ใบเล็กคล้องสายและสายสะพายสองรูปแบบ',
    features: [
      'ผลิตจากผ้าไนลอนรีไซเคิล Re-Nylon ทนทาน น้ำหนักเบา',
      'สายโซ่โลหะถอดได้ และสายผ้าทอลาย Prada ปรับความยาวได้',
      'โลโก้รูปสามเหลี่ยมโลหะเคลือบอีนาเมลด้านหน้า',
      'ช่องเก็บของอเนกประสงค์ใช้งานได้จริงทุกวัน'
    ],
    specs: {
      'แบรนด์': 'Prada (Milano)',
      'วัสดุ': 'Re-Nylon & Saffiano Leather Details',
      'ขนาด': '22 x 18 x 6.5 ซม.',
      'การรับประกัน': 'HYPEBLACK Verified Authentic'
    }
  },

  // --- 💍 ACCESSORIES, WATCHES & JEWELRY ---
  {
    id: 'hb-06',
    name: 'Rolex Submariner Date 41mm "Starbucks" 126610LV',
    nameEn: 'Rolex Submariner Date 41mm Green Cerachrom Bezel',
    brand: 'Rolex',
    category: 'accessory',
    categoryName: 'นาฬิกาและเครื่องประดับ',
    price: 545000,
    originalPrice: 580000,
    rating: 5.0,
    reviewsCount: 38,
    soldCount: 42,
    isHot: true,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง กล่องเขียว ใบรับประกันการ์ดศูนย์ เหรียญเขียว คู่มือ ข้อครบ',
    tag: '👑 ลงทุน & สะสม',
    image: 'https://images.stockx.com/images/Rolex-Submariner-116610LV-Green-front.jpg?fit=fill&bg=FFFFFF&w=700&h=500',
    gallery: [
      'https://images.stockx.com/images/Rolex-Submariner-116610LV-Green-front.jpg?fit=fill&bg=FFFFFF&w=700&h=500'
    ],
    colors: [
      { name: 'Oystersteel Green Bezel', hex: '#165B33', label: 'ขอบเซรามิกเขียวสตาร์บัคส์' }
    ],
    sizes: ['41 mm (Standard Oyster)'],
    description: 'นาฬิกาดำน้ำอันดับหนึ่งของโลก ขอบหน้าปัดเซรามิก Cerachrom สีเขียวเฉดพิเศษ ตัวเรือนสตีล Oystersteel 904L กลไก Calibre 3235 สำรองพลังงาน 70 ชั่วโมง ได้รับการตรวจสอบกลไกแท้โดยช่างนาฬิกา HYPEBLACK',
    features: [
      'ขอบตัวเรือนหมุนได้ทิศทางเดียวพร้อมแผ่นเซรามิก Cerachrom สีเขียว',
      'ระบบกันน้ำลึก 300 เมตร (1,000 ฟุต) พร้อมเม็ดมะยม Triplock',
      'พรายน้ำ Chromalight สีฟ้าสว่างชัดเจนในที่มืด',
      'สาย Oyster พร้อมระบบขยายสาย Rolex Glidelock ใช้งานสะดวก'
    ],
    specs: {
      'แบรนด์': 'Rolex (Geneva)',
      'รหัสรุ่น': '126610LV',
      'กลไก': 'Automatic Calibre 3235 (Superlative Chronometer)',
      'การรับประกัน': 'ประกันศูนย์ Rolex 5 ปี + HYPEBLACK Guarantee'
    }
  },
  {
    id: 'hb-07',
    name: 'Cartier Love Bracelet Small Model - 18K Yellow Gold',
    nameEn: 'Cartier Love Bracelet Small Model 18K Yellow Gold',
    brand: 'Cartier',
    category: 'accessory',
    categoryName: 'เครื่องประดับแบรนด์เนม',
    price: 178000,
    originalPrice: 188000,
    rating: 4.9,
    reviewsCount: 88,
    soldCount: 160,
    isHot: true,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง อุปกรณ์ครบ (กล่องแดงคาร์เทียร์ ไขควง ใบรับประกัน Certificate)',
    tag: '⚡ พร้อมส่งด่วน',
    image: 'https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw82e12e1c/images/large/402b40c50af55d028578998daaaa670e.png?sw=750&sh=750&sm=fit&sfrm=png',
    gallery: [
      'https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw82e12e1c/images/large/402b40c50af55d028578998daaaa670e.png?sw=750&sh=750&sm=fit&sfrm=png'
    ],
    colors: [
      { name: 'Yellow Gold', hex: '#E5B869', label: 'ทองคำ 18K สีเหลืองประกาย' }
    ],
    sizes: ['Size 16', 'Size 17', 'Size 18', 'Size 19'],
    description: 'กำไลข้อมือ Love ไอคอนระดับตำนาน ออกแบบในนิวยอร์กปี 1969 สัญลักษณ์แห่งความรักอันเป็นนิรันดร์ ลายสลักสกรูอันเป็นเอกลักษณ์ ปิดล็อคด้วยไขควงเฉพาะรุ่น',
    features: [
      'ผลิตจากทองคำแท้ 750/1000 (18K Yellow Gold)',
      'ระบบล็อคแบบบานพับเปิด-ปิดด้วยไขควง Cartier',
      'หมายเลข Serial Number สลักชัดเจนตรงตามใบรับประกัน',
      'ผ่านการตรวจเช็คน้ำหนักและเนื้อทอง 18K แท้ 100%'
    ],
    specs: {
      'แบรนด์': 'Cartier',
      'วัสดุ': '18K Yellow Gold (Au750)',
      'ความกว้าง': '3.65 มิลลิเมตร',
      'การรับประกัน': 'HYPEBLACK Verified Authentic Guarantee'
    }
  },
  {
    id: 'hb-08',
    name: 'Chrome Hearts Forever Spacer Ring 6mm (925 Silver)',
    nameEn: 'Chrome Hearts Forever Spacer Ring 6mm Sterling Silver',
    brand: 'Chrome Hearts',
    category: 'accessory',
    categoryName: 'เครื่องประดับแบรนด์เนม',
    price: 19900,
    originalPrice: 22500,
    rating: 4.9,
    reviewsCount: 230,
    soldCount: 580,
    isHot: true,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง อุปกรณ์ครบ (ถุงหนังกลับ ซองกระดาษ แมตช์แท้จากช็อป)',
    tag: '🔥 ฮิตที่สุดในสตรีท',
    image: 'https://images.stockx.com/images/Chrome-Hearts-Forever-Ring.jpg?fit=fill&bg=FFFFFF&w=700&h=500',
    gallery: [
      'https://images.stockx.com/images/Chrome-Hearts-Forever-Ring.jpg?fit=fill&bg=FFFFFF&w=700&h=500'
    ],
    colors: [
      { name: 'Oxidized Silver', hex: '#CBD5E1', label: 'เงินแท้ 925 รมดำสไตล์กอธิก' }
    ],
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
    description: 'แหวนเงินแท้รุ่นยอมรับทั่วโลก สลักอักษรกอธิกคำว่า "FOREVER" สลับกับไม้กางเขน CH Cross อันทรงพลัง งานทำมือในลอสแอนเจลิส รมดำมีมิติ คลาสสิกตลอดกาล',
    features: [
      'เงินแท้ 925 Sterling Silver ผ่านกระบวนการ Oxidized รมดำ',
      'สลักตัวอักษร FOREVER และไม้กางเขน CH Plus สวยคมชัด',
      'หน้ากว้าง 6 มม. สวมใส่ง่าย ใส่ได้ทั้งชายและหญิง',
      'ตรวจสอบตราประทับและน้ำหนักแท้โดยช่างผู้เชี่ยวชาญ HYPEBLACK'
    ],
    specs: {
      'แบรนด์': 'Chrome Hearts (Hollywood, USA)',
      'วัสดุ': '925 Sterling Silver',
      'หน้ากว้าง': '6 mm',
      'การรับประกัน': 'ตรวจแท้ 100% โดย HYPEBLACK'
    }
  },
  {
    id: 'hb-09',
    name: 'Gentle Monster x Maison Margiela MM007 Sunglasses',
    nameEn: 'Gentle Monster x Maison Margiela MM007 01 Sunglasses',
    brand: 'Gentle Monster',
    category: 'accessory',
    categoryName: 'แว่นตาและแอคเซสเซอรี่',
    price: 13900,
    originalPrice: 15500,
    rating: 4.8,
    reviewsCount: 95,
    soldCount: 310,
    isHot: true,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง อุปกรณ์ครบกล่องคอลแลบ ผ้าเช็ดแว่น ซองหนัง การ์ดรับประกัน',
    tag: '⚡ พร้อมส่งด่วน',
    image: 'https://gm-prd-resource.gentlemonster.com/catalog/product/PYWOLWAUJL4T/42b65b00-a62e-4d70-985f-d8420f2a67d7/11002189_FRONT.jpg',
    gallery: [
      'https://gm-prd-resource.gentlemonster.com/catalog/product/PYWOLWAUJL4T/42b65b00-a62e-4d70-985f-d8420f2a67d7/11002189_FRONT.jpg'
    ],
    colors: [
      { name: 'Glossy Black', hex: '#111827', label: 'ดำเงาเลนส์ดำ' }
    ],
    sizes: ['Free Size (Front: 147mm, Lens: 54x37mm)'],
    description: 'การร่วมมือครั้งประวัติศาสตร์ระหว่าง Gentle Monster แบรนด์แว่นตาล้ำสมัยจากเกาหลีใต้ และ Maison Margiela แฟชั่นเฮาส์ระดับตำนาน โดดเด่นด้วยด้ายสี่ตะเข็บไอคอนิกสีขาวที่ขาแว่น',
    features: [
      'กรอบแว่นอะซิเตททรงเหลี่ยมคลาสสิกขัดเงาประณีต',
      'สัญลักษณ์รอยเย็บด้าย 4 ตะเข็บสีขาวอันเป็นเอกลักษณ์ของ Margiela',
      'เลนส์ Zeiss ป้องกันรังสี UV 99.9% สบายตา',
      'สินค้าของแท้พร้อมโค้ดตรวจสอบบนระบบ Gentle Monster'
    ],
    specs: {
      'แบรนด์': 'Gentle Monster x Maison Margiela',
      'วัสดุ': 'Acetate & UV400 Lenses',
      'แหล่งผลิต': 'Made in South Korea',
      'การรับประกัน': 'HYPEBLACK Verified 100%'
    }
  },
  {
    id: 'hb-10',
    name: 'Hermès Constance H Reversible Belt 38mm Gold Buckle',
    nameEn: 'Hermes Constance H Belt Buckle Reversible Leather Strap',
    brand: 'Hermès',
    category: 'accessory',
    categoryName: 'เข็มขัดและเครื่องหนัง',
    price: 38500,
    originalPrice: 42000,
    rating: 4.9,
    reviewsCount: 76,
    soldCount: 190,
    isHot: false,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง อุปกรณ์ครบกล่องส้มแอร์เมส ถุงผ้าใส่หัวเข็มขัด ริบบิ้น ใบเสร็จ',
    tag: '⚡ พร้อมส่งทันที',
    image: 'https://images.stockx.com/images/Hermes-H-Belt-Buckle-Reversible-Leather-Strap-32mm-Noir-Gold-01.jpg?fit=fill&bg=FFFFFF&w=700&h=500',
    gallery: [
      'https://images.stockx.com/images/Hermes-H-Belt-Buckle-Reversible-Leather-Strap-32mm-Noir-Gold-01.jpg?fit=fill&bg=FFFFFF&w=700&h=500'
    ],
    colors: [
      { name: 'Noir / Gold Buckle', hex: '#1C1917', label: 'ดำสลับน้ำตาล หัวทองเงา' }
    ],
    sizes: ['85 cm', '90 cm', '95 cm', '100 cm'],
    description: 'เข็มขัดตัว H ระดับตำนานของแอร์เมส สายหนังแท้สลับใช้ได้ 2 ด้าน (Reversible) ด้านหนึ่งเป็นหนัง Togo สีดำ หนังนุ่มมีลายเกรน และอีกด้านเป็นหนัง Swift สีน้ำตาลโกลด์ เรียบหรูทุกโอกาส',
    features: [
      'หัวเข็มขัดโลหะทองเหลืองชุบทองคำเงางาม (Gold Plated H Buckle)',
      'สายหนังแท้สองด้าน หนัง Togo ด้านดำ และหนัง Swift ด้านน้ำตาล',
      'กว้าง 38 มม. ไซส์ยอดนิยมสำหรับกางเกงสแล็คและยีนส์',
      'ตราประทับช่างและโค้ดปีผลิต (Stamp) แท้ตรวจสอบโดย HYPEBLACK'
    ],
    specs: {
      'แบรนด์': 'Hermès (Paris)',
      'วัสดุ': 'Togo & Swift Calfskin Leather',
      'ความกว้าง': '38 mm',
      'การรับประกัน': 'HYPEBLACK Verified 100% Authentic'
    }
  },

  // --- 👟 HYPE SNEAKERS ---
  {
    id: 'hb-11',
    name: 'Travis Scott x Air Jordan 1 Low OG "Reverse Mocha"',
    nameEn: 'Air Jordan 1 Retro Low OG SP Travis Scott Reverse Mocha',
    brand: 'Jordan',
    category: 'sneakers',
    categoryName: 'สนีกเกอร์รุ่นท็อป',
    price: 42500,
    originalPrice: 48000,
    rating: 5.0,
    reviewsCount: 310,
    soldCount: 890,
    isHot: true,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง กล่องครบ เชือกเสริม 3 สี ชิป RFID แท้',
    tag: '🔥 ไฮป์อันดับ 1',
    image: 'https://images.stockx.com/360/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Reverse-Mocha/Images/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Reverse-Mocha/Lv2/img01.jpg',
    gallery: [
      'https://images.stockx.com/360/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Reverse-Mocha/Images/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Reverse-Mocha/Lv2/img01.jpg'
    ],
    colors: [
      { name: 'Reverse Mocha', hex: '#634832', label: 'น้ำตาลมอคค่าตัดขาวครีม' }
    ],
    sizes: ['7 US / 40 EU', '8 US / 41 EU', '8.5 US / 42 EU', '9 US / 42.5 EU', '9.5 US / 43 EU', '10 US / 44 EU'],
    description: 'ผลงานระดับมาสเตอร์พีซของแร็ปเปอร์ชื่อดัง Travis Scott ผสานโทนสีน้ำตาลมอคค่าและขาวครีม โลโก้ Swoosh กลับหัว (Reverse Swoosh) สี Sail เอกลักษณ์ที่นักสะสมสนีกเกอร์ทั่วโลกต้องมี',
    features: [
      'หนัง Nubuck สีน้ำตาลพรีเมียมตัดหนังวัวสีขาว Sail นุ่มพิเศษ',
      'โลโก้ Swoosh กลับหัว (Oversized Reverse Swoosh)',
      'ปักโลโก้ Cactus Jack และ Jordan Wings สีแดงสดที่ส้นรองเท้า',
      'ผ่านการสแกน Blacklight และตรวจแท้โดยทีมงานสนีกเกอร์ HYPEBLACK'
    ],
    specs: {
      'แบรนด์': 'Jordan x Travis Scott',
      'รหัสโมเดล': 'DM7866-162',
      'ปีที่วางจำหน่าย': '2022',
      'การรับประกัน': 'ตรวจแท้ 100% พร้อมแท็ก HYPEBLACK Tag'
    }
  },
  {
    id: 'hb-12',
    name: 'Nike Dunk Low Retro "White Black Panda"',
    nameEn: 'Nike Dunk Low Retro White Black Panda',
    brand: 'Nike',
    category: 'sneakers',
    categoryName: 'สนีกเกอร์ยอดนิยม',
    price: 3890,
    originalPrice: 4500,
    rating: 4.8,
    reviewsCount: 820,
    soldCount: 3400,
    isHot: true,
    isNew: false,
    isReadyToShip: true,
    condition: 'มือหนึ่ง กล่องแท้ครบ อุปกรณ์พร้อมส่ง',
    tag: '⚡ พร้อมส่งด่วน',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/NIKE+DUNK+LOW+RETRO.png',
    gallery: [
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/NIKE+DUNK+LOW+RETRO.png'
    ],
    colors: [
      { name: 'Black White', hex: '#0F172A', label: 'ขาว-ดำ แพนด้าคลาสสิก' }
    ],
    sizes: ['38.5 EU', '39 EU', '40 EU', '41 EU', '42 EU', '42.5 EU', '43 EU', '44 EU'],
    description: 'สนีกเกอร์ที่แมตช์ชุดง่ายที่สุดในยุค ดีไซน์คัลเลอร์บล็อกขาว-ดำสุดคลาสสิกที่ใส่ได้กับทุกสไตล์ ยืนหนึ่งเรื่องความคุ้มค่าและความนิยมตลอดกาล',
    features: [
      'อัปเปอร์หนังเรียบคลาสสิก ทนทาน ทำความสะอาดง่าย',
      'พื้นโฟมรองรับแรงกระแทก นุ่ม เบาสบายในชีวิตประจำวัน',
      'พื้นยางชั้นนอกยึดเกาะดีเยี่ยมสไตล์รองเท้าบาสเก็ตบอลยุค 80s',
      'รับประกันของแท้ 100% จากตัวแทนจำหน่ายทางการ'
    ],
    specs: {
      'แบรนด์': 'Nike',
      'รหัสโมเดล': 'DD1391-100',
      'การรับประกัน': 'HYPEBLACK Verified แท้ 100%'
    }
  },
  {
    id: 'hb-13',
    name: 'Adidas Samba OG "Cloud White Core Black"',
    nameEn: 'Adidas Originals Samba OG Cloud White Core Black',
    brand: 'Adidas',
    category: 'sneakers',
    categoryName: 'สนีกเกอร์วินเทจ',
    price: 3800,
    originalPrice: 4200,
    rating: 4.9,
    reviewsCount: 540,
    soldCount: 2200,
    isHot: true,
    isNew: false,
    isReadyToShip: true,
    condition: 'มือหนึ่ง อุปกรณ์ครบจากช็อป ป้ายไทย/นอก',
    tag: '🔥 เทรนด์ติดชาร์ต',
    image: 'https://assets.adidas.com/images/w_700,f_auto,q_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_00_standard.jpg',
    gallery: [
      'https://assets.adidas.com/images/w_700,f_auto,q_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_00_standard.jpg'
    ],
    colors: [
      { name: 'White Core Black', hex: '#E2E8F0', label: 'ขาวตัดดำพื้นกัม' }
    ],
    sizes: ['4 UK / 36.5 EU', '5 UK / 38 EU', '6 UK / 39 EU', '7 UK / 40.5 EU', '8 UK / 42 EU', '9 UK / 43 EU'],
    description: 'รองเท้าฟุตบอลในร่มยุค 1950 ที่กลายมาเป็นสนีกเกอร์ยอดฮิตแห่งทศวรรษ หัวรองเท้าหนังกลับ T-Toe และพื้นยางกัมสุดวินเทจ ไอเทมชิ้นโปรดของเซเลบริตี้ระดับโลก',
    features: [
      'อัปเปอร์หนังแท้ฟูลเกรน ผสานหนังกลับ T-toe ที่หัวรองเท้า',
      'แถบ 3-Stripes หยักสีดำตัดกับหนังสีขาวคมชัด',
      'พื้นยางกัมสีน้ำตาลทนทาน ยึดเกาะทุกพื้นผิว',
      'ของแท้ 100% รับประกันความพึงพอใจโดย HYPEBLACK'
    ],
    specs: {
      'แบรนด์': 'Adidas Originals',
      'รหัสโมเดล': 'B75806',
      'การรับประกัน': 'HYPEBLACK Verified 100%'
    }
  },
  {
    id: 'hb-14',
    name: 'New Balance 1906R "Silver Metallic Gold"',
    nameEn: 'New Balance 1906R Silver Metallic White Gold',
    brand: 'New Balance',
    category: 'sneakers',
    categoryName: 'สนีกเกอร์สายแฟชั่น',
    price: 5900,
    originalPrice: 6800,
    rating: 4.8,
    reviewsCount: 160,
    soldCount: 480,
    isHot: false,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง กล่องแท้ ป้ายแท็กครบ',
    tag: '⚡ พร้อมส่งด่วน',
    image: 'https://nb.scene7.com/is/image/NB/m1906rer_nb_05_i?wid=700&hei=700',
    gallery: [
      'https://nb.scene7.com/is/image/NB/m1906rer_nb_05_i?wid=700&hei=700'
    ],
    colors: [
      { name: 'Silver Metallic', hex: '#94A3B8', label: 'เงินเมทัลลิกตัดทอง' }
    ],
    sizes: ['8 US / 41.5 EU', '8.5 US / 42 EU', '9 US / 42.5 EU', '9.5 US / 43 EU', '10 US / 44 EU'],
    description: 'สนีกเกอร์สไตล์ Y2K เทคโนโลยีพื้น N-ergy ซับแรงกระแทกและเสถียรภาพสูงสุด อัปเปอร์ผ้าตาข่ายสีเงินเมทัลลิก โดดเด่นในทุกย่างก้าว',
    features: [
      'พื้น N-ergy และ ABZORB ซับแรงกระแทกนุ่มกระชับตลอดวัน',
      'โครงสร้าง Stability Web เสริมการรองรับส่วนโค้งของฝ่าเท้า',
      'ดีไซน์เรโทรฟิวเจอริสติกยอดฮิต',
      'ตรวจเช็คแท้โดยระบบ HYPEBLACK Verified'
    ],
    specs: {
      'แบรนด์': 'New Balance',
      'รหัสโมเดล': 'M1906RE',
      'การรับประกัน': 'ของแท้ 100%'
    }
  },

  // --- 🧸 ART TOYS & COLLECTIBLES ---
  {
    id: 'hb-15',
    name: 'Labubu The Monsters "Fall in Wild" Vinyl Plush Doll',
    nameEn: 'Pop Mart Labubu The Monsters Fall in Wild Vinyl Doll',
    brand: 'Pop Mart',
    category: 'collectibles',
    categoryName: 'อาร์ตทอยและของสะสม',
    price: 8900,
    originalPrice: 11500,
    rating: 5.0,
    reviewsCount: 390,
    soldCount: 950,
    isHot: true,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง ไม่แกะกล่อง การ์ดครบ ซีลพลาสติกแท้จากช็อป',
    tag: '🔥 แรร์ไอเทมยอดฮิต',
    image: 'https://prod-america-res.popmart.com/default/20240408_161327_778318__1200x1200.jpg',
    gallery: [
      'https://prod-america-res.popmart.com/default/20240408_161327_778318__1200x1200.jpg'
    ],
    colors: [
      { name: 'Fall in Wild Olive', hex: '#4B5563', label: 'ชุดแคมป์ปิ้งหมวกบัคเก็ต' }
    ],
    sizes: ['Height 40 cm (Plush Doll)'],
    description: 'อาร์ตทอยปรากฏการณ์ระดับโลก! ลาบูบู้ในชุดแคมป์ปิ้งคอลเลกชัน Fall in Wild ใบหน้าไวนิลฟันหยักซิกเนเจอร์พร้อมขนตุ๊กตานุ่มฟู อุปกรณ์ชุดและหมวกถอดเปลี่ยนได้ ตรวจสอบสแกน QR Code แท้จาก Pop Mart',
    features: [
      'ใบหน้าไวนิล (Vinyl) งานละเอียด พร้อมตัวตุ๊กตาขนนุ่มเกรดพรีเมียม',
      'ชุดเอี๊ยม หมวก และรองเท้าแคมป์ปิ้งสามารถถอดใส่ได้',
      'สแกนโค้ดเช็คของแท้บนเว็บไซต์ทางการของ Pop Mart ได้ 100%',
      'สภาพกล่องคมกริบ เหมาะสำหรับตั้งโชว์และสะสม'
    ],
    specs: {
      'แบรนด์': 'Pop Mart (Kasing Lung)',
      'ความสูง': '40 เซนติเมตร',
      'การรับประกัน': 'HYPEBLACK Verified แท้ 100% สแกน QR ติด'
    }
  },
  {
    id: 'hb-16',
    name: 'Bearbrick 1000% Iron Man Mark 50 (Medicom Toy)',
    nameEn: 'Medicom Toy BE@RBRICK 1000% Iron Man Mark L',
    brand: 'Medicom Toy',
    category: 'collectibles',
    categoryName: 'อาร์ตทอยและของสะสม',
    price: 39500,
    originalPrice: 45000,
    rating: 5.0,
    reviewsCount: 42,
    soldCount: 65,
    isHot: true,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง สองกล่อง (กล่องน้ำตาลนอก + กล่องอาร์ตเวิร์คในครบ)',
    tag: '⚡ พร้อมส่งด่วน',
    image: 'https://images.stockx.com/images/Bearbrick-x-Marvel-Iron-Man-Mark-50-1000.jpg?fit=fill&bg=FFFFFF&w=700&h=500',
    gallery: [
      'https://images.stockx.com/images/Bearbrick-x-Marvel-Iron-Man-Mark-50-1000.jpg?fit=fill&bg=FFFFFF&w=700&h=500'
    ],
    colors: [
      { name: 'Metallic Crimson & Gold', hex: '#B91C1C', label: 'แดงไอรอนแมนเมทัลลิกตัดทอง' }
    ],
    sizes: ['1000% (Height 70 cm)'],
    description: 'แบร์บริคขนาดใหญ่ 70 ซม. คอลแลบกับ Marvel Studios ในชุดเกราะนาโนเทคโนโลยี Mark 50 จากภาพยนตร์ Avengers: Infinity War พ่นสีเมทัลลิกเงาวับระดับพรีเมียม ผลงานประติมากรรมสำหรับบ้านและออฟฟิศหรู',
    features: [
      'ขนาดสัดส่วน 1000% ความสูง 70 เซนติเมตร น้ำหนักอลังการ',
      'ลิขสิทธิ์แท้ Medicom Toy ร่วมกับ Marvel Official',
      'ลายดีเทลเกราะและเตาปฏิกรณ์ Arc Reactor คมกริบ',
      'มีกล่องกระดาษสีน้ำตาลชั้นนอกป้องกันกล่องสะสมอย่างสมบูรณ์'
    ],
    specs: {
      'แบรนด์': 'Medicom Toy (Tokyo, Japan)',
      'ขนาด': '70 ซม. (1000%)',
      'การรับประกัน': 'ของแท้ 100% มีตราโฮโลแกรมรับรอง'
    }
  },

  // --- 👕 STREETWEAR ---
  {
    id: 'hb-17',
    name: 'Fear of God Essentials 1977 Knit Hoodie - Iron',
    nameEn: 'Fear of God Essentials 1977 Knitted Hoodie Iron Black',
    brand: 'Fear of God',
    category: 'streetwear',
    categoryName: 'สตรีทแวร์ไฮเอนด์',
    price: 5900,
    originalPrice: 7200,
    rating: 4.8,
    reviewsCount: 190,
    soldCount: 620,
    isHot: false,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง ในถุงซิปล็อค Essentials ป้ายแท็กครบ',
    tag: '⚡ พร้อมส่งด่วน',
    image: 'https://images.stockx.com/images/Fear-of-God-Essentials-Fleece-Hoodie-FW24-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500',
    gallery: [
      'https://images.stockx.com/images/Fear-of-God-Essentials-Fleece-Hoodie-FW24-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500'
    ],
    colors: [
      { name: 'Iron Black', hex: '#262626', label: 'ดำชาร์โคลไอรอน' }
    ],
    sizes: ['S (Oversized)', 'M (Oversized)', 'L (Oversized)', 'XL'],
    description: 'ฮู้ดดี้ผ้าไหมพรมถักเนื้อหนานุ่มพิเศษจาก Jerry Lorenzo สกรีนตัวเลขนูน "1977" บนหน้าอก ทรง Oversized สตรีทแวร์ระดับท็อปที่สวมใส่สบายและให้ลุคที่หรูหรา',
    features: [
      'เนื้อผ้าถักผสมผสานความอบอุ่นและความนุ่มสบายขั้นสุด',
      'ตัวเลขนูน 1977 กำมะหยี่เนื้อแน่นกลางหน้าอก',
      'ป้ายยางซิลิโคน Essentials เอกลักษณ์ที่ด้านบนของหมวกฮู้ด',
      'ตรวจสอบเนื้อผ้าและป้ายแท็กแท้โดย HYPEBLACK'
    ],
    specs: {
      'แบรนด์': 'Fear of God Essentials',
      'ทรง': 'Relaxed Oversized Fit',
      'การรับประกัน': 'ของแท้ 100%'
    }
  },
  {
    id: 'hb-18',
    name: 'Supreme Box Logo Hooded Sweatshirt - Washed Black',
    nameEn: 'Supreme Box Logo Hooded Sweatshirt Black FW23',
    brand: 'Supreme',
    category: 'streetwear',
    categoryName: 'สตรีทแวร์ไฮเอนด์',
    price: 18900,
    originalPrice: 22000,
    rating: 5.0,
    reviewsCount: 88,
    soldCount: 240,
    isHot: true,
    isNew: true,
    isReadyToShip: true,
    condition: 'มือหนึ่ง อุปกรณ์ครบในซอง ป้ายราคาบาร์โค้ดแท้ สติกเกอร์แดง',
    tag: '👑 ตำนานสตรีทแวร์',
    image: 'https://images.stockx.com/images/Supreme-Box-Logo-Hooded-Sweatshirt-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500',
    gallery: [
      'https://images.stockx.com/images/Supreme-Box-Logo-Hooded-Sweatshirt-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500'
    ],
    colors: [
      { name: 'Washed Black', hex: '#171717', label: 'ดำฟอกพรีเมียม' }
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'ฮู้ดดี้บ็อกซ์โลโก้สีดำรุ่นที่เป็นที่ต้องการที่สุดของ Supreme New York ปักโลโก้ Box Logo คมกริบกลางอก ผ้าคอตตอนฟลีซเนื้อหนาหนัก ผลิตในประเทศแคนาดา',
    features: [
      'ผ้า Heavyweight Crossgrain Fleece หนา ทน อยู่ทรงสวย',
      'ปักโลโก้ Supreme Box Logo แน่นประณีตด้วยด้ายพิเศษ',
      'ป้ายคอและป้ายข้างแท้ Made in Canada',
      'ผ่านการตรวจสอบการเย็บและป้ายแท็กโดยผู้เชี่ยวชาญสตรีทแวร์'
    ],
    specs: {
      'แบรนด์': 'Supreme (New York)',
      'แหล่งผลิต': 'Made in Canada',
      'การรับประกัน': 'HYPEBLACK Verified 100% Authentic Guarantee'
    }
  }
];

// Available Coupons
const COUPONS = {
  'HYPEVIP': { discountPercent: 15, description: 'ลดพิเศษ 15% สำหรับสมาชิกระดับ VIP' },
  'LUXURY500': { discountAmount: 500, minSpend: 5000, description: 'ลดทันที 500 บาท เมื่อช้อปครบ 5,000 บาท' },
  'FREESHIP': { freeShipping: true, description: 'จัดส่งด่วนพร้อมประกันขนส่งฟรี ไม่มีขั้นต่ำ' }
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
  readyToShipOnly: false,
  searchQuery: '',
  priceRange: 600000,
  sortBy: 'popular',
  appliedCoupon: null,
  activeProductModal: null,
  selectedColorIndex: 0,
  selectedSize: null,
  selectedQuantity: 1,
  checkoutStep: 1,
  shippingFee: 100,
  freeShippingThreshold: 50000
};

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  loadFromStorage();
  setupEventListeners();
  renderProducts();
  updateCartUI();
  updateWishlistBadges();
  startFlashSaleTimer();
}

function loadFromStorage() {
  try {
    const savedCart = localStorage.getItem('hypeblack_cart');
    const savedWish = localStorage.getItem('hypeblack_wishlist');
    if (savedCart) AppState.cart = JSON.parse(savedCart);
    if (savedWish) AppState.wishlist = JSON.parse(savedWish);
  } catch (e) {
    console.error('Storage error', e);
  }
}

function saveToStorage() {
  try {
    localStorage.setItem('hypeblack_cart', JSON.stringify(AppState.cart));
    localStorage.setItem('hypeblack_wishlist', JSON.stringify(AppState.wishlist));
  } catch (e) {
    console.error('Save storage error', e);
  }
}

function setupEventListeners() {
  const searchInput = document.getElementById('global-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }
}

// ==========================================
// 4. FILTERING & RENDERING
// ==========================================
function getFilteredProducts() {
  return AppState.products.filter(product => {
    // Category Filter
    if (AppState.activeCategory !== 'all' && product.category !== AppState.activeCategory) {
      return false;
    }
    // Brand Filter
    if (AppState.selectedBrand !== 'all' && product.brand.toLowerCase() !== AppState.selectedBrand.toLowerCase()) {
      return false;
    }
    // Ready To Ship Filter
    if (AppState.readyToShipOnly && !product.isReadyToShip) {
      return false;
    }
    // Price Range Filter
    if (product.price > AppState.priceRange) {
      return false;
    }
    // Search Query
    if (AppState.searchQuery) {
      const q = AppState.searchQuery;
      const matchName = product.name.toLowerCase().includes(q);
      const matchBrand = product.brand.toLowerCase().includes(q);
      const matchCat = product.categoryName.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchCat) return false;
    }
    return true;
  }).sort((a, b) => {
    if (AppState.sortBy === 'price-low') return a.price - b.price;
    if (AppState.sortBy === 'price-high') return b.price - a.price;
    if (AppState.sortBy === 'rating') return b.rating - a.rating;
    return b.soldCount - a.soldCount;
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
      <div class="col-span-full py-20 text-center bg-[#12131A] rounded-3xl border border-[#242636] p-8">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-[#1A1C28] border border-[#2D3145] flex items-center justify-center text-3xl">
          🔍
        </div>
        <h3 class="text-xl font-black text-white mb-2">ไม่พบสินค้าที่ตรงกับเงื่อนไข</h3>
        <p class="text-slate-400 text-sm mb-6">ลองปรับคำค้นหา หรือรีเซ็ตตัวกรองเพื่อดูสินค้าทั้งหมด</p>
        <button onclick="resetFilters()" class="px-6 py-2.5 bg-white text-black rounded-full font-bold shadow-lg hover:bg-slate-200 transition-all text-xs">
          รีเซ็ตตัวกรองทั้งหมด
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = AppState.wishlist.includes(product.id);

    return `
      <div class="card-dark-luxury rounded-2xl overflow-hidden flex flex-col justify-between relative group cursor-pointer" onclick="openProductModal('${product.id}')">
        
        <!-- Image Container -->
        <div class="relative product-image-container bg-[#15161E] aspect-square overflow-hidden flex items-center justify-center p-3">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy"
            class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          />

          <!-- HYPEBLACK Verified Authentic Tag -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
            <span class="bg-[#00E599]/15 text-[#00E599] border border-[#00E599]/40 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-md">
              ✓ แท้ 100%
            </span>
            ${product.isReadyToShip ? `
              <span class="bg-[#E5B869]/20 text-[#E5B869] border border-[#E5B869]/40 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md flex items-center gap-1">
                ⚡ พร้อมส่งด่วน
              </span>
            ` : ''}
          </div>

          <!-- Wishlist Heart Button -->
          <button 
            onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
            aria-label="บันทึกรายการโปรด"
            class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 backdrop-blur shadow-md flex items-center justify-center transition-all duration-200 z-10 ${
              isWishlisted ? 'text-red-500 scale-110' : 'text-slate-400 hover:text-red-400'
            }">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>

        <!-- Details -->
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <!-- Brand -->
            <div class="flex items-center justify-between text-xs mb-1">
              <span class="font-extrabold text-[#E5B869] tracking-wider uppercase text-[11px]">${product.brand}</span>
              <span class="text-[10px] text-slate-400 flex items-center gap-0.5 font-semibold">
                ★ ${product.rating}
              </span>
            </div>

            <!-- Title -->
            <h4 class="font-bold text-white text-xs sm:text-sm line-clamp-2 leading-snug group-hover:text-slate-200 transition-colors">
              ${product.name}
            </h4>
          </div>

          <!-- Price & Market Ask -->
          <div class="pt-3 mt-3 border-t border-[#222432] flex items-end justify-between">
            <div>
              <span class="block text-[10px] text-slate-400 font-medium">ราคาเริ่มต้น</span>
              <span class="text-base sm:text-lg font-black text-white tracking-tight">
                ฿${product.price.toLocaleString()}
              </span>
            </div>
            
            <button 
              onclick="event.stopPropagation(); quickAddToCart('${product.id}')"
              class="w-8 h-8 rounded-full bg-white hover:bg-slate-200 text-black flex items-center justify-center font-bold text-sm shadow-md transition-transform active:scale-95"
              title="เพิ่มลงตะกร้า">
              +
            </button>
          </div>

        </div>

      </div>
    `;
  }).join('');
}

// ==========================================
// 5. FILTER HANDLERS
// ==========================================
function filterByCategory(cat) {
  AppState.activeCategory = cat;
  
  document.querySelectorAll('.category-pill').forEach(btn => {
    btn.classList.remove('active');
  });
  const target = document.getElementById(`cat-btn-${cat}`);
  if (target) target.classList.add('active');

  renderProducts();
}

function filterByBrand(brand) {
  AppState.selectedBrand = brand;

  document.querySelectorAll('.brand-chip').forEach(btn => {
    btn.classList.remove('active');
  });
  const target = document.getElementById(`brand-btn-${brand}`);
  if (target) target.classList.add('active');

  renderProducts();
}

function toggleReadyToShipFilter() {
  AppState.readyToShipOnly = !AppState.readyToShipOnly;
  const btn = document.getElementById('ready-to-ship-toggle');
  if (btn) {
    if (AppState.readyToShipOnly) {
      btn.classList.add('bg-[#E5B869]', 'text-black', 'border-transparent');
      btn.classList.remove('bg-[#161722]', 'text-slate-300');
    } else {
      btn.classList.remove('bg-[#E5B869]', 'text-black', 'border-transparent');
      btn.classList.add('bg-[#161722]', 'text-slate-300');
    }
  }
  renderProducts();
}

function handleSearchInput(e) {
  AppState.searchQuery = e.target.value.toLowerCase().trim();
  renderProducts();
}

function handlePriceRangeChange(val) {
  AppState.priceRange = parseInt(val, 10);
  const display = document.getElementById('price-range-display');
  if (display) display.innerText = `฿${AppState.priceRange.toLocaleString()}`;
  renderProducts();
}

function handleSortChange(sort) {
  AppState.sortBy = sort;
  renderProducts();
}

function resetFilters() {
  AppState.activeCategory = 'all';
  AppState.selectedBrand = 'all';
  AppState.readyToShipOnly = false;
  AppState.searchQuery = '';
  AppState.priceRange = 600000;
  AppState.sortBy = 'popular';

  const searchInput = document.getElementById('global-search');
  if (searchInput) searchInput.value = '';

  const priceRange = document.getElementById('price-range-slider');
  if (priceRange) priceRange.value = 600000;

  const display = document.getElementById('price-range-display');
  if (display) display.innerText = '฿600,000';

  filterByCategory('all');
  filterByBrand('all');
}

// ==========================================
// 6. PRODUCT DETAIL MODAL
// ==========================================
function openProductModal(id) {
  const product = AppState.products.find(p => p.id === id);
  if (!product) return;

  AppState.activeProductModal = product;
  AppState.selectedColorIndex = 0;
  AppState.selectedSize = product.sizes ? product.sizes[0] : null;
  AppState.selectedQuantity = 1;

  const modal = document.getElementById('product-detail-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Left Images Gallery -->
      <div class="lg:col-span-6 space-y-4">
        <div class="bg-[#15161F] rounded-2xl border border-[#262838] aspect-square overflow-hidden flex items-center justify-center p-4 relative">
          <img 
            id="modal-main-image" 
            src="${product.image}" 
            alt="${product.name}" 
            class="w-full h-full object-cover rounded-xl"
          />
          <div class="absolute top-4 left-4 flex flex-col gap-2">
            <span class="bg-[#00E599]/20 text-[#00E599] border border-[#00E599]/50 text-xs font-black px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-md">
              ✓ HYPEBLACK VERIFIED แท้ 100%
            </span>
            ${product.isReadyToShip ? `
              <span class="bg-[#E5B869]/20 text-[#E5B869] border border-[#E5B869]/50 text-xs font-bold px-3 py-0.5 rounded-full backdrop-blur-md">
                ⚡ พร้อมส่งด่วน 1-2 วัน
              </span>
            ` : ''}
          </div>
        </div>

        <!-- Thumbnails -->
        <div class="flex gap-2 overflow-x-auto pb-2">
          ${product.gallery.map((img, idx) => `
            <div 
              onclick="document.getElementById('modal-main-image').src = '${img}'" 
              class="w-16 h-16 rounded-xl bg-[#15161F] border border-[#262838] hover:border-white cursor-pointer overflow-hidden flex-shrink-0 p-1">
              <img src="${img}" class="w-full h-full object-cover rounded-lg" />
            </div>
          `).join('')}
        </div>

        <!-- Authentic Assurance Card -->
        <div class="bg-[#12131A] border border-[#242636] rounded-2xl p-4 flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-[#00E599]/10 border border-[#00E599]/30 text-[#00E599] flex items-center justify-center text-lg flex-shrink-0 font-bold">
            ✓
          </div>
          <div class="text-xs">
            <h5 class="font-bold text-white mb-0.5">รับประกันของแท้ 100% โดยผู้เชี่ยวชาญ HYPEBLACK</h5>
            <p class="text-slate-400">ตรวจสอบความแท้ทุกจุดด้วยเครื่องมือตรวจแสง UV และทีมงานผู้เชี่ยวชาญก่อนจัดส่ง พร้อมแท็กและใบรับประกัน</p>
          </div>
        </div>
      </div>

      <!-- Right Details & Options -->
      <div class="lg:col-span-6 flex flex-col justify-between space-y-6">
        <div>
          <!-- Brand & Badges -->
          <div class="flex items-center justify-between text-xs mb-2">
            <span class="font-extrabold text-[#E5B869] text-sm uppercase tracking-wider">${product.brand}</span>
            <span class="bg-[#1E202E] text-slate-300 px-3 py-1 rounded-full text-xs font-semibold">
              ${product.condition || 'สภาพมือหนึ่ง อุปกรณ์ครบ'}
            </span>
          </div>

          <!-- Product Title -->
          <h2 class="text-xl sm:text-2xl font-black text-white leading-tight mb-3">
            ${product.name}
          </h2>

          <!-- Price Display -->
          <div class="bg-[#15161F] border border-[#262838] p-4 rounded-2xl mb-5 flex items-baseline justify-between">
            <div>
              <span class="text-xs text-slate-400 block mb-0.5">ราคาซื้อทันที (Buy Now)</span>
              <span class="text-2xl sm:text-3xl font-black text-white">
                ฿${product.price.toLocaleString()}
              </span>
            </div>
            <div class="text-right">
              <span class="text-xs text-emerald-400 font-bold block">✓ สต็อกพร้อมจัดส่ง</span>
              <span class="text-[11px] text-slate-400">ส่งด่วนถึงมือใน 1-2 วัน</span>
            </div>
          </div>

          <!-- Size Options -->
          <div class="mb-5">
            <div class="flex items-center justify-between mb-2">
              <label class="text-xs font-bold text-white uppercase tracking-wider">เลือกขนาด / ไซส์ (พร้อมราคาตลาด)</label>
              <button onclick="openSizeGuide()" class="text-xs text-[#E5B869] hover:underline font-semibold flex items-center gap-1">
                📏 ตารางเทียบไซส์
              </button>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              ${product.sizes.map((sz, i) => `
                <button 
                  onclick="selectModalSize('${sz}', this)"
                  class="size-btn ${i === 0 ? 'active' : ''} py-2.5 px-3 rounded-xl border border-[#262838] bg-[#12131A] text-slate-300 text-xs font-semibold hover:border-slate-400 transition-all text-center">
                  <span class="block font-bold">${sz}</span>
                  <span class="block text-[10px] text-slate-400">฿${product.price.toLocaleString()}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Description -->
          <div class="text-xs text-slate-300 space-y-2 mb-4 leading-relaxed">
            <p>${product.description}</p>
          </div>

          <!-- Specs Table -->
          <div class="bg-[#12131A] rounded-xl p-3 border border-[#262838] text-xs space-y-1.5">
            ${Object.entries(product.specs).map(([k, v]) => `
              <div class="flex justify-between py-1 border-b border-[#1E202E] last:border-0">
                <span class="text-slate-400 font-medium">${k}</span>
                <span class="text-slate-200 font-bold">${v}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-4 border-t border-[#262838] flex gap-3">
          <button 
            onclick="addModalProductToCart()" 
            class="flex-1 py-3.5 px-4 rounded-xl bg-white hover:bg-slate-200 text-black font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2">
            <span>🛒 เพิ่มลงตะกร้า</span>
          </button>
          
          <button 
            onclick="buyNowModalProduct()" 
            class="flex-1 py-3.5 px-4 rounded-xl gold-gradient-btn font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2">
            <span>⚡ ซื้อทันที (พร้อมส่ง)</span>
          </button>
        </div>

      </div>

    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeProductModal() {
  const modal = document.getElementById('product-detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function selectModalSize(size, el) {
  AppState.selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
  if (el) el.classList.add('active');
}

// ==========================================
// 7. CART & CHECKOUT
// ==========================================
function quickAddToCart(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  addToCart(product, product.sizes ? product.sizes[0] : 'Standard');
}

function addModalProductToCart() {
  if (!AppState.activeProductModal) return;
  addToCart(AppState.activeProductModal, AppState.selectedSize);
  closeProductModal();
}

function buyNowModalProduct() {
  if (!AppState.activeProductModal) return;
  addToCart(AppState.activeProductModal, AppState.selectedSize);
  closeProductModal();
  openCartDrawer();
}

function addToCart(product, size) {
  const existing = AppState.cart.find(item => item.id === product.id && item.size === size);

  if (existing) {
    existing.quantity += 1;
  } else {
    AppState.cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      size: size || 'Standard',
      quantity: 1
    });
  }

  saveToStorage();
  updateCartUI();
  showToast(`เพิ่ม "${product.name}" ลงในตะกร้าแล้ว`, 'success');
}

function updateCartQuantity(index, delta) {
  if (!AppState.cart[index]) return;
  AppState.cart[index].quantity += delta;
  if (AppState.cart[index].quantity <= 0) {
    AppState.cart.splice(index, 1);
  }
  saveToStorage();
  updateCartUI();
}

function removeCartItem(index) {
  AppState.cart.splice(index, 1);
  saveToStorage();
  updateCartUI();
}

function calculateCartTotals() {
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;

  if (AppState.appliedCoupon) {
    const c = COUPONS[AppState.appliedCoupon];
    if (c) {
      if (c.discountPercent) {
        discount = Math.round(subtotal * (c.discountPercent / 100));
      } else if (c.discountAmount) {
        discount = c.discountAmount;
      }
    }
  }

  const shipping = (subtotal >= AppState.freeShippingThreshold || (AppState.appliedCoupon && COUPONS[AppState.appliedCoupon]?.freeShipping)) 
    ? 0 
    : AppState.shippingFee;

  const total = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, total };
}

function updateCartUI() {
  const countBadges = document.querySelectorAll('.cart-count-badge');
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);

  countBadges.forEach(badge => {
    badge.innerText = totalCount;
    if (totalCount > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });

  const cartItemsList = document.getElementById('cart-items-list');
  const { subtotal, discount, shipping, total } = calculateCartTotals();

  if (cartItemsList) {
    if (AppState.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="py-16 text-center">
          <div class="w-16 h-16 rounded-full bg-[#181924] border border-[#262838] mx-auto mb-4 flex items-center justify-center text-2xl">
            🛒
          </div>
          <p class="text-white font-bold text-sm mb-1">ตะกร้าของคุณว่างเปล่า</p>
          <p class="text-xs text-slate-400 mb-6">เลือกช้อปสินค้าแบรนด์เนมและสนีกเกอร์ของแท้ได้เลย</p>
          <button onclick="closeCartDrawer()" class="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs hover:bg-slate-200">
            ไปเลือกสินค้า
          </button>
        </div>
      `;
    } else {
      cartItemsList.innerHTML = AppState.cart.map((item, idx) => `
        <div class="flex gap-3 bg-[#12131A] border border-[#242636] p-3 rounded-xl">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg bg-[#181924] flex-shrink-0" />
          <div class="flex-1 flex flex-col justify-between">
            <div class="flex items-start justify-between gap-2">
              <div>
                <span class="text-[10px] text-[#E5B869] font-bold block uppercase">${item.brand}</span>
                <h5 class="text-xs font-bold text-white line-clamp-1">${item.name}</h5>
                <span class="text-[10px] text-slate-400">ไซส์: ${item.size}</span>
              </div>
              <button onclick="removeCartItem(${idx})" class="text-slate-500 hover:text-red-400 text-xs">✕</button>
            </div>

            <div class="flex items-center justify-between pt-2">
              <span class="text-xs font-black text-white">฿${item.price.toLocaleString()}</span>
              <div class="flex items-center gap-2 bg-[#1A1C28] px-2 py-0.5 rounded-lg border border-[#2D3145]">
                <button onclick="updateCartQuantity(${idx}, -1)" class="text-slate-400 hover:text-white font-bold">-</button>
                <span class="text-xs font-bold text-white">${item.quantity}</span>
                <button onclick="updateCartQuantity(${idx}, 1)" class="text-slate-400 hover:text-white font-bold">+</button>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Update totals
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountEl = document.getElementById('cart-discount');
  const shippingEl = document.getElementById('cart-shipping');
  const totalEl = document.getElementById('cart-total');

  if (subtotalEl) subtotalEl.innerText = `฿${subtotal.toLocaleString()}`;
  if (discountEl) discountEl.innerText = discount > 0 ? `-฿${discount.toLocaleString()}` : '฿0';
  if (shippingEl) shippingEl.innerText = shipping === 0 ? 'ส่งฟรี' : `฿${shipping.toLocaleString()}`;
  if (totalEl) totalEl.innerText = `฿${total.toLocaleString()}`;
}

function openCartDrawer() {
  updateCartUI();
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.remove('hidden');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.add('hidden');
}

function applyCouponCode() {
  const input = document.getElementById('coupon-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (COUPONS[code]) {
    AppState.appliedCoupon = code;
    updateCartUI();
    showToast(`ใช้โค้ดส่วนลด "${code}" สำเร็จแล้ว!`, 'success');
  } else {
    showToast('โค้ดส่วนลดไม่ถูกต้องหรือหมดอายุ', 'error');
  }
}

function applyPresetCoupon(code) {
  AppState.appliedCoupon = code;
  const input = document.getElementById('coupon-input');
  if (input) input.value = code;
  updateCartUI();
  showToast(`รับส่วนลดพิเศษโค้ด ${code} แล้ว`, 'success');
  openCartDrawer();
}

// Checkout Flow
function proceedToCheckout() {
  if (AppState.cart.length === 0) {
    showToast('ไม่มีสินค้าในตะกร้า', 'error');
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    renderCheckoutSummary();
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function renderCheckoutSummary() {
  const { subtotal, discount, shipping, total } = calculateCartTotals();
  const sumEl = document.getElementById('checkout-total-price');
  if (sumEl) sumEl.innerText = `฿${total.toLocaleString()}`;
}

function completeOrder() {
  const orderId = 'HB-' + Math.floor(100000 + Math.random() * 900000);
  closeCheckoutModal();
  AppState.cart = [];
  AppState.appliedCoupon = null;
  saveToStorage();
  updateCartUI();

  // Show Success PromptPay Modal
  const successModal = document.getElementById('order-success-modal');
  const orderNumEl = document.getElementById('success-order-id');
  if (orderNumEl) orderNumEl.innerText = orderId;
  if (successModal) {
    successModal.classList.remove('hidden');
    successModal.classList.add('flex');
  }
}

function closeOrderSuccessModal() {
  const successModal = document.getElementById('order-success-modal');
  if (successModal) {
    successModal.classList.add('hidden');
    successModal.classList.remove('flex');
  }
}

// ==========================================
// 8. WISHLIST
// ==========================================
function toggleWishlist(id) {
  const idx = AppState.wishlist.indexOf(id);
  if (idx > -1) {
    AppState.wishlist.splice(idx, 1);
    showToast('ลบออกจากรายการโปรดแล้ว', 'info');
  } else {
    AppState.wishlist.push(id);
    showToast('เพิ่มในรายการโปรดเรียบร้อย', 'success');
  }
  saveToStorage();
  updateWishlistBadges();
  renderProducts();
}

function updateWishlistBadges() {
  const badges = document.querySelectorAll('.wishlist-count-badge');
  const count = AppState.wishlist.length;
  badges.forEach(b => {
    b.innerText = count;
    if (count > 0) b.classList.remove('hidden');
    else b.classList.add('hidden');
  });
}

function showWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  const list = document.getElementById('wishlist-items-list');
  if (!modal || !list) return;

  const wishedProducts = AppState.products.filter(p => AppState.wishlist.includes(p.id));

  if (wishedProducts.length === 0) {
    list.innerHTML = `
      <div class="py-12 text-center text-slate-400">
        <p class="text-3xl mb-2">❤️</p>
        <p class="font-bold text-white text-sm">ยังไม่มีสินค้าในรายการโปรด</p>
        <p class="text-xs">กดไอคอนหัวใจที่สินค้าเพื่อบันทึกไว้ดูภายหลัง</p>
      </div>
    `;
  } else {
    list.innerHTML = wishedProducts.map(p => `
      <div class="flex items-center justify-between p-3 bg-[#12131A] border border-[#242636] rounded-xl gap-3">
        <img src="${p.image}" class="w-14 h-14 object-cover rounded-lg bg-[#181924]" />
        <div class="flex-1">
          <span class="text-[10px] text-[#E5B869] font-bold block">${p.brand}</span>
          <h5 class="text-xs font-bold text-white line-clamp-1">${p.name}</h5>
          <span class="text-xs font-black text-white">฿${p.price.toLocaleString()}</span>
        </div>
        <button onclick="quickAddToCart('${p.id}'); toggleWishlist('${p.id}'); showWishlistModal();" class="px-3 py-1.5 bg-white text-black text-xs font-bold rounded-lg hover:bg-slate-200">
          ใส่ตะกร้า
        </button>
      </div>
    `).join('');
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ==========================================
// 9. MODALS & UTILITIES
// ==========================================
function openSizeGuide() {
  const modal = document.getElementById('size-guide-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeSizeGuide() {
  const modal = document.getElementById('size-guide-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function openTrackingModal() {
  const modal = document.getElementById('tracking-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeTrackingModal() {
  const modal = document.getElementById('tracking-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function startFlashSaleTimer() {
  let totalSeconds = (14 * 3600) + (45 * 60) + 20;

  setInterval(() => {
    if (totalSeconds <= 0) return;
    totalSeconds--;

    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const elH = document.getElementById('timer-hours');
    const elM = document.getElementById('timer-mins');
    const elS = document.getElementById('timer-secs');

    if (elH) elH.innerText = String(h).padStart(2, '0');
    if (elM) elM.innerText = String(m).padStart(2, '0');
    if (elS) elS.innerText = String(s).padStart(2, '0');
  }, 1000);
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `p-3 px-4 rounded-xl text-xs font-bold text-white shadow-2xl flex items-center gap-2 border transition-all transform duration-300 pointer-events-auto ${
    type === 'success' 
      ? 'bg-[#12131A] border-[#00E599]/60 text-[#00E599]' 
      : type === 'error'
      ? 'bg-[#12131A] border-red-500/60 text-red-400'
      : 'bg-[#12131A] border-[#E5B869]/60 text-[#E5B869]'
  }`;

  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
