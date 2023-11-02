import React from "react";
import Typography from "@mui/material/Typography";
import "./Benifits.css";

const Benifits = (props) => {
  return (
    <>
      <Typography
        variant="body1"
        component="div"
        color="initial"
        style={{
          width: "50px",
          height: "50px",
          background: "#FBF9FF",
          borderRadius: 8,
          border: "2px #EBE5F7 solid",
        }}
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: 2,
        }}
      >
        {props.icon}
      </Typography>
      <Typography
        sx={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography className="benH1">{props.h1}</Typography>
        <Typography className="benP">{props.p}</Typography>
      </Typography>
    </>
  );
};

export default Benifits;
