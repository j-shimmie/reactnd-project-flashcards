import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import S from './DeckDetail.styled'
import DeckCard from '../deck-card/DeckCard'
import CTA from '../cta/CTA'

const DeckDetail = ({ title }) => {
  return (
    <S.DeckDetail>
      <DeckCard title={title} style={{ flex: 2 }} />
      <View>
        <CTA text="Add Card" buttonType="outline" onPress={() => {}} />
        <CTA text="Start Quiz" onPress={() => {}} />
        <CTA text="Delete Deck" buttonType="danger" onPress={() => {}} />
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

export default connect(mapStateToProps)(DeckDetail)
