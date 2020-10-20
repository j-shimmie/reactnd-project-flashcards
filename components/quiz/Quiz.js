import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import S from './Quiz.styled'
import QuizCard from '../quiz-card/QuizCard'
import CTA from '../cta/CTA'
import {
  formatTitleKey,
  clearNotification,
  setNotification,
} from '../../utils/helpers'
import { setId, setCorrect, viewAnswer } from '../../actions/quiz'

const Quiz = ({
  deck,
  quiz,
  updateQuestionId,
  onCorrectAns,
  onViewAnswer,
  navigation: { navigate },
}) => {
  const { titleKey, questions, questNum } = deck
  const { id, numCorrect } = quiz

  useEffect(() => {
    updateQuestionId(0)
    onCorrectAns(0)
    onViewAnswer(false)
  }, [])

  if (questions.length === 0) {
    return (
      <S.NoQuiz>
        <S.NoQuizText>
          Sorry, you cannot take a quiz because there are no cards in the deck.
        </S.NoQuizText>
      </S.NoQuiz>
    )
  }

  const question = questions[id]
  const length = questions.length

  const onAnswer = (bool) => {
    if (id === length - 1) {
      clearNotification().then(setNotification)

      navigate('Score', {
        title: titleKey,
        correct: bool ? numCorrect + 1 : numCorrect,
      })
      return
    }

    if (bool) onCorrectAns(numCorrect + 1)
    updateQuestionId(id + 1)
    onViewAnswer(false)
  }

  return (
    <S.Quiz>
      <S.QuestNum>
        <S.QuestNumText>{id + 1}</S.QuestNumText>
        <S.QuestNumText> of </S.QuestNumText>
        <S.QuestNumText>{questNum}</S.QuestNumText>
      </S.QuestNum>

      <S.Card>{question && <QuizCard question={question} />}</S.Card>

      <S.Buttons>
        <CTA
          text="Correct"
          onPress={() => onAnswer(true)}
          buttonType="success"
        />
        <CTA
          text="Incorrect"
          onPress={() => onAnswer(false)}
          buttonType="error"
        />
      </S.Buttons>
    </S.Quiz>
  )
}

const mapStateToProps = ({ decks, quiz }, { route }) => {
  const { title } = route.params
  const { id, numCorrect } = quiz
  const key = formatTitleKey(title)

  const deck = decks[key]
  const questNum = deck ? deck.questions.length : null
  const questions = deck ? deck.questions : []

  return {
    deck: {
      titleKey: key,
      questions,
      questNum,
    },
    quiz: {
      id,
      numCorrect,
    },
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateQuestionId: (id) => dispatch(setId(id)),
  onCorrectAns: (num) => dispatch(setCorrect(num)),
  onViewAnswer: (bool) => dispatch(viewAnswer(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
