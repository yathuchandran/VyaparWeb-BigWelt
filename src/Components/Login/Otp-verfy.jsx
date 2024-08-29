import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { VerifyOtp, VerifyOtpReg } from "../../Api/Api";
import { Graygreen, secondaryColorTheme } from "../../config";
import imageIcon from '../../assets/loginhome.jpg';

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);

  const Mobile = localStorage.getItem("phoneNumber");

  const handleOtpSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await VerifyOtpReg(otp, Mobile);
      if (res.message === "Your otp is verified") {
        Swal.fire({
          title: "OTP Verified!",
          text: "You have been successfully logged in.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,         });

        navigate('/setPassword'); 
      } else {
        Swal.fire({
          title: "OTP Verification Failed",
          text: "The OTP you entered is incorrect. Please try again.",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,      });
    }

    setOtpError(!otp);
    if (!otp) return;
  };

  return (
    <Grid
      container
      component="main"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: secondaryColorTheme,
        height: '94vh',
        width: '99vw',
        padding: '16px',
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

          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
            OTP Verification
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleOtpSubmit}
            sx={{ mt: 1, width: '100%' }}
          >
            <TextField
              error={otpError}
              onChange={(e) => setOtp(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="otp"
              label="Enter OTP"
              autoFocus
              placeholder="Enter your OTP"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: Graygreen, // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'customColorHover', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: Graygreen, // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'customLabelColor', // Custom label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: Graygreen, // Custom label color when focused
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: Graygreen, // Button background color
                color: 'customTextColor', // Button text color
                '&:hover': {
                  backgroundColor: Graygreen, // Button background color on hover
                },
              }}
            >
              VERIFY OTP
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OtpVerification;
