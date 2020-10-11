export const ADD_CARD = 'ADD_CARD'

export const addCard = (title, card) => ({
  type: ADD_CARD,
  title,
  card,
})
