import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

import S from './Decks.styled'
import { getDecks } from '../../utils/api'
import { fetchDecks } from '../../actions'
import DeckCard from '../deck-card/DeckCard'

const Decks = ({ decks, onFetchDecks }) => {
  useEffect(() => {
    getDecks().then((decks) => onFetchDecks(decks))
  }, [])

  return (
    <S.Decks>
      {Object.keys(decks).map((deck) => (
        <DeckCard key={deck} title={deck} />
      ))}
    </S.Decks>
  )
}

const mapStateToProps = (decks) => ({
  decks,
})

const mapDispatchToProps = (dispatch) => ({
  onFetchDecks: (decks) => dispatch(fetchDecks(decks)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
