import React from "react";
import { Divider, Box, Avatar, Typography, Tooltip } from "@mui/material";
import Fade from "@mui/material/Fade";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { user1, userPhoto } from "assets/images/image";

function FriendListItem() {
  return (
    <Box sx={{ px: 1, borderRadius: 2 }} className="friend-list-item">
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          py: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Box>
            <Avatar alt={"user1"} src={user1} sx={{ width: 40, height: 40 }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", pl: 1 }}>
            <Typography
              textOverflow="ellipsis"
              overflow="hidden"
              width="100%"
              whiteSpace="nowrap"
              typography="p"
              sx={{
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              user1
            </Typography>
            <Typography
              textOverflow="ellipsis"
              overflow="hidden"
              width="100%"
              whiteSpace="nowrap"
              typography="p"
              sx={{ fontSize: 12 }}
            >
              status
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip
            title="Message"
            arrow
            placement="top"
            TransitionComponent={Fade}
          >
            <Box className="setting-icon-con">
              <ChatBubbleIcon sx={{ fontSize: 18 }} />
            </Box>
          </Tooltip>
          <Tooltip
            title="More"
            arrow
            placement="top"
            TransitionComponent={Fade}
          >
            <Box className="setting-icon-con" sx={{ ml: 1 }}>
              <MoreVertIcon sx={{ fontSize: 18 }} />
            </Box>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

export default FriendListItem;
