export const SET_ID = 'SET_ID'
export const SET_CORRECT = 'SET_CORRECT'
export const VIEW_ANSWER = 'VIEW_ANSWER'

export const setId = (id) => ({
  type: SET_ID,
  id,
})

export const setCorrect = (numCorrect) => ({
  type: SET_CORRECT,
  numCorrect,
})

export const viewAnswer = (bool) => ({
  type: VIEW_ANSWER,
  viewAns: bool,
})
