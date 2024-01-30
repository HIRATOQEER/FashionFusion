import React from "react";
import WelcomeScreen from "./pages/welcomScreen/WelcomeScreen";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./components/sign-up/Signup";
import HomePage from "./pages/Home/HomePage";
import CreateWardrobe from "./pages/AsGuest/createWardrobe/CreateWardrobe";
import GeneratedResult from "./pages/AsGuest/genratedWardrobe/GenratedResult";
import FavoritesProduct from "./pages/Favorites/FavoritesProduct";
import WardrobeOne from "./pages/Wardrobe/WardrobeOne";


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<WelcomeScreen />} />
     
        <Route path="/signup" element={<Signup/>} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/createwardrobe" element={<CreateWardrobe/>} />
        <Route path="/guestresult" element={<GeneratedResult/>} />
        <Route path="/favourite" element={<FavoritesProduct/>} />
        <Route path="/wardroberesults" element={<WardrobeOne/>} />
     
      
      </Routes>
    </Router>
  );
}

export default App;