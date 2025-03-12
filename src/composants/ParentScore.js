import React, { useState } from 'react'
import { View } from 'react-native'
import RadioButtonCustom from './RadioBtnCustom'
import GridCustom from './GridCustom'

const ParentScore = ({ navigation }) => {
  const [score, setScore] = useState(0)

  return (
    <View>
      <RadioButtonCustom
        navigation={navigation}
        setScore={setScore}
      ></RadioButtonCustom>
      <GridCustom score={score}></GridCustom>
    </View>
  )
}

export default ParentScore
