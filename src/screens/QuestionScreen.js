import { useState } from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import ButtonCustom from '../composants/ButtonCustom'
import { globalStyles } from '../theme/styles'
import HeaderCustom from '../composants/HeaderCustom'
import TextCustom from '../composants/TextCustom'
import RadioButtonCustom from '../composants/RadioBtnCustom'

const QuestionScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <HeaderCustom text="Mon quiz"></HeaderCustom>
      <View style={{ paddingVertical: 30, paddingHorizontal: 10, flex: 1, gap: 50, justifyContent: 'flex-start' }}>
        <View style={{ gap: 50 }}>
          <View style={{ flexDirection: 'row', width: '75%', justifyContent: 'space-between', marginTop: 30 }}>
            <TextCustom
              text="Question 1"
              h2
            ></TextCustom>
            <TextCustom
              text="Score : 0"
              h2
            ></TextCustom>
          </View>
          <TextCustom
            text="Ou à eu leiu le baptème de Clovis ?"
            h3
          ></TextCustom>
        </View>
        <RadioButtonCustom></RadioButtonCustom>
        <ButtonCustom
          text="Valider"
          onPress={() => setVisibleRegister(true)}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

export default QuestionScreen
