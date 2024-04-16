
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import UserSideBar from "../../components/Sidebar/UserSideBar";
import HomeHeader from "../../components/headers/HomeHeader";
import WardrobeOneResult from "../../components/WardrobeResult/WardrobeOneResult";
import WelcomeHeader from "../../components/headers/WelcomeHeader";

import { useParams } from "react-router-dom";
import {  useSelector } from 'react-redux';
import SaveWardrobe from "../../services/saveWardrobe";
const WardrobeOne = () => {
 

  const { wardrobeId } = useParams();
  const accessToken =  useSelector(state => state.token);
const [wardrobes, setWardrobe] = useState([]);
  const userId = "user123";
  useEffect(() => {
    const fetchWardrobe = async () => {
      try {
        const data = await SaveWardrobe.getSaveWardrobeById(accessToken , wardrobeId);
        console.log("wardrobedata1mmmmm", data);
        setWardrobe(data); // Update state with fetched wardrobe products data
      } catch (error) {
        console.error("Error fetching wardrobe products:", error);
        // Handle error or set an error state
      }
    };

    fetchWardrobe();
  }, [userId, accessToken]); 
  
  return (
    <>
   {console.log("ghhhhhhhhhh",wardrobeId)}
      <div className="crtWrdbMain">
        <div className="d-lg-none">
          <WelcomeHeader />
        </div>
        <HomeHeader />
        <Row className="m-0 p-0 pe-3">
          <Col lg={2} className="ps-0">
            <UserSideBar />
          </Col>
          <Col xs={12} lg={10} className="pe-0">
            <div className="genratedResult">
            <WardrobeOneResult wardrobe={wardrobes} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WardrobeOne;
