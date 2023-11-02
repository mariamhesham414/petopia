import { Typography } from "@mui/material";
import React from "react";
import "./SectionTwo.css";
import SecTwoText from "../SecTwoText/SecTwoText";
import Pets from "../../assets/pets.svg";
import Pet from "../../assets/pet.svg";
import CannedFood from "../../assets/canned-food.svg";
import ShoppingBag from "../../assets/shopping-bag.svg";
const SectionTwo = () => {
  return (
    <>
      <Typography
        variant="div"
        component="div"
        color="initial"
        className="purpleDiv"
        sx={{ mt: 4, mb: 4, display: "flex", alignItems: "center" }}
        height={"200px"}
        width={"100%"}
      >
        <Typography
          className="dots"
          sx={{
            width: "fit-content",
            p: 2,
            zIndex: 2,
            position: "absolute",
            left: "200px",
          }}
        >
          <svg
            width="1110"
            height="157"
            viewBox="0 0 1310 157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="1305" cy="53.5" rx="5" ry="5.5" fill="#7C58D3" />
            <ellipse cx="1032" cy="6.5" rx="5" ry="5.5" fill="#FFDA47" />
            <ellipse cx="533" cy="6.5" rx="5" ry="5.5" fill="#FF47A2" />
            <ellipse cx="659" cy="113.5" rx="5" ry="5.5" fill="#FFDA47" />
            <ellipse cx="5" cy="151.5" rx="5" ry="5.5" fill="#7C58D3" />
            <ellipse cx="30" cy="5.5" rx="5" ry="5.5" fill="#FF47A2" />
            <ellipse cx="299" cy="133.5" rx="5" ry="5.5" fill="#FFDA47" />
          </svg>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <SecTwoText twoH1="120+" twop="Sutisfide Cliens" svg={Pets} />
          <SecTwoText twoH1="120+" twop="Sutisfide Cliens" svg={Pet} />
          <SecTwoText twoH1="120+" twop="Sutisfide Cliens" svg={CannedFood} />
          <SecTwoText twoH1="120+" twop="Sutisfide Cliens" svg={ShoppingBag} />
        </Typography>
      </Typography>
    </>
  );
};

export default SectionTwo;
