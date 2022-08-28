import { useContext } from "react"
import { Context } from "../context/Context"
import Explanation from "./Explanation"

const Result = () => {
  const context = useContext(Context)
  return (
    <>
    {context.showExp ? <Explanation /> : (
      <section className="result">
        <h1>skor anda: <br /> {context.result}</h1>
        <div className="choices">
          <button className="exp" onClick={() => context.setShowExp(true)}>lihat pembahasan</button>
          <button className="try" onClick={() => window.location.reload()}>coba ulang</button>
        </div>
      </section>
    )}
    </>
  )
}

export default Result