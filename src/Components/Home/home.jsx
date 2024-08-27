import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import sang_logo from '../../assets/sang_logo.png';
import Avatar from "@mui/material/Avatar";
import ButtonGroup from "@mui/material/ButtonGroup";
import DomainIcon from "@mui/icons-material/Domain";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupsIcon from "@mui/icons-material/Groups";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../../Components/Footer";
import SideBar from "../../Components/Sidebar";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { getLogin } from "../../Api/Api";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    navigate("/user3/basepage");
  };

  const handleClose = () => {
    setAnchorEl(null);
    setText("");
  };

  const handleProductClick = () => {
    handleClose();
    navigate("/user3/product");
    // Redirect to the product page here
    // history.push('/product'); // Replace '/product' with the actual URL of your product page
  };
  const onClickLog = () => {
    navigate("/");
  };

  const customCarouselStyle = {
    height: "300px", // Adjust the height as needed
    width: "100%", // Increase the width as needed
    margin: "0 auto", // Center the carousel
    overflow: "hidden",
  };

  const customImageStyle = {
    height: "100%", // Ensure the image fills the carousel height
    width: "100%", // Ensure the image fills the carousel width
    objectFit: "cover", // This ensures the image covers the container proportionally
  };


useEffect(()=>{
  
  const login=async(e)=>{
    try {
      const res=await getLogin({
        name:"yatheesh",
        mobile:9645885204
      })
      console.log(res,"loging ayooooooooooooo");
    } catch (error) {
      
    }
  }
  login()
},[])
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header />
      {/* <SideBar /> */}
      <main>
        {/* Hero unit */}
        <Carousel showThumbs={false} infiniteLoop autoPlay>
            <div style={customCarouselStyle}>
              <img
                src="https://www.hdcarwallpapers.com/walls/ford_gt_2016-HD.jpg"
                alt="Slide 1"
                style={customImageStyle}
              />
            </div>
            <div style={customCarouselStyle}>
              <img
                src="https://www.hdcarwallpapers.com/walls/ford_f150_raptor_2017-HD.jpg"
                alt="Slide 2"
                style={customImageStyle}
              />
            </div>
            <div style={customCarouselStyle}>
              <img
                src="https://www.hdcarwallpapers.com/walls/2015_nissan_gtr_lm_nismo_2-HD.jpg"
                alt="Slide 3"
                style={customImageStyle}
              />
            </div>
          </Carousel>
     
        {/* <Box
          sx={{
            bgcolor: "background.paper",
            pt: 5,
            pb: 0,
          }}
        >
        </Box> */}
        <Container sx={{ py: 5 }} maxWidth="lg">
          {/* End hero unit */}

          <Grid container spacing={4} mb={3}>
            {/* {cards.map((card) => ( */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <DomainIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    marginLeft: "50px",
                    // color:'white',
                  }}
                  onClick={handleClick}
                />
                <Button sx={{ color: "black" }} onClick={handleClick}>
                  Customer
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <GroupsIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    marginLeft: "20%",
                  }}
                />
                <Button sx={{ color: "black" }}>Group</Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <ReportGmailerrorredIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    marginLeft: "20%",
                  }}
                />
                <Button sx={{ color: "black" }}>Employees</Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <ProductionQuantityLimitsIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    marginLeft: "20%",
                  }}
                />
                <Button sx={{ color: "black" }}>Product</Button>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            {/* {cards.map((card) => ( */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <EventNoteIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    marginLeft: "50px",
                    // color:'white',
                  }}
                  onClick={handleClick}
                />
                <Button sx={{ color: "black" }} onClick={handleClick}>
                  Events
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <MonetizationOnIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    marginLeft: "20%",
                  }}
                />
                <Button sx={{ color: "black" }}>Sale</Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    marginLeft: "20%",
                  }}
                />
                <Button sx={{ color: "black" }}>Purchace</Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <SettingsIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    marginLeft: "20%",
                  }}
                />
                <Button sx={{ color: "black" }}>Backup</Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
