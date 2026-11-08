import 'dart:async';
import 'package:flutter/material.dart';
import '../services/store_state.dart';
import '../models/order.dart';

class CheckoutScreen extends StatefulWidget {
  final StoreState store;

  const CheckoutScreen({super.key, required this.store});

  @override
  State<CheckoutScreen> createState() => _CheckoutScreenState();
}

class _CheckoutScreenState extends State<CheckoutScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nameCtrl = TextEditingController(text: 'สมชาย รักกีฬา');
  final _phoneCtrl = TextEditingController(text: '089-123-4567');
  final _addressCtrl = TextEditingController(
      text: '99/45 หมู่บ้านแอคทีฟวิลล์ ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กทม. 10110');
  String _paymentMethod = 'promptpay';
  bool _isProcessing = false;

  @override
  void dispose() {
    _nameCtrl.dispose();
    _phoneCtrl.dispose();
    _addressCtrl.dispose();
    super.dispose();
  }

  void _processCheckout() {
    if (!_formKey.currentState!.validate()) return;

    if (_paymentMethod == 'promptpay') {
      _showPromptPayDialog();
    } else {
      _finalizeOrder();
    }
  }

  void _showPromptPayDialog() {
    int remainingSeconds = 300;
    Timer? timer;

    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setDialogState) {
          timer ??= Timer.periodic(const Duration(seconds: 1), (t) {
            if (remainingSeconds > 0) {
              setDialogState(() => remainingSeconds--);
            } else {
              t.cancel();
              Navigator.of(ctx).pop();
            }
          });

          final m = (remainingSeconds ~/ 60).toString().padLeft(2, '0');
          final s = (remainingSeconds % 60).toString().padLeft(2, '0');

          return AlertDialog(
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
            title: Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: const Color(0xFF1E3A8A),
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.qr_code, color: Colors.white, size: 20),
                  SizedBox(width: 8),
                  Text(
                    'PROMPTPAY / พร้อมเพย์',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 14,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ),
            content: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'ยอดชำระ: ฿${widget.store.totalAmount.toStringAsFixed(0)}',
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w900,
                    color: Color(0xFF0F172A),
                  ),
                ),
                const SizedBox(height: 12),
                Container(
                  width: 180,
                  height: 180,
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    border: Border.all(color: Colors.grey.shade300),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: const Center(
                    child: Icon(Icons.qr_code_2, size: 150, color: Colors.black87),
                  ),
                ),
                const SizedBox(height: 10),
                Text(
                  'หมดเวลาชำระเงินใน: $m:$s นาที',
                  style: const TextStyle(
                    fontSize: 12,
                    color: Colors.red,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            actions: [
              TextButton(
                onPressed: () {
                  timer?.cancel();
                  Navigator.of(ctx).pop();
                },
                child: const Text('ยกเลิก'),
              ),
              ElevatedButton(
                onPressed: () {
                  timer?.cancel();
                  Navigator.of(ctx).pop();
                  _finalizeOrder();
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF10B981),
                  foregroundColor: Colors.white,
                ),
                child: const Text('⚡ จำลอง: สแกนจ่ายสำเร็จ'),
              ),
            ],
          );
        },
      ),
    );
  }

  void _finalizeOrder() {
    setState(() => _isProcessing = true);

    Future.delayed(const Duration(milliseconds: 600), () {
      final paymentTitle = _paymentMethod == 'promptpay'
          ? 'พร้อมเพย์ QR Code'
          : (_paymentMethod == 'card'
              ? 'บัตรเครดิต/เดบิต'
              : 'เก็บเงินปลายทาง (COD)');

      final order = widget.store.placeOrder(
        name: _nameCtrl.text.trim(),
        phone: _phoneCtrl.text.trim(),
        address: _addressCtrl.text.trim(),
        paymentMethod: paymentTitle,
      );

      setState(() => _isProcessing = false);
      _showSuccessScreen(order);
    });
  }

  void _showSuccessScreen(OrderModel order) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      isDismissible: false,
      enableDrag: false,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(32)),
      ),
      builder: (ctx) => Container(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: Colors.emerald.shade50,
                shape: BoxShape.circle,
              ),
              child: const Icon(
                Icons.check_circle,
                size: 64,
                color: Color(0xFF10B981),
              ),
            ),
            const SizedBox(height: 16),
            const Text(
              '🎉 สั่งซื้อสินค้าสำเร็จแล้ว!',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 6),
            Text(
              'ขอขอบคุณที่ไว้วางใจ ActivePulse Sports',
              style: TextStyle(fontSize: 13, color: Colors.grey.shade600),
            ),
            const SizedBox(height: 20),
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.grey.shade50,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: Colors.grey.shade200),
              ),
              child: Column(
                children: [
                  _receiptRow('หมายเลขคำสั่งซื้อ:', order.orderId, isBold: true),
                  _receiptRow(
                      'ยอดชำระทั้งหมด:', '฿${order.totalAmount.toStringAsFixed(0)}',
                      color: const Color(0xFFFF5E36), isBold: true),
                  _receiptRow('ช่องทางชำระเงิน:', order.paymentMethod),
                  _receiptRow('เลขพัสดุ (${order.carrier}):', order.trackingNumber,
                      isBold: true),
                  _receiptRow('สถานะการจัดส่ง:', order.statusText,
                      color: const Color(0xFF10B981)),
                ],
              ),
            ),
            const SizedBox(height: 24),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.of(ctx).pop(); // pop sheet
                  Navigator.of(context).pop(); // pop checkout screen
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF0F172A),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                  ),
                ),
                child: const Text('กลับสู่หน้าหลัก',
                    style: TextStyle(fontWeight: FontWeight.bold)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _receiptRow(String label, String value,
      {bool isBold = false, Color? color}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label,
              style: TextStyle(fontSize: 12, color: Colors.grey.shade600)),
          Text(
            value,
            style: TextStyle(
              fontSize: 12,
              fontWeight: isBold ? FontWeight.bold : FontWeight.normal,
              color: color ?? Colors.black,
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('ชำระเงิน & จัดส่ง',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
      ),
      body: Form(
        key: _formKey,
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                '📍 ที่อยู่สำหรับจัดส่ง',
                style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _nameCtrl,
                decoration: const InputDecoration(
                  labelText: 'ชื่อ-นามสกุล *',
                  border: OutlineInputBorder(),
                  prefixIcon: Icon(Icons.person_outline),
                ),
                validator: (v) =>
                    v == null || v.isEmpty ? 'กรุณากรอกชื่อ' : null,
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _phoneCtrl,
                keyboardType: TextInputType.phone,
                decoration: const InputDecoration(
                  labelText: 'เบอร์โทรศัพท์ติดต่อ *',
                  border: OutlineInputBorder(),
                  prefixIcon: Icon(Icons.phone_outlined),
                ),
                validator: (v) =>
                    v == null || v.isEmpty ? 'กรุณากรอกเบอร์โทร' : null,
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _addressCtrl,
                maxLines: 2,
                decoration: const InputDecoration(
                  labelText: 'ที่อยู่จัดส่งโดยละเอียด *',
                  border: OutlineInputBorder(),
                  prefixIcon: Icon(Icons.home_outlined),
                ),
                validator: (v) =>
                    v == null || v.isEmpty ? 'กรุณากรอกที่อยู่' : null,
              ),
              const Divider(height: 36),
              const Text(
                '💳 ช่องทางการชำระเงิน',
                style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              RadioListTile<String>(
                value: 'promptpay',
                groupValue: _paymentMethod,
                title: const Text('พร้อมเพย์ QR Code (PromptPay - แนะนำ)',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                subtitle: const Text('สแกนจ่ายผ่าน Mobile Banking ได้ทุกธนาคาร',
                    style: TextStyle(fontSize: 11)),
                secondary: const Icon(Icons.qr_code_scanner, color: Colors.blue),
                onChanged: (v) => setState(() => _paymentMethod = v!),
              ),
              RadioListTile<String>(
                value: 'card',
                groupValue: _paymentMethod,
                title: const Text('บัตรเครดิต / เดบิต',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                subtitle: const Text('Visa, Mastercard, JCB พร้อม 3D Secure',
                    style: TextStyle(fontSize: 11)),
                secondary: const Icon(Icons.credit_card, color: Colors.orange),
                onChanged: (v) => setState(() => _paymentMethod = v!),
              ),
              RadioListTile<String>(
                value: 'cod',
                groupValue: _paymentMethod,
                title: const Text('เก็บเงินปลายทาง (Cash on Delivery)',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                subtitle: const Text('ชำระเงินกับเจ้าหน้าที่เมื่อรับพัสดุ',
                    style: TextStyle(fontSize: 11)),
                secondary: const Icon(Icons.local_shipping_outlined),
                onChanged: (v) => setState(() => _paymentMethod = v!),
              ),
              const Divider(height: 36),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text('ยอดชำระทั้งหมด:',
                      style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold)),
                  Text(
                    '฿${widget.store.totalAmount.toStringAsFixed(0)}',
                    style: const TextStyle(
                      fontSize: 22,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFFFF5E36),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 24),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: _isProcessing ? null : _processCheckout,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFFF5E36),
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                    elevation: 3,
                  ),
                  child: _isProcessing
                      ? const CircularProgressIndicator(color: Colors.white)
                      : const Text(
                          'ยืนยันคำสั่งซื้อ & ชำระเงิน ⚡',
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                          ),
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

