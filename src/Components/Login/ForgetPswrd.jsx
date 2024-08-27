import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  useMediaQuery,
  Container,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { secondaryColorTheme } from "../../config";
import { ForgotPswrd } from "../../Api/Api";

const defaultTheme = createTheme();

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpExpiration, setOtpExpiration] = useState(0);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordReset, setPasswordReset] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpMessage, setOtpMessage] = useState(""); // New state for OTP message

  const isSmallScreen = useMediaQuery(defaultTheme.breakpoints.down("sm"));

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    console.log(e.target.value, "handlePhoneNumberChange");
  };
  const handleSubmitNum = async () => {
    try {
      
      const res = await ForgotPswrd(phoneNumber);
      console.log(res,phoneNumber,"button click akkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    console.log(e.target.value, "handleOtpChange");
  };
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  //   console.log(phoneNumber, "phoneNumber");

  const handleSendOtp = (e) => {
    e.preventDefault();
    const message = `OTP has been sent to ${phoneNumber}`;
    setOtpMessage(message); // Set the OTP message
    setOtpSent(true);
    setOtpExpiration(60);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      // Dummy OTP check
      setVerificationSuccess(true);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      setPasswordReset(true);
      alert("Password has been reset successfully!");
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  const toggleNewPasswordVisibility = () =>
    setShowNewPassword(!showNewPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  useEffect(() => {
    if (otpExpiration > 0) {
      const timer = setTimeout(() => setOtpExpiration(otpExpiration - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpExpiration]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: secondaryColorTheme,
          height: "94vh",
          width: "99vw",
          padding: "16px",
        }}
      >
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              padding: isSmallScreen ? 2 : 4,
              borderRadius: 2,
              width: "100%",
              maxWidth: 400,
              mx: "auto",
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5" textAlign="center">
                <b>
                  {passwordReset
                    ? "Password Reset Successful"
                    : verificationSuccess
                    ? "Set New Password"
                    : otpSent
                    ? "Verify OTP"
                    : "Forgot Password"}
                </b>
              </Typography>
              <Box
                component="form"
                onSubmit={
                  otpSent
                    ? verificationSuccess
                      ? handleResetPassword
                      : handleVerifyOtp
                    : handleSendOtp
                }
                sx={{ mt: 3 }}
              >
                {!verificationSuccess ? (
                  <>
                    {!otpSent ? (
                      <Box>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{ mb: 2 }}
                        >
                          <b>
                            Enter your registered mobile number below to receive
                            password reset instructions
                          </b>
                        </Typography>
                        <TextField
                          fullWidth
                          variant="outlined"
                          margin="normal"
                          label="Mobile Number"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          inputProps={{ maxLength: 10 }}
                          autoFocus
                        />
                        {otpMessage && ( // Display the OTP message
                          <Typography
                            variant="body2"
                            color="textPrimary"
                            sx={{ mt: 2 }}
                          >
                            {otpMessage}
                          </Typography>
                        )}
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{ mt: 2 }}
                          onClick={handleSubmitNum}
                        >
                          GET OTP
                        </Button>
                      </Box>
                    ) : (
                      <Box>
                        <TextField
                          fullWidth
                          variant="outlined"
                          margin="normal"
                          label="OTP"
                          value={otp}
                          onChange={handleOtpChange}
                          inputProps={{ maxLength: 6 }}
                        />
                        {otpExpiration > 0 && (
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ mt: 2 }}
                          >
                            Resend OTP in: {formatTime(otpExpiration)} sec
                          </Typography>
                        )}
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{ mt: 2 }}
                        >
                          Confirm and Continue
                        </Button>
                      </Box>
                    )}
                  </>
                ) : (
                  <Box>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ mb: 2 }}
                    >
                      Please set a new password to help us keep your account
                      safe
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      label="New Password"
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={toggleNewPasswordVisibility}
                              edge="end"
                            >
                              {showNewPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      label="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={toggleConfirmPasswordVisibility}
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Set Password
                    </Button>
                  </Box>
                )}
              </Box>
              {passwordReset && (
                <Typography variant="body2" color="textPrimary" sx={{ mt: 2 }}>
                  Your password has been successfully reset!
                </Typography>
              )}
            </Box>
          </Box>
        </Container>
      </Grid>
    </ThemeProvider>
  );
};

export default ForgotPassword;
