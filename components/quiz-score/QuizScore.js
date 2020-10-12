import React from 'react'
import { connect } from 'react-redux'

import S from './QuizScore.styled'
import PercentCircle from './PercentCircle'
import CTA from '../cta/CTA'
import { setId, setCorrect, viewAnswer } from '../../actions/quiz'

const QuizScore = ({
  title,
  correct,
  total,
  updateQuestionId,
  onCorrectAns,
  onViewAnswer,
  navigation: { navigate },
}) => {
  const percent = Math.round((correct / total) * 100)

  const handleRestart = () => {
    updateQuestionId(0)
    onCorrectAns(0)
    onViewAnswer(false)
    navigate('Quiz', { title })
  }

  const handleBackTo = () => navigate('Deck Detail', { title })

  return (
    <S.QuizScore>
      <S.Circle>
        <PercentCircle percent={percent} />
        <S.Info>
          <S.PercentText>
            {percent}
            <S.BoldText>%</S.BoldText>
          </S.PercentText>
          <S.DetailsText>
            {correct} of {total}
          </S.DetailsText>
        </S.Info>
      </S.Circle>

      <S.Buttons>
        <CTA text="Restart Quiz" onPress={handleRestart} buttonType="solid" />
        <CTA text="Back to Deck" onPress={handleBackTo} buttonType="outline" />
      </S.Buttons>
    </S.QuizScore>
  )
}

const mapStateToProps = ({ decks }, { route }) => {
  const { title, correct } = route.params
  const total = decks[title].questions.length

  return { title, correct, total }
}

const mapDispatchToProps = (dispatch) => ({
  updateQuestionId: (id) => dispatch(setId(id)),
  onCorrectAns: (num) => dispatch(setCorrect(num)),
  onViewAnswer: (bool) => dispatch(viewAnswer(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizScore)
