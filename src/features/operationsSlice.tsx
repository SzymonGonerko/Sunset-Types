import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Operation {
  display?: string  
  operator?: string 
  expressions?: string [] 
  lastExpression: any
  sumInSky?: boolean
  elementsInSky?: any[]
}

export const OperationsSlice = createSlice({
  name: "operations",
  initialState: {display: "", operator: "", expressions: [], lastExpression: "", sumInSky: false, elementsInSky: [] } as Operation,
  reducers: {

    setOperator: (state, action: PayloadAction<{display?: string; operator?: string; expression?: string}>) => {
        if (state.display === undefined) return
        state.operator = action.payload.operator

        if (state.operator === "<=") {
          try {
            const str = state.display.slice(0, -1)
            const lastEx = state.lastExpression.slice(0, -1)
  
            if (state.lastExpression === "") state.expressions?.pop()
      
            state.display = str
            state.lastExpression = lastEx
          } catch (e) {
            console.warn("Nie można zredukować wyniku. Można natomiast wykonać dodatkowe działanie na otrzymanym wyniku tj. +, -, /, X")
          }
        }

        if (state.operator === "C") {
          state.display = ""; 
          state.operator = ""; 
          state.expressions = []; 
          state.lastExpression = ""; 
          state.sumInSky = false
          state.elementsInSky = []
        }

        if (state.operator === "+" || state.operator === "-" || state.operator === "X" || state.operator === "/") {
            if (state.lastExpression !== "") state.expressions?.push(state.lastExpression)
            state.expressions?.push(state.operator)
            state.display += action.payload.operator
            state.lastExpression = ""
        }
    },

    setDisplay: (state, action: PayloadAction<any>) => {
        state.display += action.payload.display
        state.lastExpression += action.payload.display
    },

    getSum: (state, action: PayloadAction<{sumInSky?: boolean}>) => {
        if (state.expressions === undefined) return


          state.expressions.push(state.lastExpression)
          const all = state.expressions.map(el => el)
          console.log(all)
        

          const onlyDivideAndMultiplication = all.filter((_,i) => !((all[i-1] !== "X" && all[i+1] !== "X" && all[i] !== "X") && (all[i-1] !== "/" && all[i+1] !== "/" && all[i] !== "/")))
          const filtered = all.filter((_,i) => (all[i-1] !== "X" && all[i+1] !== "X" && all[i] !== "X") && (all[i-1] !== "/" && all[i+1] !== "/" && all[i] !== "/"))




          const resultDivideAndMultiplication: (number | string) [] = []
          onlyDivideAndMultiplication.forEach((el, i ) => {if (parseInt(el).toString() !== "NaN" && parseInt(onlyDivideAndMultiplication[i+1]).toString() !== "NaN" ||  onlyDivideAndMultiplication[i+1] === undefined) {
            let j : number = i

            const eachOneExpression :  any [] = []

            while (onlyDivideAndMultiplication[j-1] === "X" || onlyDivideAndMultiplication[j-1] === "/") {
              eachOneExpression.push(onlyDivideAndMultiplication[j-1], onlyDivideAndMultiplication[j-2])
              j -= 2
            }
            eachOneExpression.reverse()
            eachOneExpression.push(onlyDivideAndMultiplication[i])
            console.log(eachOneExpression)

            const operators = eachOneExpression.filter(el => el === "/" || el === "X" )
            const numbers = eachOneExpression.filter(el => (parseInt(el).toString() !== "NaN"))

            const getDivideAndMultiply = numbers.reduce((total : number, item: number, i : number): (number|undefined) => {
              if (i === 0) {
                 if (operators[i] === "X") return item * total
                 if (operators[i] === "/") return item / total
              }

              if (i > 0) {
                 item = numbers[i+1]
                 if (operators[i] === "X") return total * item
                 if (operators[i] === "/") return total / item

                 if (item === undefined) {
                     return total
                 }
             }
           }, numbers[1]);
          resultDivideAndMultiplication.push(getDivideAndMultiply)
          }})
          resultDivideAndMultiplication.reverse()






          const resultWithDivideAndMulti: any[] = []
          filtered.forEach((el, i) => {
            if (parseInt(el).toString() === "NaN") {
                if (parseInt(filtered[i-1]).toString() === "NaN") resultWithDivideAndMulti.push(resultDivideAndMultiplication.pop())
                    resultWithDivideAndMulti.push(el)
          } else {
            resultWithDivideAndMulti.push(el)}})

          if (parseInt(resultWithDivideAndMulti[resultWithDivideAndMulti.length-1]).toString() === "NaN") {
            resultWithDivideAndMulti.push(resultDivideAndMultiplication.pop())
          }
      

          console.log(resultWithDivideAndMulti)
          
          const toNum = resultWithDivideAndMulti.map((el, _ ) => {
            if (parseInt(el).toString() !== "NaN") {

              if (typeof el !== "number") {
                return parseInt(el)
              } else {return el}
              
            } else {return el}})


          console.log(toNum)
          const operators = toNum.filter(el => el === "+" || el === "-")
          const numbers = toNum.filter(el => (parseInt(el).toString() !== "NaN"))

        
            const sumOrSubtraction = numbers.reduce((total : number, item: number, i : number): (number|undefined) => {
                 if (i === 0) {
                    if (operators[i] === "+") return item + total
                    if (operators[i] === "-") return item - total
                 }

                 if (i > 0) {
                    item = numbers[i+1]
                    if (operators[i] === "+") return total + item
                    if (operators[i] === "-") return total - item


                    if (item === undefined) {
                        return total
                    }
                }
              }, numbers[1]);


              state.operator = ""; 
              state.expressions = []; 
              state.lastExpression = sumOrSubtraction;
              state.elementsInSky = []

              state.display = sumOrSubtraction
              
              if (resultWithDivideAndMulti.length === 1) {
                  state.display = resultWithDivideAndMulti[0]
                  state.lastExpression = resultWithDivideAndMulti[0]
                  state.elementsInSky = []
              }

              if (action.payload.sumInSky && state.elementsInSky) {
                  let i: any = state.display
                  while (i > 0) {
                    state.elementsInSky.push(i)
                    i--
                  }
                  state.sumInSky = action.payload.sumInSky
              }
              
    },
       
  },


});

export const { setOperator, setDisplay, getSum } = OperationsSlice.actions;

export default OperationsSlice.reducer;