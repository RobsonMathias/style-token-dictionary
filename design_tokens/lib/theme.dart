import 'package:flutter/material.dart';

class CustomTheme {

  CustomTheme._();

  static const MaterialColor defaultPalette = MaterialColor(
    _primaryValue,
    <int, Color>{
       50: Color(0xFFFCE4EC),
      100: Color(0xFFF8BBD0),
      200: Color(0xFFF48FB1),
      300: Color(0xFFF06292),
      400: Color(0xFFEC407A),
      500: Color(_primaryValue),
      600: Color(0xFFD81B60),
      700: Color(0xFFC2185B),
      800: Color(0xFFAD1457),
      900: Color(0xFF880E4F),
    },
  );
  static const int _primaryValue = 0xFFE91E63;
}
