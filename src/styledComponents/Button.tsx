import React from "react"
import styled from "styled-components"


const StyledButtonNum = styled.button`
border-radius: 50px;
border: none;
background-color: ${props => props.theme.bgcBtn};
color: ${props => props.theme.numColor};
box-shadow: 8px 8px 24px -10px rgba(0, 0, 0, 1);
font-weight: 800;
font-size: 20px;
`

const StyledButtonOperator = styled.button`
border-radius: 50px;
border: none;
background-color: ${props => props.theme.bgcBtn};
color: ${props => props.theme.operatorColor};
box-shadow: 8px 8px 24px -10px rgba(0, 0, 0, 1);
font-weight: 800;
font-size: 20px;
`

const StyledButtonSum = styled.button`
border-radius: 50px;
border: none;
background-color: ${props => props.theme.bgcBtnSum};
color: ${props => props.theme.btnColorSum};
box-shadow: 8px 8px 24px -10px rgba(0, 0, 0, 1);
font-weight: 800;
font-size: 20px;
`

type Props = {
    label?: string;
    width?: number;
    height?: number;
    onClick?: (e: any ) => void;
    key?: string;
    type?: string
}


export const Button = ({label, width, height, type , ...props} : Props) => {
  const styles: React.CSSProperties = {}


  if (width) styles.gridColumnEnd = `span ${width}`
  if (height) styles.gridRowEnd = `span ${height}`
  
return (<>
    {type === "number" && <StyledButtonNum {...props} style={styles}>{label}</StyledButtonNum>}
    {type === "operator" && <StyledButtonOperator {...props} style={styles}>{label}</StyledButtonOperator>}
    {type === "sum" && <StyledButtonSum {...props} style={styles}>{label}</StyledButtonSum>}
</>)
}

