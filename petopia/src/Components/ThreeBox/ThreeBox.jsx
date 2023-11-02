import React from "react";
import "./ThreeBox.css";
import Typography from "@mui/material/Typography";
import { IoMdArrowRoundForward } from "react-icons/io";
// import Path from "../../assets/Path.svg";
// import Paws from "../../assets/Paws.svg";

const ThreeBox = (props) => {
  return (
    <>
      <Typography className="threeBox" sx={{ mb: 1 }}>
        <Typography sx={{ p: 4 }}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ mr: 1 }} className="boxImg">
              <img src={props.img} alt={props.img} />
            </Typography>
            <Typography sx={{ mr: 1 }} className="boxHead">
              {props.head}
            </Typography>
          </Typography>
          <Typography sx={{ mt: 2, mb: 2 }} className="boxText">
            {props.text}
          </Typography>
          <Typography sx={{ mb: 2 }} className="boxPrice">
            {props.price}
          </Typography>
          <Typography
            className="boxService"
            sx={{ display: "flex", alignItems: "center" }}
          >
            Get Service <IoMdArrowRoundForward />
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};

export default ThreeBox;
