import React, { useState } from 'react'
import { View } from 'react-native'

import S from './AddDeck.styled'
import DismissKeyboard from '../input-text/DismissKeyboard'
import InputText from '../input-text/InputText'
import CTA from '../cta/CTA'

const AddDeck = () => {
  const [deckTitle, setDeckTitle] = useState('')

  const handleSubmit = () => {
    const deckInfo = {
      [deckTitle.replace(/\s+/g, '')]: {
        title: deckTitle,
        questions: [],
      },
    }

    // TODO: dispatch action

    // TODO: Add to database

    setDeckTitle('')

    // TODO: navigate to deck
  }

  return (
    <DismissKeyboard>
      <S.AddDeck>
        <View>
          <S.Title>What is the title of your new deck?</S.Title>
          <InputText
            placeholder="Deck Title"
            value={deckTitle}
            onChangeText={(title) => setDeckTitle(title)}
          />
        </View>

        <View>
          <CTA
            text="Create Deck"
            onPress={handleSubmit}
            disabled={deckTitle === ''}
          />
        </View>
      </S.AddDeck>
    </DismissKeyboard>
  )
}

export default AddDeck
