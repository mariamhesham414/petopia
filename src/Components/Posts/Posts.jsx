import React from "react";
import "./Posts.css";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa6";

const Posts = (props) => {
  return (
    <>
      <Typography sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          className="bgImage"
          id={props.class}
          sx={{
            height: "260px",
          }}
        >
          <Typography
            align="center"
            sx={{ position: "relative", left: "127px", top: "-14px" }}
          >
            <Button className="postBtn">{props.btn}</Button>
          </Typography>
        </Typography>
        <Typography sx={{ p: 1, pt: 2 }}>
          <Grid container spacing={1} columns={16}>
            <Grid>
              <FaUser color="#7C58D3" style={{ marginRight: "5px" }} />
              <Typography component="span" className="iconText">
                by Corabelle Durrad
              </Typography>
            </Grid>
            <Grid>
              <FaCalendarDay
                color="#7C58D3"
                style={{ marginRight: "5px", marginLeft: "25px" }}
              />
              <Typography component="span" className="iconText">
                02.01.2022
              </Typography>
            </Grid>
          </Grid>
        </Typography>
        <Typography className="postHead">{props.head}</Typography>
        <Typography className="postP">{props.p}</Typography>
      </Typography>
    </>
  );
};

export default Posts;
