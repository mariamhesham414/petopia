import React from "react";
import "./SectionEight.css";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Contacts from "../Contacts/Contacts";
import { MdPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";

const SectionEight = () => {
  return (
    <>
      <Typography
        sx={{
          backgroundColor: "#FBF9FF",
          width: "100%",
          pt: 0.01,
          pb: 2,
          mt: 12,
        }}
      >
        <div style={{ paddingLeft: "12%", paddingRight: "12%" }}>
          <Typography sx={{ mt: 6, pb: 6 }}>
            <Typography sx={{ textAlign: "center", mb: 1 }} className="threeP">
              OUR CONTACTS
            </Typography>
            <Typography sx={{ textAlign: "center", mb: 2 }} className="threeH1">
              Contacts
            </Typography>
            <Typography
              sx={{ textAlign: "center", mb: 2 }}
              className="eightText"
            >
              Massa enim nec dui nunc mattis enim ut tellus
            </Typography>
            <Grid
              container
              spacing={1}
              columns={16}
              sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
            >
              <Grid xs={3.7}>
                <Contacts
                  icons={<MdPhone size={"30px"} />}
                  contacts="Phone"
                  info1="(913) 756-3126"
                  info2="(921) 557-1203"
                />
              </Grid>
              <Grid xs={3.7}>
                <Contacts
                  icons={<FaEnvelope size={"30px"} />}
                  contacts="Email"
                  info1="petopia@example.com"
                  info2="petopia@email.com"
                />
              </Grid>
              <Grid xs={3.7}>
                <Contacts
                  icons={<IoLocationSharp size={"30px"} />}
                  contacts="Address"
                  info1="17 Parkman Place, 2122"
                  info2="United States "
                />
              </Grid>
              <Grid xs={3.7}>
                <Contacts
                  icons={<AiFillClockCircle size={"30px"} />}
                  contacts="Open Hours"
                  info1="Mon - Fri: 7am - 6pm"
                  info2="Saturday: 9am - 4pm"
                />
              </Grid>
            </Grid>
          </Typography>
        </div>
      </Typography>
    </>
  );
};

export default SectionEight;
