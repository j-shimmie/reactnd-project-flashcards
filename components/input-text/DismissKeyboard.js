import React from 'react'
import PropTypes from 'prop-types'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

const DismissKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  )
}

DismissKeyboard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DismissKeyboard
