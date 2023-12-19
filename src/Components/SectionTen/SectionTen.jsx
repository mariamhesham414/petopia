import React from "react";
import "./SectionTen.css";
import Typography from "@mui/material/Typography";
import {
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import Contacts from "../Contacts/Contacts";
import { MdPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";
import FooterDog from "../../assets/Isolation_Mode.svg";
import { FaArrowRight } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
// import { FaPhone } from "react-icons/fa6";
// import { FaEnvelope } from "react-icons/fa";

const SectionTen = () => {
  const textFieldStyles = {
    background: "white", // Set the background color to white
  };
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
            <Grid
              container
              spacing={1}
              columns={16}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
                pb: 8,
                borderBottom: "1px solid #EBE5F7",
              }}
            >
              <Grid xs={3.5}>
                <Typography sx={{ mb: 1 }}>
                  <img src={FooterDog} alt="FooterDog" />
                </Typography>
                <Typography className="footerText" sx={{ mb: 2 }}>
                  Tristique nulla aliquet enim tortor at auctor urna nunc. Massa
                  enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis
                  unde ...
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ mr: 1 }}>
                    <MdPhone size={"40px"} color="#9C5BF5" />
                  </Typography>
                  <Typography sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography className="footerNum">
                      (913) 756-3126
                    </Typography>
                    <Typography className="footerNumInfo">
                      Got Questions? Call us 24/7
                    </Typography>
                  </Typography>
                </Typography>
              </Grid>
              <Grid xs={3.5}>
                <Typography className="footerhead">Working Hours</Typography>
                <Typography
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography sx={{ mt: 5 }}>
                    <Typography className="Days" sx={{ mt: 2, mb: 2 }}>
                      Mon - Fri:
                    </Typography>
                    <Typography className="Days" sx={{ mt: 2, mb: 2 }}>
                      Saturday
                    </Typography>
                    <Typography className="Days" sx={{ mt: 2, mb: 2 }}>
                      Sunday:
                    </Typography>
                  </Typography>
                  <Typography sx={{ mt: 5 }}>
                    <Typography className="Times" sx={{ mt: 2, mb: 2 }}>
                      7am – 6pm
                    </Typography>
                    <Typography className="Times" sx={{ mt: 2, mb: 2 }}>
                      9am – 4pm
                    </Typography>
                    <Typography className="Times" sx={{ mt: 2, mb: 2 }}>
                      Closed
                    </Typography>
                  </Typography>
                </Typography>
              </Grid>
              <Grid xs={3.5}>
                <Typography className="footerhead">Useful Links</Typography>
                <Typography
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography sx={{ mt: 3 }}>
                    <Typography
                      className="links pinklinks"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      Home
                    </Typography>
                    <Typography
                      className="links lightpinklinks"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      About
                    </Typography>
                    <Typography
                      className="links lightpinklinks"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      Services
                    </Typography>
                    <Typography
                      className="links lightpinklinks"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      Shop
                    </Typography>
                  </Typography>
                  <Typography sx={{ mt: 3 }}>
                    <Typography
                      className="links lightpinklinks"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      FAQ
                    </Typography>
                    <Typography
                      className="links lightpinklinks"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      Gallery
                    </Typography>
                    <Typography
                      className="links lightpinklinks"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      Delivery
                    </Typography>
                    <Typography
                      className="links lightpinklinks"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      Sales
                    </Typography>
                  </Typography>
                </Typography>
              </Grid>
              <Grid xs={3.5}>
                <Typography className="footerhead">Newsletter</Typography>
                <Typography className="newsText" sx={{ mt: 1, mb: 2 }}>
                  Be first in the queue! Get our latest news straight to your
                  inbox.
                </Typography>
                <Grid
                  container
                  spacing={1}
                  columns={16}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                  }}
                >
                  <Grid xs={12}>
                    <TextField
                      style={textFieldStyles}
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      color="secondary"
                      className="textfieldFooter"
                      InputLabelProps={{ className: "textfield_label" }}
                      sx={{}}
                    />
                  </Grid>
                  <Grid
                    xs={3}
                    className="btnArrow"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaArrowRight />
                  </Grid>
                </Grid>
                <Typography sx={{ mt: 1, mb: 2 }}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "24px", color: "#7C58D3" }}
                  >
                    <BiLogoFacebook />
                  </IconButton>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "24px", color: "#7C58D3" }}
                  >
                    <AiOutlineInstagram />
                  </IconButton>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "24px", color: "#7C58D3" }}
                  >
                    <AiOutlineTwitter />
                  </IconButton>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "24px", color: "#7C58D3" }}
                  >
                    <BsWhatsapp />
                  </IconButton>
                </Typography>
              </Grid>
            </Grid>
            <Typography
              sx={{ textAlign: "center", mt: 3 }}
              className="copyRight"
            >
              NOOT © All rights reserved Copyrights 2023
            </Typography>
          </Typography>
        </div>
      </Typography>
    </>
  );
};

export default SectionTen;
