import { StyleSheet, TextInput, View, Text } from 'react-native'
import { COLORS, globalStyles } from '../theme/styles'

const InputCustom = ({ placeholder, value, secureTextEntry, multiline, numberOfLines, onChangeText, onSubmitEditing, text }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'flex-end' }}>
      <Text style={[globalStyles.paragraphLeft]}>{text}</Text>
      <TextInput
        style={[styles.inputDefault]}
        autoCapitalize="none"
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        placeholderTextColor={COLORS.primary}
        secureTextEntry={secureTextEntry ? true : false}
        value={value}
      />
    </View>
  )
}

export default InputCustom

const styles = StyleSheet.create({
  inputDefault: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    gap: 10,
    paddingLeft: 10,
    width: 200,
    borderBottomColor: COLORS.grey
  }
})
