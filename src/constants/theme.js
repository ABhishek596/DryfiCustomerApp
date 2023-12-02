import {Dimensions, LayoutAnimation} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // primaryg: "#42C6A5",     // Green
  // primary: "#0075d6",    //old app color primary blue
  primary: '#b70689', // new primary color
  primary1: '#b70689',
  secondary: '#b70689',
  buttonColor: '#b70689', // new color
  primary3: '#b70689',
  bluePrimary: '#b70689',

  horizLine: '#3b319e',

  // primary: "#1C3FAA",     // blue
  // primary1: "#2351DB",     // blue 1
  // secondary: "#1C1364",      // dark blue
  // secondary: "#4C4C6D",       // dark purple
  // bluePrimary: "#289381",
  // primary3: "#33354E",    // Dark Blue

  // button: "#289381",    // Orange
  // secondary: "#FC2626",   // Red

  // buttonColor: "#1C1364",      // dark blue

  yellow: '#f1c40f',

  bottomgray: '#777777',
  gray10: '#E5E5E5',
  gray20: '#CCCCCC',
  gray30: '#A1A1A1',
  gray40: '#999999',
  gray50: '#7F7F7F',
  gray60: '#666666',
  gray70: '#4C4C4C',
  gray80: '#333333',
  gray85: '#242526',
  gray90: '#191919',
  gray69: '#696969',

  success: '#008000',
  danger: '#EB1D1C',

  // placeholderColor
  placeholderColor: '#929292',

  disableColor: '#BFBFC1',
  disableTextColor: '#707070',

  // borderColor
  borderColor: '#E1E1E1',
  lightPrimary: '#FBCFFF80',

  // light
  light: '#E1E1E1',
  light1: '#F1F1F1',
  light7: '#F7F7F7',
  lightF6: '#F6F6F6',

  // blue
  blue: '#3A559F',
  blueD6: '#0075d6',

  // purple
  purple: '#9778FC',

  // green
  lightGreen: '#E8F6EF',
  lightGreen1: '#C0DEDD',
  lightGreen2: '#CCD5AE',

  // black
  black1: '#1D1D1D',
  black2: '#333333',
  black50: 'rgba(51, 51, 51, 0.5)',

  black4F: '#4F4F4F',
  black82: '#828282',
  black20: 'rgba(0, 0, 0, 0.12)',
  lightBlack: '#A19B9B',

  additionalColor4: '#C3C3C3',
  additionalColor9: '#F3F3F3',
  additionalColor11: '#F0FFFB',
  additionalColor13: '#EBF3EF',

  white: '#FFFFFF',
  black: '#000000',

  transparent: 'transparent',
  transparentWhite1: 'rgba(255, 255, 255, 0.1)',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 19,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  //Font family
  black: 'Poppins Black 900',
  extraBold: 'Poppins ExtraBold 800',
  bold: 'Poppins Bold 700',
  semiBold: 'Poppins SemiBold 600',
  medium: 'Poppins Medium 500',
  regular: 'Poppins Regular 400',
  light: 'Poppins Light 300',
  extraLight: 'Poppins ExtraLight 275',
  thin: 'Poppins Thin 250',

  largeTitle: {fontFamily: 'Poppins Black 900', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Poppins Bold 700', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins Bold 700', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins SemiBold 600', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins SemiBold 600', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Poppins SemiBold 600', fontSize: SIZES.h5, lineHeight: 22},
  body1: {
    fontFamily: 'Poppins Regular 400',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Poppins Regular 400',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Poppins Regular 400',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Poppins Regular 400',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Poppins Regular 400',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export const darkTheme = {
  name: 'dark',
  backgroundColor1: COLORS.gray85,
  backgroundColor2: COLORS.gray90,
  backgroundColor3: COLORS.gray90,
  backgroundColor4: COLORS.primary,
  backgroundColor5: COLORS.gray85,
  backgroundColor6: COLORS.black,
  backgroundColor7: COLORS.gray90,
  backgroundColor8: COLORS.gray70,
  lineDivider: COLORS.gray70,
  borderColor1: COLORS.gray70,
  borderColor2: COLORS.gray70,
  textColor: COLORS.white,
  textColor2: COLORS.white,
  textColor3: COLORS.gray40,
  textColor4: COLORS.white,
  textColor5: COLORS.gray30,
  textColor6: COLORS.gray30,
  textColor7: COLORS.gray40,
  tintColor: COLORS.white,
  dotColor1: COLORS.white,
  dotColor2: COLORS.primary,
};

export const lightTheme = {
  name: 'light',
  backgroundColor1: COLORS.white,
  backgroundColor2: COLORS.primary3,
  backgroundColor3: COLORS.additionalColor11,
  backgroundColor4: COLORS.white,
  backgroundColor5: COLORS.additionalColor13,
  backgroundColor6: COLORS.primary3,
  backgroundColor7: COLORS.white,
  backgroundColor8: COLORS.gray10,
  lineDivider: COLORS.gray20,
  borderColor1: COLORS.white,
  borderColor2: COLORS.black,
  textColor: COLORS.black,
  textColor2: COLORS.primary,
  textColor3: COLORS.gray80,
  textColor4: COLORS.white,
  textColor5: COLORS.black,
  textColor6: COLORS.gray,
  textColor7: COLORS.black,
  tintColor: COLORS.black,
  dotColor1: COLORS.gray20,
  dotColor2: COLORS.primary3,
};

export const selectedTheme = darkTheme;

const appTheme = {COLORS, SIZES, FONTS, darkTheme, lightTheme};

export default appTheme;
