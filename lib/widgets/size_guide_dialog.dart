import 'package:flutter/material.dart';

class SizeGuideDialog extends StatefulWidget {
  const SizeGuideDialog({super.key});

  @override
  State<SizeGuideDialog> createState() => _SizeGuideDialogState();
}

class _SizeGuideDialogState extends State<SizeGuideDialog> {
  final TextEditingController _footController = TextEditingController();
  final TextEditingController _chestController = TextEditingController();
  String? _recommendation;

  void _calculateShoeSize() {
    final cm = double.tryParse(_footController.text.trim());
    if (cm == null) return;

    String size;
    if (cm <= 24.5) {
      size = 'EU 39 (US 6.5, UK 6.0)';
    } else if (cm <= 25.0) {
      size = 'EU 40 (US 7.0, UK 6.5)';
    } else if (cm <= 26.0) {
      size = 'EU 41 (US 8.0, UK 7.5)';
    } else if (cm <= 26.5) {
      size = 'EU 42 (US 8.5, UK 8.0)';
    } else if (cm <= 27.5) {
      size = 'EU 43 (US 9.5, UK 9.0)';
    } else if (cm <= 28.0) {
      size = 'EU 44 (US 10.0, UK 9.5)';
    } else {
      size = 'EU 45 (US 11.0, UK 10.5)';
    }

    setState(() {
      _recommendation = '👟 ไซส์รองเท้าที่แนะนำ: $size';
    });
  }

  void _calculateShirtSize() {
    final inches = double.tryParse(_chestController.text.trim());
    if (inches == null) return;

    String size;
    if (inches <= 38) {
      size = 'S (รอบอก 36-38 นิ้ว)';
    } else if (inches <= 40) {
      size = 'M (รอบอก 38-40 นิ้ว)';
    } else if (inches <= 42) {
      size = 'L (รอบอก 40-42 นิ้ว)';
    } else if (inches <= 44) {
      size = 'XL (รอบอก 42-44 นิ้ว)';
    } else {
      size = '2XL (รอบอก 44-48 นิ้ว)';
    }

    setState(() {
      _recommendation = '🎽 ไซส์เสื้อผ้าที่แนะนำ: $size';
    });
  }

  @override
  void dispose() {
    _footController.dispose();
    _chestController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 480, maxHeight: 600),
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '📏 ตารางเทียบขนาดไซส์',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  IconButton(
                    onPressed: () => Navigator.of(context).pop(),
                    icon: const Icon(Icons.close),
                    splashRadius: 20,
                  ),
                ],
              ),
              const Divider(),
              Expanded(
                child: SingleChildScrollView(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Calculator Tool
                      Container(
                        padding: const EdgeInsets.all(14),
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            colors: [
                              Colors.orange.shade50,
                              Colors.pink.shade50,
                            ],
                          ),
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: Colors.orange.shade200),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text(
                              '⚡ เครื่องมือค้นหาไซส์ที่แนะนำ',
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 13,
                              ),
                            ),
                            const SizedBox(height: 10),
                            Row(
                              children: [
                                Expanded(
                                  child: TextField(
                                    controller: _footController,
                                    keyboardType: TextInputType.number,
                                    decoration: InputDecoration(
                                      hintText: 'ความยาวเท้า (ซม.) เช่น 26.5',
                                      filled: true,
                                      fillColor: Colors.white,
                                      isDense: true,
                                      contentPadding: const EdgeInsets.symmetric(
                                          horizontal: 10, vertical: 8),
                                      border: OutlineInputBorder(
                                        borderRadius: BorderRadius.circular(10),
                                        borderSide: BorderSide(
                                            color: Colors.grey.shade300),
                                      ),
                                    ),
                                  ),
                                ),
                                const SizedBox(width: 8),
                                ElevatedButton(
                                  onPressed: _calculateShoeSize,
                                  style: ElevatedButton.styleFrom(
                                    backgroundColor: const Color(0xFFFF5E36),
                                    foregroundColor: Colors.white,
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(10),
                                    ),
                                  ),
                                  child: const Text('คำนวณ'),
                                ),
                              ],
                            ),
                            const SizedBox(height: 8),
                            Row(
                              children: [
                                Expanded(
                                  child: TextField(
                                    controller: _chestController,
                                    keyboardType: TextInputType.number,
                                    decoration: InputDecoration(
                                      hintText: 'รอบอก (นิ้ว) เช่น 40',
                                      filled: true,
                                      fillColor: Colors.white,
                                      isDense: true,
                                      contentPadding: const EdgeInsets.symmetric(
                                          horizontal: 10, vertical: 8),
                                      border: OutlineInputBorder(
                                        borderRadius: BorderRadius.circular(10),
                                        borderSide: BorderSide(
                                            color: Colors.grey.shade300),
                                      ),
                                    ),
                                  ),
                                ),
                                const SizedBox(width: 8),
                                ElevatedButton(
                                  onPressed: _calculateShirtSize,
                                  style: ElevatedButton.styleFrom(
                                    backgroundColor: const Color(0xFFFF007A),
                                    foregroundColor: Colors.white,
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(10),
                                    ),
                                  ),
                                  child: const Text('คำนวณ'),
                                ),
                              ],
                            ),
                            if (_recommendation != null) ...[
                              const SizedBox(height: 10),
                              Container(
                                width: double.infinity,
                                padding: const EdgeInsets.all(10),
                                decoration: BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.circular(10),
                                  border: Border.all(
                                      color: Colors.orange.shade300),
                                ),
                                child: Text(
                                  _recommendation!,
                                  textAlign: TextAlign.center,
                                  style: const TextStyle(
                                    fontWeight: FontWeight.bold,
                                    color: Color(0xFFFF5E36),
                                  ),
                                ),
                              ),
                            ],
                          ],
                        ),
                      ),
                      const SizedBox(height: 16),

                      // Shoe Table
                      const Text(
                        'ตารางเทียบไซส์รองเท้ากีฬา (Shoes)',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          color: Color(0xFFFF5E36),
                        ),
                      ),
                      const SizedBox(height: 8),
                      _buildTable(
                        headers: ['EU', 'US', 'UK', 'CM'],
                        rows: [
                          ['39', '6.5', '6.0', '24.5 ซม.'],
                          ['40', '7.0', '6.5', '25.0 ซม.'],
                          ['41', '8.0', '7.5', '26.0 ซม.'],
                          ['42', '8.5', '8.0', '26.5 ซม.'],
                          ['43', '9.5', '9.0', '27.5 ซม.'],
                          ['44', '10.0', '9.5', '28.0 ซม.'],
                          ['45', '11.0', '10.5', '29.0 ซม.'],
                        ],
                      ),
                      const SizedBox(height: 16),

                      // Apparel Table
                      const Text(
                        'ตารางเทียบไซส์เสื้อผ้ากีฬา (Apparel)',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          color: Color(0xFFFF007A),
                        ),
                      ),
                      const SizedBox(height: 8),
                      _buildTable(
                        headers: ['ไซส์', 'รอบอก (นิ้ว)', 'รอบเอว (นิ้ว)', 'ยาว'],
                        rows: [
                          ['S', '36-38', '28-30', '27"'],
                          ['M', '38-40', '30-32', '28"'],
                          ['L', '40-42', '32-34', '29"'],
                          ['XL', '42-44', '34-36', '30"'],
                          ['2XL', '44-48', '36-40', '31"'],
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 10),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () => Navigator.of(context).pop(),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF0F172A),
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                  ),
                  child: const Text('ปิดหน้าต่าง'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTable({
    required List<String> headers,
    required List<List<String>> rows,
  }) {
    return Table(
      border: TableBorder.all(color: Colors.grey.shade200),
      children: [
        TableRow(
          decoration: BoxDecoration(color: Colors.grey.shade100),
          children: headers
              .map((h) => Padding(
                    padding: const EdgeInsets.all(6),
                    child: Text(
                      h,
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 11,
                      ),
                    ),
                  ))
              .toList(),
        ),
        ...rows.map(
          (row) => TableRow(
            children: row
                .map((cell) => Padding(
                      padding: const EdgeInsets.all(6),
                      child: Text(
                        cell,
                        textAlign: TextAlign.center,
                        style: const TextStyle(fontSize: 11),
                      ),
                    ))
                .toList(),
          ),
        ),
      ],
    );
  }
}
