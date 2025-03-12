import * as React from 'react'
import { View } from 'react-native'
import { RadioButton, Text } from 'react-native-paper'
import { globalStyles } from '../theme/styles'

const RadioButtonCustom = () => {
  const [value, setValue] = React.useState('first')

  return (
    <RadioButton.Group
      onValueChange={newValue => setValue(newValue)}
      value={value}
    >
      <View style={{ flexDirection: 'row', marginBottom: 30 }}>
        <RadioButton value="first" />
        <Text style={[globalStyles.h4]}>First</Text>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 30 }}>
        <RadioButton value="second" />
        <Text style={[globalStyles.h4]}>Second</Text>
      </View>
    </RadioButton.Group>
  )
}

export default RadioButtonCustom
