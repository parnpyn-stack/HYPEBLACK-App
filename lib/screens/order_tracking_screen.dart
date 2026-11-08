import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../services/store_state.dart';

class OrderTrackingScreen extends StatefulWidget {
  final StoreState store;

  const OrderTrackingScreen({super.key, required this.store});

  @override
  State<OrderTrackingScreen> createState() => _OrderTrackingScreenState();
}

class _OrderTrackingScreenState extends State<OrderTrackingScreen> {
  final TextEditingController _searchCtrl = TextEditingController();
  String _query = '';

  @override
  void dispose() {
    _searchCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final store = widget.store;
    final orders = _query.isEmpty
        ? store.orders
        : store.orders.where((o) =>
            o.orderId.toLowerCase().contains(_query.toLowerCase()) ||
            o.trackingNumber.toLowerCase().contains(_query.toLowerCase())).toList();

    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      appBar: AppBar(
        title: const Text('ติดตามพัสดุ & ประวัติคำสั่งซื้อ',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: TextField(
              controller: _searchCtrl,
              onChanged: (val) => setState(() => _query = val.trim()),
              decoration: InputDecoration(
                hintText: 'ค้นหาด้วยรหัสคำสั่งซื้อ เช่น AP-892144...',
                prefixIcon: const Icon(Icons.search, size: 20),
                suffixIcon: _searchCtrl.text.isNotEmpty
                    ? IconButton(
                        icon: const Icon(Icons.clear, size: 18),
                        onPressed: () {
                          _searchCtrl.clear();
                          setState(() => _query = '');
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
          Expanded(
            child: orders.isEmpty
                ? Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Icon(Icons.local_shipping_outlined,
                            size: 64, color: Colors.grey),
                        const SizedBox(height: 12),
                        const Text(
                          'ไม่พบรายการสั่งซื้อ',
                          style: TextStyle(
                              fontSize: 16, fontWeight: FontWeight.bold),
                        ),
                        const SizedBox(height: 6),
                        Text(
                          'ลองตรวจสอบหมายเลขคำสั่งซื้ออีกครั้ง',
                          style: TextStyle(
                              fontSize: 12, color: Colors.grey.shade500),
                        ),
                      ],
                    ),
                  )
                : ListView.separated(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    itemCount: orders.length,
                    separatorBuilder: (_, __) => const SizedBox(height: 16),
                    itemBuilder: (context, index) {
                      final order = orders[index];
                      return Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: Colors.grey.shade200),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.black.withOpacity(0.03),
                              blurRadius: 8,
                            ),
                          ],
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  'คำสั่งซื้อ: ${order.orderId}',
                                  style: const TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontSize: 14,
                                    color: Color(0xFF0F172A),
                                  ),
                                ),
                                Text(
                                  '฿${order.totalAmount.toStringAsFixed(0)}',
                                  style: const TextStyle(
                                    fontWeight: FontWeight.w900,
                                    fontSize: 15,
                                    color: Color(0xFFFF5E36),
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 4),
                            Text(
                              'วันที่: ${order.createdAt.day}/${order.createdAt.month}/${order.createdAt.year} • ${order.paymentMethod}',
                              style: TextStyle(
                                fontSize: 11,
                                color: Colors.grey.shade500,
                              ),
                            ),
                            const Divider(height: 20),

                            // Carrier & Tracking Code
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Row(
                                  children: [
                                    const Icon(Icons.local_shipping,
                                        size: 16, color: Color(0xFFFF5E36)),
                                    const SizedBox(width: 6),
                                    Text(
                                      order.carrier,
                                      style: const TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 12,
                                      ),
                                    ),
                                  ],
                                ),
                                GestureDetector(
                                  onTap: () {
                                    Clipboard.setData(ClipboardData(
                                        text: order.trackingNumber));
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      SnackBar(
                                        content: Text(
                                            'คัดลอกเลขพัสดุ ${order.trackingNumber} แล้ว 📋'),
                                        behavior: SnackBarBehavior.floating,
                                      ),
                                    );
                                  },
                                  child: Container(
                                    padding: const EdgeInsets.symmetric(
                                        horizontal: 8, vertical: 4),
                                    decoration: BoxDecoration(
                                      color: Colors.orange.shade50,
                                      borderRadius: BorderRadius.circular(8),
                                    ),
                                    child: Row(
                                      children: [
                                        Text(
                                          order.trackingNumber,
                                          style: const TextStyle(
                                            fontSize: 11,
                                            fontWeight: FontWeight.bold,
                                            color: Color(0xFFFF5E36),
                                          ),
                                        ),
                                        const SizedBox(width: 4),
                                        const Icon(Icons.copy,
                                            size: 12, color: Color(0xFFFF5E36)),
                                      ],
                                    ),
                                  ),
                                ),
                              ],
                            ),

                            const SizedBox(height: 16),

                            // Progress Stepper
                            Row(
                              children: [
                                _stepDot(1, order.currentStep, 'ยืนยันคำสั่ง'),
                                _stepLine(1, order.currentStep),
                                _stepDot(2, order.currentStep, 'แพ็คสินค้า'),
                                _stepLine(2, order.currentStep),
                                _stepDot(3, order.currentStep, 'กำลังส่ง'),
                                _stepLine(3, order.currentStep),
                                _stepDot(4, order.currentStep, 'สำเร็จ'),
                              ],
                            ),

                            const SizedBox(height: 16),

                            // Order Items Preview
                            ...order.items.map(
                              (item) => Padding(
                                padding: const EdgeInsets.only(bottom: 6),
                                child: Row(
                                  children: [
                                    ClipRRect(
                                      borderRadius: BorderRadius.circular(6),
                                      child: Image.network(
                                        item.product.image,
                                        width: 28,
                                        height: 28,
                                        fit: BoxFit.cover,
                                        errorBuilder: (_, __, ___) =>
                                            Container(width: 28, height: 28, color: Colors.grey.shade200),
                                      ),
                                    ),
                                    const SizedBox(width: 8),
                                    Expanded(
                                      child: Text(
                                        '${item.product.name} (ไซส์ ${item.selectedSize}) x${item.quantity}',
                                        maxLines: 1,
                                        overflow: TextOverflow.ellipsis,
                                        style: TextStyle(
                                          fontSize: 11,
                                          color: Colors.grey.shade700,
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
                    },
                  ),
          ),
        ],
      ),
    );
  }

  Widget _stepDot(int step, int currentStep, String label) {
    final isDone = currentStep >= step;
    return Expanded(
      child: Column(
        children: [
          CircleAvatar(
            radius: 10,
            backgroundColor: isDone ? const Color(0xFF10B981) : Colors.grey.shade300,
            child: Icon(
              isDone ? Icons.check : Icons.circle,
              size: 10,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            label,
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 9,
              fontWeight: isDone ? FontWeight.bold : FontWeight.normal,
              color: isDone ? Colors.black87 : Colors.grey,
            ),
          ),
        ],
      ),
    );
  }

  Widget _stepLine(int step, int currentStep) {
    final isDone = currentStep > step;
    return Container(
      width: 20,
      height: 2,
      margin: const EdgeInsets.only(bottom: 14),
      color: isDone ? const Color(0xFF10B981) : Colors.grey.shade300,
    );
  }
}

