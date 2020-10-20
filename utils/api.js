import AsyncStorage from '@react-native-community/async-storage'

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
        timestamp: Date.now(),
      },
    })
  )

export const addCardToDeck = (title, card) =>
  AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)
    const key = formatTitleKey(title)
    const obj = data[key]

    const newObj = {
      ...obj,
      questions: [...obj.questions, card],
    }

    const newData = {
      ...data,
      [key]: { ...newObj },
    }

    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(newData))
  })

export const removeDeck = (title) =>
  AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)
    const key = formatTitleKey(title)
    delete data[key]
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
  })
