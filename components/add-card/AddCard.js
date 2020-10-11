import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import S from './AddCard.styled'
import DismissKeyboard from '../input-text/DismissKeyboard'
import InputText from '../input-text/InputText'
import CTA from '../cta/CTA'
import { addCard } from '../../actions/cards'
import { addCardToDeck } from '../../utils/api'

const AddCard = ({ addNewCard, navToDeck, route }) => {
  const [questionText, setQuestionText] = useState('')
  const [answerText, setAnswerText] = useState('')

  const handleSubmit = () => {
    const { title } = route.params

    const card = {
      question: questionText,
      answer: answerText,
    }

    addNewCard(title, card)
    addCardToDeck(title, card)
    setQuestionText('')
    setAnswerText('')
    navToDeck(title)
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

const mapDispatchToProps = (dispatch, { navigation: { navigate } }) => ({
  addNewCard: (title, card) => dispatch(addCard(title, card)),
  navToDeck: (title) => navigate('Deck Detail', { title }),
})

export default connect(null, mapDispatchToProps)(AddCard)
