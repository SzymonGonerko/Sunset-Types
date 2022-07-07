import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 270px;
    height: 420px;
    background-color: ${props => props.theme.bgcForm};
    border: ${props => props.theme.borderForm};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`

export const Grid: any = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 55px);
    grid-template-rows: repeat(6, 55px);
    gap: 10px;
    justify-content: center;
`
export const Display = styled.div`
    background-color: ${props => props.theme.bgcDisplay};
    color: ${props => props.theme.colorDisplay};
    line-height: 50px;
    font-size: 25px;
    padding-right: 10px;
    border-radius: 10px;
    text-align: right;
    grid-column-end: span 4;
`
