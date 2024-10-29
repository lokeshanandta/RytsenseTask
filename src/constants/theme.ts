import {Dimensions, Platform} from 'react-native';
import {
  ICommonTheme,
  ThemeAssets,
  ThemeFonts,
  ThemeIcons,
  ThemeLineHeights,
  ThemeWeights,
} from './types';

const {width, height} = Dimensions.get('window');

export const WEIGHTS: ThemeWeights = {
  text: 'normal',
  h1: Platform.OS === 'ios' ? '700' : 'normal',
  h2: Platform.OS === 'ios' ? '700' : 'normal',
  h3: Platform.OS === 'ios' ? '700' : 'normal',
  h4: Platform.OS === 'ios' ? '700' : 'normal',
  h5: Platform.OS === 'ios' ? '600' : 'normal',
  p: 'normal',

  thin: Platform.OS === 'ios' ? '100' : 'normal',
  extralight: Platform.OS === 'ios' ? '200' : 'normal',
  light: Platform.OS === 'ios' ? '300' : 'normal',
  normal: Platform.OS === 'ios' ? '400' : 'normal',
  medium: Platform.OS === 'ios' ? '500' : 'normal',
  semibold: Platform.OS === 'ios' ? '600' : 'normal',
  bold: Platform.OS === 'ios' ? '700' : 'normal',
  extrabold: Platform.OS === 'ios' ? '800' : 'normal',
  black: Platform.OS === 'ios' ? '900' : 'normal',
};

export const ICONS: ThemeIcons = {
  back: require('../assets/icons/back.png'),
  timer: require('../assets/icons/carbon_timer.png'),
  check: require('../assets/icons/check.png'),
  ellipse: require('../assets/icons/Ellipse.png'),
  left: require('../assets/icons/Vector-left.png'),
  plus:require('../assets/icons/plus.png'),
};

export const ASSETS: ThemeAssets = {

NunitoBlack:require('../assets/fonts/Nunito-Black.ttf'),
NunitoBlackItalic:require('../assets/fonts/Nunito-BlackItalic.ttf'),
NunitoBold:require('../assets/fonts/Nunito-Bold.ttf'),
NunitoBoldItalic:require('../assets/fonts/Nunito-BoldItalic.ttf'),
NunitoExtraBold:require('../assets/fonts/Nunito-ExtraBold.ttf'),
NunitoExtraBoldItalic:require('../assets/fonts/Nunito-ExtraBoldItalic.ttf'),
NunitoExtraLight:require('../assets/fonts/Nunito-ExtraLight.ttf'),
NunitoExtraLightItalic:require('../assets/fonts/Nunito-ExtraLightItalic.ttf'),
NunitoItalic:require('../assets/fonts/Nunito-Italic.ttf'),
NunitoLight:require('../assets/fonts/Nunito-Light.ttf'),
NunitoLightItalic:require('../assets/fonts/Nunito-LightItalic.ttf'),
NunitoMedium:require('../assets/fonts/Nunito-Medium.ttf'),
NunitoMediumItalic:require('../assets/fonts/Nunito-MediumItalic.ttf'),
NunitoRegular:require('../assets/fonts/Nunito-Regular.ttf'),
NunitoSemiBold:require('../assets/fonts/Nunito-SemiBold.ttf'),
NunitoSemiBoldItalic:require('../assets/fonts/Nunito-SemiBoldItalic.ttf'),

  group: require('../assets/images/Group17.png'),
  sucess: require('../assets/images/Sucess.png'),
  appIntro: require('../assets/images/—Pngtree—.png'),
};

export const FONTS: ThemeFonts = {
  black:"Nunito-Black",
  blackItalic:"Nunito-BlackItalic",
  bold:"Nunito-Bold",
  boldItalic:"Nunito-BoldItalic",
  extrabold:"Nunito-ExtraBold",
  extraBoldItalic:"Nunito-ExtraBoldItalic",
  extraLight:"Nunito-ExtraLight",
  extraLightItalic:"Nunito-ExtraLightItalic",
  italic:"Nunito-Italic",
  light:"Nunito-Light",
  lightItalic:"Nunito-LightItalic",
  medium:"Nunito-Medium",
  mediumItalic:"Nunito-MediumItalic",
  regular:"Nunito-Regular",
  semiBold:"Nunito-SemiBold",
  semiBoldItalic:"Nunito-SemiBoldItalic",

  
};

export const LINE_HEIGHTS: ThemeLineHeights = {
  // font lineHeight
  text: 22,
  h1: 30,
  h2: 55,
  h3: 43,
  h4: 33,
  h5: 24,
  p: 16,
};

export const THEME: ICommonTheme = {
  icons: ICONS,
  assets: {...ICONS, ...ASSETS},
  fonts: FONTS,
  weights: WEIGHTS,
  lines: LINE_HEIGHTS,
  sizes: {width, height},
};
