import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, TYPOGRAPHY, globalStyles } from '../theme/styles'

const ButtonCustom = ({ text, onPress, btnPrimary, width }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, btnPrimary && styles.btnPrimary, width && { width: width }]}
      onPress={onPress}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[globalStyles.btnTextPrimary]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    padding: 10,
    width: TYPOGRAPHY.width * 0.75
  },
  btnPrimary: {
    backgroundColor: COLORS.btnPrimary,
    padding: 20,
    height: '8%'
  }
})
