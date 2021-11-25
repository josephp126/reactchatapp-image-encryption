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
import moment from 'moment'

const chatHistory = [
  {
    id: 1,
    sender: {
      avatar: user1,
      name: "Jhon Sammie",
    },
    created_at: new Date(2021, 11, 22, 7, 16, 34),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
  {
    id: 2,
    sender: {
      avatar: userPhoto,
      name: "Tommy",
    },
    created_at: new Date(2021, 11, 22, 7, 16, 15),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
  {
    id: 3,
    sender: {
      avatar: user1,
      name: "Jhon Sammie",
    },
    created_at: new Date(2021, 11, 23, 7, 17, 12),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
  {
    id: 4,
    sender: {
      avatar: userPhoto,
      name: "Tommy",
    },
    created_at: new Date(2021, 11, 23, 7, 17, 55),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
  {
    id: 5,
    sender: {
      avatar: user1,
      name: "Jhon Sammie",
    },
    created_at: new Date(2021, 11, 23, 7, 17, 15),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
  {
    id: 6,
    sender: {
      avatar: user1,
      name: "Jhon Sammie",
    },
    created_at: new Date(2021, 11, 24, 7, 20, 34),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
  {
    id: 7,
    sender: {
      avatar: userPhoto,
      name: "Tommy",
    },
    created_at: new Date(2021, 11, 24, 7, 18, 2),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
  {
    id: 8,
    sender: {
      avatar: user1,
      name: "Jhon Sammie",
    },
    created_at: new Date(2021, 11, 24, 7, 18, 43),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
  {
    id: 9,
    sender: {
      avatar: userPhoto,
      name: "Tommy",
    },
    created_at: new Date(2021, 11, 24, 7, 18, 33),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
  {
    id: 10,
    sender: {
      avatar: user1,
      name: "Jhon Sammie",
    },
    created_at: new Date(2021, 11, 25, 7, 19, 54),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
  {
    id: 11,
    sender: {
      avatar: user1,
      name: "Jhon Sammie",
    },
    created_at: new Date(2021, 11, 25, 7, 20, 2),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
  {
    id: 12,
    sender: {
      avatar: user1,
      name: "Jhon Sammie",
    },
    created_at: new Date(2021, 11, 25, 7, 21, 43),
    msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique facere blanditiis nemo reprehenderit recusandae rerum et consectetur sed esse rem impedit veniam reiciendis, accusantium fugit unde error facilis cum!",
  },
];

function ChatBox() {
  const [message, setMessage] = useState("");
  const [showWidgetId, setShowWidgetId] = useState(-1);

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

  const showWidgets = () => {
    setShowWidgetId(1);
  };

  const hideWidgets = () => {
    setShowWidgetId(-1);
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
        {
          chatHistory.map((chatItem, index) => {
            return (
              <Box
                sx={{ mr: "auto", py: 1 }}
                className="chat-detail-message-con"
                onMouseEnter={() => {
                  console.log("______Entered!!!");
                  showWidgets();
                }}
                onMouseLeave={() => {
                  console.log("++++++Leaved!!!");
                  hideWidgets();
                }}
              >
                <Box display="flex" alignItems="flex-start" sx={{ px: 2 }}>
                  <Box sx={{ pr: 2 }}>
                    <Avatar alt="user photo" src={chatItem.sender.avatar} />
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
                        { moment(chatItem.created_at, 'HH:mm:ss').format('mm:ss') }
                      </Typography>
                    </Box>
                    <Typography>
                      {chatItem.msg}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )
          })
        }
        
        
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
