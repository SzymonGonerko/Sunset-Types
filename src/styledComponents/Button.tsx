import React, {useEffect} from "react"
import styled from "styled-components"

const StyledButton = styled.button`
border-radius: 50px;
border: none;
background-color: #25292c;
box-shadow: 8px 8px 24px -10px rgba(0, 0, 0, 1);
font-weight: 800;
`

type Props = {
    label?: string;
    position?: [x: number, y: number];
    width?: number;
    height?: number;
    color: string;
    bgcColor?: string
}


export const Button = ({label, position, width, height, color, bgcColor} : Props) => {
  const styles: React.CSSProperties = {}

  if (bgcColor) styles.backgroundColor = bgcColor
  if (color) styles.color = color
  if (width) {
    styles.gridColumnEnd = `span ${width}`
  }
  if (height) {
    styles.gridRowEnd = `span ${height}`
  }

  if (position) {
    styles.gridColumnStart = position[0];
    styles.gridRowStart = position[1]
  }

  
return <StyledButton style={styles}>{label}</StyledButton>
}

