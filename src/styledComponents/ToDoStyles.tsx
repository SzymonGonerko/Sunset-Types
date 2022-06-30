import { StyledComponent } from "@emotion/styled";
import styled from "styled-components";


export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 230px;
height: 300px;
background-color: ${props => props.theme.bgcForm};
border: ${props => props.theme.borderForm};
border-radius: 20px;
transition: 0.2s;
`

export const Ul = styled.ul`
    height: 50%;
    width: 90%;
    background-color: ${props => props.theme.bgcUl};
    overflow-y: scroll;
    border-radius: 5px;
    transition: 0.2s;
`

export const Header = styled.header`
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bgcHeader};
    border-radius: 10px;
    width: 50%;
    height: 30px;
    text-align: center;
    line-height: 28px;
    font-size: 20px;
    transition: 0.2s;
`

export const AddTaskWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`

export const TextInput = styled.input`
    outline: none;
    caret-color: #00ff00;
    background-color: ${props => props.theme.bgcTextInput};
    border: none;
    border-radius: 5px;
    padding-left: 5px;
    color: ${props => props.theme.color};
    transition: 0.2s;
`

export const CircleDiv = styled.div`
    border-radius: 50px;
    background-color: #e6b800;
    background-repeat: no-repeat;
    background-position: center;
    width: 30px;
    height: 30px;
    transition: 0.2s;
`

export const Li = styled.li`
    color: ${props => props.theme.color};
    margin: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ClearInput = styled.input`
    width: 90%;
    height: 25px;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bgcClearInput};
    transition: 0.2s;
    &&:hover {
        background-color: rgb(252, 130, 130);
    }
`