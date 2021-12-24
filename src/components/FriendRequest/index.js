/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Button,
  Fade,
  Divider,
} from "@mui/material";
import Send from "@mui/icons-material/Send";
import { darkTheme, lightTheme } from "assets/theme/theme";
import { useTheme } from "context/ThemeProvider";
import { logo } from "assets/images/image";

function FriendRequest() {
  const [ThemeMode] = useTheme();
  const [friendEmail, setFriendEmail] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [errorMsgEmail, setErrorMsgEmail] = useState("");

  const _onSendFriendRequest = () => {
    if (friendEmail.trim() === "") {
      setIsErrorEmail(true);
      setErrorMsgEmail("Please input Email");
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(friendEmail)
    ) {
      setIsErrorEmail(true);
      setErrorMsgEmail("Please input valid email");
    } else {
      setIsErrorEmail(false);
      setErrorMsgEmail("");
      console.log(friendEmail);
    }
  };

  return (
    <Box
      className="friend-list-con"
      sx={{
        paddingTop: 3,
        px: 5,
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ px: 1 }}>
        <Typography
          typography="p"
          overflow="hidden"
          sx={{
            textTransform: "uppercase",
            fontSize: 15,
            pb: 1,
            fontWeight: "bold",
          }}
        >
          Add Friend
        </Typography>
        <Typography
          typography="p"
          overflow="hidden"
          sx={{
            fontSize: 14,
            pb: 1,
          }}
        >
          You can add a friend with their OneChain Tag, It is cAsE sEnSitivE!
        </Typography>
        <Box className="w-100">
          <TextField
            type="email"
            autoFocus
            label=""
            color="info"
            fullWidth
            placeholder="example@test.com"
            className="primaryFontColor"
            margin="none"
            value={friendEmail}
            onChange={(e) => {
              if (e.target.value == "") {
                setErrorMsgEmail("");
                setIsErrorEmail(false);
              }
              setFriendEmail(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={() => {
                      _onSendFriendRequest();
                    }}
                    disabled={!friendEmail}
                    variant="contained"
                    endIcon={<Send />}
                    sx={{ textTransform: "capitalize" }}
                    size="small"
                    disableElevation
                  >
                    Send Friend Request
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          {isErrorEmail && (
            <Fade in={isErrorEmail}>
              <Typography
                typography="p"
                overflow="hidden"
                color={
                  ThemeMode === "light"
                    ? lightTheme.errorColor
                    : darkTheme.errorColor
                }
                sx={{
                  fontSize: 14,
                  pb: 1,
                  pt: 1,
                }}
              >
                {errorMsgEmail}
              </Typography>
            </Fade>
          )}
        </Box>
        <Divider sx={{ mt: 2 }} />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center ",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <img src={logo} alt="logo-img" />

          <Typography
            typography="p"
            overflow="hidden"
            sx={{
              fontSize: 15,
              pb: 1,
              textAlign: "center",
              mt: 4
            }}
          >
            Onechain is waiting on friends. You don’t have to though!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default FriendRequest;
