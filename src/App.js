import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import WelcomeScreen from "./pages/welcomScreen/WelcomeScreen";
import CreateWardrobe from "./pages/AsGuest/createWardrobe/CreateWardrobe";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="./pages/signUp/SignUps" element={<SignUp />} />
        <Route
          exact
          path="./pages/welcomScreen/WelcomeScreen"
          element={<WelcomeScreen />}
        />
        <Route exact path="/" element={<CreateWardrobe />} />
      </Routes>
    </Router>
  );
}

export default App;
