import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Badge,
  Avatar,
  Divider,
  Button,
  Tooltip,
} from "@mui/material";
import AddFriendsSvg from "assets/images/svg/AddFriendsSvg";
import Fade from "@mui/material/Fade";
import FriendsButton from "components/FriendsButton";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FriendList from "components/FriendsList";
import FriendListContainer from "components/FriendListContainer";
import Send from "@mui/icons-material/Send";
import FriendRequest from "components/FriendRequest";

function Me() {
  const [selectedItem, setSelectedItem] = useState("Online");

  const _onSelectItem = (val) => {
    console.log(val);
    setSelectedItem(val);
  };

  const _openGroupChatDialog = () => {
    console.log("_openGroupChatDialog");
  };

  const _openHelpDialog = () => {
    console.log("_openHelpDialog");
  };
  return (
    <Box
      className="w-100 h-100 primaryBg"
      flexDirection="column"
      display="flex"
      flex={1}
      borderRadius={0}
    >
      <Box className="chat-detail-selected-user-top-con">
        <Box
          className="app-bar"
          flexDirection="row"
          display="flex"
          alignItems="center"
          sx={{ px: 2, py: 1 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AddFriendsSvg width={24} height={24} />
            <Typography
              textOverflow="ellipsis"
              typography="p"
              overflow="hidden"
              width="100%"
              fontWeight="bold"
              sx={{ pl: 1 }}
            >
              Friends
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <FriendsButton
            style={{ marginLeft: 10 }}
            isSelected={selectedItem === "Online" ? true : false}
            label="Online"
            _onSelect={(val) => {
              _onSelectItem(val);
            }}
          />
          <FriendsButton
            style={{ marginLeft: 10 }}
            isSelected={selectedItem === "All" ? true : false}
            label="All"
            _onSelect={(val) => {
              _onSelectItem(val);
            }}
          />
          <FriendsButton
            style={{ marginLeft: 10 }}
            isSelected={selectedItem === "Pending" ? true : false}
            label="Pending"
            _onSelect={(val) => {
              _onSelectItem(val);
            }}
          />
          <FriendsButton
            style={{ marginLeft: 10 }}
            isSelected={selectedItem === "Blocked" ? true : false}
            label="Blocked"
            _onSelect={(val) => {
              _onSelectItem(val);
            }}
          />
          <FriendsButton
            addFriend
            style={{ marginLeft: 10 }}
            isSelected={selectedItem === "Add Friend" ? true : false}
            label="Add Friend"
            _onSelect={(val) => {
              _onSelectItem(val);
            }}
          />
          <Box
            sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
          >
            <Tooltip
              title="Create Group"
              arrow
              placement="bottom"
              TransitionComponent={Fade}
            >
              <IconButton
                size="small"
                onClick={_openGroupChatDialog}
                color="secondary"
              >
                <GroupAddIcon size="small" />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Help"
              arrow
              placement="bottom"
              TransitionComponent={Fade}
            >
              <IconButton
                size="small"
                onClick={_openHelpDialog}
                color="secondary"
              >
                <HelpOutlineIcon size="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      {selectedItem === "Online" ? (
        <FriendListContainer title="Online" />
      ) : selectedItem === "All" ? (
        <FriendListContainer title="All" />
      ) : selectedItem === "Pending" ? (
        <FriendListContainer title="Pending" />
      ) : selectedItem === "Blocked" ? (
        <FriendListContainer title="Blocked" />
      ) : (
        <FriendRequest />
      )}
    </Box>
  );
}

export default Me;
