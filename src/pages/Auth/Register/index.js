import React, { useContext, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from "@mui/material/IconButton";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { logo } from "../../../assets/images/image";
import RegisterUser from "../../../context/actions/auth/RegisterUser";
import { GlobalContext } from "../../../context/Provider";

function Register() {
  const { authState, authDispatch } = useContext(GlobalContext);

  const [username, setUsername] = useState('');
  const [isErrorUserName, setIsErrorUserName] = useState(false);
  const [errorMsgUserName, setErrorMsgUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [errorMsgPassword, setErrorMsgPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isErrorConfirmPassword, setIsErrorConfirmPassword] = useState(false);
  const [errorMsgConfirmPassword, setErrorMsgConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const _onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const _onMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const _onShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const _onMouseDownConfirmPassword = (e) => {
    e.preventDefault();
  };

  const _onSignup = () => {
    if (username.trim() === "") {
      setIsErrorUserName(true);
      setErrorMsgUserName("Please input User name");
    }
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
    if (confirmPassword.trim() === "") {
      setIsErrorConfirmPassword(true);
      setErrorMsgConfirmPassword("Please input confirm password");
    } else if (password !== confirmPassword) {
      setIsErrorConfirmPassword(true);
      setErrorMsgConfirmPassword("Confirm password does not match");
    }
    if (!isErrorEmail && !isErrorPassword && !isErrorConfirmPassword) {
      console.log(email, password);
    }

    let payload = {
      username: username,
      email: email,
      password: password,
    };

    RegisterUser(payload)(authDispatch)((response) => {
      console.log("RES____:", response)
    });
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="w-100 h-100"
    >
      <Grid item md={4} sm={6} flexDirection="column" textAlign="center">
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                label="User Name"
                variant="standard"
                color={isErrorUserName ? "error" : "primary"}
                className="w-100"
                onChange={(e) => {
                  if (e.target.value.trim() === "") {
                    setIsErrorUserName(true);
                    setErrorMsgUserName("Please input Username");
                  } else {
                    setIsErrorUserName(false);
                    setErrorMsgUserName("");
                  }
                  setUsername(e.target.value);
                }}
              />
            </Box>
            {isErrorUserName && (
              <Typography
                variant="p"
                align="left"
                component="div"
                sx={{ flexGrow: 1 }}
                pt={1}
                pl={4}
                color="error"
              >
                {errorMsgUserName}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }} mt={2}>
              <MailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                label="Email"
                variant="standard"
                color={isErrorEmail ? "error" : "primary"}
                className="w-100"
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
                color={isErrorPassword ? "error" : "primary"}
                onChange={(e) => {
                  if (e.target.value.trim() === "") {
                    setIsErrorPassword(true);
                    setErrorMsgPassword("Please input password");
                  } else {
                    setIsErrorPassword(false);
                    setErrorMsgPassword("");
                  }
                  if (e.target.value !== confirmPassword) {
                    setIsErrorConfirmPassword(true);
                    setErrorMsgConfirmPassword(
                      "Confirm password does not match"
                    );
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
            {isErrorPassword && (
              <Typography
                variant="p"
                align="left"
                component="div"
                sx={{ flexGrow: 1 }}
                pt={1}
                pl={4}
                color="error"
              >
                {errorMsgPassword}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }} mt={2}>
              <VerifiedUserIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                label="Confirm Password"
                variant="standard"
                className="w-100"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                color={isErrorConfirmPassword ? "error" : "primary"}
                onChange={(e) => {
                  if (e.target.value.trim() === "") {
                    setIsErrorConfirmPassword(true);
                    setErrorMsgConfirmPassword("Please input confirm password");
                  } else if (password !== e.target.value) {
                    setIsErrorConfirmPassword(true);
                    setErrorMsgConfirmPassword(
                      "Confirm password does not match"
                    );
                  } else {
                    setIsErrorConfirmPassword(false);
                    setErrorMsgConfirmPassword("");
                  }
                  setConfirmPassword(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={_onShowConfirmPassword}
                        onMouseDown={_onMouseDownConfirmPassword}
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
            </Box>
            {isErrorConfirmPassword && (
              <Typography
                variant="p"
                align="left"
                component="div"
                sx={{ flexGrow: 1 }}
                pt={1}
                pl={4}
                color="error"
              >
                {errorMsgConfirmPassword}
              </Typography>
            )}
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              disableElevation
              fullWidth
              disabled={authState.loading}
              onClick={() => {
                _onSignup();
              }}
            >
              {authState.loading ? (
                <CircularProgress color="inherit" />
              ) : (
                "Sign Up"
              )}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Register;
