import styled from "styled-components";


export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 230px;
height: 300px;
background-color: rgb(25 24 23 / 90%);
border-radius: 20px;
`

export const Ul = styled.ul`
    height: 50%;
    width: 90%;
    background-color: rgb(25 24 23 / 80%);
    overflow-y: scroll;
    border-radius: 5px;
`

export const Header = styled.header`
    color: white;
    background-color: #e6b800;
    border-radius: 10px;
    width: 50%;
    text-align: center;
`

export const AddTaskWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`

export const TextInput = styled.input`
    outline: none;
    caret-color: #00ff00;
    background-color: rgb(25 24 23 / 80%);
    border: none;
    border-radius: 5px;
    padding-left: 5px;
    color: white;
`

export const CircleDiv = styled.div`
    border-radius: 50px;
    background-color: #e6b800;
    background-repeat: no-repeat;
    background-position: center;
    width: 30px;
    height: 30px;
`

export const ClearInput = styled.input`
    width: 90%;
    height: 25px;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;
    background-color: rgb(255, 153, 153);
    transition: 0.2s;
    &&:hover {
        background-color: rgb(252, 130, 130);
    }
`