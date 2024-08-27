import { AppBar, Avatar, Box, Button, Container, DialogActions, DialogContent, DialogContentText, IconButton, Menu, MenuItem, Popover, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useNavigate } from "react-router-dom";
import { colourTheme, secondaryColorTheme } from "../config";

function Header() {
  const navigate = useNavigate();
  const LoginName = localStorage.getItem("sLoginName");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElLogout, setAnchorElLogout] = React.useState(null);

  console.log(LoginName, "LoginName");

  // Menu items and their paths
  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Lead", path: "/services" },
    { label: "Cashbook", path: "/about" },
    { label: "Plan", path: "/profile" },
  ];

  const handleMenuList = () => {
    setAnchorElNav(null); // Close the mobile menu
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuList(); // Close the menu after navigation
  };

  const handleLogoutClick = (event) => {
    setAnchorElLogout(event.currentTarget);
  };

  const handleLogoutClose = () => {
    setAnchorElLogout(null);
  };

  const handleConfirmLogout = () => {
    handleLogoutClose();
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          position: "sticky",
          zIndex: 100, // Adjust the z-index as needed
          top: 0,
          backgroundColor: secondaryColorTheme, // Replace with secondaryColorTheme if needed
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              alt="Logo"
              src="https://img.utdstc.com/icon/6cb/a5d/6cba5d2e3b510af265ddf66a2a03e3f904584a04fa5be4c78f68c2fa18c75ba7:200"
              sx={{
                mr: '84%',
                width: 50,
                height: 50,
                img: {
                  objectFit: 'contain', // Ensures the image fits within the Avatar while maintaining aspect ratio
                },
              }}
            />

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="outlined"
                onClick={handleLoginClick}
                sx={{
                  mr: 2,
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'transparent',
                  }
                }}
              >
                Login
              </Button>
            </Box>

          
            <Box sx={{ flexGrow: 0 }}>
            {/* <SettingsIcon sx={{ marginRight: "20px" }} />
              <Tooltip title="Log out">
                <IconButton
                  onClick={handleLogoutClick}
                  sx={{
                    p: 0,
                    "&:hover": { backgroundColor: "transparent !important" },
                  }}
                >
                  <PowerSettingsNewIcon
                    sx={{ marginRight: "20px", color: "#FFF" }}
                  />
                </IconButton>
              </Tooltip> */}
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Stack direction="row" spacing={2}>
                    <Avatar>{LoginName}</Avatar>
                  </Stack>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>

          {/* Logout Confirmation Popover */}
          <Popover
            open={Boolean(anchorElLogout)}
            anchorEl={anchorElLogout}
            onClose={handleLogoutClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <DialogContent>
              <DialogContentText>
                Are you sure you want to log out?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleConfirmLogout}
                style={{
                  textTransform: "none",
                  backgroundColor: secondaryColorTheme,
                  color: "white",
                }}
              >
                Logout
              </Button>
              <Button
                onClick={handleLogoutClose}
                style={{
                  textTransform: "none",
                  backgroundColor: secondaryColorTheme,
                  color: "white",
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </Popover>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
