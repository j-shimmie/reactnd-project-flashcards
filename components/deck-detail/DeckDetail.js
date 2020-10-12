import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import S from './DeckDetail.styled'
import DeckCard from '../deck-card/DeckCard'
import CTA from '../cta/CTA'
import { removeDeck } from '../../utils/api'
import { deleteDeck } from '../../actions/decks'

const DeckDetail = ({ title, remove, navigation: { navigate } }) => {
  const handleAddPress = () => navigate('Add Card', { title })
  const handleQuizPress = () => navigate('Quiz', { title })
  const handleDelete = () => {
    remove(title)
    removeDeck(title)
    navigate('Home')
  }

  return (
    <S.DeckDetail>
      <DeckCard title={title} style={{ flex: 2 }} />
      <View>
        <CTA text="Add Card" buttonType="outline" onPress={handleAddPress} />
        <CTA text="Start Quiz" onPress={handleQuizPress} />
        <CTA text="Delete Deck" buttonType="danger" onPress={handleDelete} />
      </View>
    </S.DeckDetail>
  )
}

const mapStateToProps = (state, { route }) => {
  const { title } = route.params

  return {
    title,
  }
}

const mapDispatchToProps = (dispatch) => ({
  remove: (title) => dispatch(deleteDeck(title)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)
