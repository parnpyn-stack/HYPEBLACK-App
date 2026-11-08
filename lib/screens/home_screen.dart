import 'dart:async';
import 'package:flutter/material.dart';
import '../services/store_state.dart';
import '../widgets/product_card.dart';
import 'shop_screen.dart';

class HomeScreen extends StatefulWidget {
  final StoreState store;
  final Function(int) onNavigateTab;

  const HomeScreen({
    super.key,
    required this.store,
    required this.onNavigateTab,
  });

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _flashSaleSeconds = 14 * 3600 + 45 * 60 + 20;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (mounted) {
        setState(() {
          if (_flashSaleSeconds > 0) {
            _flashSaleSeconds--;
          } else {
            _flashSaleSeconds = 24 * 3600;
          }
        });
      }
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final store = widget.store;
    final h = (_flashSaleSeconds ~/ 3600).toString().padLeft(2, '0');
    final m = ((_flashSaleSeconds % 3600) ~/ 60).toString().padLeft(2, '0');
    final s = (_flashSaleSeconds % 60).toString().padLeft(2, '0');

    final popularProducts =
        store.products.where((p) => p.isHot).take(4).toList();

    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      appBar: AppBar(
        titleSpacing: 16,
        backgroundColor: Colors.white,
        elevation: 0,
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFFFF5E36), Color(0xFFFF007A)],
                ),
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Icon(Icons.bolt, color: Colors.white, size: 20),
            ),
            const SizedBox(width: 10),
            RichText(
              text: const TextSpan(
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.w900,
                  color: Color(0xFF0F172A),
                  letterSpacing: -0.5,
                ),
                children: [
                  TextSpan(text: 'ACTIVE'),
                  TextSpan(
                    text: 'PULSE',
                    style: TextStyle(color: Color(0xFFFF5E36)),
                  ),
                ],
              ),
            ),
          ],
        ),
        actions: [
          IconButton(
            onPressed: () => widget.onNavigateTab(1), // go to shop
            icon: const Icon(Icons.search, color: Colors.black87),
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Hero Energy Banner
            Container(
              margin: const EdgeInsets.all(16),
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFF0B0F19), Color(0xFF1E1B4B)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(24),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.15),
                    blurRadius: 16,
                    offset: const Offset(0, 8),
                  )
                ],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFF5E36).withOpacity(0.25),
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: const Color(0xFFFF5E36)),
                    ),
                    child: const Text(
                      '⚡ NEW COLLECTION 2026',
                      style: TextStyle(
                        color: Color(0xFFFF5E36),
                        fontSize: 10,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  const Text(
                    'ENERGY. SPEED.\nUNSTOPPABLE.',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 24,
                      fontWeight: FontWeight.w900,
                      height: 1.1,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'ปลดปล่อยพลังในตัวคุณด้วยเสื้อผ้า & รองเท้าวิ่งแผ่นคาร์บอนระดับแข่งขัน',
                    style: TextStyle(
                      color: Colors.grey.shade300,
                      fontSize: 12,
                      height: 1.4,
                    ),
                  ),
                  const SizedBox(height: 16),

                  // Countdown Box
                  Container(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: Colors.white.withOpacity(0.15)),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              '🔥 FLASH SALE จบใน:',
                              style: TextStyle(
                                color: Color(0xFFFF5E36),
                                fontSize: 11,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            Text(
                              'ลดสูงสุด 60% วันนี้เท่านั้น',
                              style:
                                  TextStyle(color: Colors.white70, fontSize: 10),
                            ),
                          ],
                        ),
                        Row(
                          children: [
                            _timerBadge(h),
                            const Text(' : ',
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold)),
                            _timerBadge(m),
                            const Text(' : ',
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold)),
                            _timerBadge(s, isOrange: true),
                          ],
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: () => widget.onNavigateTab(1),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFFFF5E36),
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(14),
                      ),
                    ),
                    child: const Text('ช้อปสินค้าทั้งหมด ➔',
                        style: TextStyle(fontWeight: FontWeight.bold)),
                  ),
                ],
              ),
            ),

            // Category Quick Pills
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    'หมวดหมู่ยอดนิยม',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                  TextButton(
                    onPressed: () => widget.onNavigateTab(1),
                    child: const Text('ดูทั้งหมด',
                        style: TextStyle(color: Color(0xFFFF5E36), fontSize: 12)),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 6),
            SizedBox(
              height: 40,
              child: ListView(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 16),
                children: [
                  _categoryChip('ทั้งหมด', 'all', store),
                  _categoryChip('👟 รองเท้าวิ่ง', 'shoes-running', store),
                  _categoryChip('🏀 บาสเก็ตบอล', 'shoes-court', store),
                  _categoryChip('⚽ สตั๊ดฟุตบอล', 'shoes-football', store),
                  _categoryChip('🎽 เสื้อผ้าชาย', 'apparel-men', store),
                  _categoryChip('🧘‍♀️ เสื้อผ้าหญิง', 'apparel-women', store),
                  _categoryChip('🎒 อุปกรณ์ & กระเป๋า', 'accessories', store),
                ],
              ),
            ),

            const SizedBox(height: 24),

            // Popular Products Grid
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '🔥 ดีลสุดฮอตประจำสัปดาห์',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                  TextButton(
                    onPressed: () => widget.onNavigateTab(1),
                    child: const Text('ดูทั้งหมด',
                        style: TextStyle(color: Color(0xFFFF5E36), fontSize: 12)),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 8),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: popularProducts.length,
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  childAspectRatio: 0.68,
                  crossAxisSpacing: 12,
                  mainAxisSpacing: 12,
                ),
                itemBuilder: (context, index) {
                  return ProductCard(
                    product: popularProducts[index],
                    store: store,
                  );
                },
              ),
            ),

            const SizedBox(height: 24),

            // Trust Badges Banner
            Container(
              margin: const EdgeInsets.all(16),
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: Colors.grey.shade200),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  _trustItem(Icons.verified, 'ของแท้ 100%', 'ประกันศูนย์'),
                  _trustItem(Icons.local_shipping, 'ส่งฟรีทั่วไทย', 'ช้อปครบ ฿1,500'),
                  _trustItem(Icons.cached, 'เปลี่ยนไซส์ฟรี', 'ใน 14 วัน'),
                ],
              ),
            ),

            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }

  Widget _timerBadge(String text, {bool isOrange = false}) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 4),
      decoration: BoxDecoration(
        color: Colors.black.withOpacity(0.7),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Text(
        text,
        style: TextStyle(
          color: isOrange ? const Color(0xFFFF5E36) : Colors.white,
          fontWeight: FontWeight.bold,
          fontSize: 13,
        ),
      ),
    );
  }

  Widget _categoryChip(String label, String id, StoreState store) {
    final isSelected = store.activeCategory == id;
    return Padding(
      padding: const EdgeInsets.only(right: 8),
      child: ChoiceChip(
        label: Text(label),
        selected: isSelected,
        selectedColor: const Color(0xFFFF5E36),
        labelStyle: TextStyle(
          color: isSelected ? Colors.white : Colors.black87,
          fontSize: 12,
          fontWeight: FontWeight.bold,
        ),
        onSelected: (val) {
          store.setCategory(id);
          widget.onNavigateTab(1);
        },
      ),
    );
  }

  Widget _trustItem(IconData icon, String title, String subtitle) {
    return Column(
      children: [
        Icon(icon, color: const Color(0xFFFF5E36), size: 24),
        const SizedBox(height: 4),
        Text(title,
            style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 11)),
        Text(subtitle,
            style: TextStyle(color: Colors.grey.shade500, fontSize: 9)),
      ],
    );
  }
}
