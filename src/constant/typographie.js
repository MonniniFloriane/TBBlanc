import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export const TYPOGRAPHY = {
  fontFamilyBlack: 'Barlow-Black',
  fontFamilyLight: 'Barlow-Light',
  fontFamilySemiBold: 'Barlow-SemiBold',
  fontSizeXXSmall: 14,
  fontSizeExtraSmall: 17,
  fontSizeSmall: 20,
  fontSizeMedium: 21,
  fontSizeLarge: 24,
  fontSizeXLarge: 36,
  fontSizeXXLarge: 64,
  height,
  width
}
