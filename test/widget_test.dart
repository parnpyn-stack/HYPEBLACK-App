import 'package:flutter_test/flutter_test.dart';
import 'package:activepulse_sports/main.dart';

void main() {
  testWidgets('ActivePulse Sports app smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const ActivePulseSportsApp());

    // Verify app brand text is present
    expect(find.text('ACTIVE'), findsOneWidget);
    expect(find.text('PULSE'), findsOneWidget);

    // Verify Bottom Navigation items
    expect(find.text('หน้าแรก'), findsOneWidget);
    expect(find.text('สินค้า'), findsOneWidget);
    expect(find.text('ถูกใจ'), findsOneWidget);
    expect(find.text('ตะกร้า'), findsOneWidget);
    expect(find.text('พัสดุ'), findsOneWidget);
  });
}
