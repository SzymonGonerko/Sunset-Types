import React from "react"
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 250px;
    height: 400px;
    background-Color: #212224;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`

export const Grid: any = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 50px);
    grid-template-rows: repeat(6, 50px);
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
