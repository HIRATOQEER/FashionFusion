import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import WelcomeScreen from "./pages/welcomScreen/WelcomeScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="./pages/signUp/SignUps" element={<SignUp />} />
        <Route exact path="/" element={<WelcomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
