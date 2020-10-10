import styled, { css } from '@emotion/native'

import {
  white,
  softBlue,
  dangerRed,
  successGreen,
  errorRed,
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
    case 'success':
      return css`
        background-color: ${successGreen};
        border: solid 1px ${successGreen};
      `
    case 'error':
      return css`
        background-color: ${errorRed};
        border: solid 1px ${errorRed};
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
        font-size: 20px;

        ${disabled &&
        css`
          color: ${slateGray};
        `};
      `
    case 'outline':
      return css`
        color: ${softBlue};
        font-size: 20px;
      `
    case 'danger':
      return css`
        color: ${dangerRed};
        font-size: 20px;
        font-weight: 500;
      `
    case 'minimal':
      return css`
        color: ${softBlue};
        font-size: 16px;
        font-weight: 500;
      `
    case 'success':
      return css`
        color: ${white};
        font-size: 20px;
      `
    case 'error':
      return css`
        color: ${white};
        font-size: 20px;
      `
    default:
      return
  }
}

S.CTA = styled.TouchableOpacity`
  ${buttonTypes};
  padding: 18px 24px;
  border-radius: 13px;
  margin-top: 4px;
  margin-bottom: 4px;
  align-items: center;
`

S.Text = styled.Text`
  ${buttonText};
`

export default S
