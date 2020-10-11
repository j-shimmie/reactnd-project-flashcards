import React, { useEffect } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import S from './Decks.styled'
import { getDecks } from '../../utils/api'
import { fetchDecks } from '../../actions/decks'
import DeckCard from '../deck-card/DeckCard'

const Decks = ({ decks, onFetchDecks, navigation: { navigate } }) => {
  useEffect(() => {
    getDecks().then((decks) => onFetchDecks(decks))
  }, [])

  const decksWithKey = Object.keys(decks)
    .sort((a, b) => decks[a].timestamp - decks[b].timestamp)
    .map((deck) => ({
      key: deck,
    }))

  const renderItem = ({ item }) => {
    const handleItemPress = () => {
      navigate('Deck Detail', { title: item.key })
    }

    return (
      <TouchableOpacity onPress={handleItemPress}>
        <DeckCard title={item.key} />
      </TouchableOpacity>
    )
  }

  return (
    <S.Decks>
      <FlatList
        data={decksWithKey}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingTop: 48,
          paddingBottom: 40,
          marginLeft: 28,
          marginRight: 28,
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
