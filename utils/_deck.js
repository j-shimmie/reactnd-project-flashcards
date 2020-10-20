import AsyncStorage from '@react-native-community/async-storage'

export const DECK_STORAGE_KEY = 'Flashcards:deck'

const initialData = () => {
  const data = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
        },
      ],
      timestamp: 1602357699,
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.',
        },
      ],
      timestamp: 1602357759,
    },
  }

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))

  return data
}

export const setData = (results) =>
  results === null ? initialData() : JSON.parse(results)
