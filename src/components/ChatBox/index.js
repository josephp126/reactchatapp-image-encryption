import React, { useRef } from "react";
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
import SendIcon from "@mui/icons-material/Send";
import { user1, userPhoto } from "../../assets/images/image";
import { useState } from "react";
import DateDivider from "../DateDivider";
import { useEffect } from "react";
import groupDays from "helpers/groupDays";
import MessageList from "db/chat/MessageList";
import moment from "moment";
import MessageSettingBox from "../MessageSettingBox";

// let chatHistoryList = [];

function ChatBox({ currentChat, messages, sendMessage }) {
  const [newMessage, setNewMessage] = useState("");
  const [chatHistoryList, setChatHistoryList] = useState([]);
  const [showWidgetId, setShowWidgetId] = useState(-1);
  const scrollRef = useRef();

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

  const _onSendMessage = () => {
    if (newMessage.trim() == "") return;
    sendMessage(newMessage);
    setNewMessage("");
    console.log("clicked upload File icon");
  };

  const _onMouseDownSendMessage = (e) => {
    e.preventDefault();
  };

  const showWidgets = (index) => {
    setShowWidgetId(index);
  };

  const hideWidgets = (index) => {
    setShowWidgetId(-1);
  };

  const renderChatHistory = () => {
    return chatHistoryList.map((chatItem, index) => {
      if (chatItem.type === "day") {
        return <DateDivider date={chatItem.date} />;
      } else {
        return (
          <Box
            ref={scrollRef}
            sx={{ mr: "auto", py: 1 }}
            className="chat-detail-message-con"
            onMouseEnter={() => {
              // console.log("______Entered!!!");
              showWidgets(index);
            }}
            onMouseLeave={() => {
              // console.log("++++++Leaved!!!");
              hideWidgets(index);
            }}
          >
            {chatHistoryList[index - 1].type == "text" &&
            chatHistoryList[index - 1].sender.id ==
              chatHistoryList[index].sender.id ? (
              <Box display="flex" alignItems="flex-start" sx={{ px: 2 }}>
                <Box sx={{ width: 60 }}>
                  <Typography fontSize={14} sx={{ paddingLeft: 0.8 }}>
                    {index == showWidgetId &&
                      moment(chatItem.createdAt, "HH:mm:ss").format("hh:mm")}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  className={"w-100 message-receive-con"}
                >
                  <Typography>{chatItem.content}</Typography>
                </Box>
              </Box>
            ) : (
              <Box display="flex" alignItems="flex-start" sx={{ px: 2 }}>
                <Box sx={{ width: 60 }}>
                  {chatItem.sender.avatar == "" ? (
                    <Avatar
                      sx={{
                        bgcolor: chatItem.sender.avatarColor,
                      }}
                    >
                      {chatItem.sender.username[0].toUpperCase()}
                    </Avatar>
                  ) : (
                    <Avatar
                      alt={chatItem.sender.username}
                      src={chatItem.sender.avatar}
                    />
                  )}
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  className="w-100 message-receive-con"
                >
                  <Box display="flex" alignItems="center">
                    <Typography fontWeight="bold" fontSize={16}>
                      {chatItem.sender.username}
                    </Typography>
                    <Typography fontSize={14} sx={{ paddingLeft: 0.8 }}>
                      {moment(chatItem.createdAt, "HH:mm:ss").format("hh:mm A")}
                    </Typography>
                  </Box>
                  <Typography>{chatItem.content}</Typography>
                </Box>
              </Box>
            )}
            {index == showWidgetId && <MessageSettingBox />}
          </Box>
        );
      }
    });
  };

  useEffect(() => {
    let items = groupDays(messages);
    console.log("sssss", scrollRef);
    items = items.reverse();
    setChatHistoryList([...items]);
    console.log("chatHistoryList: ", chatHistoryList);
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
  }, [messages]);

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
            {currentChat == null ? (
              <Avatar />
            ) : currentChat.selectedChat.friend.avatar == "" ? (
              <Avatar
                sx={{
                  bgcolor: currentChat.selectedChat.friend.avatarColor,
                  width: 40,
                  height: 40,
                }}
              >
                {currentChat.selectedChat.friend.username[0].toUpperCase()}
              </Avatar>
            ) : (
              <Avatar
                alt={currentChat.selectedChat.friend.username}
                src={currentChat.selectedChat.friend.avatar}
                sx={{ width: 40, height: 40 }}
              />
            )}
          </Box>
          <Typography
            textOverflow="ellipsis"
            typography="h6"
            overflow="hidden"
            width="100%"
            fontWeight="bold"
          >
            {currentChat == null
              ? "Please select chat"
              : currentChat.selectedChat.friend.username}
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
        {renderChatHistory()}
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
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value);
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
                  <IconButton
                    aria-label="send message"
                    onClick={_onSendMessage}
                    onMouseDown={_onMouseDownSendMessage}
                  >
                    <SendIcon />
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
