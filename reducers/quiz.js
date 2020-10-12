import { SET_COMPLETE } from '../actions/quiz'

const quiz = (state = false, action) => {
  switch (action.type) {
    case SET_COMPLETE:
      return action.isComplete
    default:
      return state
  }
}

export default quiz
