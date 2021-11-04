import React, { useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { logo } from "../../../assets/images/image";

function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const _onShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const _onMouseDownPassword = (e) => {
    e.preventDefault();
  }

  const _onShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const _onMouseDownConfirmPassword = (e) => {
    e.preventDefault();
  }
  
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="w-100 h-100"
    >
      <Grid item md={4} sm={12} flexDirection="column" textAlign="center">
        <img src={logo} alt="logo" className="logo-alone-img" />
        <Box className="w-100">
          <Typography
            variant="h4"
            align="center"
            component="div"
            sx={{ flexGrow: 1 }}
            mb={5}
          >
            Welcome to OneChain Community!
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField label="Email" variant="standard" className="w-100" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }} mt={2}>
            <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              label="Password"
              variant="standard"
              className="w-100"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: 
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={_onShowPassword}
                      onMouseDown={_onMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }} mt={2}>
            <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              label="Confirm Password"
              variant="standard"
              className="w-100"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: 
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={_onShowConfirmPassword}
                      onMouseDown={_onMouseDownConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                
              }}
            />
          </Box>
          <Box mt={4}>
            <Button variant="contained" disableElevation fullWidth>
              Sign Up
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Register;
