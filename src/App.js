import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
