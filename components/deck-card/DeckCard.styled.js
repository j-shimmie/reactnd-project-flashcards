import styled from '@emotion/native'

import { white, shadowBlue, textGray, textGrayLight } from '../../utils/colors'

const S = {}

S.DeckCard = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${white};
  border-radius: 18px;
  padding: 36px 20px;
  margin: 10px 28px;
  shadow-color: ${shadowBlue};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 18;
`

S.Title = styled.Text`
  color: ${textGray};
  font-size: 21px;
  font-weight: 500;
  line-height: 26px;
`

S.Subtitle = styled.Text`
  color: ${textGrayLight};
  font-size: 12px;
  margin-top: 10px;
`

export default S
