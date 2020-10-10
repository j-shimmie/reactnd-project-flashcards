import styled, { css } from '@emotion/native'

import {
  white,
  softBlue,
  dangerRed,
  altoGray,
  slateGray,
} from '../../utils/colors'

const S = {}

const buttonTypes = ({ buttonType, disabled }) => {
  switch (buttonType) {
    case 'solid':
      return css`
        background-color: ${softBlue};
        border: solid 1px ${softBlue};
        shadow-color: ${softBlue};
        shadow-offset: 0px 2px;
        shadow-opacity: 0.04;
        shadow-radius: 6;

        ${disabled &&
        css`
          background-color: ${altoGray};
          border-color: ${altoGray};
        `};
      `
    case 'outline':
      return css`
        background-color: ${white};
        border: solid 1px ${softBlue};
        shadow-color: ${softBlue};
        shadow-offset: 0px 2px;
        shadow-opacity: 0.04;
        shadow-radius: 6;
      `
    default:
      return
  }
}

const buttonText = ({ buttonType, disabled }) => {
  switch (buttonType) {
    case 'solid':
      return css`
        color: ${white};

        ${disabled &&
        css`
          color: ${slateGray};
        `};
      `
    case 'outline':
      return css`
        color: ${softBlue};
      `
    case 'danger':
      return css`
        color: ${dangerRed};
        font-weight: 500;
      `
    default:
      return
  }
}

S.CTA = styled.TouchableOpacity`
  ${buttonTypes};
  padding: 24px;
  border-radius: 13px;
  margin-top: 4px;
  margin-bottom: 4px;
`

S.Text = styled.Text`
  ${buttonText};
  font-size: 20px;
  text-align: center;
`

export default S
