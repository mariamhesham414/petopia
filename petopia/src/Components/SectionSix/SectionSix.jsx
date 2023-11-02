import React from "react";
import "./SectionSix.css";
import Typography from "@mui/material/Typography";
import OrangeDog from "../../assets/orangeDog.svg";
import GrayDog from "../../assets/GrayDog.svg";
import { Button, Grid, TextField } from "@mui/material";
const SectionSix = () => {
  return (
    <>
      <Typography
        className="sixdiv"
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
          pt: 4,
          pb: 4,
        }}
      >
        <Grid
          container
          spacing={1}
          columns={16}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            left: "-20px",
            top: "10px",
          }}
        >
          <Grid xs={4}>
            <Typography
              sx={{ position: "relative", left: "-150px", top: "50px" }}
            >
              <img src={OrangeDog} alt="OrangeDog" />
            </Typography>
          </Grid>
          <Grid xs={8}>
            {" "}
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography className="sixHead" sx={{ mb: 1 }}>
                Get 20% Off Your First Purchase When You Use Petco Credit Card{" "}
              </Typography>
              <Typography className="sixP" sx={{ mb: 3 }}>
                Sapien nec sagittis aliquam malesuada bibendum arcu vitae
                elementum. Ligula ullamcorper malesuada proin libero nunc
                consequat interdum varius sit.
              </Typography>
              <Typography
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Grid
                  container
                  spacing={1}
                  columns={16}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Grid sx={10}>
                    <Typography>
                      <TextField
                        id="outlined-basic"
                        label="Type your Email"
                        variant="outlined"
                        color="secondary"
                        className="textfield"
                        InputLabelProps={{ className: "textfield__label" }}
                        sx={{}}
                      />
                    </Typography>
                  </Grid>
                  <Grid sx={5} height={"100%"}>
                    <Typography height={"100%"}>
                      <Button
                        variant="contained"
                        size="large"
                        className="btnSubscribe"
                      >
                        Subscribe
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Typography>
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography>
              <img src={GrayDog} alt="GrayDog" width={"100%"} />
            </Typography>
          </Grid>
        </Grid>
      </Typography>
    </>
  );
};

export default SectionSix;
