import React from "react";
import Typography from "@mui/material/Typography";
import "./SectionOne.css";
import { Grid, ListItem } from "@mui/material";
import Call from "../../assets/call.svg";
import Benifits from "../Benifits/Benifits";
import { FaTruckFast } from "react-icons/fa6";
import { TbDiscount2 } from "react-icons/tb";
import { BiSolidCheckShield } from "react-icons/bi";
import { MdVerifiedUser } from "react-icons/md";
import WhiteDog from "../../assets/dog1 1 (1).png";

const SectionOne = () => {
  return (
    <>
      <Typography
        variant="div"
        component="div"
        color="initial"
        sx={{ display: "flex", justifyContent: "space-between", mt: 10 }}
      >
        <ListItem sx={{ gridRow: "1", gridColumn: "span 2" }}>
          <Typography variant="div" component="div" color="initial">
            <Typography variant="p" color="initial" className="secOneText">
              We care for your pets
            </Typography>
            <Typography
              variant="h1"
              color="initial"
              className="secOneh1"
              sx={{ mt: 2, mb: 2 }}
            >
              We Help You Care for Animals with Nutrition
            </Typography>
            <Typography variant="p" color="initial" className="secOneText2">
              All offers are subject to availability. Ut tortor pretium viverra
              suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam
              at. Potenti nullam ac tortor vitae purus faucibus ornare.
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                mt: 5,
              }}
            >
              <Grid
                container
                spacing={1}
                columns={16}
                sx={{ position: "relative", left: "-10px" }}
              >
                <Grid xs={8}>
                  <ListItem>
                    <Benifits
                      icon={<FaTruckFast className="iconStyle" />}
                      h1="Trust & Safety"
                      p="Velit euismod pellentes"
                    />
                  </ListItem>
                </Grid>

                <Grid xs={8} style={{ padding: "0" }}>
                  <ListItem>
                    <Benifits
                      icon={<TbDiscount2 className="iconStyle" />}
                      h1="Discounts"
                      p="Bibendum ut tristique"
                    />
                  </ListItem>
                </Grid>
                <Grid xs={8}>
                  <ListItem>
                    <Benifits
                      icon={<img src={Call} alt="call" />}
                      h1="Support"
                      p="Egestas quis ipsum velit "
                    />
                  </ListItem>
                </Grid>
                <Grid xs={8}>
                  <ListItem>
                    <Benifits
                      icon={<BiSolidCheckShield className="iconStyle" />}
                      h1="Guarantee"
                      p="Convallis tellus id interdum"
                    />
                  </ListItem>
                </Grid>
              </Grid>
            </Typography>
          </Typography>
        </ListItem>
        <ListItem sx={{ gridRow: "1", gridColumn: "span 2" }}>
          <Typography variant="div" component="div" color="initial">
            <img
              src={WhiteDog}
              alt="WhiteDog"
              width={"110%"}
              style={{ position: "relative", left: "115px" }}
            />
          </Typography>
        </ListItem>
      </Typography>
    </>
  );
};

export default SectionOne;
