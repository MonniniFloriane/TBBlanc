import { useEffect } from 'react'
import { Text } from 'react-native'
import { globalStyles } from '../theme/styles'

const TextCustom = ({ text, h1, h2, h3, h4 }) => {
  return (
    <Text
      style={[globalStyles.paragraphLeft, h1 && globalStyles.h1, h2 && globalStyles.h2, h3 && globalStyles.h3, h4 && globalStyles.h4]}
      color
    >
      {text}
    </Text>
  )
}

export default TextCustom
