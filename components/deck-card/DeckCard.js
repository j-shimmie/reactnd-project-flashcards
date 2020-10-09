import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import S from './DeckCard.styled'

const DeckCard = ({ title, questNum }) => {
  return (
    <S.DeckCard>
      <Text>{title}</Text>
      <Text>{questNum && `${questNum} cards`}</Text>
    </S.DeckCard>
  )
}

DeckCard.propTypes = {
  title: PropTypes.string.isRequired,
}

const mapStateToProps = (decks, { title }) => {
  const deck = decks[title]
  const questNum = deck ? deck.questions.length : null

  return {
    decks,
    questNum,
  }
}

export default connect(mapStateToProps)(DeckCard)
