import React from 'react'
import PropTypes from 'prop-types'
import Svg, { Circle, Path } from 'react-native-svg'

import { altoGray, successGreen } from '../../utils/colors'

const options = {
  trailColor: altoGray,
  strokeWidth: 3.5,
  stroke: successGreen,
  radius: 50,
  center: { x: 60, y: 60 },
}

const PercentCircle = ({ percent }) => {
  const {
    trailColor,
    strokeWidth,
    stroke,
    radius,
    center: { x: cx, y: cy },
  } = options

  const percentToDegree = () => {
    let num = parseFloat(percent)
    if (num === 100) num = 99.9
    return (num / 100) * Math.PI * 2
  }

  const percentPath = () => {
    const argFlag = parseFloat(percent) > 50 ? 1 : 0
    const endPointX = radius * Math.sin(percentToDegree())
    const endPointY = radius - radius * Math.cos(percentToDegree())

    return `M ${cx} ${cy} m 0 -${radius} a ${radius} ${radius} 0 ${argFlag} 1 ${endPointX} ${endPointY}`
  }

  return (
    <Svg width="100%" height="100%" viewBox="0 0 120 120">
      <Circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={trailColor}
        strokeWidth={strokeWidth}
      />
      <Path
        d={percentPath()}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    </Svg>
  )
}

PercentCircle.propTypes = {
  percent: PropTypes.number.isRequired,
}

export default PercentCircle
