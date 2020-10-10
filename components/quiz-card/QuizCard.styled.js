import styled from '@emotion/native'

import { textGray, white, shadowBlue } from '../../utils/colors'

const S = {}

S.QuizCard = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${white};
  border-radius: 18px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 16px;
  shadow-color: ${shadowBlue};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.04;
  shadow-radius: 6;
`

S.TextContainer = styled.View`
  flex: 2;
  justify-content: center;
`

S.CTAContainer = styled.View`
  flex: 1;
  justify-content: center;
`

S.QueText = styled.Text`
  font-size: 28px;
  font-weight: 500;
  color: ${textGray};
  text-align: center;
`

S.AnsText = styled.Text`
  font-size: 20px;
  color: ${textGray};
  text-align: center;
`

export default S
