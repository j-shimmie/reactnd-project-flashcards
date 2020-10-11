import React from 'react'

import S from './QuizScore.styled'
import PercentCircle from './PercentCircle'
import CTA from '../cta/CTA'

const QuizScore = () => {
  const percent = 75

  return (
    <S.QuizScore>
      <S.Circle>
        <PercentCircle percent={percent} />
        <S.Info>
          <S.PercentText>
            {percent}
            <S.BoldText>%</S.BoldText>
          </S.PercentText>
          <S.DetailsText>35 of 50</S.DetailsText>
        </S.Info>
      </S.Circle>

      <S.Buttons>
        <CTA text="Restart Quiz" onPress={() => {}} buttonType="solid" />
        <CTA text="Back to Deck" onPress={() => {}} buttonType="outline" />
      </S.Buttons>
    </S.QuizScore>
  )
}

export default QuizScore
