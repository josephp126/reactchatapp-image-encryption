import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Chip, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import TagIcon from "@mui/icons-material/Tag";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Settings from "@mui/icons-material/Settings";
import SideBarAccount from "./Account";
import { useState } from "react";
import { hashTag, logoMain } from "assets/images/image";
import SettingDialog from "../SettingDialog";
import Friends from "./Friends";
import callApi from "helpers/callApi";
import { GlobalContext } from "context/Provider";
import { useHistory } from "react-router-dom";

const channelList = [
  {
    id: 1,
    name: "Developers",
    unReadMessageCnt: 0,
  },
  {
    id: 2,
    name: "Managers",
    unReadMessageCnt: 4,
  },
  {
    id: 3,
    name: "Clients",
    unReadMessageCnt: 300,
  },
  {
    id: 4,
    name: "Testers",
    unReadMessageCnt: 7,
  },
  {
    id: 5,
    name: "Business",
    unReadMessageCnt: 2,
  },
  {
    id: 6,
    name: "WorkFlow",
    unReadMessageCnt: 6,
  },
  {
    id: 7,
    name: "Meme",
    unReadMessageCnt: 304,
  },
  {
    id: 8,
    name: "Funny",
    unReadMessageCnt: 0,
  },
  {
    id: 9,
    name: "Joke",
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

export default function SideBar() {
  const history = useHistory();
  const { authState } = React.useContext(GlobalContext);
  const [friends, setFriends] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const [openDM, setOpenDM] = useState(true);
  const [openChannel, setOpenChannel] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [openSettingdialog, setOpenSettingDialog] = useState(false);

  const handleClickOpenSettingDialog = () => {
    setOpenSettingDialog(true);
  };

  const handleCloseSettingDialog = () => {
    setOpenSettingDialog(false);
  };

  const _onSelectUser = (index) => {
    setSelectedUserId(index);
  };

  const _onSelectFriend = (friend) => {
    console.log("friend", friend);
    let payload = {
      type: "dm",
      selectedChat: friend,
    };
    selectCurrentChat(payload);
  };

  const selectCurrentChat = (payload) => {
    console.log("payload", payload);
    setCurrentChat(payload);
    history.push({
      pathname: `/channels/${payload.selectedChat.id}`,
      // search: "?the=search",
      state: { currentChat: payload },
    });
  };

  React.useEffect(() => {
    const getFriends = async () => {
      await callApi
        .get(`/friend/${authState.data.id}`)
        .then((res) => {
          console.log("))))))________________(((((((((", res.data);
          setFriends(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getFriends();
  }, []);

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%", maxWidth: 250 }}>
      <Paper elevation={0} sx={{ minWidth: "100%", minHeight: "100%" }}>
        <FireNav component="nav" disablePadding sx={{ height: "100%" }}>
          <ListItemButton component="a">
            <ListItemText
              sx={{ my: 0 }}
              primary={<img src={logoMain} alt="logo-img" width="100%" />}
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: "medium",
                letterSpacing: 0,
              }}
            />
          </ListItemButton>
          <ListItem component="div" disablePadding>
            <SideBarAccount />
            <Tooltip title="Settings" arrow>
              <IconButton
                onClick={handleClickOpenSettingDialog}
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
            sx={{ padding: 1, height: "calc(100% - 150px)", overflow: "auto" }}
          >
            <Friends
              friendList={friends}
              currentChat={currentChat}
              _onSelectFriend={_onSelectFriend}
            />
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
                    primary={
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <img src={hashTag} alt="dm-icon" width={20} />
                        <Typography
                          textOverflow="ellipsis"
                          overflow="hidden"
                          width="100%"
                          whiteSpace="nowrap"
                          fontSize={15}
                          fontWeight="bold"
                          pl={1}
                        >
                          Channels
                        </Typography>
                      </Box>
                    }
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

              {openChannel && (
                <>
                  <ListItemButton
                    sx={{
                      py: 1,
                      minHeight: 32,
                      color: "rgba(255,255,255,.8)",
                      mt: 0.5,
                      borderRadius: 2,
                    }}
                  >
                    <ListItemIcon>
                      <AddIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Add channels"
                      primaryTypographyProps={{
                        color: "secondary",
                        fontWeight: "bold",
                        variant: "body2",
                      }}
                    />
                  </ListItemButton>
                  {channelList.map((channel, index) => {
                    return (
                      <ListItemButton
                        selected={selectedUserId === index}
                        onClick={() => _onSelectUser(index)}
                        key={channel.id}
                        sx={{
                          py: 1,
                          minHeight: 32,
                          color: "rgba(255,255,255,.8)",
                          mt: 0.5,
                          borderRadius: 2,
                        }}
                      >
                        <ListItemIcon sx={{ color: "inherit" }}>
                          <TagIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Box
                              display="flex"
                              flexDirection="row"
                              alignItems="center"
                            >
                              <Typography
                                textOverflow="ellipsis"
                                overflow="hidden"
                                width="100%"
                                whiteSpace="nowrap"
                                fontSize={14}
                                fontWeight="bold"
                              >
                                {channel.name}
                              </Typography>
                              {channel.unReadMessageCnt > 0 && (
                                <Chip
                                  color="warning"
                                  label={
                                    channel.unReadMessageCnt > 99
                                      ? "+99"
                                      : channel.unReadMessageCnt
                                  }
                                  size={"small"}
                                  sx={{ fontSize: 12, width: 50, height: 20 }}
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
                    );
                  })}
                </>
              )}
            </Box>
          </Box>
        </FireNav>
      </Paper>
      <SettingDialog
        openSettingdialog={openSettingdialog}
        setOpenSettingDialog={setOpenSettingDialog}
        handleClickOpenSettingDialog={handleClickOpenSettingDialog}
        handleCloseSettingDialog={handleCloseSettingDialog}
      />
    </Box>
  );
}
