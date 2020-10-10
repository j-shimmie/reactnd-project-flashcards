import React from 'react'
import PropTypes from 'prop-types'

import S from './InputText.styled'

const InputText = ({ placeholder, value, onChangeText }) => {
  return (
    <S.InputText
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  )
}

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
}

export default InputText
