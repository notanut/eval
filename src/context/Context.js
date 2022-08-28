import React, { useState } from "react";
import data from "../data"

const Context = React.createContext();

const ContextProvider = ({ children }) => {
    const [index, setIndex] = useState(0)
    const qna = data[index]
    const [score, setScore] = useState(1)
    const [correctAnswer, setCorrectAnswer] = useState(0)


    const [result, setResult] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const [exp, setExp] = useState(0)
    const [showExp, setShowExp] = useState(false)
    const explain = data[exp]


    const handleOption = (isCorrect) => {
        if (isCorrect) {
            let addScore = score + 1
            setScore(addScore)
            setCorrectAnswer(correctAnswer+1)
        }

        let nextIndex = index + 1
        if ((nextIndex) < data.length) {
            setIndex(nextIndex)
        } else {
            if (correctAnswer === 0) {
                setResult(0)
            } else {
                setResult(Math.round((score / data.length) * 100))
            }
            setShowResult(true)
            // navigate("/result")
        }
    }



    const handleBack = () => {
        if (exp > 0) {
            setExp(exp - 1)
        } 
    }

    const handleNext = () => {
        if (exp < 14) {
            setExp(exp + 1)
        } else {
            window.location.reload()
        }
    }





    return (
        <Context.Provider value={{
            index,
            setIndex,
            qna,
            handleOption,
            score,
            result,
            exp,
            explain,
            handleBack,
            handleNext,
            showExp,
            setShowExp,
            showResult

        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }