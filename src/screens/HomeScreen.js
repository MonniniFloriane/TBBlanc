import { useState } from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import ButtonCustom from '../composants/ButtonCustom'
import { globalStyles } from '../theme/styles'
import HeaderCustom from '../composants/HeaderCustom'
import InputCustom from '../composants/InputCustom'

const HomeScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.alignItemsCenter, globalStyles.container]}>
      <HeaderCustom text="Mon quiz"></HeaderCustom>
      <View style={{ height: '87%', justifyContent: 'flex-end', gap: 300 }}>
        <InputCustom
          placeholder="Prenom"
          text="Prenom :"
        ></InputCustom>
        <ButtonCustom
          text="Valider"
          btnPrimary
          onPress={() => setVisibleRegister(true)}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default HomeScreen
