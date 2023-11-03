import React from "react";
import "./Contacts.css";
import Typography from "@mui/material/Typography";
import { Chip, Icon } from "@mui/material";
import { MdPhone } from "react-icons/md";
const Contacts = (props) => {
  return (
    <>
      <Typography className="contactDiv" sx={{ mt: 5 }}>
        <Typography sx={{ position: "relative", top: "-40px" }}>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography className="iconDiv" sx={{ p: 2 }}>
              {props.icons}
            </Typography>
            <Typography className="contacts" sx={{ mt: 2 }}>
              {props.contacts}
            </Typography>
            <Typography className="contactsInfo">{props.info1}</Typography>
            <Typography className="contactsInfo">{props.info2}</Typography>
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};

export default Contacts;
