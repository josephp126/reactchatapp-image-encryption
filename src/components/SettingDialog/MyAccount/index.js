import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { GlobalContext } from "context/Provider";
import DefaultAvatar from "components/DefaultAvatar";
import BoldP from "components/Fonts/BoldP";
import P from "components/Fonts/P";
import SpaceBetweenBox from "components/Container/SpaceBetweenBox";

function MyAccount() {
  const { authState } = useContext(GlobalContext);

  const _onNavToEditProfile = () => {};

  useEffect(() => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>", authState.data);
  }, [authState]);

  return (
    <Box>
      <P fontSize={20} bold>
        My Account
      </P>
      <Box sx={{ mt: 3 }}>
        <Box
          sx={{ borderRadius: 10, display: "flex", flexDirection: "column" }}
        >
          <Box
            sx={{
              height: 100,
              background: authState.data.avatarColor,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          ></Box>
          <Box
            sx={{
              bgcolor: "third.main",
              pt: 9,
              px: 1,
              pb: 1,
              position: "relative",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -20,
                left: 0,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      border: "5px solid ",
                      borderColor: "third.main",
                      borderRadius: "50%",
                    }}
                  >
                    <DefaultAvatar
                      bgColor={authState.data.avatarColor}
                      size={70}
                    />
                  </Box>
                  <Box sx={{ ml: 1 }}>
                    <BoldP>{authState.data.username}</BoldP>
                  </Box>
                </Box>
                <Box>
                  <Button
                    onClick={() => {
                      _onNavToEditProfile();
                    }}
                    variant="contained"
                    sx={{ textTransform: "capitalize", py: 0.2 }}
                    size="small"
                    disableElevation
                    color="greenColor"
                  >
                    Edit User Profile
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ p: 1, px: 2, borderRadius: 1, bgcolor: "third.secondary" }}
            >
              <SpaceBetweenBox style={{ py: 0.5 }}>
                <Box>
                  <P
                    uppercase
                    ellipsis
                    overflowHidden
                    width100
                    nowrap
                    fontSize={14}
                  >
                    username
                  </P>
                  <P fontSize={14} ellipsis overflowHidden width100 nowrap>
                    {authState.data.username}
                  </P>
                </Box>
                <Box>
                  <Button
                    onClick={() => {
                      _onNavToEditProfile();
                    }}
                    variant="contained"
                    sx={{ textTransform: "capitalize", py: 0.2 }}
                    size="small"
                    disableElevation
                    color="secondary"
                  >
                    Edit
                  </Button>
                </Box>
              </SpaceBetweenBox>
              <SpaceBetweenBox style={{ py: 0.5 }}>
                <Box>
                  <P
                    uppercase
                    ellipsis
                    overflowHidden
                    width100
                    nowrap
                    fontSize={14}
                  >
                    email
                  </P>
                  <P fontSize={14} ellipsis overflowHidden width100 nowrap>
                    {authState.data.email}
                  </P>
                </Box>
                <Box>
                  <Button
                    onClick={() => {
                      _onNavToEditProfile();
                    }}
                    variant="contained"
                    sx={{ textTransform: "capitalize", py: 0.2 }}
                    size="small"
                    disableElevation
                    color="secondary"
                  >
                    Edit
                  </Button>
                </Box>
              </SpaceBetweenBox>
            </Box>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Box>
            <P fontSize={20} bold>
              Password and Authentication
            </P>
            <Button
              onClick={() => {
                _onNavToEditProfile();
              }}
              variant="contained"
              sx={{ textTransform: "capitalize", my: 2 }}
              size="small"
              disableElevation
              color="secondary"
            >
              Change Password
            </Button>
            <P uppercase fontSize={15}>
              Two-Factor Authentication
            </P>
            <P fontSize={15}>
              Protect your OneChain account with an extra layer of security.
              Once configured, you'll be required to enter both your password
              and an authentication code from your mobile phone in order to sign
              in.
            </P>
            <Button
              disabled
              onClick={() => {
                _onNavToEditProfile();
              }}
              variant="contained"
              sx={{ textTransform: "capitalize", my: 2 }}
              size="small"
              disableElevation
              color="secondary"
            >
              Enable Two-Factor Auth
            </Button>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Box>
            <P bold fontSize={15}>
              Account Removal
            </P>
            <Box sx={{ my: 2 }}>
              <P fontSize={14}>
                Disabling your account means you can recover it at any time
                after taking this action.
              </P>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
              <Button
                onClick={() => {
                  _onNavToEditProfile();
                }}
                variant="contained"
                sx={{ textTransform: "capitalize" }}
                size="small"
                disableElevation
                color="error"
              >
                Disable Account
              </Button>
              <Button
                onClick={() => {
                  _onNavToEditProfile();
                }}
                variant="outlined"
                sx={{ textTransform: "capitalize", ml: 2 }}
                size="small"
                disableElevation
                color="error"
              >
                Delete Account
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MyAccount;
