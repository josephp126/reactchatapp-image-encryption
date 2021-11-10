import React, { useContext, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { logo } from "../../../assets/images/image";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import TempLoginSuccess from "../../../context/actions/auth/TempLoginSuccess";
import { GlobalContext } from "../../../context/Provider";

function SingIn() {
  const { authDispatch } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [errorMsgPassword, setErrorMsgPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const _onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const _onMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const _onLogin = () => {
    if (email.trim() === "") {
      setIsErrorEmail(true);
      setErrorMsgEmail("Please input Email");
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setIsErrorEmail(true);
      setErrorMsgEmail("Please input valid email");
    }
    if (password.trim() === "") {
      setIsErrorPassword(true);
      setErrorMsgPassword("Please input password");
    }
    console.log("login button clicked");
    console.log(email, password)
    TempLoginSuccess({})(authDispatch);
  };

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
        <Box>
          <Typography
            variant="h3"
            align="center"
            component="div"
            sx={{ flexGrow: 1 }}
            mb={5}
          >
            Welcome Back!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                label="Email"
                variant="standard"
                className="w-100"
                value={email}
                onChange={(e) => {
                  if (e.target.value.trim() === "") {
                    setIsErrorEmail(true);
                    setErrorMsgEmail("Please input Email");
                  } else if (
                    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
                  ) {
                    setIsErrorEmail(true);
                    setErrorMsgEmail("Please input valid email");
                  } else {
                    setIsErrorEmail(false);
                    setErrorMsgEmail("");
                  }
                  setEmail(e.target.value);
                }}
              />
            </Box>
            {isErrorEmail && (
              <Typography
                variant="p"
                align="left"
                component="div"
                sx={{ flexGrow: 1 }}
                pt={1}
                pl={4}
                color="error"
              >
                {errorMsgEmail}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }} mt={2}>
              <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                label="Password"
                variant="standard"
                className="w-100"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  if (e.target.value.trim() === "") {
                    setIsErrorPassword(true);
                    setErrorMsgPassword("Please input password");
                  } else {
                    setIsErrorPassword(false);
                    setErrorMsgPassword("");
                  }
                  setPassword(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
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
                  ),
                }}
              />
            </Box>
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              disableElevation
              fullWidth
              onClick={_onLogin}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SingIn;
