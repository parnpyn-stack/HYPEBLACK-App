import 'package:flutter/material.dart';
import '../services/store_state.dart';
import 'home_screen.dart';
import 'shop_screen.dart';
import 'wishlist_screen.dart';
import 'cart_screen.dart';
import 'order_tracking_screen.dart';

class MainNavigationScreen extends StatefulWidget {
  final StoreState store;

  const MainNavigationScreen({super.key, required this.store});

  @override
  State<MainNavigationScreen> createState() => _MainNavigationScreenState();
}

class _MainNavigationScreenState extends State<MainNavigationScreen> {
  int _currentIndex = 0;

  void _onNavigate(int index) {
    setState(() => _currentIndex = index);
  }

  @override
  Widget build(BuildContext context) {
    final store = widget.store;

    final pages = [
      HomeScreen(store: store, onNavigateTab: _onNavigate),
      ShopScreen(store: store),
      WishlistScreen(store: store),
      CartScreen(store: store),
      OrderTrackingScreen(store: store),
    ];

    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: pages,
      ),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.06),
              blurRadius: 10,
              offset: const Offset(0, -3),
            ),
          ],
        ),
        child: SafeArea(
          child: NavigationBar(
            selectedIndex: _currentIndex,
            onDestinationSelected: (i) => setState(() => _currentIndex = i),
            backgroundColor: Colors.white,
            indicatorColor: const Color(0xFFFF5E36).withOpacity(0.15),
            destinations: [
              const NavigationDestination(
                icon: Icon(Icons.home_outlined),
                selectedIcon: Icon(Icons.home, color: Color(0xFFFF5E36)),
                label: 'หน้าแรก',
              ),
              const NavigationDestination(
                icon: Icon(Icons.shopping_bag_outlined),
                selectedIcon:
                    Icon(Icons.shopping_bag, color: Color(0xFFFF5E36)),
                label: 'สินค้า',
              ),
              NavigationDestination(
                icon: Badge(
                  isLabelVisible: store.wishlist.isNotEmpty,
                  label: Text('${store.wishlist.length}'),
                  child: const Icon(Icons.favorite_border),
                ),
                selectedIcon: Badge(
                  isLabelVisible: store.wishlist.isNotEmpty,
                  label: Text('${store.wishlist.length}'),
                  child: const Icon(Icons.favorite, color: Colors.red),
                ),
                label: 'ถูกใจ',
              ),
              NavigationDestination(
                icon: Badge(
                  isLabelVisible: store.cartCount > 0,
                  label: Text('${store.cartCount}'),
                  backgroundColor: const Color(0xFFFF5E36),
                  child: const Icon(Icons.shopping_cart_outlined),
                ),
                selectedIcon: Badge(
                  isLabelVisible: store.cartCount > 0,
                  label: Text('${store.cartCount}'),
                  backgroundColor: const Color(0xFFFF5E36),
                  child: const Icon(Icons.shopping_cart,
                      color: Color(0xFFFF5E36)),
                ),
                label: 'ตะกร้า',
              ),
              const NavigationDestination(
                icon: Icon(Icons.local_shipping_outlined),
                selectedIcon:
                    Icon(Icons.local_shipping, color: Color(0xFFFF5E36)),
                label: 'พัสดุ',
              ),
            ],
          ),
        ),
      ),
    );
  }
}
