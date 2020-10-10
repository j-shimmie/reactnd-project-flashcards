import React, { useState } from 'react'
import { View } from 'react-native'

import S from './AddCard.styled'
import DismissKeyboard from '../input-text/DismissKeyboard'
import InputText from '../input-text/InputText'
import CTA from '../cta/CTA'

const AddCard = () => {
  const [questionText, setQuestionText] = useState('')
  const [answerText, setAnswerText] = useState('')

  const handleSubmit = () => {
    const cardInfo = {
      question: questionText,
      answer: answerText,
    }

    // TODO: dispatch action

    // TODO: Add to database

    setQuestionText('')
    setAnswerText('')

    // TODO: navigate to deck
  }

  return (
    <DismissKeyboard>
      <S.AddCard>
        <View>
          <InputText
            placeholder="Question"
            value={questionText}
            onChangeText={(question) => setQuestionText(question)}
          />
          <InputText
            placeholder="Answer"
            value={answerText}
            onChangeText={(answer) => setAnswerText(answer)}
          />
        </View>

        <View>
          <CTA
            text="Submit"
            onPress={handleSubmit}
            disabled={questionText === '' || answerText === ''}
          />
        </View>
      </S.AddCard>
    </DismissKeyboard>
  )
}

export default AddCard
