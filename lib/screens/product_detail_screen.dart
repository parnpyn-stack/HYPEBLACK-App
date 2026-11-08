import 'package:flutter/material.dart';
import '../models/product.dart';
import '../services/store_state.dart';
import '../widgets/size_guide_dialog.dart';
import 'checkout_screen.dart';

class ProductDetailScreen extends StatefulWidget {
  final Product product;
  final StoreState store;

  const ProductDetailScreen({
    super.key,
    required this.product,
    required this.store,
  });

  @override
  State<ProductDetailScreen> createState() => _ProductDetailScreenState();
}

class _ProductDetailScreenState extends State<ProductDetailScreen> {
  int _selectedColorIndex = 0;
  late String _selectedSize;
  int _quantity = 1;
  int _currentImageIndex = 0;
  final PageController _pageController = PageController();

  @override
  void initState() {
    super.initState();
    _selectedSize = widget.product.sizes.isNotEmpty ? widget.product.sizes[0] : '';
  }

  void _showAddReviewDialog() {
    final nameCtrl = TextEditingController();
    final commentCtrl = TextEditingController();
    double rating = 5.0;

    showDialog(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setDialogState) => AlertDialog(
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
          title: const Text('✍️ เขียนรีวิวสินค้า'),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                TextField(
                  controller: nameCtrl,
                  decoration: const InputDecoration(
                    labelText: 'ชื่อของคุณ',
                    isDense: true,
                  ),
                ),
                const SizedBox(height: 12),
                const Text('คะแนนความพึงพอใจ:'),
                Row(
                  children: List.generate(
                    5,
                    (i) => IconButton(
                      onPressed: () => setDialogState(() => rating = i + 1.0),
                      icon: Icon(
                        i < rating ? Icons.star : Icons.star_border,
                        color: Colors.amber,
                      ),
                      splashRadius: 18,
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                TextField(
                  controller: commentCtrl,
                  maxLines: 3,
                  decoration: const InputDecoration(
                    labelText: 'ความคิดเห็นเกี่ยวกับสินค้า',
                    border: OutlineInputBorder(),
                  ),
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(ctx).pop(),
              child: const Text('ยกเลิก'),
            ),
            ElevatedButton(
              onPressed: () {
                if (nameCtrl.text.isNotEmpty && commentCtrl.text.isNotEmpty) {
                  widget.store.addReview(
                    widget.product.id,
                    ProductReview(
                      author: nameCtrl.text.trim(),
                      rating: rating,
                      comment: commentCtrl.text.trim(),
                      date: 'เมื่อสักครู่',
                    ),
                  );
                  Navigator.of(ctx).pop();
                  setState(() {});
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('ขอบคุณสำหรับรีวิวของคุณ! ⭐'),
                      behavior: SnackBarBehavior.floating,
                    ),
                  );
                }
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFFFF5E36),
                foregroundColor: Colors.white,
              ),
              child: const Text('ส่งรีวิว'),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final product = widget.product;
    final isFav = widget.store.isWishlisted(product.id);

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        foregroundColor: Colors.black,
        title: Text(
          product.brand.toUpperCase(),
          style: const TextStyle(
            fontSize: 14,
            fontWeight: FontWeight.bold,
            letterSpacing: 1.2,
            color: Color(0xFFFF5E36),
          ),
        ),
        actions: [
          IconButton(
            onPressed: () {
              widget.store.toggleWishlist(product.id);
              setState(() {});
            },
            icon: Icon(
              isFav ? Icons.favorite : Icons.favorite_border,
              color: isFav ? Colors.red : Colors.black,
            ),
          ),
          IconButton(
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('คัดลอกลิงก์สินค้าเรียบร้อยแล้ว 🔗'),
                  behavior: SnackBarBehavior.floating,
                ),
              );
            },
            icon: const Icon(Icons.share_outlined),
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Image Carousel with indicators
            SizedBox(
              height: 320,
              child: Stack(
                alignment: Alignment.bottomCenter,
                children: [
                  PageView.builder(
                    controller: _pageController,
                    itemCount: product.gallery.isNotEmpty
                        ? product.gallery.length
                        : 1,
                    onPageChanged: (i) => setState(() => _currentImageIndex = i),
                    itemBuilder: (context, index) {
                      final imgUrl = product.gallery.isNotEmpty
                          ? product.gallery[index]
                          : product.image;
                      return Image.network(
                        imgUrl,
                        fit: BoxFit.cover,
                        errorBuilder: (_, __, ___) => Container(
                          color: Colors.grey.shade100,
                          child: const Icon(Icons.sports, size: 80, color: Colors.grey),
                        ),
                      );
                    },
                  ),
                  // Dots
                  if (product.gallery.length > 1)
                    Positioned(
                      bottom: 12,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: List.generate(
                          product.gallery.length,
                          (idx) => Container(
                            width: idx == _currentImageIndex ? 20 : 6,
                            height: 6,
                            margin: const EdgeInsets.symmetric(horizontal: 3),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(3),
                              color: idx == _currentImageIndex
                                  ? const Color(0xFFFF5E36)
                                  : Colors.white.withOpacity(0.6),
                            ),
                          ),
                        ),
                      ),
                    ),
                  // Discount Badge
                  Positioned(
                    top: 12,
                    left: 12,
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 10, vertical: 5),
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(
                          colors: [Color(0xFFEF4444), Color(0xFFFF007A)],
                        ),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        '🔥 ลด ${product.discountPercent}%',
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 12,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),

            Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Title & Price
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              product.name,
                              style: const TextStyle(
                                fontSize: 20,
                                fontWeight: FontWeight.bold,
                                color: Color(0xFF0F172A),
                              ),
                            ),
                            const SizedBox(height: 4),
                            Text(
                              product.nameEn,
                              style: TextStyle(
                                fontSize: 13,
                                color: Colors.grey.shade500,
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(width: 12),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          Text(
                            '฿${product.price.toStringAsFixed(0)}',
                            style: const TextStyle(
                              fontSize: 22,
                              fontWeight: FontWeight.w900,
                              color: Color(0xFFFF5E36),
                            ),
                          ),
                          Text(
                            '฿${product.originalPrice.toStringAsFixed(0)}',
                            style: TextStyle(
                              fontSize: 13,
                              color: Colors.grey.shade400,
                              decoration: TextDecoration.lineThrough,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),

                  // Rating & Reviews row
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: Colors.amber.shade50,
                          borderRadius: BorderRadius.circular(8),
                          border: Border.all(color: Colors.amber.shade300),
                        ),
                        child: Row(
                          children: [
                            const Icon(Icons.star,
                                size: 14, color: Colors.amber),
                            const SizedBox(width: 4),
                            Text(
                              product.rating.toString(),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 12,
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(width: 8),
                      Text(
                        '(${product.reviewsCount} รีวิว)',
                        style: TextStyle(
                          fontSize: 12,
                          color: Colors.grey.shade500,
                        ),
                      ),
                      const Spacer(),
                      Text(
                        'ขายแล้ว ${product.soldCount} ชิ้น',
                        style: TextStyle(
                          fontSize: 12,
                          color: Colors.grey.shade600,
                        ),
                      ),
                    ],
                  ),

                  const Divider(height: 32),

                  // Color Selector
                  Text(
                    'เลือกสี: ${product.colors[_selectedColorIndex].label}',
                    style: const TextStyle(
                      fontSize: 13,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Row(
                    children: List.generate(
                      product.colors.length,
                      (i) => GestureDetector(
                        onTap: () => setState(() => _selectedColorIndex = i),
                        child: Container(
                          margin: const EdgeInsets.only(right: 12),
                          padding: const EdgeInsets.all(3),
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            border: Border.all(
                              color: _selectedColorIndex == i
                                  ? const Color(0xFFFF5E36)
                                  : Colors.transparent,
                              width: 2,
                            ),
                          ),
                          child: CircleAvatar(
                            radius: 14,
                            backgroundColor: product.colors[i].color,
                          ),
                        ),
                      ),
                    ),
                  ),

                  const SizedBox(height: 20),

                  // Size Selector
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        'เลือกขนาดไซส์:',
                        style: TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      TextButton.icon(
                        onPressed: () {
                          showDialog(
                            context: context,
                            builder: (_) => const SizeGuideDialog(),
                          );
                        },
                        icon: const Icon(Icons.straighten, size: 14),
                        label: const Text('ตารางไซส์'),
                        style: TextButton.styleFrom(
                          foregroundColor: const Color(0xFFFF5E36),
                          textStyle: const TextStyle(fontSize: 12),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: product.sizes.map((s) {
                      final isSelected = _selectedSize == s;
                      return ChoiceChip(
                        label: Text(s),
                        selected: isSelected,
                        selectedColor: const Color(0xFFFF5E36),
                        labelStyle: TextStyle(
                          color: isSelected ? Colors.white : Colors.black,
                          fontWeight: FontWeight.bold,
                          fontSize: 12,
                        ),
                        onSelected: (val) {
                          if (val) setState(() => _selectedSize = s);
                        },
                      );
                    }).toList(),
                  ),

                  const SizedBox(height: 20),

                  // Quantity Selector
                  Row(
                    children: [
                      const Text(
                        'จำนวน:',
                        style: TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(width: 16),
                      Container(
                        decoration: BoxDecoration(
                          border: Border.all(color: Colors.grey.shade300),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: Row(
                          children: [
                            IconButton(
                              onPressed: _quantity > 1
                                  ? () => setState(() => _quantity--)
                                  : null,
                              icon: const Icon(Icons.remove, size: 16),
                              splashRadius: 16,
                            ),
                            Text(
                              '$_quantity',
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 14,
                              ),
                            ),
                            IconButton(
                              onPressed: _quantity < product.stock
                                  ? () => setState(() => _quantity++)
                                  : null,
                              icon: const Icon(Icons.add, size: 16),
                              splashRadius: 16,
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(width: 12),
                      Text(
                        'คงเหลือ ${product.stock} ชิ้น',
                        style: TextStyle(
                          fontSize: 11,
                          color: Colors.grey.shade500,
                        ),
                      ),
                    ],
                  ),

                  const Divider(height: 36),

                  // Description
                  const Text(
                    'รายละเอียดสินค้า',
                    style: TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    product.description,
                    style: TextStyle(
                      fontSize: 13,
                      height: 1.5,
                      color: Colors.grey.shade700,
                    ),
                  ),

                  const SizedBox(height: 16),

                  // Features
                  Container(
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(
                      color: Colors.grey.shade50,
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: Colors.grey.shade200),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'จุดเด่นและเทคโนโลยี:',
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 13,
                          ),
                        ),
                        const SizedBox(height: 8),
                        ...product.features.map(
                          (f) => Padding(
                            padding: const EdgeInsets.only(bottom: 4),
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Text('⚡ ', style: TextStyle(fontSize: 12)),
                                Expanded(
                                  child: Text(
                                    f,
                                    style: const TextStyle(fontSize: 12),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),

                  const SizedBox(height: 24),

                  // Customer Reviews Section
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        'รีวิวจากผู้ใช้จริง',
                        style: TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      TextButton.icon(
                        onPressed: _showAddReviewDialog,
                        icon: const Icon(Icons.rate_review, size: 14),
                        label: const Text('เขียนรีวิว'),
                        style: TextButton.styleFrom(
                          foregroundColor: const Color(0xFFFF5E36),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  if (product.reviews.isEmpty)
                    const Text('ยังไม่มีรีวิว เป็นคนแรกที่รีวิวสินค้านี้!')
                  else
                    ...product.reviews.map(
                      (r) => Container(
                        margin: const EdgeInsets.only(bottom: 8),
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: Colors.grey.shade50,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: Colors.grey.shade200),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  r.author,
                                  style: const TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontSize: 12,
                                  ),
                                ),
                                Text(
                                  r.date,
                                  style: TextStyle(
                                    fontSize: 10,
                                    color: Colors.grey.shade500,
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 4),
                            Row(
                              children: List.generate(
                                5,
                                (i) => Icon(
                                  i < r.rating ? Icons.star : Icons.star_border,
                                  size: 12,
                                  color: Colors.amber,
                                ),
                              ),
                            ),
                            const SizedBox(height: 6),
                            Text(
                              r.comment,
                              style: const TextStyle(fontSize: 12),
                            ),
                          ],
                        ),
                      ),
                    ),

                  const SizedBox(height: 80),
                ],
              ),
            ),
          ],
        ),
      ),
      // Bottom Sticky Actions
      bottomNavigationBar: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.08),
              blurRadius: 10,
              offset: const Offset(0, -4),
            ),
          ],
        ),
        child: SafeArea(
          child: Row(
            children: [
              Expanded(
                child: OutlinedButton(
                  onPressed: () {
                    widget.store.addToCart(
                      product,
                      product.colors[_selectedColorIndex],
                      _selectedSize,
                      _quantity,
                    );
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: Text(
                            'เพิ่ม "$_quantity x ${product.name}" ลงในตะกร้าแล้ว!'),
                        backgroundColor: const Color(0xFF0F172A),
                        behavior: SnackBarBehavior.floating,
                      ),
                    );
                  },
                  style: OutlinedButton.styleFrom(
                    side: const BorderSide(color: Color(0xFFFF5E36), width: 1.5),
                    foregroundColor: const Color(0xFFFF5E36),
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                  ),
                  child: const Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.add_shopping_cart, size: 18),
                      SizedBox(width: 6),
                      Text(
                        'ใส่ตะกร้า',
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: ElevatedButton(
                  onPressed: () {
                    widget.store.addToCart(
                      product,
                      product.colors[_selectedColorIndex],
                      _selectedSize,
                      _quantity,
                    );
                    Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (_) => CheckoutScreen(store: widget.store),
                      ),
                    );
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFFF5E36),
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                    elevation: 3,
                  ),
                  child: const Text(
                    '⚡ สั่งซื้อทันที',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
