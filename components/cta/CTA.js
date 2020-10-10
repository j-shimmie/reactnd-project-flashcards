import React from 'react'
import PropTypes from 'prop-types'

import S from './CTA.styled'

const CTA = ({ text, buttonType, onPress, disabled }) => {
  return (
    <S.CTA buttonType={buttonType} onPress={onPress} disabled={disabled}>
      <S.Text buttonType={buttonType} disabled={disabled}>
        {text}
      </S.Text>
    </S.CTA>
  )
}

CTA.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

CTA.defaultProps = {
  buttonType: 'solid',
  disabled: false,
}

export default CTA
