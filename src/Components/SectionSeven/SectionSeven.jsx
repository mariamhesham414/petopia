import React from "react";
import Posts from "../Posts/Posts";
import { Grid, Typography } from "@mui/material";
const SectionSeven = () => {
  return (
    <>
      <Typography sx={{ mt: 6 }}>
        <Typography sx={{ textAlign: "center", mb: 1 }} className="threeP">
          OUR BLOG
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 2 }} className="threeH1">
          Latest Post
        </Typography>
        <Grid
          container
          spacing={1}
          columns={16}
          sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
        >
          <Grid xs={5.1}>
            <Posts
              class="bgImg1"
              btn="TRAINING"
              head="5 Crazy Things Dogs Do When Left Alone At Home"
              p="Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus."
            />
          </Grid>

          <Grid xs={5.1}>
            <Posts
              class="bgImg2"
              btn=" PET HEALTH"
              head="Your Dog Desperately Needs From You"
              p="Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet "
            />
          </Grid>
          <Grid xs={5.1}>
            <Posts
              class="bgImg3"
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

export default SectionSeven;
