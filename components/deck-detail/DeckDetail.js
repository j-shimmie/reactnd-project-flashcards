import React from 'react'
import { connect } from 'react-redux'

import S from './DeckDetail.styled'
import ContentContainer from '../content-container/ContentContainer'
import DeckCard from '../deck-card/DeckCard'
import CTA from '../cta/CTA'

const DeckDetail = ({ title }) => {
  return (
    <ContentContainer>
      <S.DeckDetail>
        <DeckCard title={title} />
        <S.Buttons>
          <CTA text="Add Card" buttonType="outline" />
          <CTA text="Start Quiz" buttonType="solid" />
          <CTA text="Delete Deck" buttonType="danger" />
        </S.Buttons>
      </S.DeckDetail>
    </ContentContainer>
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
