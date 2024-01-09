import React from "react";
import WelcomeScreen from "./pages/welcomScreen/WelcomeScreen";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginModal from "./components/Modals/LoginModal";
import Signup from "./components/sign-up/Signup";
import HomePage from "./pages/Home/HomePage";
import CreateWardrobe from "./pages/AsGuest/createWardrobe/CreateWardrobe";
import GuestGenratedResult from "./components/guestGenratedResult.js/GuestGenratedResult";
import FavoritesProduct from "./pages/Favorites/FavoritesProduct";
import WardrobeOneResult from "./components/WardrobeResult/WardrobeOneResult";
import WardrobeOne from "./pages/Wardrobe/WardrobeOne";
import ProductDetails from "./components/Modals/ProductDetails";


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<WelcomeScreen />} />
     
        <Route path="/signup" element={<Signup/>} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/createwardrobe" element={<CreateWardrobe/>} />
        <Route path="/guestresult" element={<GuestGenratedResult/>} />
        <Route path="/favourite" element={<FavoritesProduct/>} />
        <Route path="/wardroberesults" element={<WardrobeOne/>} />
        <Route path="/details" element={<ProductDetails/>} />
     
      
      </Routes>
    </Router>
  );
}

export default App;