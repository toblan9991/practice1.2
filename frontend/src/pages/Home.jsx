import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const customerLogos = [
    { src: "path-to-logo1.png", alt: "Logo 1" },
    { src: "path-to-logo2.png", alt: "Logo 2" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // console.log('Is mobile:', isMobile);

  return (
    <Box>
      {/* <AppBar position= "static">
        <Toolbar>
            { isMobile && (
              <IconButton edge = "start" color="inherit" aria-label="top-menu">
                <MenuIcon></MenuIcon>
              </IconButton>
            )}
            

            <Typography variant="h6" component="div" sx={{flexGrow: 1 }} >
              WorkSynk
            </Typography>

            {!isMobile && (
              
            )}
        </Toolbar>
      </AppBar> */}

      <Header />
      <Box
        className="homeContainer"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          textAlign: "center",
          gap: "1rem",
          // marginTop: isMobile ? "8rem" : "1rem"
        }}
      >
        <Box textAlign="center" sx={{ flex: 1, maxWidth: "50%" }}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{ textAlign: "left" }}
            gutterBottom
          >
            WorkSynk, one stop solution for your cleaning industry
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{ textAlign: "left" }}
          >
            It suits all your cleaning company need
          </Typography>

          <Box sx={{ textAlign: "left" }} mt={4} mb={4}>
            <Button
              component={Link}
              to="/sign-up"
              variant="contained"
              color="primary"
              sx={{ marginRight: theme.spacing(1) }}
            >
              SIGN UP
            </Button>
            <Button variant="outlined" color="primary">
              VIEW DEMO
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Typography
              variant={isMobile ? "h8" : "h6"}
              sx={{ textAlign: "left" }}
            >
              5000+ Customers using globally
            </Typography>
            {/* <Grid container spacing={2}>
              {customerLogos.map((logo, index) => (
                <Grid item sm={4} md={2} key={index}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ width: "100%" }}
                  />
                </Grid>
              ))}
            </Grid> */}
            <Box sx={{ width: "100%" }} pt={5}>
              <img
                style={{ width: "100%" }}
                src="../../images/logosImg.png"
                alt="companies logos image"
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            maxWidth: isMobile ? "100%" : "50% ",
            borderRadius: "15px",
          }}
          component="img"
          src="../../images/heroimg.png"
          alt="cleaning image"
        />
      </Box>
      <Footer />
    </Box>
  );
}
