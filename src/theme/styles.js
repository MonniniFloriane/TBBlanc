import { StyleSheet } from 'react-native'
import { COLORS } from '../constant/colors'
import { TYPOGRAPHY } from '../constant/typographie'

export const globalStyles = StyleSheet.create({
  containerFlex: {
    display: 'flex'
  },
  //FONT
  h1: {
    fontSize: TYPOGRAPHY.fontSizeXLarge,
    color: COLORS.white,
    textTransform: 'uppercase',
    textAlign: 'left'
  },
  h2: {
    fontSize: TYPOGRAPHY.fontSizeLarge,
    color: COLORS.grey,
    textTransform: 'inherit',
    textAlign: 'left'
  },
  h3: {
    fontSize: TYPOGRAPHY.fontSizeLarge,
    color: COLORS.grey
  },
  h4: {
    fontSize: TYPOGRAPHY.fontSizeSmall,
    textTransform: 'inherit',
    color: COLORS.grey
  },
  btnTextPrimary: {
    fontWeight: 'bold',
    fontSize: TYPOGRAPHY.fontSizeExtraSmall,
    textTransform: 'uppercase',
    color: COLORS.black
  },
  paragraphLeft: {
    fontFamily: 'sans-serif',
    textTransform: 'none',
    fontSize: TYPOGRAPHY.fontSizeExtraSmall,
    textAlign: 'left',
    lineHeight: 23
  },
  //BUTTON
  btn: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.black,
    borderRadius: 50,
    width: '100%',
    paddingVertical: 5
  },
  btnPrimary: {
    backgroundColor: COLORS.btnPrimary,
    borderColor: 'transparent'
  },
  //OTHER
  alignItemsCenter: {
    alignItems: 'center'
  },
  container: {
    flex: 1
  }
})

export { COLORS, TYPOGRAPHY }
