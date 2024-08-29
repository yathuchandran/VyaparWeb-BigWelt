import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getLogin } from "../../Api/Api";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import imageIcon from "../../assets/loginhome.jpg";
import { Graygreen, secondaryColorTheme } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const [sLoginName, setLoginName] = useState("");
  const [sPassword, setSPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError(!sLoginName);
    setPasswordError(!sPassword);
    if (!sLoginName || !sPassword) return;

    try {
      const res = await getLogin({ name: sLoginName, password: sPassword });

      if (res.message === "OTP Sent Successfully.") {
        localStorage.setItem("UserName", sLoginName);
        localStorage.setItem("Mobile", sPassword);

        Swal.fire({
          title: "Login Successful!",
          text: `OTP has been sent to your registered ${sPassword}.`,
          icon: "success",
          confirmButtonText: "OK",
        });

        navigate("/otp-verification"); // Navigate to the OTP verification page
      } else {
        // Handle different status codes
        let iconType;
        let titleText;
      
        switch (res.status) {
          case 400:
            iconType = "warning";
            titleText = "Bad Request!";
            break;
          case 401:
            iconType = "error";
            titleText = "Unauthorized!";
            break;
          case 403:
            iconType = "error";
            titleText = "Forbidden!";
            break;
          case 404:
            iconType = "error";
            titleText = "Not Found!";
            break;
          case 500:
            iconType = "error";
            titleText = "Server Error!";
            break;
          default:
            iconType = "info";
            titleText = "Something went wrong!";
        }
      
        Swal.fire({
          title: titleText,
          text: res?.response?.data?.message,
          icon: iconType,
          showConfirmButton: false,
          timer: 1500,
        });
      }
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
        backgroundColor: Graygreen,
        height: "100vh",
        // width: '99vw',
        padding: "16px",
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
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            my: 4,
            mx: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src={imageIcon} style={{ width: "80px" }} alt="Logo" />

          <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
            LOGIN
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              error={emailError}
              onChange={(e) => setLoginName(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="UserName"
              autoComplete="email"
              autoFocus
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: Graygreen, // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "customColorHover", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: Graygreen, // Border color when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "customLabelColor", // Custom label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: Graygreen, // Custom label color when focused
                },
              }}
            />

            <Box sx={{ position: "relative" }}>
              <TextField
                error={passwordError}
                onChange={(e) => setSPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="Number"
                label="Number"
                type={showPassword ? "text" : "Number"}
                id="Number"
                autoComplete="current-password"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: Graygreen, // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "customColorHover", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: Graygreen, // Border color when focused
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "customLabelColor", // Custom label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: Graygreen, // Custom label color when focused
                  },
                }}
              />
              <Box
                onClick={() => setShowPassword(!showPassword)}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <LockOpenIcon /> : <LockIcon />}
              </Box>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: Graygreen, // Button background color
                color: "customTextColor", // Button text color
                "&:hover": {
                  backgroundColor: Graygreen, // Button background color on hover
                },
              }}
            >
              LOGIN
            </Button>

            <Grid container>
              <Grid item xs>
                <Link
                  href="/forgot-password"
                  variant="body2"
                  sx={{
                    color: "#282821", // Custom color for the link
                    "&:hover": {
                      color: Graygreen, // Custom color when hovering over the link
                    },
                  }}
                >
                  Forgot Password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/register"
                  variant="body2"
                  sx={{
                    color: "#282821", // Custom color for the link
                    "&:hover": {
                      color: Graygreen, // Custom color when hovering over the link
                    },
                  }}
                >
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

// import React, { useState } from "react";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import { useNavigate } from "react-router-dom";
// import { Button, Grid, TextField, Typography, Link } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import LockIcon from '@mui/icons-material/Lock';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import { blue } from "@mui/material/colors";
// import Swal from "sweetalert2"; // Import SweetAlert
// import imageIcon from '../../assets/logo.jpg';
// import { VerifyOtp, getLogin } from "../../Api/Api";
// import { colourTheme, secondaryColorTheme } from "../../config";

// const defaultTheme = createTheme();

// const Login = () => {
//   const navigate = useNavigate();
//   const [sLoginName, setLoginName] = useState("");
//   const [sPassword, setSPassword] = useState("");
//   const [otp, setOtp] = useState(""); // State for OTP
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [otpError, setOtpError] = useState(false);
//   const [showPassword, setShowPassword] = useState(false); // Manage password visibility
//   const [isOtpSent, setIsOtpSent] = useState(false); // State to manage OTP verification display

//   const UserName = localStorage.getItem("UserName");
// const Mobile = localStorage.getItem("Mobile");

// //login submit------------------------------
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validate form fields
//     setEmailError(!sLoginName);
//     setPasswordError(!sPassword);
//     if (!sLoginName || !sPassword) return;

//     try {
//       const res = await getLogin({
//         name: sLoginName,
//         password: sPassword,
//       });

//       console.log(res," response api logi");
//       if (res.message === "OTP Sent Successfully.") {
//       localStorage.setItem("UserName", sLoginName);
//       localStorage.setItem("Mobile", sPassword);

//         Swal.fire({
//           title: "Login Successful!",
//           text: `OTP has been sent to your registered ${sPassword}.`,
//           icon: "success",
//           confirmButtonText: "OK",
//         });
//         setIsOtpSent(true); // Display OTP input field
//       } else {
//         Swal.fire({
//           title: "Login Failed!",
//           text: res.message,
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//       }
//     } catch (error) {
//       console.error("Login error", error.message);
//       Swal.fire({
//         title: "Error!",
//         text: error.message,
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   const handleOtpSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const res = await VerifyOtp(otp, Mobile);
//       console.log(res,otp, Mobile,"=======================================================");
//       if (res.message === "Your otp is verified") {
//         // Show SweetAlert message for successful OTP verification
//         Swal.fire({
//           title: "OTP Verified!",
//           text: "You have been successfully logged in.",
//           icon: "success",
//           confirmButtonText: "OK",
//         });

//         navigate('/home'); // Navigate to home page after successful OTP verification
//       } else {
//         Swal.fire({
//           title: "OTP Verification Failed",
//           text: "The OTP you entered is incorrect. Please try again.",
//           icon: "error",
//           confirmButtonText: "Retry",
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       Swal.fire({
//         title: "Error",
//         text: "Something went wrong. Please try again later.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }

//     // Validate OTP field
//     setOtpError(!otp);
//     if (!otp) return;
//   };

//   return (

//     <ThemeProvider theme={defaultTheme}>

//   <Grid
//       container
//       component="main"
//       justifyContent="center"
//       alignItems="center"
//       sx={{
//         backgroundColor: secondaryColorTheme,
//         height: '94vh',
//         width: '99vw',
//         padding: '16px',
//       }}
//     >
//       <Grid
//         item
//         xs={12}
//         sm={8}
//         md={5}
//         component={Paper}
//         elevation={6}
//         square
//         sx={{
//           borderRadius: 2,
//           padding: '16px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Box
//           sx={{
//             my: 4,
//             mx: 2,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             width: '100%',
//           }}
//         >
//           <img src={imageIcon} style={{ width: '80px' }} alt="Logo" />

//           <Typography component="h1" variant="h5">
//             {isOtpSent ? 'OTP Verification' : 'LOGIN'}
//           </Typography>

//           {!isOtpSent ? (
//             // Login Form
//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleSubmit}
//               sx={{ mt: 1, width: '100%' }}
//             >
//               <TextField
//                 error={emailError}
//                 onChange={(e) => setLoginName(e.target.value)}
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="UserName"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <Box sx={{ position: 'relative' }}>
//                 <TextField
//                   error={passwordError}
//                   onChange={(e) => setSPassword(e.target.value)}
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   autoComplete="current-password"
//                 />
//                 <Box
//                   onClick={() => setShowPassword(!showPassword)}
//                   sx={{
//                     position: 'absolute',
//                     top: '50%',
//                     right: '10px',
//                     transform: 'translateY(-50%)',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {showPassword ? <LockOpenIcon /> : <LockIcon />}
//                 </Box>
//               </Box>

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 LOGIN
//               </Button>

//               <Grid container>
//                 <Grid item xs>
//                   <Link href="/forgot-password" variant="body2">
//                     Forgot Password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="/register" variant="body2">
//                     {"Don't have an account? Register"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           ) : (
//             // OTP Verification Form
//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleOtpSubmit}
//               sx={{ mt: 1, width: '100%' }}
//             >
//               <TextField
//                 error={otpError}
//                 onChange={(e) => setOtp(e.target.value)}
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="otp"
//                 label="Enter OTP"
//                 autoFocus
//                 placeholder="enter ur otp"
//               />

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 VERIFY OTP
//               </Button>
//             </Box>
//           )}
//         </Box>
//       </Grid>
//     </Grid>

//      </ThemeProvider>
//   );
// };

// export default Login;
