import styled from '@emotion/native'

import { textGray, slateGray } from '../../utils/colors'

const S = {}

S.QuizScore = styled.View`
  flex: 1;
  justify-content: center;
`

S.Circle = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  position: relative;
`

S.Info = styled.View`
  position: absolute;
  align-items: center;
`

S.PercentText = styled.Text`
  color: ${textGray};
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0.4px;
  text-align: center;
`

S.BoldText = styled.Text`
  font-weight: 700;
`

S.DetailsText = styled.Text`
  color: ${slateGray};
  font-size: 14px;
  line-height: 26px;
  font-weight: 300;
  text-align: center;
`

S.Buttons = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export default S
