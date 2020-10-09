import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import S from './App.styled'
import Decks from './components/decks/Decks'

const store = createStore(reducers)

export default function App() {
  return (
    <Provider store={store}>
      <S.App>
        <Decks />
      </S.App>
    </Provider>
  )
}
