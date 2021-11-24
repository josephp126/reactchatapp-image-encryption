import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Tabs,
  Tab,
  Typography,
  Badge,
  Avatar,
  Divider,
  Chip,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import BadgeUnstyled from "@mui/core/BadgeUnstyled";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SwipeableViews from "react-swipeable-views";
import { user1, userPhoto } from "../../../assets/images/image";
import SideBar from "../../../components/SideBar";
import SideBarSkype from "../../../components/SideBarSkype";

function Home() {
  const theme = useTheme();
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState("");
  const [tabValue, setTabValue] = useState(0);

  const _onSearchMessage = () => {};

  const _onMouseDownSearch = (e) => {
    e.preventDefault();
  };

  const _onToggleEmoji = () => {
    console.log("clicked toggle emoji icon");
  };

  const _onMouseDownToggleEmoji = (e) => {
    e.preventDefault();
  };

  const _onUploadImage = () => {
    console.log("clicked Upload Image icon");
  };

  const _onMouseDownUploadImage = (e) => {
    e.preventDefault();
  };

  const _onUploadFiles = () => {
    console.log("clicked upload File icon");
  };

  const _onMouseDownUploadFiles = (e) => {
    e.preventDefault();
  };

  const _onMoreSetting = () => {
    console.log("clicked upload File icon");
  };

  const _onMouseDownMoreSetting = (e) => {
    e.preventDefault();
  };

  return (
    <Box className="w-100 h-100">
      <Grid container spacing={2} className="h-100" mt={0}>
        <Grid item xs={4} className="h-100" pb={2}>
          <SideBar />
        </Grid>
        <Grid item xs={8} className="h-100" pb={2} pr={2}>
          <Box
            className="w-100 h-100 primaryBg"
            flexDirection="column"
            display="flex"
            flex={1}
            borderRadius={2}
          >
            <Box
              className="chat-detail-selected-user-top-con"
              sx={{ p: 2, pb: 0 }}
            >
              <Box
                flexDirection="row"
                display="flex"
                alignItems="flex-start"
                sx={{ pb: 2 }}
              >
                <Box sx={{ pr: 2 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={user1}
                    sx={{ width: 70, height: 70 }}
                  />
                </Box>
                <Box
                  flexDirection="column"
                  display="flex"
                  justifyContent="flex-start"
                >
                  <Typography
                    textOverflow="ellipsis"
                    typography="h4"
                    overflow="hidden"
                    width="100%"
                    fontWeight="bold"
                  >
                    Jhon Sammie
                  </Typography>
                  <Box
                    flexDirection="row"
                    display="flex"
                    alignItems="center"
                    sx={{ pl: 2 }}
                  >
                    <Badge
                      color="success"
                      overlap="circular"
                      badgeContent=" "
                    ></Badge>
                    <Typography sx={{ pl: 2, pt: 0.5 }} typography="subtitle2">
                      Online
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ ml: "auto" }}>
                  <IconButton
                    onClick={_onSearchMessage}
                    onMouseDown={_onMouseDownSearch}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </Box>
              </Box>
              <Divider />
            </Box>
            <Box
              className="chat-detail-message-con"
              flex={1}
              sx={{ px: 2 }}
              overflow="auto"
            >
              <Box maxWidth={800} sx={{ mr: "auto", py: 1 }}>
                <Box display="flex" alignItems="flex-end">
                  <Box sx={{ pr: 2 }}>
                    <Avatar alt="user photo" src={user1} />
                  </Box>
                  <Box display="flex" flexDirection="column" className="w-100">
                    <Box className="message-receive-con">
                      <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Commodi similique facere blanditiis nemo
                        reprehenderit recusandae rerum et consectetur sed esse
                        rem impedit veniam reiciendis, accusantium fugit unde
                        error facilis cum!
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box maxWidth={800} sx={{ ml: "auto", py: 1 }}>
                <Box display="flex" alignItems="flex-end">
                  <Box display="flex" flexDirection="column" className="w-100">
                    <Box className="message-send-con">
                      <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Commodi similique facere blanditiis nemo
                        reprehenderit recusandae rerum et consectetur sed esse
                        rem impedit veniam reiciendis, accusantium fugit unde
                        error facilis cum!
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ pl: 2 }}>
                    <Avatar alt="user photo" src={userPhoto} />
                  </Box>
                </Box>
              </Box>
              <Box maxWidth={800} sx={{ mr: "auto", py: 1 }}>
                <Box display="flex" alignItems="flex-end">
                  <Box sx={{ pr: 2 }}>
                    <Avatar alt="user photo" src={user1} />
                  </Box>
                  <Box display="flex" flexDirection="column" className="w-100">
                    <Box className="message-receive-con">
                      <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Commodi similique facere blanditiis nemo
                        reprehenderit recusandae rerum et consectetur sed esse
                        rem impedit veniam reiciendis, accusantium fugit unde
                        error facilis cum!
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box maxWidth={800} sx={{ ml: "auto", py: 1 }}>
                <Box display="flex" alignItems="flex-end">
                  <Box display="flex" flexDirection="column" className="w-100">
                    <Box className="message-send-con">
                      <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Commodi similique facere blanditiis nemo
                        reprehenderit recusandae rerum et consectetur sed esse
                        rem impedit veniam reiciendis, accusantium fugit unde
                        error facilis cum!
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ pl: 2 }}>
                    <Avatar alt="user photo" src={userPhoto} />
                  </Box>
                </Box>
              </Box>
              <Box maxWidth={800} sx={{ mr: "auto", py: 1 }}>
                <Box display="flex" alignItems="flex-end">
                  <Box sx={{ pr: 2 }}>
                    <Avatar alt="user photo" src={user1} />
                  </Box>
                  <Box display="flex" flexDirection="column" className="w-100">
                    <Box className="message-receive-con">
                      <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Commodi similique facere blanditiis nemo
                        reprehenderit recusandae rerum et consectetur sed esse
                        rem impedit veniam reiciendis, accusantium fugit unde
                        error facilis cum!
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box maxWidth={800} sx={{ ml: "auto", py: 1 }}>
                <Box display="flex" alignItems="flex-end">
                  <Box display="flex" flexDirection="column" className="w-100">
                    <Box className="message-send-con">
                      <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Commodi similique facere blanditiis nemo
                        reprehenderit recusandae rerum et consectetur sed esse
                        rem impedit veniam reiciendis, accusantium fugit unde
                        error facilis cum!
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ pl: 2 }}>
                    <Avatar alt="user photo" src={userPhoto} />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ px: 2 }}>
              <Divider />
            </Box>
            <Box
              className="chat-detail-message-send-con"
              display="flex"
              alignItems="center"
              sx={{ p: 2 }}
            >
              <Box sx={{ pr: 2 }}>
                <Avatar alt="user photo" src={userPhoto} />
              </Box>
              <Box className="w-100">
                <TextField
                  label="Write your message..."
                  color="info"
                  fullWidth
                  className="primaryFontColor"
                  margin="none"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="emoji"
                          onClick={_onToggleEmoji}
                          onMouseDown={_onMouseDownToggleEmoji}
                        >
                          <InsertEmoticonIcon />
                        </IconButton>
                        <IconButton
                          aria-label="upload Image"
                          onClick={_onUploadImage}
                          onMouseDown={_onMouseDownUploadImage}
                        >
                          <CameraAltIcon />
                        </IconButton>
                        <IconButton
                          aria-label="upload Files"
                          onClick={_onUploadFiles}
                          onMouseDown={_onMouseDownUploadFiles}
                        >
                          <AttachFileIcon />
                        </IconButton>
                        <IconButton
                          aria-label="more setting"
                          onClick={_onMoreSetting}
                          onMouseDown={_onMouseDownMoreSetting}
                        >
                          <MoreHorizIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
