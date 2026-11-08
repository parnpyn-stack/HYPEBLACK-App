import 'package:flutter/material.dart';
import '../services/store_state.dart';
import '../widgets/product_card.dart';

class WishlistScreen extends StatelessWidget {
  final StoreState store;

  const WishlistScreen({super.key, required this.store});

  @override
  Widget build(BuildContext context) {
    final wishlistedProducts =
        store.products.where((p) => store.isWishlisted(p.id)).toList();

    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      appBar: AppBar(
        title: const Text('รายการโปรดของคุณ ❤️',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
      ),
      body: wishlistedProducts.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(
                      color: Colors.red.shade50,
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.favorite_border,
                      size: 64,
                      color: Colors.red,
                    ),
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    'ยังไม่มีสินค้าในรายการโปรด',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    'กดไอคอนหัวใจที่สินค้าที่สนใจเพื่อบันทึกไว้ดูภายหลัง',
                    style: TextStyle(fontSize: 13, color: Colors.grey.shade500),
                  ),
                ],
              ),
            )
          : GridView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: wishlistedProducts.length,
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                childAspectRatio: 0.68,
                crossAxisSpacing: 12,
                mainAxisSpacing: 12,
              ),
              itemBuilder: (context, index) {
                return ProductCard(
                  product: wishlistedProducts[index],
                  store: store,
                );
              },
            ),
    );
  }
}

