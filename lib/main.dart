import 'package:flutter/material.dart';
import 'services/store_state.dart';
import 'screens/main_navigation_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const ActivePulseSportsApp());
}

class ActivePulseSportsApp extends StatefulWidget {
  const ActivePulseSportsApp({super.key});

  @override
  State<ActivePulseSportsApp> createState() => _ActivePulseSportsAppState();
}

class _ActivePulseSportsAppState extends State<ActivePulseSportsApp> {
  final StoreState _storeState = StoreState();

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: _storeState,
      builder: (context, _) {
        return MaterialApp(
          title: 'ACTIVEPULSE Sports',
          debugShowCheckedModeBanner: false,
          theme: ThemeData(
            useMaterial3: true,
            colorScheme: ColorScheme.fromSeed(
              seedColor: const Color(0xFFFF5E36),
              primary: const Color(0xFFFF5E36),
              secondary: const Color(0xFFFF007A),
              surface: Colors.white,
            ),
            scaffoldBackgroundColor: const Color(0xFFF8FAFC),
            appBarTheme: const AppBarTheme(
              backgroundColor: Colors.white,
              foregroundColor: Color(0xFF0F172A),
              elevation: 0,
              centerTitle: false,
            ),
          ),
          home: MainNavigationScreen(store: _storeState),
        );
      },
    );
  }
}
