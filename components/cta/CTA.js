import React from 'react'
import PropTypes from 'prop-types'

import S from './CTA.styled'

const CTA = ({ text, buttonType }) => {
  return (
    <S.CTA buttonType={buttonType}>
      <S.Text buttonType={buttonType}>{text}</S.Text>
    </S.CTA>
  )
}

CTA.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
}

CTA.defaultProps = {
  buttonType: 'solid',
}

export default CTA
