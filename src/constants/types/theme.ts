import * as React from 'react';
import {
  ColorValue,
  FlexStyle,
  ImageSourcePropType,
  ScaledSize,
  TextStyle,
} from 'react-native';

// Spacing types
export interface ISpacing
  extends Pick<
    FlexStyle,
    | 'margin'
    | 'marginVertical'
    | 'marginHorizontal'
    | 'marginLeft'
    | 'marginRight'
    | 'marginTop'
    | 'marginBottom'
    | 'padding'
    | 'paddingVertical'
    | 'paddingHorizontal'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingTop'
    | 'paddingBottom'
  > { }

export type TWeight =
  /** fontWeight: 400 */
  | 'normal'
  /** fontWeight: 100 */
  | 'thin'
  /** fontWeight: 200 */
  | 'extralight'
  /** fontWeight: 300 */
  | 'light'
  /** fontWeight: 500 */
  | 'medium'
  /** fontWeight: 600 */
  | 'semibold'
  /** fontWeight: 700 */
  | 'bold'
  /** fontWeight: 800 */
  | 'extrabold'
  /** fontWeight: 900 */
  | 'black';

export interface ITheme {
  colors: ThemeColors;
  gradients: ThemeGradients;
  sizes: ThemeSizes & ThemeSpacing & ICommonTheme['sizes'];
  assets: ThemeAssets & ThemeIcons;
  icons: ThemeIcons;
  fonts: ThemeFonts;
  weights: ThemeWeights;
  lines: ThemeLineHeights;
}
export interface ICommonTheme {
  assets: ThemeAssets & ThemeIcons;
  icons: ThemeIcons;
  fonts: ThemeFonts;
  weights: ThemeWeights;
  lines: ThemeLineHeights;
  sizes: {
    width: ScaledSize['width'];
    height: ScaledSize['height'];
  };
}

export interface IThemeProvider {
  children?: React.ReactNode;
  theme?: ITheme;
  setTheme?: (theme?: ITheme) => void;
}

export interface ThemeColors {
  text: ColorValue;
  primary: ColorValue;
  secondary: ColorValue;
  lightGreen:ColorValue,
  tertiary: ColorValue;
  shadeBlue:ColorValue;
  lightBrown:ColorValue,
  lightYellow:ColorValue,
  lightBlack:ColorValue,
  lightBlue:ColorValue,
  black: ColorValue;
  white: ColorValue;
  light: ColorValue;
  dark: ColorValue;
  gray: ColorValue;
  danger: ColorValue;
  warning: ColorValue;
  success: ColorValue;
  info: ColorValue;
  card: ColorValue;
  background: ColorValue;
  shadow: ColorValue;
  overlay: ColorValue;
  focus: ColorValue;
  input: ColorValue;
  switchOn: ColorValue;
  switchOff: ColorValue;
  checkbox: string[];
  checkboxIcon: ColorValue;
  facebook: ColorValue;
  twitter: ColorValue;
  dribbble: ColorValue;
  icon: ColorValue;
  blurTint: 'light' | 'dark' | 'default';
  link: ColorValue;
}

export interface ThemeGradients {
  primary?: string[];
  secondary?: string[];
  tertiary?: string[];
  black?: string[];
  white?: string[];
  light?: string[];
  dark?: string[];
  gray?: string[];
  danger?: string[];
  warning?: string[];
  success?: string[];
  info?: string[];
  divider?: string[];
  menu?: string[];
}

export interface ThemeSizes {
  base: number;
  text: number;
  radius: number;
  padding: number;

  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  p: number;

  buttonBorder: number;
  buttonRadius: number;
  socialSize: number;
  socialRadius: number;
  socialIconSize: number;

  inputHeight: number;
  inputBorder: number;
  inputRadius: number;
  inputPadding: number;

  shadowOffsetWidth: number;
  shadowOffsetHeight: number;
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;

  cardRadius: number;
  cardPadding: number;

  imageRadius: number;
  avatarSize: number;
  avatarRadius: number;

  switchWidth: number;
  switchHeight: number;
  switchThumb: number;

  checkboxWidth: number;
  checkboxHeight: number;
  checkboxRadius: number;
  checkboxIconWidth: number;
  checkboxIconHeight: number;

  linkSize: number;

  multiplier: number;
}

export interface ThemeSpacing {
  xs: number;
  s: number;
  sm: number;
  m: number;
  md: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface ThemeWeights {
  text: TextStyle['fontWeight'];
  h1?: TextStyle['fontWeight'];
  h2?: TextStyle['fontWeight'];
  h3?: TextStyle['fontWeight'];
  h4?: TextStyle['fontWeight'];
  h5?: TextStyle['fontWeight'];
  p?: TextStyle['fontWeight'];

  thin: TextStyle['fontWeight'];
  extralight: TextStyle['fontWeight'];
  light: TextStyle['fontWeight'];
  normal: TextStyle['fontWeight'];
  medium: TextStyle['fontWeight'];
  semibold?: TextStyle['fontWeight'];
  bold?: TextStyle['fontWeight'];
  extrabold?: TextStyle['fontWeight'];
  black?: TextStyle['fontWeight'];
}
export interface ThemeIcons {
  back: ImageSourcePropType;
  timer: ImageSourcePropType;
  check: ImageSourcePropType;
  ellipse: ImageSourcePropType;
  left: ImageSourcePropType;
  plus:ImageSourcePropType
}

export interface ThemeAssets {

  NunitoBlack?: any;
  NunitoBlackItalic?: any;
  NunitoBold?: any;
  NunitoBoldItalic?: any;
  NunitoExtraBold?: any;
  NunitoExtraBoldItalic?: any;
  NunitoItalic?: any;
  NunitoLight?: any;
  NunitoLightItalic?: any;
  NunitoMedium?: any;
  NunitoMediumItalic?: any;
  NunitoRegular?: any;
  NunitoSemiBold?: any;
  NunitoSemiBoldItalic?: any;
  NunitoExtraLight?: any;
  NunitoExtraLightItalic?: any;


  group: ImageSourcePropType;
  sucess: ImageSourcePropType;
  appIntro: ImageSourcePropType;
}

export interface ThemeFonts {
  black: string;
  blackItalic: string;
  bold: string;
  boldItalic: string;
  extrabold: string;
  extraBoldItalic: string;
  extraLight: string;
  extraLightItalic: string;
  italic: string;
  light: string;
  lightItalic: string;
  medium: string;
  mediumItalic: string;
  regular: string;
  semiBold: string;
  semiBoldItalic: string;
}

export interface ThemeLineHeights {
  text: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  p: number;
}
