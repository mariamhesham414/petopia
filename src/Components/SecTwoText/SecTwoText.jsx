import React from "react";
import Typography from "@mui/material/Typography";
import "./SecTwoText.css";
const SecTwoText = (props) => {
  return (
    <>
      <Typography sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography className="purpleText" sx={{ mr: 1 }}>
          <img src={props.svg} alt={props.svg} />
        </Typography>
        <Typography
          sx={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography className="secTwoH1">{props.twoH1}</Typography>
          <Typography className="secTwoP">{props.twop}</Typography>
        </Typography>
      </Typography>
    </>
  );
};

export default SecTwoText;
