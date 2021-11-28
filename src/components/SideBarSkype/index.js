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

import {
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  userPhoto,
} from "assets/images/image";

function SideBarSkype() {
  const theme = useTheme();
  const [searchText, setSearchText] = useState("");
  const [tabValue, setTabValue] = useState(0);

  const _onSearchMessage = () => {};

  const _onMouseDownSearch = (e) => {
    e.preventDefault();
  };

  const _onTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setTabValue(index);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        className="h-100"
      >
        {value === index && <Box className="h-100">{children}</Box>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const contactList = [
    {
      id: 1,
      name: "sammie",
      avatar: user1,
      timeAgo: "a month ago",
      lastMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum animi",
      unReadMessageCnt: 0,
    },
    {
      id: 2,
      name: "Tommy",
      avatar: user2,
      timeAgo: "a sec ago",
      lastMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum animi",
      unReadMessageCnt: 4,
    },
    {
      id: 3,
      name: "Gammie",
      avatar: user3,
      timeAgo: "3 mins ago",
      lastMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum animi",
      unReadMessageCnt: 300,
    },
    {
      id: 4,
      name: "Hommy",
      avatar: user4,
      timeAgo: "a year ago",
      lastMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum animi",
      unReadMessageCnt: 7,
    },
    {
      id: 5,
      name: "Bommie",
      avatar: user5,
      timeAgo: "39 mins ago",
      lastMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum animi",
      unReadMessageCnt: 2,
    },
    {
      id: 6,
      name: "Jammy",
      avatar: user6,
      timeAgo: "a few seconds ago",
      lastMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum animi",
      unReadMessageCnt: 6,
    },
    {
      id: 7,
      name: "Lummy",
      avatar: user7,
      timeAgo: "a month ago",
      lastMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum animi",
      unReadMessageCnt: 304,
    },
    {
      id: 8,
      name: "Vammie",
      avatar: user8,
      timeAgo: "2mins ago",
      lastMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum animi",
      unReadMessageCnt: 0,
    },
    {
      id: 9,
      name: "Commie",
      avatar: user9,
      timeAgo: "a few seconds ago",
      lastMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum animi",
      unReadMessageCnt: 10,
    },
  ];

  return (
    <Box className="h-100" pl={2}>
      <Box className="w-100 h-100 primaryBg" borderRadius={2}>
        <Box
          className=""
          sx={{ px: 2, py: 3 }}
          alignItems="center"
          display="flex"
        >
          <Box className="w-100">
            <TextField
              label="Search..."
              color="info"
              fullWidth
              className="primaryFontColor"
              margin="none"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={_onSearchMessage}
                      onMouseDown={_onMouseDownSearch}
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ pl: 4 }}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={_onSearchMessage}
              onMouseDown={_onMouseDownSearch}
              edge="end"
            >
              <SettingsInputComponentIcon />
            </IconButton>
          </Box>
        </Box>
        <Box className="chat-tab-container">
          <Tabs
            value={tabValue}
            onChange={_onTabChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="chat tab"
          >
            <Tab icon={<ChatIcon />} label="Chat" {...a11yProps(0)} />
            <Tab
              icon={<PermContactCalendarIcon />}
              label="Contacts"
              {...a11yProps(1)}
            />
            <Tab icon={<SettingsIcon />} label="Setting" {...a11yProps(2)} />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={tabValue}
            onChangeIndex={handleChangeIndex}
            className="chat-swapable-container"
          >
            <TabPanel value={tabValue} index={0} dir={theme.direction}>
              {contactList.map((contact, index) => {
                return (
                  <Box sx={{ px: 2, py: 2, pb: 0 }} key={index}>
                    <Box display="flex" alignItems="center" sx={{ pb: 2 }}>
                      <Box>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar alt={contact.name} src={contact.avatar} />
                        </StyledBadge>
                      </Box>
                      <Box
                        flexDirection="column"
                        sx={{ pl: 2 }}
                        className="chat-contact-detail-con"
                      >
                        <Box flexDirection="row" display="flex">
                          <Typography
                            textOverflow="ellipsis"
                            overflow="hidden"
                            width="100%"
                            fontWeight="bold"
                          >
                            {contact.name}
                          </Typography>
                          <Typography sx={{ minWidth: "fit-content" }}>
                            {contact.timeAgo}
                          </Typography>
                        </Box>
                        <Box
                          flexDirection="row"
                          display="flex"
                          className=""
                          sx={{ pt: 1 }}
                        >
                          <Typography
                            textOverflow="ellipsis"
                            overflow="hidden"
                            width="100%"
                            whiteSpace="nowrap"
                          >
                            {contact.lastMessage}
                          </Typography>
                          {contact.unReadMessageCnt > 0 && (
                            <Chip
                              color="info"
                              label={
                                contact.unReadMessageCnt > 99
                                  ? "+99"
                                  : contact.unReadMessageCnt
                              }
                              size="small"
                            />
                          )}
                        </Box>
                      </Box>
                    </Box>
                    <Divider />
                  </Box>
                );
              })}
            </TabPanel>
            <TabPanel value={tabValue} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={tabValue} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Box>
    </Box>
  );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default SideBarSkype;
