import React from "react";
import Posts from "../Posts/Posts";
import { Grid, Typography } from "@mui/material";
const SectionNine = () => {
  return (
    <>
      <Typography sx={{ mt: 6 }}>
        <Typography sx={{ textAlign: "center", mb: 2 }} className="threeH1">
          Other Posts
        </Typography>
        <Grid
          container
          spacing={1}
          columns={16}
          sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
        >
          <Grid xs={5.1}>
            <Posts
              class="bgImg4"
              btn="TRAINING"
              sx={{ backgroundImage: "url(../../assets/post1.png)" }}
              head="5 Crazy Things Dogs Do When Left Alone At Home"
              p="Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus."
            />
          </Grid>

          <Grid xs={5.1}>
            <Posts
              class="bgImg5"
              btn="TRAINING"
              head="5 Crazy Things Dogs Do When Left Alone At Home"
              p="Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus."
            />
          </Grid>
          <Grid xs={5.1}>
            <Posts
              class="bgImg6"
              btn="PET FOOD"
              head="Top Cat Foods to Consider If You Are a First Time Owner"
              p="Vel eros donec ac odio tempor orci dapibus ultrices. Arcu felis bibendum ut tristique et egestas quis"
            />
          </Grid>
        </Grid>
      </Typography>
    </>
  );
};

export default SectionNine;
