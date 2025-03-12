import { useState } from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import ButtonCustom from '../composants/ButtonCustom'
import { globalStyles } from '../theme/styles'
import HeaderCustom from '../composants/HeaderCustom'
import TextCustom from '../composants/TextCustom'
import RadioButtonCustom from '../composants/RadioBtnCustom'

const QuestionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <HeaderCustom text="Mon quiz"></HeaderCustom>
      <View style={{ paddingVertical: 30, paddingHorizontal: 10, flex: 1, gap: 50, justifyContent: 'flex-start' }}>
        <RadioButtonCustom navigation={navigation}></RadioButtonCustom>
      </View>
    </SafeAreaView>
  )
}

export default QuestionScreen
