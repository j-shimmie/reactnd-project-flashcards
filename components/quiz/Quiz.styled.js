import styled from '@emotion/native'

import ContentContainer from '../content-container/ContentContainer.styled'
import { slateGray } from '../../utils/colors'

const S = {}

S.Quiz = styled.View`
  ${ContentContainer};
  justify-content: space-between;
`

S.QuestNum = styled.View`
  flex-direction: row;
  justify-content: center;
`

S.QuestNumText = styled.Text`
  font-size: 18px;
  color: ${slateGray};
  line-height: 26px;
  font-weight: 300;
`

S.Card = styled.View`
  flex: 2;
`

S.Buttons = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export default S
