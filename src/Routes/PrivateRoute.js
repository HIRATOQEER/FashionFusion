import React from 'react';
import WelcomeScreen from '../pages/welcomScreen/WelcomeScreen';
import HomePage from '../pages/Home/HomePage';
import {  useSelector } from 'react-redux';



function PrivateRoute({ path }) {
 

   const accessToken =  useSelector(state => state.name);

  console.log(accessToken)
  if (!accessToken) {
    return <WelcomeScreen />;
  }

    return <HomePage />;
  

}

export default PrivateRoute;
