import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import S from './QuizCard.styled'
import CTA from '../cta/CTA'
import { viewAnswer } from '../../actions/quiz'

const QuizCard = ({ question, viewAns, onViewAnswer }) => {
  const { question: que, answer: ans } = question

  const handlePress = () => onViewAnswer(!viewAns)

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

const mapStateToProps = ({ quiz }) => ({
  viewAns: quiz.viewAns,
})

const mapDispatchToProps = (dispatch) => ({
  onViewAnswer: (bool) => dispatch(viewAnswer(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizCard)
