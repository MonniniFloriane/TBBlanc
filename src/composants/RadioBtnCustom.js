import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { Button, RadioButton, Text } from 'react-native-paper'
import { globalStyles, COLORS, TYPOGRAPHY } from '../theme/styles'
import JSON_datas from '../JSON_datas.json'

const RadioButtonCustom = ({ navigation }) => {
  //index des questions par default
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  //reponse
  const [selectedAnswer, setSelectedAnswer] = useState('')
  //etat local pour le score
  const [localScore, setScore] = useState(0)
  //recup la question actuelle
  const currentQuestion = JSON_datas[currentQuestionIndex]

  //selection reponse
  const handleAnswerSelect = reponse => {
    setSelectedAnswer(reponse)
  }

  //passer la question suivante
  const handleNextQuestion = () => {
    //verifier la reponse correcte
    // Vérifier la réponse correcte
    if (selectedAnswer === currentQuestion.reponseOk) {
      setScore(localScore + 1)
    }

    // Passer à la question suivante ou terminer le quiz
    if (currentQuestionIndex < JSON_datas.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer('') // Réinitialiser
    } else {
      Alert.alert(
        'Quiz terminé',
        `Votre score est de ${localScore + (selectedAnswer === currentQuestion.reponseOK ? 1 : 0)}/${JSON_datas.length}`,
        [{ text: 'OK', onPress: () => navigation.navigate('ScoreScreen') }] // Utilisez navigation ici
      )
    }
  }

  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ gap: 20 }}>
        <Text style={[globalStyles.h3]}>Score : {localScore}</Text>
        <Text style={[globalStyles.h3]}>{currentQuestion.question}</Text>
      </View>

      <RadioButton.Group
        onValueChange={handleAnswerSelect}
        value={selectedAnswer}
      >
        <View style={{ flexDirection: 'row', marginBottom: 30, marginTop: 30 }}>
          <RadioButton
            value={currentQuestion.reponse1}
            label={currentQuestion.reponse1}
          />
          <Text style={[globalStyles.h4]}>{currentQuestion.reponse1}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <RadioButton
            value={currentQuestion.reponse2}
            label={currentQuestion.reponse2}
          />
          <Text style={[globalStyles.h4]}>{currentQuestion.reponse2}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <RadioButton
            value={currentQuestion.reponse3}
            label={currentQuestion.reponse3}
          />
          <Text style={[globalStyles.h4]}>{currentQuestion.reponse3}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <RadioButton
            value={currentQuestion.reponse4}
            label={currentQuestion.reponse4}
          />
          <Text style={[globalStyles.h4]}>{currentQuestion.reponse4}</Text>
        </View>
      </RadioButton.Group>

      <Button
        style={[globalStyles.btn, globalStyles.btnTextPrimary]}
        onPress={handleNextQuestion}
        disabled={!selectedAnswer}
      >
        {currentQuestionIndex < JSON_datas.length - 1 ? 'Suivant' : 'Terminer'}
      </Button>
    </View>
  )
}

export default RadioButtonCustom
