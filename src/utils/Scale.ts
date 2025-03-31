import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (size: any): number =>
  (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: any): number =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (
  size: number,
  factor: number = 0.5,
): number => size + (verticalScale(size) - size) * factor;
