import people from "../images/group-people.png"
import { useContext } from "react"
import { Context } from "../context/Context"

const Explanation = () => {
  const context = useContext(Context)
  const { id, question, img, answer, pembahasan } = context.explain
  return (
    <section className="explanations">
        <article className="explanations__qna">
          <h1>soal #{id}</h1>
          <p>{question}</p>
          {img !== "" && <img src={img} alt="pen tool" />}
          <h2>jawaban:</h2>
          <div className="option">
            <span>{answer.option}</span>
            {answer.optionText}
          </div>
        </article>

        <article className="explanations__explanation">
          <h2>pembahasan:</h2>
          <p>{pembahasan}</p>
          <img src={people} alt="group of people" />

          <div className="directions">
            <button className={`back ${context.exp === 0 && "hidden"}`} onClick={() => context.handleBack()}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" fill="currentColor" stroke="currentColor"/></svg>
            </button>

            <button className={`next`} onClick={() => context.handleNext()}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"  fill="currentColor" stroke="currentColor"/></svg>
            </button>
          </div>
        </article>
    </section>
  )
}

export default Explanation