import { ContextProvider} from "./context/Context";
import Question from "./components/Question";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Explanation from "./components/Explanation";
import Result from "./components/Result";

function App() {
  return (
      <ContextProvider>
        <main>
          <Question />
        </main>
      </ContextProvider>
  );
}

export default App;
