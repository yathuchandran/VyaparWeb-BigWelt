import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Graygreen, countryCodes } from "../../config";
import Swal from "sweetalert2";
import imageIcon from '../../assets/loginhome.jpg';
import { RegisterMob } from "../../Api/Api";

const Signup = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationalCode, setNationalCode] = useState("+91"); // Default national code
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setPhoneError(!phoneNumber);
    if (!phoneNumber) return;
console.log(phoneNumber,"phoneNumber");

    try {
      const response=await RegisterMob(phoneNumber)
      console.log(response.message,"response-----------");
      Swal.fire({
        // title: "Signup Successful!",
        text: ` ${response.message}.`,
        // icon: "success",
        showConfirmButton: false,
        timer: 1500,      });

      navigate('/otp-verification'); // Navigate to the OTP verification page
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Grid
      container
      component="main"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '100vh',
        width: '100vw',
        padding: '16px',
        margin: 0,  // Ensures no margin around the container
        backgroundColor: Graygreen, // Apply background color to entire Grid
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          borderRadius: 2,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            my: 4,
            mx: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
                    <img src={imageIcon} style={{ width: '80px' }} alt="Logo" />

          <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
            Signup
          </Typography>
          <Typography component="p" variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
            Get control of your business with Locofeed
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, width: '100%' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TextField
                select
                label="Code"
                value={nationalCode}
                onChange={(e) => setNationalCode(e.target.value)}
                sx={{
                  mt:1,
                  minWidth: '80px',
                  mr: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: Graygreen, // Default border color
                    },
                    '&:hover fieldset': {
                      borderColor: Graygreen, // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: Graygreen, // Border color when focused
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: Graygreen, // Custom label color
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: Graygreen, // Custom label color when focused
                  },
                }}
              >
                {countryCodes.map((country) => (
                  <MenuItem key={country.code} value={country.code}>
                    {country.label} ({country.code})
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                error={phoneError}
                onChange={(e) => setPhoneNumber(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="PhoneNumber"
                label="Phone Number"
                type="tel"
                id="phoneNumber"
                autoComplete="tel"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: Graygreen, // Default border color
                    },
                    '&:hover fieldset': {
                      borderColor: Graygreen, // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: Graygreen, // Border color when focused
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: Graygreen, // Custom label color
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: Graygreen, // Custom label color when focused
                  },
                }}
              />
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: Graygreen, // Button background color
                color: '#fff', // Button text color
                '&:hover': {
                  backgroundColor: Graygreen, // Button background color on hover
                },
              }}
            >
              Get OTP
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
