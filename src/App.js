import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import WelcomeScreen from "./pages/welcomScreen/WelcomeScreen";
import CreateWardrobe from "./pages/AsGuest/createWardrobe/CreateWardrobe";
import GenratedResult from "./pages/AsGuest/genratedWardrobe/GenratedResult";
import UserCreateWrdb from "./pages/LogedIn/UserCreateWrdb";

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
        <Route
          exact
          path="./pages/AsGuest/createWardrobe/CreateWardrobe"
          element={<CreateWardrobe />}
        />
        <Route
          exact
          path="./pages/AsGuest/genratedWardrobe/GenratedResult"
          element={<GenratedResult />}
        />
        <Route exact path="/" element={<UserCreateWrdb />} />
      </Routes>
    </Router>
  );
}

export default App;
