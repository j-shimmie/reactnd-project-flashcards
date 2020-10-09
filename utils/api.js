import { AsyncStorage } from 'react-native'

import { DECK_STORAGE_KEY, setInitialData } from './_deck'

export const getDecks = () =>
  AsyncStorage.getItem(DECK_STORAGE_KEY).then(setInitialData)
