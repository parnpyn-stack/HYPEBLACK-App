import 'package:flutter/material.dart';
import '../services/store_state.dart';
import '../widgets/product_card.dart';

class ShopScreen extends StatefulWidget {
  final StoreState store;

  const ShopScreen({super.key, required this.store});

  @override
  State<ShopScreen> createState() => _ShopScreenState();
}

class _ShopScreenState extends State<ShopScreen> {
  final TextEditingController _searchCtrl = TextEditingController();

  @override
  void initState() {
    super.initState();
    _searchCtrl.text = widget.store.searchQuery;
  }

  @override
  void dispose() {
    _searchCtrl.dispose();
    super.dispose();
  }

  void _showSortModal() {
    showModalBottomSheet(
      context: context,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (ctx) => Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'จัดเรียงสินค้าตาม',
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 12),
            _sortOption('popular', '🔥 ยอดนิยม (ขายดีสุด)'),
            _sortOption('price-asc', '💵 ราคา: ต่ำไปสูง'),
            _sortOption('price-desc', '💎 ราคา: สูงไปต่ำ'),
            _sortOption('discount-desc', '⚡ ส่วนลดมากที่สุด'),
            _sortOption('rating-desc', '⭐ คะแนนรีวิวสูงสุด'),
            _sortOption('newest', '✨ สินค้ามาใหม่ล่าสุด'),
          ],
        ),
      ),
    );
  }

  Widget _sortOption(String value, String label) {
    final isSelected = widget.store.sortBy == value;
    return ListTile(
      title: Text(label,
          style: TextStyle(
              fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
              color: isSelected ? const Color(0xFFFF5E36) : Colors.black)),
      trailing: isSelected
          ? const Icon(Icons.check, color: Color(0xFFFF5E36))
          : null,
      onTap: () {
        widget.store.setSortBy(value);
        Navigator.of(context).pop();
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final store = widget.store;
    final products = store.filteredProducts;

    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      appBar: AppBar(
        title: const Text('ค้นหาสินค้ากีฬา',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
        actions: [
          IconButton(
            onPressed: _showSortModal,
            icon: const Icon(Icons.sort),
            tooltip: 'จัดเรียง',
          ),
          IconButton(
            onPressed: () {
              _searchCtrl.clear();
              store.resetFilters();
            },
            icon: const Icon(Icons.filter_alt_off_outlined),
            tooltip: 'รีเซ็ตตัวกรอง',
          ),
        ],
      ),
      body: Column(
        children: [
          // Search Input Bar
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: TextField(
              controller: _searchCtrl,
              onChanged: (val) => store.setSearchQuery(val),
              decoration: InputDecoration(
                hintText: 'ค้นหารองเท้าวิ่ง, เสื้อกีฬา, สตั๊ด...',
                prefixIcon: const Icon(Icons.search, size: 20),
                suffixIcon: _searchCtrl.text.isNotEmpty
                    ? IconButton(
                        icon: const Icon(Icons.clear, size: 18),
                        onPressed: () {
                          _searchCtrl.clear();
                          store.setSearchQuery('');
                        },
                      )
                    : null,
                filled: true,
                fillColor: Colors.white,
                isDense: true,
                contentPadding: const EdgeInsets.all(12),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide(color: Colors.grey.shade300),
                ),
              ),
            ),
          ),

          // Categories Horizontal List
          SizedBox(
            height: 38,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 16),
              children: [
                _catChip('ทั้งหมด', 'all', store),
                _catChip('👟 รองเท้าวิ่ง', 'shoes-running', store),
                _catChip('🏀 บาสเก็ตบอล', 'shoes-court', store),
                _catChip('⚽ สตั๊ดฟุตบอล', 'shoes-football', store),
                _catChip('🎽 เสื้อผ้าชาย', 'apparel-men', store),
                _catChip('🧘‍♀️ เสื้อผ้าหญิง', 'apparel-women', store),
                _catChip('🎒 อุปกรณ์ & กระเป๋า', 'accessories', store),
              ],
            ),
          ),

          // Brands Quick Chips
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
            child: SizedBox(
              height: 30,
              child: ListView(
                scrollDirection: Axis.horizontal,
                children: [
                  _brandChip('ทุกแบรนด์', 'all', store),
                  _brandChip('Nike', 'Nike', store),
                  _brandChip('Adidas', 'Adidas', store),
                  _brandChip('Puma', 'Puma', store),
                  _brandChip('Asics', 'Asics', store),
                  _brandChip('ActivePulse', 'ActivePulse', store),
                ],
              ),
            ),
          ),

          // Price Slider Filter
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            child: Row(
              children: [
                Text(
                  'งบ: ฿${store.maxPrice.toStringAsFixed(0)}',
                  style: const TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFFFF5E36),
                  ),
                ),
                Expanded(
                  child: SliderTheme(
                    data: SliderTheme.of(context).copyWith(
                      thumbColor: const Color(0xFFFF5E36),
                      activeTrackColor: const Color(0xFFFF5E36),
                      inactiveTrackColor: Colors.grey.shade200,
                      trackHeight: 3,
                    ),
                    child: Slider(
                      min: 300,
                      max: 10000,
                      divisions: 97,
                      value: store.maxPrice,
                      onChanged: (v) => store.setMaxPrice(v),
                    ),
                  ),
                ),
                Text(
                  '${products.length} รายการ',
                  style: TextStyle(fontSize: 11, color: Colors.grey.shade600),
                ),
              ],
            ),
          ),

          // Product Grid
          Expanded(
            child: products.isEmpty
                ? Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Icon(Icons.search_off,
                            size: 56, color: Colors.grey),
                        const SizedBox(height: 12),
                        const Text(
                          'ไม่พบสินค้าที่ตรงกับเงื่อนไข',
                          style: TextStyle(
                              fontSize: 16, fontWeight: FontWeight.bold),
                        ),
                        const SizedBox(height: 6),
                        Text(
                          'ลองปรับคำค้นหา หรือรีเซ็ตตัวกรองใหม่',
                          style: TextStyle(
                              fontSize: 12, color: Colors.grey.shade500),
                        ),
                        const SizedBox(height: 12),
                        ElevatedButton(
                          onPressed: () {
                            _searchCtrl.clear();
                            store.resetFilters();
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: const Color(0xFFFF5E36),
                            foregroundColor: Colors.white,
                          ),
                          child: const Text('รีเซ็ตตัวกรอง'),
                        ),
                      ],
                    ),
                  )
                : GridView.builder(
                    padding: const EdgeInsets.all(16),
                    itemCount: products.length,
                    gridDelegate:
                        const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 2,
                      childAspectRatio: 0.68,
                      crossAxisSpacing: 12,
                      mainAxisSpacing: 12,
                    ),
                    itemBuilder: (context, index) {
                      return ProductCard(
                        product: products[index],
                        store: store,
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }

  Widget _catChip(String label, String id, StoreState store) {
    final isSelected = store.activeCategory == id;
    return Padding(
      padding: const EdgeInsets.only(right: 6),
      child: FilterChip(
        label: Text(label),
        selected: isSelected,
        selectedColor: const Color(0xFFFF5E36),
        labelStyle: TextStyle(
          color: isSelected ? Colors.white : Colors.black87,
          fontSize: 11,
          fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
        ),
        onSelected: (_) => store.setCategory(id),
      ),
    );
  }

  Widget _brandChip(String label, String brand, StoreState store) {
    final isSelected = store.selectedBrand == brand;
    return Padding(
      padding: const EdgeInsets.only(right: 6),
      child: ChoiceChip(
        label: Text(label),
        selected: isSelected,
        selectedColor: Colors.black87,
        labelStyle: TextStyle(
          color: isSelected ? Colors.white : Colors.black87,
          fontSize: 10,
          fontWeight: FontWeight.bold,
        ),
        onSelected: (_) => store.setBrand(brand),
      ),
    );
  }
}
