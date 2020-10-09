import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'

import S from './App.styled'

export default function App() {
  return (
    <S.App>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </S.App>
  )
}
