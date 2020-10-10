import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import S from './App.styled'
import Decks from './components/decks/Decks'
import DeckDetail from './components/deck-detail/DeckDetail'
import AddCard from './components/add-card/AddCard'

const store = createStore(reducers)

export default function App() {
  return (
    <Provider store={store}>
      <S.App>
        <AddCard />
      </S.App>
    </Provider>
  )
}
