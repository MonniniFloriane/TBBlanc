import { useState } from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import ButtonCustom from '../composants/ButtonCustom'
import { globalStyles } from '../theme/styles'
import HeaderCustom from '../composants/HeaderCustom'
import TextCustom from '../composants/TextCustom'
import RadioButtonCustom from '../composants/RadioBtnCustom'
import GridCustom from '../composants/GridCustom'

const ScoreScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <HeaderCustom text="Mon quiz"></HeaderCustom>
      <View style={{ paddingVertical: 30, paddingHorizontal: 10, gap: 50 }}>
        <TextCustom
          text="Votre score est de :"
          h2
        ></TextCustom>
        <GridCustom></GridCustom>
        <View style={{ alignItems: 'center' }}>
          <ButtonCustom
            text="Valider"
            onPress={() => setVisibleRegister(true)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ScoreScreen
