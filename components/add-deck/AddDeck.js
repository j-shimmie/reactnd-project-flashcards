import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import S from './AddDeck.styled'
import DismissKeyboard from '../input-text/DismissKeyboard'
import InputText from '../input-text/InputText'
import CTA from '../cta/CTA'
import { addDeck } from '../../actions/decks'
import { saveDeckTitle } from '../../utils/api'

import { getDecks } from '../../utils/api'

const AddDeck = ({ addNewDeck, navToDeck }) => {
  const [deckTitle, setDeckTitle] = useState('')

  const handleSubmit = () => {
    addNewDeck(deckTitle)
    saveDeckTitle(deckTitle)
    setDeckTitle('')
    navToDeck(deckTitle)

    getDecks()
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

const mapDispatchToProps = (dispatch, { navigation: { navigate } }) => ({
  addNewDeck: (title) => dispatch(addDeck(title)),
  navToDeck: (title) => navigate('Deck Detail', { title }),
})

export default connect(null, mapDispatchToProps)(AddDeck)
