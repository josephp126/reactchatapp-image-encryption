import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Avatar, Badge, Chip, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import SideBarAccount from "./Account";
import { useState } from "react";
import {
  friends,
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
} from "../../assets/images/image";

const data = [
  { icon: <People />, label: "Authentication" },
  { icon: <Dns />, label: "Database" },
  { icon: <PermMedia />, label: "Storage" },
  { icon: <Public />, label: "Hosting" },
];

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
    name: "Gammie sammie",
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

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

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

export default function SideBar() {
  const [openDM, setOpenDM] = useState(true);
  const [openChannel, setOpenChannel] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(0);

  const _onSelectUser = (index) => {
    setSelectedUserId(index);
  };

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%", maxWidth: 250 }}>
      <Paper elevation={0} sx={{ minWidth: "100%", minHeight: "100%" }}>
        <FireNav component="nav" disablePadding sx={{ height: "100%" }}>
          <ListItem component="div" disablePadding>
            <SideBarAccount />
            <Tooltip title="Settings">
              <IconButton
                size="large"
                sx={{
                  "& svg": {
                    transition: "0.2s",
                    transform: "translateX(0) rotate(0)",
                  },
                  "&:hover, &:focus": {
                    bgcolor: "unset",
                    "& svg:first-of-type": {
                      transform: "translateX(-4px) rotate(-20deg)",
                    },
                    "& svg:last-of-type": {
                      right: 0,
                      opacity: 1,
                    },
                  },
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    height: "80%",
                    display: "block",
                    left: 0,
                    width: "1px",
                    bgcolor: "divider",
                  },
                }}
              >
                <Settings color="secondary" />
                <ArrowRight
                  sx={{ position: "absolute", right: 4, opacity: 0 }}
                  color="secondary"
                />
              </IconButton>
            </Tooltip>
          </ListItem>
          <Box
            sx={{ padding: 1, height: "calc(100% - 72px)", overflow: "auto" }}
          >
            <Box>
              <ListItemButton sx={{ height: 56, mb: 1, borderRadius: 2 }}>
                <ListItemIcon>
                  <img src={friends} alt="friends-img" />
                </ListItemIcon>
                <ListItemText
                  primary="Friends"
                  primaryTypographyProps={{
                    color: "secondary",
                    fontWeight: "bold",
                    variant: "body2",
                  }}
                />
              </ListItemButton>

              <Box
                sx={{
                  bgcolor: openDM ? "rgba(71, 98, 130, 0.2)" : null,
                  pb: openDM ? 0 : 0,
                  borderRadius: 2,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setOpenDM(!openDM)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: openDM ? 0 : 2.5,
                    "&:hover, &:focus": {
                      "& svg": { opacity: openDM ? 1 : 0 },
                    },
                    borderRadius: 2,
                  }}
                >
                  <ListItemText
                    primary="Direct Messages"
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: "bold",
                      lineHeight: "20px",
                      mb: "2px",
                      paddingBottom: 0,
                    }}
                    secondary="See DM here."
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: "16px",
                      color: openDM ? "rgba(0,0,0,0)" : "secondary",
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: openDM ? "rotate(-180deg)" : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                </ListItemButton>
              </Box>
              {openDM &&
                contactList.map((contact, index) => (
                  <ListItemButton
                    selected={selectedUserId === index}
                    onClick={() => _onSelectUser(index)}
                    key={contact.id}
                    sx={{
                      py: 1,
                      minHeight: 32,
                      color: "rgba(255,255,255,.8)",
                      mt: 0.5,
                      borderRadius: 2,
                    }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar
                          alt={contact.name}
                          src={contact.avatar}
                          sx={{ width: 30, height: 30 }}
                        />
                      </StyledBadge>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box display="flex" flexDirection="row" alignItems="center">
                          <Typography
                            textOverflow="ellipsis"
                            overflow="hidden"
                            width="100%"
                            whiteSpace="nowrap"
                          >
                            {contact.name}
                          </Typography>
                          {contact.unReadMessageCnt > 0 && (
                            <Chip
                              color="warning"
                              label={
                                contact.unReadMessageCnt > 99
                                  ? "+99"
                                  : contact.unReadMessageCnt
                              }
                              size={'small'}
                              sx={{fontSize: 12, width: 50, height: 20}}
                            />
                          )}
                        </Box>
                      }
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        color: "secondary",
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>
            <Box>
              <Box
                sx={{
                  bgcolor: openChannel ? "rgba(71, 98, 130, 0.2)" : null,
                  pb: openChannel ? 0 : 0,
                  borderRadius: 2,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setOpenChannel(!openChannel)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: openChannel ? 0 : 2.5,
                    "&:hover, &:focus": {
                      "& svg": { opacity: openChannel ? 1 : 0 },
                    },
                    borderRadius: 2,
                  }}
                >
                  <ListItemText
                    primary="Channels"
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: "bold",
                      lineHeight: "20px",
                      mb: "2px",
                      paddingBottom: 0,
                    }}
                    secondary="Select a channel here."
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: "16px",
                      color: openChannel ? "rgba(0,0,0,0)" : "secondary",
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: openChannel ? "rotate(-180deg)" : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                </ListItemButton>
              </Box>
              {openChannel &&
                contactList.map((contact, index) => (
                  <ListItemButton
                    selected={selectedUserId === index}
                    onClick={() => _onSelectUser(index)}
                    key={contact.id}
                    sx={{
                      py: 1,
                      minHeight: 32,
                      color: "rgba(255,255,255,.8)",
                      mt: 0.5,
                      borderRadius: 2,
                    }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar
                          alt={contact.name}
                          src={contact.avatar}
                          sx={{ width: 30, height: 30 }}
                        />
                      </StyledBadge>
                    </ListItemIcon>
                    <ListItemText
                      primary={contact.name}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        color: "secondary",
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </Box>
        </FireNav>
      </Paper>
    </Box>
  );
}
