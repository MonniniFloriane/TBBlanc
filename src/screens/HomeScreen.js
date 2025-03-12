import { useState } from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import ButtonCustom from '../composants/ButtonCustom'
import { globalStyles } from '../theme/styles'
import HeaderCustom from '../composants/HeaderCustom'
import InputCustom from '../composants/InputCustom'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyles.alignItemsCenter, globalStyles.container]}>
      <HeaderCustom text="Mon quiz"></HeaderCustom>
      <View style={{ height: '87%', justifyContent: 'flex-end', gap: 300, width: '50%', alignItems: 'center' }}>
        <InputCustom
          placeholder="Prenom"
          text="Prenom :"
        ></InputCustom>
        <ButtonCustom
          text="Valider"
          btnPrimary
          onPress={() => navigation.navigate('QuestionScreen')}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default HomeScreen
