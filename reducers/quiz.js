import { SET_ID, SET_CORRECT, VIEW_ANSWER } from '../actions/quiz'

const quiz = (state = {}, action) => {
  switch (action.type) {
    case SET_ID: {
      const { id } = action
      return { ...state, id }
    }
    case SET_CORRECT: {
      const { numCorrect } = action
      return { ...state, numCorrect }
    }
    case VIEW_ANSWER: {
      const { viewAns } = action
      return { ...state, viewAns }
    }
    default:
      return state
  }
}

export default quiz
