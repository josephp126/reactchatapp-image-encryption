import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { GlobalContext } from "context/Provider";
import DefaultAvatar from "components/DefaultAvatar";
import BoldP from "components/Fonts/BoldP";
import P from "components/Fonts/P";
import CheckIcon from "@mui/icons-material/Check";
import ColorizeIcon from "@mui/icons-material/Colorize";
import FileUploadIcon from "@mui/icons-material/FileUpload";

function UserProfile() {
  const { authState } = useContext(GlobalContext);

  const _onNavToEditProfile = () => {};

  useEffect(() => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>", authState.data);
  }, [authState]);

  return (
    <Box>
      <P fontSize={20} bold>
        User Profile
      </P>
      <Box sx={{ mt: 3 }}>
        <P uppercase bold fontSize={15}>
          preview
        </P>
        <Divider sx={{ mb: 2, mt: 0.6 }} />
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
              pt: 7,
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
              </Box>
            </Box>
            <Box sx={{ p: 1, px: 2 }}>
              <P bold fontSize={20}>
                {authState.data.username}
              </P>
              <Divider sx={{ my: 1 }} />
              <P uppercase bold fontSize={14}>
                about me
              </P>
              <P fontSize={14}>
                Blockchain / Full Stack Web / Mobile Developer
              </P>
            </Box>
          </Box>
          <Box sx={{ mt: 5 }}>
            <P uppercase bold fontSize={15}>
              avatar
            </P>
            <Divider sx={{ mb: 2, mt: 0.6 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={() => {
                  _onNavToEditProfile();
                }}
                variant="contained"
                sx={{ textTransform: "capitalize" }}
                size="small"
                disableElevation
                color="greenColor"
              >
                Change Avatar
              </Button>
              <Button
                onClick={() => {
                  _onNavToEditProfile();
                }}
                variant="text"
                sx={{ textTransform: "capitalize", ml: 2 }}
                size="small"
                disableElevation
                color="primary"
              >
                Remove Avatar
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: 5 }}>
            <P uppercase bold fontSize={15}>
              profile background
            </P>
            <Divider sx={{ mb: 2, mt: 0.6 }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: authState.data.avatarColor,
                    border: "1px solid",
                    borderColor: authState.data.avatarColor,
                  }}
                >
                  <CheckIcon />
                </Box>
                <P fontSize={15} center style={{ mt: 0.8 }}>
                  Default
                </P>
              </Box>
              <Box sx={{ ml: 2 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    border: "1px solid",
                    borderColor: "secondary.main",
                    position: "relative",
                  }}
                >
                  <ColorizeIcon
                    sx={{ position: "absolute", top: 0, right: 0 }}
                  />
                  <CheckIcon />
                </Box>
                <P fontSize={15} center style={{ mt: 0.8 }}>
                  Custom
                </P>
              </Box>
              <Box sx={{ ml: 2 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    border: "1px solid",
                    borderColor: "third.main",
                    position: "relative",
                  }}
                >
                  <FileUploadIcon
                    sx={{ position: "absolute", top: 0, right: 0 }}
                  />
                  <CheckIcon />
                </Box>
                <P fontSize={15} center style={{ mt: 0.8 }}>
                  Image
                </P>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 5 }}>
            <P uppercase bold fontSize={15}>
              about me
            </P>
            <Divider sx={{ mb: 2, mt: 0.6 }} />
            <P fontSize={15}>You can use markdown and links if you'd like.</P>
            <Box sx={{ mt: 2, position: "relative" }}>
              <TextField
                multiline
                rows={5}
                variant="outlined"
                sx={{ bgcolor: "third.main" }}
                fullWidth
                inputProps={{maxLength: 190}}
                className="pr-50-px-text-field"
              />
              <P
                bold
                fontSize={15}
                style={{ position: "absolute", bottom: 10, right: 10 }}
              >
                190
              </P>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default UserProfile;
