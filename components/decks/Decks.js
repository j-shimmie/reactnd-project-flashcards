import React, { useEffect } from 'react'
import { Text } from 'react-native'

import S from './Decks.styled'
import { getDecks } from '../../utils/api'

const Decks = () => {
  useEffect(() => {
    getDecks().then((decks) => console.log(decks))
  }, [])

  return (
    <S.Decks>
      <Text>Test</Text>
    </S.Decks>
  )
}

export default Decks
