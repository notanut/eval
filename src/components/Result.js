import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../context/Context"

const Result = () => {
  const context = useContext(Context)
  let navigate = useNavigate()
  return (
    <section className="result">
      <h1>skor anda: <br /> {context.result}</h1>
      <div className="choices">
        <button className="exp" onClick={() => navigate("/explanation")}>lihat pembahasan</button>
        <button className="try" onClick={() => context.backHome()}>coba ulang</button>
      </div>
    </section>
  )
}

export default Result