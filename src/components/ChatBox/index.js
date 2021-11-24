import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Badge,
  Avatar,
  Divider,
} from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { user1, userPhoto } from "../../assets/images/image";
import { useState } from "react";
import DateDivider from "../DateDivider";

function ChatBox() {
  const [message, setMessage] = useState("");

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
          <Box sx={{ pr: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src={user1}
              sx={{ width: 40, height: 40 }}
            />
          </Box>
          <Typography
            textOverflow="ellipsis"
            typography="h6"
            overflow="hidden"
            width="100%"
            fontWeight="bold"
          >
            Jhon Sammie
            <Badge
              color="success"
              overlap="circular"
              badgeContent=" "
              variant="dot"
              sx={{ marginLeft: 2 }}
            ></Badge>
          </Typography>

          <Box sx={{ ml: "auto" }}>
            <IconButton
              onClick={_onSearchMessage}
              onMouseDown={_onMouseDownSearch}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box flex={1} overflow="auto">
        <DateDivider />

        <Box sx={{ mr: "auto", py: 1 }} className="chat-detail-message-con">
          <Box display="flex" alignItems="flex-start" sx={{ px: 2 }}>
            <Box sx={{ pr: 2 }}>
              <Avatar alt="user photo" src={user1} />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              className="w-100 message-receive-con"
            >
              <Box display="flex" alignItems="center">
                <Typography fontWeight="bold" fontSize={16}>
                  Jhon Sammie
                </Typography>
                <Typography fontSize={14} sx={{ paddingLeft: 0.8 }}>
                  1:56 AM
                </Typography>
              </Box>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi similique facere blanditiis nemo reprehenderit
                recusandae rerum et consectetur sed esse rem impedit veniam
                reiciendis, accusantium fugit unde error facilis cum!
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mr: "auto", py: 1 }} className="chat-detail-message-con">
          <Box display="flex" alignItems="flex-start" sx={{ px: 2 }}>
            <Box
              display="flex"
              flexDirection="column"
              className="w-100 message-receive-con"
              sx={{paddingLeft: 7}}
            >
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi similique facere blanditiis nemo reprehenderit
                recusandae rerum et consectetur sed esse rem impedit veniam
                reiciendis, accusantium fugit unde error facilis cum!
              </Typography>
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
  );
}

export default ChatBox;
