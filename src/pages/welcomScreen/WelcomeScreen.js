import React from "react";
import WelcomeHeader from "../../components/headers/WelcomeHeader";
import SaveCard from "../../components/Cards/SaveCard";
import BrandChoose from "../../components/brandChoose/BrandChoose";
import ChooseCategory from "../../components/choosecategory/ChooseCategory";

const WelcomeScreen = () => {
  return (
    <>
      <div className="welcomMain">
        <WelcomeHeader />
        <SaveCard />
        <div className="brandchoseBox">
          <BrandChoose />
          <ChooseCategory />
        </div>

        <img
          className="rightBgsvg"
          src="/images/topright-bg-welcom.svg"
          alt="vector"
        />
      </div>
    </>
  );
};

export default WelcomeScreen;
