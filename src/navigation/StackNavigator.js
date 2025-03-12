import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import QuestionScreen from '../screens/QuestionScreen'
import ScoreScreen from '../screens/ScoreScreen'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="QuestionScreen"
          component={QuestionScreen}
        />
        <Stack.Screen
          name="ScoreScreen"
          component={ScoreScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
