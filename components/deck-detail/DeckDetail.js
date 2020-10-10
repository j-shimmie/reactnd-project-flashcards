import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import S from './DeckDetail.styled'
import DeckCard from '../deck-card/DeckCard'
import CTA from '../cta/CTA'

const DeckDetail = ({ title }) => {
  return (
    <S.DeckDetail>
      <DeckCard title={title} />
      <View>
        <CTA text="Add Card" buttonType="outline" />
        <CTA text="Start Quiz" buttonType="solid" />
        <CTA text="Delete Deck" buttonType="danger" />
      </View>
    </S.DeckDetail>
  )
}

const mapStateToProps = ({ decks }) => {
  // TODO: use route params
  const title = 'React'

  return {
    title,
  }
}

export default connect(mapStateToProps)(DeckDetail)
