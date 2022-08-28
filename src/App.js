import { ContextProvider} from "./context/Context";
import Question from "./components/Question";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Explanation from "./components/Explanation";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <ContextProvider>
        <main>
          <Routes>
            <Route path="/" element={<Question />} />
            <Route path="/result" element={<Result />} />
            <Route path="/explanation" element={<Explanation />} />
          </Routes>
        </main>
      </ContextProvider>
    </Router>
  );
}

export default App;
