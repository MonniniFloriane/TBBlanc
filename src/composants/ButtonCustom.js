import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../theme/styles'

const ButtonCustom = ({ text, onPress, btnPrimary, width }) => {
  return (
    <TouchableOpacity
      style={[globalStyles.btn, btnPrimary && globalStyles.btnPrimary, width && { width: width }]}
      onPress={onPress}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[globalStyles.btnTextPrimary]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonCustom
