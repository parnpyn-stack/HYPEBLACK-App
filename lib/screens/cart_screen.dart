import 'package:flutter/material.dart';
import '../services/store_state.dart';
import 'checkout_screen.dart';

class CartScreen extends StatefulWidget {
  final StoreState store;

  const CartScreen({super.key, required this.store});

  @override
  State<CartScreen> createState() => _CartScreenState();
}

class _CartScreenState extends State<CartScreen> {
  final TextEditingController _couponCtrl = TextEditingController();

  void _applyCoupon(String code) {
    final success = widget.store.applyCoupon(code);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(success
            ? 'ใช้โค้ดส่วนลด "$code" สำเร็จแล้ว! 🎉'
            : 'โค้ดส่วนลดไม่ถูกต้อง หรือหมดอายุแล้ว ❌'),
        backgroundColor:
            success ? const Color(0xFF10B981) : const Color(0xFFEF4444),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  @override
  void dispose() {
    _couponCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final store = widget.store;
    final cart = store.cart;

    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      appBar: AppBar(
        title: const Text(
          'ตะกร้าสินค้าของคุณ',
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
        ),
        actions: [
          if (cart.isNotEmpty)
            IconButton(
              onPressed: () {
                showDialog(
                  context: context,
                  builder: (ctx) => AlertDialog(
                    title: const Text('ล้างตะกร้าสินค้า?'),
                    content: const Text(
                        'คุณต้องการลบสินค้าทั้งหมดออกจากตะกร้าหรือไม่?'),
                    actions: [
                      TextButton(
                        onPressed: () => Navigator.of(ctx).pop(),
                        child: const Text('ยกเลิก'),
                      ),
                      TextButton(
                        onPressed: () {
                          store.clearCart();
                          Navigator.of(ctx).pop();
                        },
                        child: const Text('ลบทั้งหมด',
                            style: TextStyle(color: Colors.red)),
                      ),
                    ],
                  ),
                );
              },
              icon: const Icon(Icons.delete_sweep_outlined),
              tooltip: 'ล้างตะกร้า',
            ),
        ],
      ),
      body: cart.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(
                      color: Colors.orange.shade50,
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.shopping_cart_outlined,
                      size: 64,
                      color: Color(0xFFFF5E36),
                    ),
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    'ตะกร้าสินค้าของคุณว่างอยู่',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    'เลือกช้อปรองเท้าและเสื้อผ้ากีฬาคุณภาพดีได้เลย',
                    style: TextStyle(fontSize: 13, color: Colors.grey.shade500),
                  ),
                ],
              ),
            )
          : Column(
              children: [
                // Free Shipping Progress Indicator
                Container(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                  color: Colors.orange.shade50,
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            store.amountNeededForFreeShipping == 0
                                ? '🎉 ยินดีด้วย! คุณได้รับสิทธิ์จัดส่งฟรีแล้ว'
                                : 'ช้อปอีก ฿${store.amountNeededForFreeShipping.toStringAsFixed(0)} เพื่อรับสิทธิ์ส่งฟรี!',
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                              color: store.amountNeededForFreeShipping == 0
                                  ? const Color(0xFF10B981)
                                  : const Color(0xFFFF5E36),
                            ),
                          ),
                          Text(
                            '฿${store.subtotal.toStringAsFixed(0)} / ฿${store.freeShippingThreshold.toStringAsFixed(0)}',
                            style: TextStyle(
                              fontSize: 11,
                              color: Colors.grey.shade600,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 6),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(4),
                        child: LinearProgressIndicator(
                          value: store.freeShippingProgress,
                          backgroundColor: Colors.orange.shade100,
                          valueColor: const AlwaysStoppedAnimation<Color>(
                              Color(0xFFFF5E36)),
                          minHeight: 6,
                        ),
                      ),
                    ],
                  ),
                ),

                // Cart Items List
                Expanded(
                  child: ListView.separated(
                    padding: const EdgeInsets.all(16),
                    itemCount: cart.length,
                    separatorBuilder: (_, __) => const SizedBox(height: 12),
                    itemBuilder: (context, index) {
                      final item = cart[index];
                      return Dismissible(
                        key: ValueKey(item.id),
                        direction: DismissDirection.endToStart,
                        background: Container(
                          alignment: Alignment.centerRight,
                          padding: const EdgeInsets.only(right: 20),
                          decoration: BoxDecoration(
                            color: Colors.red.shade400,
                            borderRadius: BorderRadius.circular(16),
                          ),
                          child:
                              const Icon(Icons.delete, color: Colors.white),
                        ),
                        onDismissed: (_) {
                          store.removeFromCart(item.id);
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                              content: Text('นำสินค้าออกจากตะกร้าแล้ว'),
                              behavior: SnackBarBehavior.floating,
                            ),
                          );
                        },
                        child: Container(
                          padding: const EdgeInsets.all(12),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(color: Colors.grey.shade200),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withOpacity(0.02),
                                blurRadius: 6,
                              )
                            ],
                          ),
                          child: Row(
                            children: [
                              ClipRRect(
                                borderRadius: BorderRadius.circular(12),
                                child: Image.network(
                                  item.product.image,
                                  width: 72,
                                  height: 72,
                                  fit: BoxFit.cover,
                                  errorBuilder: (_, __, ___) => Container(
                                    width: 72,
                                    height: 72,
                                    color: Colors.grey.shade200,
                                    child: const Icon(Icons.sports),
                                  ),
                                ),
                              ),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      item.product.name,
                                      maxLines: 1,
                                      overflow: TextOverflow.ellipsis,
                                      style: const TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 13,
                                      ),
                                    ),
                                    const SizedBox(height: 3),
                                    Row(
                                      children: [
                                        CircleAvatar(
                                          radius: 5,
                                          backgroundColor:
                                              item.selectedColor.color,
                                        ),
                                        const SizedBox(width: 4),
                                        Text(
                                          item.selectedColor.label,
                                          style: TextStyle(
                                            fontSize: 11,
                                            color: Colors.grey.shade600,
                                          ),
                                        ),
                                        const SizedBox(width: 8),
                                        Text(
                                          '• ไซส์: ${item.selectedSize}',
                                          style: TextStyle(
                                            fontSize: 11,
                                            color: Colors.grey.shade600,
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                      ],
                                    ),
                                    const SizedBox(height: 8),
                                    Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceBetween,
                                      children: [
                                        Text(
                                          '฿${item.totalPrice.toStringAsFixed(0)}',
                                          style: const TextStyle(
                                            fontWeight: FontWeight.w900,
                                            fontSize: 15,
                                            color: Color(0xFFFF5E36),
                                          ),
                                        ),
                                        Container(
                                          decoration: BoxDecoration(
                                            color: Colors.grey.shade100,
                                            borderRadius:
                                                BorderRadius.circular(8),
                                          ),
                                          child: Row(
                                            children: [
                                              InkWell(
                                                onTap: () => store.updateQuantity(
                                                    item.id, -1),
                                                child: const Padding(
                                                  padding: EdgeInsets.symmetric(
                                                      horizontal: 8, vertical: 4),
                                                  child: Icon(Icons.remove,
                                                      size: 14),
                                                ),
                                              ),
                                              Text(
                                                '${item.quantity}',
                                                style: const TextStyle(
                                                  fontWeight: FontWeight.bold,
                                                  fontSize: 12,
                                                ),
                                              ),
                                              InkWell(
                                                onTap: () => store.updateQuantity(
                                                    item.id, 1),
                                                child: const Padding(
                                                  padding: EdgeInsets.symmetric(
                                                      horizontal: 8, vertical: 4),
                                                  child:
                                                      Icon(Icons.add, size: 14),
                                                ),
                                              ),
                                            ],
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                ),

                // Coupon & Summary Section
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius:
                        const BorderRadius.vertical(top: Radius.circular(24)),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.06),
                        blurRadius: 10,
                        offset: const Offset(0, -4),
                      ),
                    ],
                  ),
                  child: SafeArea(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Coupon Field
                        Row(
                          children: [
                            Expanded(
                              child: TextField(
                                controller: _couponCtrl,
                                textCapitalization:
                                    TextCapitalization.characters,
                                decoration: InputDecoration(
                                  hintText: 'กรอกโค้ด เช่น SPORT20',
                                  isDense: true,
                                  contentPadding: const EdgeInsets.symmetric(
                                      horizontal: 12, vertical: 10),
                                  filled: true,
                                  fillColor: Colors.grey.shade100,
                                  border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(12),
                                    borderSide: BorderSide.none,
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(width: 8),
                            ElevatedButton(
                              onPressed: () {
                                if (_couponCtrl.text.isNotEmpty) {
                                  _applyCoupon(_couponCtrl.text);
                                }
                              },
                              style: ElevatedButton.styleFrom(
                                backgroundColor: const Color(0xFF0F172A),
                                foregroundColor: Colors.white,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(12),
                                ),
                              ),
                              child: const Text('ใช้โค้ด'),
                            ),
                          ],
                        ),

                        // Preset coupon chips
                        const SizedBox(height: 8),
                        Wrap(
                          spacing: 6,
                          children: [
                            ActionChip(
                              label: const Text('🎟️ SPORT20 (ลด 20%)',
                                  style: TextStyle(fontSize: 10)),
                              onPressed: () {
                                _couponCtrl.text = 'SPORT20';
                                _applyCoupon('SPORT20');
                              },
                            ),
                            ActionChip(
                              label: const Text('🚚 FREESHIP (ส่งฟรี)',
                                  style: TextStyle(fontSize: 10)),
                              onPressed: () {
                                _couponCtrl.text = 'FREESHIP';
                                _applyCoupon('FREESHIP');
                              },
                            ),
                          ],
                        ),

                        const SizedBox(height: 12),

                        // Calculations
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text('ราคารวมสินค้า',
                                style: TextStyle(
                                    fontSize: 12, color: Colors.grey.shade600)),
                            Text('฿${store.subtotal.toStringAsFixed(0)}',
                                style: const TextStyle(
                                    fontSize: 13, fontWeight: FontWeight.bold)),
                          ],
                        ),
                        if (store.discountAmount > 0) ...[
                          const SizedBox(height: 4),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Text('ส่วนลดโปรโมชั่น',
                                  style: TextStyle(
                                      fontSize: 12, color: Colors.pink)),
                              Text(
                                  '-฿${store.discountAmount.toStringAsFixed(0)}',
                                  style: const TextStyle(
                                      fontSize: 13,
                                      fontWeight: FontWeight.bold,
                                      color: Colors.pink)),
                            ],
                          ),
                        ],
                        const SizedBox(height: 4),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text('ค่าจัดส่ง',
                                style: TextStyle(
                                    fontSize: 12, color: Colors.grey.shade600)),
                            Text(
                              store.shippingFee == 0
                                  ? 'ฟรี'
                                  : '฿${store.shippingFee.toStringAsFixed(0)}',
                              style: TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.bold,
                                color: store.shippingFee == 0
                                    ? const Color(0xFF10B981)
                                    : Colors.black,
                              ),
                            ),
                          ],
                        ),
                        const Divider(height: 16),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            const Text(
                              'ยอดชำระสุทธิ',
                              style: TextStyle(
                                  fontSize: 16, fontWeight: FontWeight.bold),
                            ),
                            Text(
                              '฿${store.totalAmount.toStringAsFixed(0)}',
                              style: const TextStyle(
                                fontSize: 20,
                                fontWeight: FontWeight.w900,
                                color: Color(0xFFFF5E36),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 12),
                        SizedBox(
                          width: double.infinity,
                          child: ElevatedButton(
                            onPressed: () {
                              Navigator.of(context).push(
                                MaterialPageRoute(
                                  builder: (_) => CheckoutScreen(store: store),
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
                              elevation: 2,
                            ),
                            child: const Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Text('ดำเนินการชำระเงิน',
                                    style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 15)),
                                SizedBox(width: 8),
                                Icon(Icons.arrow_forward, size: 18),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
    );
  }
}
