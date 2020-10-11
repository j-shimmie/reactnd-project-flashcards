import { AsyncStorage } from 'react-native'

import { DECK_STORAGE_KEY, setData } from './_deck'
import { formatTitleKey } from './helpers'

export const getDecks = () =>
  AsyncStorage.getItem(DECK_STORAGE_KEY).then(setData)

export const saveDeckTitle = (title) =>
  AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [formatTitleKey(title)]: {
        title,
        questions: [],
      },
    })
  )
