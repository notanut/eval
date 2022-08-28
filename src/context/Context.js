import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data"

const Context = React.createContext();

const ContextProvider = ({ children }) => {
    const [index, setIndex] = useState(0)
    const qna = data[index]
    const [score, setScore] = useState(1)
    const [correctAnswer, setCorrectAnswer] = useState(0)

    const [result, setResult] = useState(0)

    const [exp, setExp] = useState(0)
    const explain = data[exp]
    let navigate = useNavigate()


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
            navigate("/result")
        }
    }

    const backHome = () => {
        navigate("/")
        window.location.reload()
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
            backHome()
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
            backHome

        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }