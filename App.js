import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import reducers from './reducers'
import S from './App.styled'
import Navigator from './components/Navigator'

const store = createStore(reducers)

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <S.App>
          <Navigator />
        </S.App>
      </Provider>
    </NavigationContainer>
  )
}

export default App
