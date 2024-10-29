import React from 'react';
import {Platform, StyleSheet, Text, TextStyle} from 'react-native';
import useTheme from '../hooks/useTheme';
import {ITextProps} from '../constants/types';

const Typography = (props: ITextProps) => {
  const {
    id = 'Text',
    children,
    style,
    center,
    gradient,
    color,
    opacity,
    primary,
    secondary,
    tertiary,
    black,
    white,
    gray,
    danger,
    warning,
    success,
    info,
    size,
    bold,
    boldh2,
    semibold,
    weight,
    h1,
    regular,
    regularp,
    font,
    align,
    transform,
    lineHeight,
    position,
    right,
    left,
    top,
    bottom,
    start,
    end,
    marginBottom,
    marginTop,
    marginHorizontal,
    marginVertical,
    marginRight,
    marginLeft,
    paddingBottom,
    paddingTop,
    paddingHorizontal,
    paddingVertical,
    paddingRight,
    paddingLeft,
    boldp,
    width,
    ...rest
  } = props;
  const {colors, sizes, lines, weights, fonts} = useTheme();

  const colorIndex = primary
    ? 'primary'
    : secondary
    ? 'secondary'
    : tertiary
    ? 'tertiary'
    : black
    ? 'black'
    : white
    ? 'white'
    : gray
    ? 'gray'
    : danger
    ? 'danger'
    : warning
    ? 'warning'
    : success
    ? 'success'
    : info
    ? 'info'
    : null;
  const textColor = color
    ? color
    : colorIndex
    ? colors?.[colorIndex]
    : undefined;

  const textStyles = StyleSheet.flatten([
    style,
    {
      color: colors.text,
      ...(textColor && {color: textColor}),
      ...(h1 && {
        fontSize: sizes.h1,
        fontWeight: "bold",
        fontFamily: fonts.bold,
      }),
      ...(regular && {
        fontSize: sizes.h2,
        lineHeight:28,
        fontFamily: fonts.regular,
        fontWeight: "400",
      }),
      ...(regularp && {
        fontSize: sizes.p,
        fontFamily: fonts.regular,
        fontWeight: "400",
      }),
      ...(boldp && {
        fontSize: sizes.p,
        fontFamily: fonts.bold,
        fontWeight:"700"
      }),
      ...(boldh2 && {
        fontSize: sizes.h2,
        fontFamily: fonts.bold,
        fontWeight: "bold",
      }),
      ...(marginBottom && {marginBottom}),
      ...(marginTop && {marginTop}),
      ...(marginHorizontal && {marginHorizontal}),
      ...(marginVertical && {marginVertical}),
      ...(marginRight && {marginRight}),
      ...(marginLeft && {marginLeft}),
      ...(paddingBottom && {paddingBottom}),
      ...(paddingTop && {paddingTop}),
      ...(paddingHorizontal && {paddingHorizontal}),
      ...(paddingVertical && {paddingVertical}),
      ...(paddingRight && {paddingRight}),
      ...(paddingLeft && {paddingLeft}),
      ...(center && {textAlign: 'center'}),
      ...(align && {textAlign: align}),
      ...(bold && {fontFamily: fonts.bold}),
      ...(semibold && {fontFamily: fonts.semiBold}),
      ...(weight && {fontWeight: weight}),
      ...(transform && {textTransform: transform}),
      ...(font && {fontFamily: font}),
      ...(size && {fontSize: size}),
      ...(color && {color}),
      ...(opacity && {opacity}),
      ...(lineHeight && {lineHeight}),
      ...(position && {position}),
      ...(right !== undefined && {right}),
      ...(left !== undefined && {left}),
      ...(top !== undefined && {top}),
      ...(bottom !== undefined && {bottom}),
    },
  ]) as TextStyle;


  const gradientHeight =
    Number(textStyles?.lineHeight || textStyles?.fontSize || 0) +
    Number(
      textStyles?.marginVertical ||
        textStyles?.marginTop ||
        textStyles?.marginBottom ||
        0,
    );

  const textID =
    Platform.OS === 'android' ? {accessibilityLabel: id} : {testID: id};


  return (
    <Text {...textID} {...rest} style={textStyles}>
      {children}
    </Text>
  );
};

export default React.memo(Typography);
