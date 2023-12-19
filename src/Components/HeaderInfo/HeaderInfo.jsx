import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import "./HeaderInfo.css";

const HeaderInfo = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ boxShadow: 0 }}>
          <Toolbar
            sx={{ bgcolor: "#9C5BF5", pl: 4 }}
            style={{
              minHeight: "fit-content",
              paddingLeft: "13%",
              paddingRight: "14%",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, fontSize: "15px" }}
              >
                <BiLogoFacebook />
              </IconButton>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, fontSize: "15px" }}
              >
                <AiOutlineInstagram />
              </IconButton>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, fontSize: "15px" }}
              >
                <AiOutlineTwitter />
              </IconButton>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, fontSize: "15px" }}
              >
                <BsWhatsapp />
              </IconButton>
            </Typography>
            <Typography
              variant="p"
              className="headerInfo"
              sx={{ fontSize: "15px" }}
            >
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, fontSize: "15px" }}
              >
                <FaPhone style={{ marginRight: "5px" }} />
                0000 - 123456789
              </IconButton>
            </Typography>
            <Typography variant="p" className="headerInfo">
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ fontSize: "15px" }}
              >
                <FaEnvelope style={{ marginRight: "5px" }} />
                info@example.com
              </IconButton>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default HeaderInfo;
