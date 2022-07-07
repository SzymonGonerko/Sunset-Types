import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 270px;
    height: 420px;
    background-Color: #212224;
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
    background-color: black;
    color: white;
    line-height: 50px;
    padding-right: 10px;
    border-radius: 10px;
    text-align: right;
    grid-column-end: span 4;
`
