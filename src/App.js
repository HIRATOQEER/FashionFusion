import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import WelcomeScreen from "./pages/welcomScreen/WelcomeScreen";
import CreateWardrobe from "./pages/AsGuest/createWardrobe/CreateWardrobe";
import GenratedResult from "./pages/AsGuest/genratedWardrobe/GenratedResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="./pages/signUp/SignUps" element={<SignUp />} />
        <Route
          exact
          path="welcome"
          element={<WelcomeScreen />}
        />
        <Route
          exact
          path="./pages/AsGuest/createWardrobe/CreateWardrobe"
          element={<CreateWardrobe />}
        />
        <Route exact path="/" element={<GenratedResult />} />
      </Routes>
    </Router>
  );
}

export default App;
