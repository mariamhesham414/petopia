import React from "react";
import HeaderInfo from "../Components/HeaderInfo/HeaderInfo";
import Navbar from "../Components/Navbar/Navbar";
const Header = () => {
  return (
    <>
      <HeaderInfo />
      <div style={{ paddingLeft: "12%", paddingRight: "12%" }}>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
