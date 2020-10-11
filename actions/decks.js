export const FETCH_DECKS = 'FETCH_DECKS'
export const ADD_DECK = 'ADD_DECK'

export const fetchDecks = (decks) => ({
  type: FETCH_DECKS,
  decks,
})

export const addDeck = (title) => ({
  type: ADD_DECK,
  title,
})
