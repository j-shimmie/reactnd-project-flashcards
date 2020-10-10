import React, { useState } from 'react'
import PropTypes from 'prop-types'

import S from './QuizCard.styled'
import CTA from '../cta/CTA'

const QuizCard = ({ question }) => {
  const { question: que, answer: ans } = question
  const [viewAns, setViewAns] = useState(false)

  const handlePress = () => setViewAns(!viewAns)

  return (
    <S.QuizCard>
      <S.TextContainer>
        {!viewAns ? <S.QueText>{que}</S.QueText> : <S.AnsText>{ans}</S.AnsText>}
      </S.TextContainer>

      <S.CTAContainer>
        <CTA
          text={!viewAns ? 'View Answer' : 'View Question'}
          onPress={handlePress}
          buttonType="minimal"
        />
      </S.CTAContainer>
    </S.QuizCard>
  )
}

QuizCard.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
}

export default QuizCard
