import React from "react";
import "./Product.css";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
const Product = (props) => {
  return (
    <>
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ mr: 3 }}>
          <img src={props.prdImg} alt={props.prdImg} />
        </Typography>
        <Typography>
          <Typography className="prdName">{props.prdName}</Typography>
          <Typography sx={{ mt: 1, mb: 1 }}>
            <Rating name="half-rating" defaultValue={5} precision={0.5} />
          </Typography>
          <Typography className="prdPrice">{props.prdPrice}</Typography>
        </Typography>
      </Typography>
    </>
  );
};

export default Product;
