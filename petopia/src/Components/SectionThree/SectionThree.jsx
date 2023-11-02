import React from "react";
import "./SectionThree.css";
import Typography from "@mui/material/Typography";
import ThreeBox from "../ThreeBox/ThreeBox";

const SectionThree = () => {
  return (
    <>
      <Typography sx={{ mt: 6 }}>
        <Typography sx={{ textAlign: "center", mb: 1 }} className="threeP">
          OUR SERVICES
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 2 }} className="threeH1">
          All Pet Care Services
        </Typography>
        <ThreeBox />
      </Typography>
    </>
  );
};

export default SectionThree;
