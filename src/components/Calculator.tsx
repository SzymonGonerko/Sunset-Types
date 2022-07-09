import React, {FormEvent} from "react"
import {Container, Grid, Display} from "../styledComponents/CalculatorStyles"
import {Button} from "../styledComponents/Button"
import {setOperator, setDisplay, getSum} from "../features/operationsSlice";
import {nanoid} from "nanoid"
import {ThemeProvider} from "styled-components"
import {themeCalculator} from "../styledComponents/theme"

const glyphs: string[] = ["C", "/", "X", "<=", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "= in Sky", "0"]

interface Calculator {
    operations: { display?: string | undefined; operator?: string | undefined; expression?: string[] | undefined};
    dispatch: any
    isDarkMood?: string
}


export const Calculator = ({operations, dispatch, isDarkMood}: Calculator) => {

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
        <ThemeProvider theme={(isDarkMood === "sunset" ? themeCalculator.light : themeCalculator.dark)}>
        <form>
            <Container>
                <Grid>
                    <Display>{operations?.display}</Display>
                    {glyphs.map((el) => {
                        if (el === "0") {
                            return <Button type="number" key={nanoid()} onClick={handleClickNum(el)} label={el} />
                        }

                        if (el === "= in Sky") {
                             return <Button type="sum" key={nanoid()} onClick={handleClickSumInSky} label={el} width={2} />
                        }

                        if (el === "=") {
                            return <Button type="sum" key={nanoid()} onClick={handleClickSum} label={el} height={2}/>
                        }

                        if (parseInt(el).toString() === "NaN") 
                              {return <Button type="operator" key={nanoid()} onClick={handleClickOperator(el)} label={el} />}
                        else  {return <Button type="number" key={nanoid()} onClick={handleClickNum(el)} label={el} />}})}

                </Grid>
            </Container>
        </form>
        </ThemeProvider>
    )
}
