import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import S from './DeckCard.styled'

const DeckCard = ({ title, questNum, style }) => {
  return (
    <S.DeckCard style={style}>
      <S.Title>{title}</S.Title>
      <S.Subtitle>
        {questNum && `${questNum} card${questNum > 1 ? 's' : ''}`}
      </S.Subtitle>
    </S.DeckCard>
  )
}

DeckCard.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
}

DeckCard.defaultProps = {
  style: {},
}

const mapStateToProps = ({ decks }, { title }) => {
  const deck = decks[title]
  const questNum = deck ? deck.questions.length : null

  return {
    decks,
    questNum,
  }
}

export default connect(mapStateToProps)(DeckCard)
