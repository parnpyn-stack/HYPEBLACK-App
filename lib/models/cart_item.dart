import 'package:flutter/material.dart';
import 'product.dart';

class CartItem {
  final String id;
  final Product product;
  final ProductColor selectedColor;
  final String selectedSize;
  int quantity;

  CartItem({
    required this.id,
    required this.product,
    required this.selectedColor,
    required this.selectedSize,
    this.quantity = 1,
  });

  double get totalPrice => product.price * quantity;
}

