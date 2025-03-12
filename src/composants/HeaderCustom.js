import { StyleSheet, Text, View } from 'react-native'
import { COLORS, globalStyles } from '../theme/styles'

const HeaderCustom = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text style={[globalStyles.h1, COLORS.white]}>{text}</Text>
      </View>
    </View>
  )
}

export default HeaderCustom

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.header,
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 10
  }
})
