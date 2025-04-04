import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Benchmark from "./Benchmark"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/benchmark" element={<Benchmark />} />
      </Routes>
    </Router>
  );
}

export default App;
