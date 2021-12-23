import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Avatar, Badge, Chip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { friends, dmIcon } from "assets/images/image";
import SelectChat from "context/actions/chat/SelectChat";
import { GlobalContext } from "context/Provider";
import AddFriendsSvg from "assets/images/svg/AddFriendsSvg";
import { Link } from "react-router-dom";

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

function Friends({ friendList, currentChat, _onSelectFriend }) {
  const { selectedChatDispatch } = useContext(GlobalContext);
  const [openDM, setOpenDM] = useState(true);

  // const _onSelectFriend = (friend) => {
  //   console.log(friend);
  //   let payload = {
  //     type: "dm",
  //     selectedChat: friend,
  //   };
  //   SelectChat(payload)(selectedChatDispatch)((response) => {
  //     console.log("RES____:", response);
  //   });
  // };

  useEffect(() => {
    console.log("friends-------------------------friends: ", currentChat);
  }, [friendList]);

  return (
    <Box>
      <Link to="/channels/@me" style={{ textDecoration: "none" }}>
        <ListItemButton sx={{ height: 56, mb: 1, borderRadius: 2 }}>
          <ListItemIcon>
            {/* <img src={friends} alt="friends-img" /> */}
            <AddFriendsSvg />
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
      </Link>

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
            primary={
              <Box display="flex" flexDirection="row" alignItems="center">
                <img src={dmIcon} alt="dm-icon" />
                <Typography
                  textOverflow="ellipsis"
                  overflow="hidden"
                  width="100%"
                  whiteSpace="nowrap"
                  fontSize={15}
                  fontWeight="bold"
                  pl={1}
                >
                  Direct Messages
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
        friendList.map((item, index) => (
          <ListItemButton
            selected={currentChat?.selectedChat.id === item.id}
            onClick={() => {
              if (currentChat?.selectedChat.id === item.id) return;
              _onSelectFriend(item);
            }}
            key={item._id}
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
                {item.friend.avatar == "" ? (
                  <Avatar sx={{ bgcolor: item.friend.avatarColor }}>
                    {item.friend.username[0].toUpperCase()}
                  </Avatar>
                ) : (
                  <Avatar
                    alt={item.friend.username}
                    src={item.friend.avatar}
                    sx={{ width: 30, height: 30 }}
                  />
                )}
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
                    fontSize={14}
                  >
                    {item.friend.username}
                  </Typography>
                  {item.unReadMessageCnt > 0 && (
                    <Chip
                      color="warning"
                      label={
                        item.unReadMessageCnt > 99
                          ? "+99"
                          : item.unReadMessageCnt
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
        ))}
    </Box>
  );
}

export default Friends;
