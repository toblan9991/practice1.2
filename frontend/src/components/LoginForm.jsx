import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  TextField,
  InputLabel,
  InputAdornment,
  Typography,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
// From Redux
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/company/companySlice";
import { useDispatch } from "react-redux";
import { flexbox, width } from "@mui/system";

export default function LoginForm({ formData, setFormData }) {
  const [showPassword, setShowPassword] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  //   Redux
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleLoginSuccess = async () => {
    try {
      dispatch(signInStart);
      const res = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        // console.log("Login successful:", data);

        // console.log(data);

        // localStorage.setItem("token", data.token); // store the token in local storage

        // const token = localStorage.getItem("token");
        // console.log("Retrieved token:", token);
        // console.log("All Cookies:", document.cookie);
        dispatch(signInSuccess(data));
        setOpenAlert(true);
        navigate("/dashboard", { state: { loginSuccess: true } });
      } else {
        console.error("Login failed:");
        dispatch(signInFailure(data));
        return;
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: "1 " }}>
          <img src="../../public/images/login-image.svg" alt="login image" />
        </Box>

        <Box sx={{ flex: "1 0 50%" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Login
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              width: "70%",
            }}
          >
            <InputLabel htmlFor="email-input">Email</InputLabel>
            <TextField
              id="email-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <TextField
              id="password-input"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
            <Button
              onClick={handleLoginSuccess}
              sx={{
                color: "primary",
                margin: "auto",
                width: "50%",
                marginTop: "1rem",
              }}
              variant="contained"
            >
              Login
            </Button>

            <Typography sx={{ marginTop: "1rem" }}>
              Don't have an account?
              <Link to="/sign-up" style={{ color: "blue" }}>
                {" "}
                &nbsp;Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>

      {openAlert && (
        <Alert
          severity="success"
          sx={{ position: "absolute", top: 0, width: "100%" }}
          onClose={handleCloseAlert}
        >
          Login Successful!
        </Alert>
      )}
    </>
  );
}
