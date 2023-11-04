import React from "react";
import HeaderInfo from "../Components/HeaderInfo/HeaderInfo";
import Navbar from "../Components/Navbar/Navbar";
import Ovals from "../Components/Ovals/Ovals";
const Header = () => {
  return (
    <>
      <HeaderInfo />
      <Ovals />
      <div style={{ paddingLeft: "12%", paddingRight: "12%" }}>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
