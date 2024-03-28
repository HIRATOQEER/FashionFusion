import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store"; // Importing named exports

import PrivateRoute from "./Routes/PrivateRoute";
import { PersistGate } from "redux-persist/integration/react";
import Signup from "./components/sign-up/Signup";
import CreateWardrobe from "./pages/AsGuest/createWardrobe/CreateWardrobe";
import GeneratedResult from "./pages/AsGuest/genratedWardrobe/GenratedResult";
import FavoritesProduct from "./pages/Favorites/FavoritesProduct";
import WardrobeOne from "./pages/Wardrobe/WardrobeOne";
import WardrobeOneResult from "./components/WardrobeResult/WardrobeOneResult";
import GuestGenrateForm from "./components/genrateForm/GuestGenrateForm";
import GuestCreateWardrobe from "./pages/AsGuest/createWardrobe/guestCreateWardrobe";
import AddProduct from "./components/Modals/AddProduct";

function App() {
  return (
    <Provider store={store}>
       
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createwardrobe" element={<CreateWardrobe />} />
          <Route path="/guestresult" element={<GeneratedResult />} />
          <Route path="/favourite" element={<FavoritesProduct />} />
          <Route path="/wardroberesults" element={<WardrobeOne />} />
          <Route path="/wardrobe-one-result" element={<WardrobeOneResult />} />
          <Route path="/GuestGeneratedForm" element={<GuestGenrateForm />} />
          <Route path="/GuestCreateWardrobe" element={<GuestCreateWardrobe />} />
          <Route path="/Add" element={<AddProduct/>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
