import React from 'react'
import { connect } from 'react-redux'

import S from './Quiz.styled'
import QuizCard from '../quiz-card/QuizCard'
import CTA from '../cta/CTA'

const Quiz = ({ questions, questNum }) => {
  if (questions.length === 0) {
    return (
      <S.NoQuiz>
        <S.NoQuizText>
          Sorry, you cannot take a quiz because there are no cards in the deck.
        </S.NoQuizText>
      </S.NoQuiz>
    )
  }

  // TODO: get quiz questions
  const question = questions[0]

  return (
    <S.Quiz>
      <S.QuestNum>
        <S.QuestNumText>1</S.QuestNumText>
        <S.QuestNumText> of </S.QuestNumText>
        <S.QuestNumText>{questNum}</S.QuestNumText>
      </S.QuestNum>

      <S.Card>{question && <QuizCard question={question} />}</S.Card>

      <S.Buttons>
        <CTA text="Correct" onPress={() => {}} buttonType="success" />
        <CTA text="Incorrect" onPress={() => {}} buttonType="error" />
      </S.Buttons>
    </S.Quiz>
  )
}

const mapStateToProps = ({ decks }) => {
  // TODO: use route params
  const title = 'React'

  const deck = decks[title]
  const questNum = deck ? deck.questions.length : null
  const questions = deck ? deck.questions : []

  return {
    questions,
    questNum,
  }
}

export default connect(mapStateToProps)(Quiz)
