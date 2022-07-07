import React, { FormEventHandler, ChangeEvent, FormEvent, useState, useId, useRef, Dispatch} from "react"
import {Container, Grid, Display} from "../styledComponents/CalculatorStyles"
import {Button} from "../styledComponents/Button"
import { setOperator, setDisplay, getSum } from "../features/operationsSlice";
import {nanoid} from "nanoid"

const glyphs: string[] = ["C", "/", "X", "<=", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "= in Sky", "0"]

interface Calculator {
    operations: { display?: string | undefined; operator?: string | undefined; expression?: string[] | undefined};
    dispatch: any
}


export const Calculator = ({operations, dispatch}: Calculator) => {

    const handleClickOperator = (operator: string) => (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        dispatch(setOperator({operator: operator}))
    }

    const handleClickNum = (value: string) => (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        dispatch(setDisplay({display: value}))
    }

    const handleClickSum = (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        dispatch(getSum({}))
    }

    const handleClickSumInSky = (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        dispatch(getSum({sumInSky: true}))
    }


    return (
        <form>
            <Container>
                <Grid>
                    <Display>{operations?.display}</Display>
                    {glyphs.map((el) => {
                        if (el === "0") {
                            return <Button key={nanoid()} onClick={handleClickNum(el)} label={el} color={"#dfe1df"}/>
                        }

                        if (el === "= in Sky") {
                             return <Button key={nanoid()} onClick={handleClickSumInSky} label={el} width={2} color={"#dfe1df"}/>
                        }

                        if (el === "=") {
                            return <Button key={nanoid()} onClick={handleClickSum} label={el} bgcColor={"#297ff9"} color={"white"} height={2}/>
                        }

                        if (parseInt(el).toString() === "NaN") 
                              {return <Button key={nanoid()} onClick={handleClickOperator(el)} label={el} color={"#297ff9"}/>}
                        else  {return <Button key={nanoid()} onClick={handleClickNum(el)} label={el} color={"#dfe1df"}/>}})}

                </Grid>
            </Container>
        </form>
    )
}
