# 🖤 HYPEBLACK (ไฮป์แบล็ค) — Luxury, Sneakers & Accessories Marketplace

> **🚀 ทดลองใช้งานเว็บแอปถาวร (Live Demo on GitHub Pages)**
>
> - 📱 **โหมดจำลองมือถือ (Mobile App Simulator):** **[https://parnpyn-stack.github.io/HYPEBLACK-App/mobile.html](https://parnpyn-stack.github.io/HYPEBLACK-App/mobile.html)**
> - 🛍️ **หน้าร้านเต็มจอ (Full Web App):** **[https://parnpyn-stack.github.io/HYPEBLACK-App/](https://parnpyn-stack.github.io/HYPEBLACK-App/)**

<p align="center">
  <a href="https://parnpyn-stack.github.io/HYPEBLACK-App/mobile.html">
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://parnpyn-stack.github.io/HYPEBLACK-App/" alt="Scan QR Code to open HYPEBLACK on Mobile" />
  </a>
  <br />
  <sub>📲 สแกน QR Code เพื่อเปิด HYPEBLACK บนมือถือทันที</sub>
</p>

---

## ✨ ฟีเจอร์หลัก (Key Features)

- **🖤 All-Black Dark Luxury UI** — ดีไซน์โทนสีดำหรูหรา ตัดด้วยสีทอง (`#E5B869`) และป้ายรับรองของแท้สีเขียวมรกต (`#00E599`)
- **👜 สินค้าแบรนด์เนมและสตรีทแวร์คัดสรร 18 รายการ** — ครบทุกหมวดหมู่พร้อมรูปภาพตรงรุ่นจริง:
  - **Luxury Bags:** Goyard Saint Louis PM, Louis Vuitton Keepall 50 Eclipse, Chanel Classic Double Flap 10", Celine Teen Triomphe, Prada Re-Edition 2005
  - **Watches & Accessories:** Rolex Submariner Date 41mm "Starbucks", Cartier Love Bracelet 18K, Chrome Hearts Forever Ring, Gentle Monster x Maison Margiela MM007, Hermès Constance H Belt
  - **Hype Sneakers:** Travis Scott x Air Jordan 1 Low "Reverse Mocha", Nike Dunk Low "Panda", Adidas Samba OG, New Balance 1906R
  - **Art Toys & Streetwear:** Pop Mart Labubu "Fall in Wild", Bearbrick 1000% Iron Man Mark 50, Fear of God Essentials Hoodie, Supreme Box Logo Hoodie
- **🔍 ระบบค้นหาและกรองสินค้าอัจฉริยะ** — กรองตามหมวดหมู่ แบรนด์ ช่วงราคา สถานะพร้อมส่ง และเรียงลำดับตามยอดนิยม/ราคา/คะแนนรีวิว
- **🛒 ตะกร้าสินค้า & ระบบโค้ดส่วนลด** — รองรับการเลือกไซส์ เพิ่ม-ลดจำนวน บันทึกรายการโปรด (Wishlist) และจำลองขั้นตอนชำระเงิน
  - โค้ดส่วนลดทดสอบ: `HYPEVIP` (ลด 15%), `LUXURY500` (ลด ฿500), `FREESHIP` (ส่งฟรี)
- **📱 Mobile App Simulator (`mobile.html`)** — สลับมุมมองจำลองสมาร์ตโฟนได้ 3 รุ่น (`iPhone 16 Pro`, `Galaxy S24`, `Compact SE`)
- **📲 รองรับ PWA** — เปิดผ่าน Safari / Chrome บนมือถือแล้วกด **Add to Home Screen** เพื่อใช้งานแบบแอปเต็มหน้าจอ

---

## 🛠️ โครงสร้างไฟล์หลัก (Project Structure)

```text
HYPEBLACK-App/
├── index.html                   # หน้าร้านหลัก HYPEBLACK Web App
├── mobile.html                  # หน้าตัวจำลองสมาร์ตโฟน (Mobile Simulator)
├── app.js                       # ข้อมูลสินค้า 18 รายการ, ระบบตะกร้า, ฟิลเตอร์ และ Modal
├── styles.css                   # สไตล์ธีม All-Black Dark Luxury
├── manifest.json                # ไฟล์ตั้งค่า PWA (Web App Manifest)
├── web/                         # Favicon และไอคอนแอป PWA
└── .github/workflows/pages.yml  # GitHub Actions สำหรับ Deploy ขึ้น GitHub Pages อัตโนมัติ
```

---

## 💻 เทคโนโลยีที่ใช้ (Tech Stack)

- **HTML5 / CSS3 / Vanilla JavaScript**
- **Tailwind CSS** (CDN) & **Google Fonts (Kanit)**
- **GitHub Pages** (Static Hosting & Auto Deployment)
