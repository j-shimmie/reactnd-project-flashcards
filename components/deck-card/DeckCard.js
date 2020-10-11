import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import S from './DeckCard.styled'
import { formatTitleKey } from '../../utils/helpers'

const DeckCard = ({ deckTitle, questNum, style }) => {
  return (
    <S.DeckCard style={style}>
      <S.Title>{deckTitle}</S.Title>
      <S.Subtitle>
        {questNum !== null && `${questNum} card${questNum !== 1 ? 's' : ''}`}
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
  const key = formatTitleKey(title)
  const deck = decks[key]
  const questNum = deck ? deck.questions.length : null
  const deckTitle = deck ? deck.title : ''

  return {
    deckTitle,
    questNum,
  }
}

export default connect(mapStateToProps)(DeckCard)
