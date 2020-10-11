import { FETCH_DECKS, ADD_DECK } from '../actions/decks'
import { ADD_CARD } from '../actions/cards'
import { formatTitleKey } from '../utils/helpers'

const decks = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK: {
      const { title } = action
      const key = formatTitleKey(title)

      return {
        ...state,
        [key]: {
          title,
          questions: [],
          timestamp: Date.now(),
        },
      }
    }
    case ADD_CARD: {
      const { title, card } = action
      const key = formatTitleKey(title)

      return {
        ...state,
        [key]: {
          ...state[key],
          questions: [...state[key].questions, card],
        },
      }
    }
    default:
      return state
  }
}

export default decks
