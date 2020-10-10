import styled from '@emotion/native'

import { white, shadowBlue } from '../../utils/colors'

const S = {}

S.InputText = styled.TextInput`
  background-color: ${white};
  border-radius: 18px;
  padding: 20px 24px;
  font-size: 20px;
  shadow-color: ${shadowBlue};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.04;
  shadow-radius: 6;
  margin-top: 8px;
  margin-bottom: 8px;
`

export default S
