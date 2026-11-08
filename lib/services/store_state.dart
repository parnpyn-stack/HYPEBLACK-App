import 'dart:math';
import 'package:flutter/material.dart';
import '../models/product.dart';
import '../models/cart_item.dart';
import '../models/order.dart';

class StoreState extends ChangeNotifier {
  // Products Catalog
  List<Product> _products = List.from(sampleProducts);
  List<Product> get products => _products;

  // Shopping Cart
  final List<CartItem> _cart = [];
  List<CartItem> get cart => List.unmodifiable(_cart);

  int get cartCount => _cart.fold(0, (sum, item) => sum + item.quantity);

  // Wishlist
  final Set<String> _wishlist = {'prod-01', 'prod-05'};
  Set<String> get wishlist => _wishlist;

  bool isWishlisted(String productId) => _wishlist.contains(productId);

  void toggleWishlist(String productId) {
    if (_wishlist.contains(productId)) {
      _wishlist.remove(productId);
    } else {
      _wishlist.add(productId);
    }
    notifyListeners();
  }

  // Filter & Search State
  String _activeCategory = 'all';
  String get activeCategory => _activeCategory;

  String _selectedBrand = 'all';
  String get selectedBrand => _selectedBrand;

  String _searchQuery = '';
  String get searchQuery => _searchQuery;

  double _maxPrice = 10000;
  double get maxPrice => _maxPrice;

  String _sortBy = 'popular';
  String get sortBy => _sortBy;

  void setCategory(String category) {
    _activeCategory = category;
    notifyListeners();
  }

  void setBrand(String brand) {
    _selectedBrand = brand;
    notifyListeners();
  }

  void setSearchQuery(String query) {
    _searchQuery = query;
    notifyListeners();
  }

  void setMaxPrice(double price) {
    _maxPrice = price;
    notifyListeners();
  }

  void setSortBy(String sort) {
    _sortBy = sort;
    notifyListeners();
  }

  void resetFilters() {
    _activeCategory = 'all';
    _selectedBrand = 'all';
    _searchQuery = '';
    _maxPrice = 10000;
    _sortBy = 'popular';
    notifyListeners();
  }

  List<Product> get filteredProducts {
    final query = _searchQuery.trim().toLowerCase();

    var list = _products.where((p) {
      final matchesCat =
          _activeCategory == 'all' || p.category == _activeCategory;
      final matchesBrand =
          _selectedBrand == 'all' || p.brand.toLowerCase() == _selectedBrand.toLowerCase();
      final matchesPrice = p.price <= _maxPrice;
      final matchesSearch = query.isEmpty ||
          p.name.toLowerCase().contains(query) ||
          p.nameEn.toLowerCase().contains(query) ||
          p.brand.toLowerCase().contains(query) ||
          p.categoryName.toLowerCase().contains(query);

      return matchesCat && matchesBrand && matchesPrice && matchesSearch;
    }).toList();

    switch (_sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price.compareTo(b.price));
        break;
      case 'price-desc':
        list.sort((a, b) => b.price.compareTo(a.price));
        break;
      case 'discount-desc':
        list.sort((a, b) => b.discountPercent.compareTo(a.discountPercent));
        break;
      case 'rating-desc':
        list.sort((a, b) => b.rating.compareTo(a.rating));
        break;
      case 'newest':
        list.sort((a, b) => (b.isNew ? 1 : 0).compareTo(a.isNew ? 1 : 0));
        break;
      case 'popular':
      default:
        list.sort((a, b) => b.soldCount.compareTo(a.soldCount));
        break;
    }

    return list;
  }

  // Cart Operations
  void addToCart(Product product, ProductColor color, String size, int qty) {
    final itemId = '${product.id}-${color.name}-$size';
    final index = _cart.indexWhere((item) => item.id == itemId);

    if (index >= 0) {
      _cart[index].quantity += qty;
    } else {
      _cart.add(CartItem(
        id: itemId,
        product: product,
        selectedColor: color,
        selectedSize: size,
        quantity: qty,
      ));
    }
    notifyListeners();
  }

  void updateQuantity(String cartItemId, int delta) {
    final index = _cart.indexWhere((item) => item.id == cartItemId);
    if (index >= 0) {
      final newQty = _cart[index].quantity + delta;
      if (newQty <= 0) {
        _cart.removeAt(index);
      } else {
        _cart[index].quantity = newQty;
      }
      notifyListeners();
    }
  }

  void removeFromCart(String cartItemId) {
    _cart.removeWhere((item) => item.id == cartItemId);
    notifyListeners();
  }

  void clearCart() {
    _cart.clear();
    _appliedCoupon = null;
    notifyListeners();
  }

  // Coupon Engine
  String? _appliedCoupon;
  String? get appliedCoupon => _appliedCoupon;

  final Map<String, dynamic> _coupons = {
    'SPORT20': {'percent': 20.0, 'desc': 'ลด 20% ทั้งตะกร้า'},
    'WELCOME10': {'percent': 10.0, 'desc': 'ลด 10% สมาชิกใหม่'},
    'PULSE100': {'amount': 100.0, 'minSpend': 800.0, 'desc': 'ลดทันที 100 บาท'},
    'FREESHIP': {'freeShipping': true, 'desc': 'ส่งฟรีทันที'},
  };

  bool applyCoupon(String code) {
    final upper = code.trim().toUpperCase();
    if (_coupons.containsKey(upper)) {
      _appliedCoupon = upper;
      notifyListeners();
      return true;
    }
    return false;
  }

  void removeCoupon() {
    _appliedCoupon = null;
    notifyListeners();
  }

  // Price Calculations
  final double freeShippingThreshold = 1500.0;
  final double standardShippingFee = 50.0;

  double get subtotal =>
      _cart.fold(0.0, (sum, item) => sum + item.totalPrice);

  double get discountAmount {
    if (_appliedCoupon == null) return 0.0;
    final coupon = _coupons[_appliedCoupon!];
    if (coupon == null) return 0.0;

    if (coupon['percent'] != null) {
      return (subtotal * (coupon['percent'] as double)) / 100.0;
    } else if (coupon['amount'] != null) {
      final minSpend = (coupon['minSpend'] as double?) ?? 0.0;
      if (subtotal >= minSpend) {
        return coupon['amount'] as double;
      }
    }
    return 0.0;
  }

  double get shippingFee {
    if (subtotal == 0) return 0.0;
    if (subtotal >= freeShippingThreshold) return 0.0;
    if (_appliedCoupon != null &&
        _coupons[_appliedCoupon!]?['freeShipping'] == true) {
      return 0.0;
    }
    return standardShippingFee;
  }

  double get totalAmount => max(0.0, subtotal - discountAmount + shippingFee);

  double get freeShippingProgress =>
      subtotal == 0 ? 0.0 : min(1.0, subtotal / freeShippingThreshold);

  double get amountNeededForFreeShipping =>
      max(0.0, freeShippingThreshold - subtotal);

  // Orders & Tracking
  final List<OrderModel> _orders = [
    OrderModel(
      orderId: 'AP-892144',
      createdAt: DateTime.now().subtract(const Duration(hours: 3)),
      items: [
        CartItem(
          id: 'sample-01',
          product: sampleProducts[0],
          selectedColor: sampleProducts[0].colors[0],
          selectedSize: '42',
          quantity: 1,
        )
      ],
      subtotal: 7590,
      discount: 0,
      shippingFee: 0,
      totalAmount: 7590,
      customerName: 'สมชาย รักกีฬา',
      customerPhone: '089-123-4567',
      shippingAddress: '99/45 ถ.สุขุมวิท คลองเตย กทม. 10110',
      paymentMethod: 'พร้อมเพย์ QR Code',
      trackingNumber: 'KEX-88219455TH',
      carrier: 'Kerry Express',
      currentStep: 3,
    )
  ];

  List<OrderModel> get orders => List.unmodifiable(_orders);

  OrderModel placeOrder({
    required String name,
    required String phone,
    required String address,
    required String paymentMethod,
  }) {
    final orderId = 'AP-${Random().nextInt(900000) + 100000}';
    final trackingNo = 'KEX-${Random().nextInt(90000000) + 10000000}TH';

    final newOrder = OrderModel(
      orderId: orderId,
      createdAt: DateTime.now(),
      items: List.from(_cart),
      subtotal: subtotal,
      discount: discountAmount,
      shippingFee: shippingFee,
      totalAmount: totalAmount,
      customerName: name,
      customerPhone: phone,
      shippingAddress: address,
      paymentMethod: paymentMethod,
      trackingNumber: trackingNo,
      carrier: 'Kerry Express',
      currentStep: 2,
    );

    _orders.insert(0, newOrder);
    clearCart();
    notifyListeners();
    return newOrder;
  }

  void addReview(String productId, ProductReview review) {
    final index = _products.indexWhere((p) => p.id == productId);
    if (index >= 0) {
      _products[index].reviews.insert(0, review);
      notifyListeners();
    }
  }
}
