import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Grid, Box, ListItemButton, ListItemIcon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AppearanceSetting from "./Appearance";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SettingDialog({
  openSettingdialog,
  setOpenSettingDialog,
  handleClickOpenSettingDialog,
  handleCloseSettingDialog,
}) {
  const [selectedOption, setSelectedOption] = useState("myAccount");

  return (
    <div>
      <Dialog
        fullScreen
        open={openSettingdialog}
        onClose={handleCloseSettingDialog}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseSettingDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleCloseSettingDialog}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container className="container h-100">
          <Grid item xs={12} md={4}>
            <Box>
              <Typography
                textOverflow="ellipsis"
                overflow="hidden"
                width="100%"
                whiteSpace="nowrap"
                fontSize={15}
                fontWeight="bold"
                pl={1}
              >
                User Settings
              </Typography>
              <ListItemButton
                sx={{
                  minHeight: 32,
                  color: "rgba(255,255,255,.8)",
                  mt: 0.5,
                  borderRadius: 2,
                }}
                selected={selectedOption === "myAccount"}
                onClick={() => setSelectedOption("myAccount")}
              >
                <ListItemIcon>
                  <AccountCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="My Account"
                  primaryTypographyProps={{
                    color: "secondary",
                    fontWeight: "bold",
                    variant: "body2",
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 32,
                  color: "rgba(255,255,255,.8)",
                  mt: 0.5,
                  borderRadius: 2,
                }}
                selected={selectedOption === "userProfile"}
                onClick={() => setSelectedOption("userProfile")}
              >
                <ListItemIcon>
                  <ManageAccountsIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="User Profile"
                  primaryTypographyProps={{
                    color: "secondary",
                    fontWeight: "bold",
                    variant: "body2",
                  }}
                />
              </ListItemButton>
              <Divider sx={{ my: 2 }} />
              <Typography
                textOverflow="ellipsis"
                overflow="hidden"
                width="100%"
                whiteSpace="nowrap"
                fontSize={15}
                fontWeight="bold"
                pl={1}
              >
                App Settings
              </Typography>
              <ListItemButton
                sx={{
                  minHeight: 32,
                  color: "rgba(255,255,255,.8)",
                  mt: 0.5,
                  borderRadius: 2,
                }}
                selected={selectedOption === "appearance"}
                onClick={() => setSelectedOption("appearance")}
              >
                <ListItemIcon>
                  <ColorLensIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="Appearance"
                  primaryTypographyProps={{
                    color: "secondary",
                    fontWeight: "bold",
                    variant: "body2",
                  }}
                />
              </ListItemButton>
              <Divider sx={{ my: 2 }} />
              <ListItemButton
                sx={{
                  minHeight: 32,
                  color: "rgba(255,255,255,.8)",
                  mt: 0.5,
                  borderRadius: 2,
                }}
                color="error"
                onClick={() => console.log("log out")}
              >
                <ListItemIcon>
                  <LogoutIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="Logout"
                  primaryTypographyProps={{
                    color: "error",
                    fontWeight: "bold",
                    variant: "body2",
                  }}
                />
              </ListItemButton>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" alignItems="center">
                <IconButton>
                  <TwitterIcon color="secondary" />
                </IconButton>
                <IconButton>
                  <FacebookIcon color="secondary" />
                </IconButton>
                <IconButton>
                  <InstagramIcon color="secondary" />
                </IconButton>
              </Box>
              <Typography
                textOverflow="ellipsis"
                overflow="hidden"
                width="100%"
                whiteSpace="nowrap"
                fontSize={12}
                fontWeight="medium"
                pl={1}
                pt={2}
                color="secondary"
              >
                Stable 105691(8f330s) <br />
                Windows 10 64-Bit
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ padding: 5 }}>
              {selectedOption === "myAccount" && (
                <Typography whiteSpace="nowrap" fontSize={15} fontWeight="bold">
                  My Account
                </Typography>
              )}
              {selectedOption === "userProfile" && (
                <Typography whiteSpace="nowrap" fontSize={15} fontWeight="bold">
                  User Profile
                </Typography>
              )}
              {selectedOption === "appearance" && <AppearanceSetting />}
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
