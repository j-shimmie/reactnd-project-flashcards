import React from 'react'
import PropTypes from 'prop-types'

import S from './ContentContainer.styled'

const ContentContainer = ({ children }) => {
  return <S.ContentContainer>{children}</S.ContentContainer>
}

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentContainer
