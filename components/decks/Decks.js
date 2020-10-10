import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import S from './Decks.styled'
import { getDecks } from '../../utils/api'
import { fetchDecks } from '../../actions/decks'
import DeckCard from '../deck-card/DeckCard'

const renderItem = ({ item }) => <DeckCard title={item.key} />

const Decks = ({ decks, onFetchDecks }) => {
  useEffect(() => {
    getDecks().then((decks) => onFetchDecks(decks))
  }, [])

  const decksWithKey = Object.keys(decks).map((deck) => ({
    key: deck,
  }))

  return (
    <S.Decks>
      <FlatList
        data={decksWithKey}
        renderItem={renderItem}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}
      />
    </S.Decks>
  )
}

const mapStateToProps = ({ decks }) => ({
  decks,
})

const mapDispatchToProps = (dispatch) => ({
  onFetchDecks: (decks) => dispatch(fetchDecks(decks)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
