import styled from '@emotion/native'

import { textGray } from '../../utils/colors'

const S = {}

S.Decks = styled.View`
  flex: 1;
`

S.NoDecks = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

S.InfoText = styled.Text`
  font-size: 28px;
  color: ${textGray};
  text-align: center;
  margin-bottom: 16px;
`

export default S
