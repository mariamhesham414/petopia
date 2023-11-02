import React from "react";
import "./SectionThree.css";
import Typography from "@mui/material/Typography";
import ThreeBox from "../ThreeBox/ThreeBox";
import { Grid } from "@mui/material";
import Img1 from "../../assets/Service-1.svg";
import Img2 from "../../assets/Group (2).svg";
import Img3 from "../../assets/Group (3).svg";
import Img4 from "../../assets/Group (4).svg";
import Img5 from "../../assets/Group (5).svg";
import Img6 from "../../assets/Group (6).svg";
import Path from "../../assets/Path.svg";
import Paws from "../../assets/Paws.svg";
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
        <Grid
          container
          spacing={1}
          columns={16}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid xs={5.2}>
            <ThreeBox
              img={Img1}
              head="Walking & Sitting"
              text="Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi "
              price="From $15 / hour"
              svgpath={Path}
              svgpaws={Paws}
            />
          </Grid>

          <Grid xs={5.2}>
            <ThreeBox
              img={Img2}
              head="Pet Grooming"
              text="Et odio pellentesque diam volutpat commodo sed egestas egestas  pellentesque nec nam "
              price="From $39 / complex"
              svgpath={Path}
              svgpaws={Paws}
            />
          </Grid>
          <Grid xs={5.2}>
            <ThreeBox
              img={Img3}
              head="Pet Training"
              text="Aliquam ut porttitor leo a diam sollicitudin tempor  sit amet est placerat "
              price="From $27 / hour"
              svgpath={Path}
              svgpaws={Paws}
            />
          </Grid>
          <Grid xs={5.2}>
            <ThreeBox
              img={Img4}
              head="Pet Taxi"
              text="Maecenas ultricies mi eget mauris pharetra et ultrices consectetur adipiscing elit"
              price="From $22  / trip"
              svgpath={Path}
              svgpaws={Paws}
            />
          </Grid>
          <Grid xs={5.2}>
            <ThreeBox
              img={Img5}
              head="Pet Taxi"
              text="Amet porttitor eget dolor morbi non arcu risus quis varius blandit aliquam etiam"
              price="From $39/ visit"
              svgpath={Path}
              svgpaws={Paws}
            />
          </Grid>
          <Grid xs={5.2}>
            <ThreeBox
              img={Img6}
              head="Pet Hotel"
              text="Turpis massa sed elementum tempus egestas sed sed risus aliquam  urna cursus eget n"
              price="From $15 / night"
              svgpath={Path}
              svgpaws={Paws}
            />
          </Grid>
        </Grid>
      </Typography>
    </>
  );
};

export default SectionThree;
