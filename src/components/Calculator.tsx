import React from "react"
import {Container, Grid, Display} from "../styledComponents/CalculatorStyles"
import {Button} from "../styledComponents/Button"

export const Calculator: React.FC<{}> = () => {
const glyphs: string[] = ["C", "/", "X", "🔙", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "%", "0", ","]

    return (
        <form>
            <Container>
                <Grid>
                    <Display>521</Display>
                    {glyphs.map((el) => {
                        if (parseInt(el).toString() === "NaN" && el !== "%" && el !== ",") 
                            {if (el === "=") return <Button label={el} bgcColor={"#297ff9"} color={"white"} height={2}/>
                                return <Button label={el} color={"#297ff9"}/>
                            }
                        else {return <Button label={el} color={"#dfe1df"}/>}})}

                </Grid>
            </Container>
        </form>
    )
}
