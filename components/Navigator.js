import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Decks from './decks/Decks'
import DeckDetail from './deck-detail/DeckDetail'
import AddCard from './add-card/AddCard'
import AddDeck from './add-deck/AddDeck'
import Quiz from './quiz/Quiz'
import QuizScore from './quiz-score/QuizScore'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const Tabs = () => {
  const { Navigator, Screen } = Tab

  return (
    <Navigator>
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
