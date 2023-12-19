import React from "react";
import "./Ovals.css";
import RightOvals from "../../assets/rightOvals.svg";
import LeftOvals from "../../assets/leftOvals.svg";
import Typography from "@mui/material/Typography";

const Ovals = () => {
  return (
    <>
      <Typography sx={{ position: "absolute", left: "1250px", top: "85px" }}>
        <img src={RightOvals} alt="RightOvals" />
      </Typography>
      <Typography sx={{ position: "absolute", left: "25px", top: "450px" }}>
        <img src={LeftOvals} alt="LeftOvals" />
      </Typography>
    </>
  );
};

export default Ovals;
