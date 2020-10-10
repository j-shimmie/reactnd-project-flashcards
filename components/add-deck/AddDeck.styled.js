import styled from '@emotion/native'

import ContentContainer from '../content-container/ContentContainer.styled'
import { textGray } from '../../utils/colors'

const S = {}

S.AddDeck = styled.View`
  ${ContentContainer};
  justify-content: space-between;
`

S.Title = styled.Text`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  color: ${textGray};
`

export default S
