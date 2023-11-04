import React from "react";
import "./SectionFour.css";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import BlackDog from "../../assets/pet-accessories-still-life-concept-with-chew-ball.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import DogBlue from "../../assets/pet-dressed-necktie-2021-08-27-22-18-47-utc.png";
import DogPink from "../../assets/charles-deluvio-Mv9hjnEUHR4-unsplash.png";

const SectionFour = () => {
  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        sx={{ mt: 5 }}
      >
        <Box gridColumn="span 8">
          <Typography className="secFourLeft" sx={{ p: 2 }}>
            <Typography
              sx={{ display: "flex", justifyContent: "flex-end", p: 4 }}
            >
              <Typography>
                <Button className="fourBtn" sx={{ pt: 1, pb: 1, pr: 2, pl: 2 }}>
                  Up to 40% Off
                </Button>
              </Typography>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pl: 8,
                pr: 4,
              }}
            >
              <Typography sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ pb: 1 }} className="fourH1">
                  Сheck Out Our Specials
                </Typography>
                <Typography sx={{ pb: 1 }} className="fourP">
                  Massa placerat duis ultricies lacus. Aliquet bibendum enim
                  facilisis gravida neque convallis
                </Typography>
                <Typography
                  className="shopNow"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Shop Now <IoMdArrowRoundForward />
                </Typography>
              </Typography>
              <Typography>
                <img src={BlackDog} alt="BlackDog" width={"100%"} />
              </Typography>
            </Typography>
          </Typography>
        </Box>
        <Box
          gridColumn="span 4"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ display: "flex" }}>
            <Typography
              className="secFourRight"
              sx={{ display: "flex", alignItems: "flex-start" }}
              height={"170px"}
            >
              <Typography
                sx={{ display: "flex", flexDirection: "column", p: 2 }}
              >
                <Typography className="secFourRightH1" sx={{ mb: 2 }}>
                  Luxury Fashion Collection
                </Typography>
                <Typography
                  className="shopNow"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Shop Now <IoMdArrowRoundForward />
                </Typography>
              </Typography>
            </Typography>
            <Typography>
              <img
                src={DogBlue}
                alt="DogBlue"
                style={{
                  position: "absolute",
                  left: "1210px",
                  top: "1903px",
                  height: "190px",
                }}
              />
            </Typography>
          </Typography>
          {/*  */}
          <Typography sx={{ display: "flex" }}>
            <Typography
              className="secFourRight"
              sx={{ display: "flex", alignItems: "center" }}
              height={"170px"}
            >
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                }}
              >
                <Typography className="secFourRightH1" sx={{ mb: 2 }}>
                  Luxury Fashion Collection
                </Typography>
                <Typography
                  className="shopNow"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Shop Now <IoMdArrowRoundForward />
                </Typography>
              </Typography>
            </Typography>
            <Typography>
              <img
                src={DogPink}
                alt="DogPink"
                style={{
                  position: "absolute",
                  left: "1210px",
                  top: "2100px",
                  height: "190px",
                  width: "140px",
                }}
              />
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SectionFour;
