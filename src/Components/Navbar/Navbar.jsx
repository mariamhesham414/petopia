import React from "react";
import AppBar, { appBarClasses } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/Logo.svg";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="transparent"
          sx={{ boxShadow: 0, mt: 2, mb: 1 }}
        >
          <Toolbar>
            <img src={Logo} alt="logo" style={{ marginRight: "16px" }} />

            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
            <Typography variant="p" className="logoName">
              <a href="#">Petopia</a>
            </Typography>
            {/* </Typography> */}
            <Typography
              variant="span"
              sx={{
                flexGrow: 1,
                // display: "flex",
                // justifyContent: "space-around",
              }}
              align="center"
              className="headerButtons"
            >
              <Button variant="text" className="headerButton">
                Home
              </Button>
              <Button variant="text" className="headerButton">
                Services
              </Button>
              <Button variant="text" className="headerButton">
                Shop
              </Button>
              <Button variant="text" className="headerButtonyellow">
                Blog
              </Button>
              <Button variant="text" className="headerButtonyellow">
                Pages
              </Button>
            </Typography>
            <Button
              variant="text"
              className="btnItem"
              sx={{ bgcolor: "white", p: "9px" }}
              startIcon={<FaShoppingCart color=" #9C5BF5" />}
            >
              <Typography className="itemBtn">(1 item)</Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Typography
        align="center"
        sx={{ position: "relative", right: "162px", bottom: "25px" }}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#FF47A2" />
        </svg>
      </Typography>
    </>
  );
};

export default Navbar;
