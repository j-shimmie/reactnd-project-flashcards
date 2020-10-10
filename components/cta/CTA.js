import React from 'react'
import PropTypes from 'prop-types'

import S from './CTA.styled'

const CTA = ({ text, buttonType, onPress }) => {
  return (
    <S.CTA buttonType={buttonType} onPress={onPress}>
      <S.Text buttonType={buttonType}>{text}</S.Text>
    </S.CTA>
  )
}

CTA.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}

CTA.defaultProps = {
  buttonType: 'solid',
}

export default CTA
