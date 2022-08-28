import { useContext } from "react"
import { Context } from "../context/Context"

const Question = () => {
  const context = useContext(Context)
  const { id, question, img, options} = context.qna
  return (
    <>
      <section className="questions">
        <article className="questions__question">
            <h1>soal #{id}</h1>
            <p>{question}</p>
            {img !== "" && <img src={img} alt="tool" />}
      </article>
      <article className="questions__options">
        {options.map(((option, index) => (
          <button key={index} onClick={() => context.handleOption(option.isCorrect)}>
            <span>{option.option}</span>
            {option.optionText}
          </button>
        )))}
      </article>
    </section>
    </>
  )
}

export default Question