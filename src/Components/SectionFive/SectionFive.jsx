import React from "react";
import "./SectionFive.css";
import Product from "../Product/Product";
import prd369 from "../../assets/pink-pet-bowl-isolated-on-white-background-2021-09-03-05-40-42-utc369.png";
import { Grid, Typography } from "@mui/material";
import prd1 from "../../assets/pink-pet-bowl-isolated-on-white-background-2021-09-03-05-40-42-utc1.png";
import prd4 from "../../assets/pink-pet-bowl-isolated-on-white-background-2021-09-03-05-40-42-utc2.png";
import prd7 from "../../assets/pink-pet-bowl-isolated-on-white-background-2021-09-03-05-40-42-utc3.png";
import prd2 from "../../assets/pink-pet-bowl-isolated-on-white-background-2021-09-03-05-40-42-utc4.png";
import prd5 from "../../assets/pink-pet-bowl-isolated-on-white-background-2021-09-03-05-40-42-utc5.png";
import prd8 from "../../assets/pink-pet-bowl-isolated-on-white-background-2021-09-03-05-40-42-utc6.png";

const SectionFive = () => {
  return (
    <>
      <Typography sx={{ mt: 10, mb: 5 }}>
        <Grid
          container
          spacing={1}
          columns={16}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid xs={5.2} className="prdHead">
            Featured Products
          </Grid>
          <Grid xs={5.2} className="prdHead">
            On Sale Products
          </Grid>
          <Grid xs={5.2} className="prdHead">
            Top Rated Products
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          columns={16}
          sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}
        >
          <Grid
            style={{
              borderBottom: "1px #EBE5F7 solid",
              paddingBottom: "25px",
              paddingTop: "25px",
            }}
            xs={5.2}
          >
            <Product
              prdImg={prd1}
              prdName="Detachable Gravity Bowl Food Feeder"
              prdPrice="$30.12"
            />
          </Grid>

          <Grid
            style={{
              borderBottom: "1px #EBE5F7 solid",
              paddingBottom: "25px",
              paddingTop: "25px",
            }}
            xs={5.2}
          >
            <Product
              prdImg={prd2}
              prdName="Black Leather Spike Dog Collar, Small"
              prdPrice="$23.55"
            />
          </Grid>
          <Grid
            style={{
              borderBottom: "1px #EBE5F7 solid",
              paddingBottom: "25px",
              paddingTop: "25px",
            }}
            xs={5.2}
          >
            <Product
              prdImg={prd369}
              prdName="Carrying Bag for Cats Weighing up to 6 kg"
              prdPrice="$70.43"
            />
          </Grid>
          <Grid
            style={{
              borderBottom: "1px #EBE5F7 solid",
              paddingBottom: "25px",
              paddingTop: "25px",
            }}
            xs={5.2}
          >
            <Product
              prdImg={prd4}
              prdName="Dog Collar for Small, Medium, Large Dogs"
              prdPrice="$16.88"
            />
          </Grid>
          <Grid
            style={{
              borderBottom: "1px #EBE5F7 solid",
              paddingBottom: "25px",
              paddingTop: "25px",
            }}
            xs={5.2}
          >
            <Product
              prdImg={prd5}
              prdName="Dog Chew Toys for Chewers"
              prdPrice="$8.99"
            />
          </Grid>
          <Grid
            style={{
              borderBottom: "1px #EBE5F7 solid",
              paddingBottom: "25px",
              paddingTop: "25px",
            }}
            xs={5.2}
          >
            <Product
              prdImg={prd369}
              prdName="Rhinestone Pet Collar"
              prdPrice="$35.66"
            />
          </Grid>
          <Grid
            style={{
              borderBottom: "1px #EBE5F7 solid",
              paddingBottom: "25px",
              paddingTop: "25px",
            }}
            xs={5.2}
          >
            <Product
              prdImg={prd7}
              prdName="Pink Embossed Spiked Collar"
              prdPrice="$34.98"
            />
          </Grid>
          <Grid
            style={{
              borderBottom: "1px #EBE5F7 solid",
              paddingBottom: "25px",
              paddingTop: "25px",
            }}
            xs={5.2}
          >
            <Product
              prdImg={prd8}
              prdName="Duck Jerky Strips Dog Treats"
              prdPrice="$32.99"
            />
          </Grid>
          <Grid
            style={{
              borderBottom: "1px #EBE5F7 solid",
              paddingBottom: "25px",
              paddingTop: "25px",
            }}
            xs={5.2}
          >
            <Product
              prdImg={prd369}
              prdName="Teeth Cleaning Toy for Dogs"
              prdPrice="$12.98"
            />
          </Grid>
        </Grid>
      </Typography>
    </>
  );
};

export default SectionFive;
