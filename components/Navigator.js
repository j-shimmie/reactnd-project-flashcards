import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Decks from './decks/Decks'
import DeckDetail from './deck-detail/DeckDetail'
import AddCard from './add-card/AddCard'
import AddDeck from './add-deck/AddDeck'
import Quiz from './quiz/Quiz'
import QuizScore from './quiz-score/QuizScore'
import { softBlue } from '../utils/colors'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const Tabs = () => {
  const { Navigator, Screen } = Tab

  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName

          if (route.name === 'Decks') {
            iconName = 'ios-bookmarks'
          } else if (route.name === 'Add Deck') {
            iconName = 'ios-add-circle'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: softBlue,
      }}
    >
      <Screen name="Decks" component={Decks} />
      <Screen name="Add Deck" component={AddDeck} />
    </Navigator>
  )
}

const Navigation = () => {
  const { Navigator, Screen } = Stack

  return (
    <Navigator>
      <Screen name="Home" component={Tabs} />
      <Screen name="Deck Detail" component={DeckDetail} />
      <Screen name="Add Card" component={AddCard} />
      <Screen name="Quiz" component={Quiz} />
      <Screen name="Quiz Score" component={QuizScore} />
    </Navigator>
  )
}

export default Navigation
