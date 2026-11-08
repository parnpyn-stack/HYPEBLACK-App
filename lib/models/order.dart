import 'cart_item.dart';

class OrderModel {
  final String orderId;
  final DateTime createdAt;
  final List<CartItem> items;
  final double subtotal;
  final double discount;
  final double shippingFee;
  final double totalAmount;
  final String customerName;
  final String customerPhone;
  final String shippingAddress;
  final String paymentMethod;
  final String trackingNumber;
  final String carrier;
  final int currentStep; // 1: Confirmed, 2: Packing, 3: In Transit, 4: Delivered

  OrderModel({
    required this.orderId,
    required this.createdAt,
    required this.items,
    required this.subtotal,
    required this.discount,
    required this.shippingFee,
    required this.totalAmount,
    required this.customerName,
    required this.customerPhone,
    required this.shippingAddress,
    required this.paymentMethod,
    required this.trackingNumber,
    required this.carrier,
    this.currentStep = 3,
  });

  String get statusText {
    switch (currentStep) {
      case 1:
        return 'ยืนยันคำสั่งซื้อแล้ว';
      case 2:
        return 'กำลังเตรียมสินค้า';
      case 3:
        return 'พัสดุกำลังอยู่ระหว่างจัดส่ง';
      case 4:
        return 'จัดส่งสำเร็จแล้ว';
      default:
        return 'กำลังดำเนินการ';
    }
  }
}
