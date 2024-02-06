import React from "react";

import WelcomeScreen from "./pages/welcomScreen/WelcomeScreen";
import HomePage from "./pages/Home/HomePage";
import Signup from "./components/sign-up/Signup";
import CreateWardrobe from "./pages/AsGuest/createWardrobe/CreateWardrobe";
import GeneratedResult from "./pages/AsGuest/genratedWardrobe/GenratedResult";
import FavoritesProduct from "./pages/Favorites/FavoritesProduct";
import WardrobeOne from "./pages/Wardrobe/WardrobeOne";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from './Routes/PrivateRoute';


function App() {

  return (
    
    <Router>
      <Routes>
   
        < Route path="/" element={<PrivateRoute />} />
        {/* Other routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/createwardrobe" element={<CreateWardrobe />} />
        <Route path="/guestresult" element={<GeneratedResult />} />
        <Route path="/favourite" element={<FavoritesProduct />} />
        <Route path="/wardroberesults" element={<WardrobeOne />} />
      
        {/* Redirect any unknown routes to the homepage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>

  );
}

export default App;