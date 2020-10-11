import { FETCH_DECKS, ADD_DECK } from '../actions/decks'
import { formatTitleKey } from '../utils/helpers'

const decks = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      const { title } = action

      return {
        ...state,
        [formatTitleKey(title)]: {
          title,
          questions: [],
          timestamp: Date.now(),
        },
      }
    default:
      return state
  }
}

export default decks
