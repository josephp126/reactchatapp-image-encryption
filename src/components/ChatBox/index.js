import React, { useContext, useRef } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Badge,
  Avatar,
  Divider,
  Fade,
} from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
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
import callApi from "helpers/callApi";
import { GlobalContext } from "context/Provider";
import { io } from "socket.io-client";
import { AppUrl } from "config/env";
import CryptoJS from "crypto-js";
import P from "components/Fonts/P";
import EmojiPicker from "components/EmojiPicker";
import ImageUpload from "./ImageUpload";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import { BasicUrl } from "config/env";

// let chatHistoryList = [];

function ChatBox({ history, match, location }) {
  const [newMessage, setNewMessage] = useState("");
  const { authState } = useContext(GlobalContext);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [chatHistoryList, setChatHistoryList] = useState([]);
  const [showWidgetId, setShowWidgetId] = useState(-1);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [imageBuffer, setImageBuffer] = useState([]);
  const [imageRawBuffer, setImageRawBuffer] = useState([]);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const scrollRef = useRef();
  const socketRef = useRef();
  const messageInput = useRef();

  //send new message
  const sendMessage = async (newMessage) => {
    if (newMessage.trim() !== "") {
      let encryptedNewMessage = CryptoJS.AES.encrypt(newMessage, "sammie");
      encryptedNewMessage = encryptedNewMessage.toString();
      let payload = {
        friendId: currentChat.selectedChat.id,
        sender: authState.data.id,
        content: encryptedNewMessage,
      };

      let pushMessage = {
        ...payload,
        sender: {
          id: authState.data.id,
          _id: authState.data._id,
          username: authState.data.username,
          avatar: authState.data.avatar,
          avatarColor: authState.data.avatarColor,
        },
        type: "text",
        // createdAt: new Date().toUTCString(),
        // updatedAt: new Date().toUTCString(),
        createdAt: new Date(
          new Date().toString().split("GMT")[0] + " UTC"
        ).toISOString(),
        updatedAt: new Date(
          new Date().toString().split("GMT")[0] + " UTC"
        ).toISOString(),
      };

      console.log("pushMessage", pushMessage);
      setMessages([...messages, { ...pushMessage, content: newMessage }]);
      socketRef.current.emit("sendMessage", pushMessage);
      callApi
        .post(`/message`, payload)
        .then((res) => {
          console.log("new message", res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (imageRawBuffer.length > 0) {
      let formData = new FormData();
      for (let i = 0; i < imageRawBuffer.length; i++) {
        formData.append("images", imageRawBuffer[i]);
      }
      formData.append("type", "message");
      formData.append("friendId", currentChat.selectedChat.id);
      formData.append("sender", authState.data.id);
      formData.append("content", null);

      setImageRawBuffer([]);
      setIsUploadingImage(true);
      await axios({
        method: "POST",
        url: BasicUrl + "/upload/image",
        data: formData,
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        mode: "cors",
      })
        .then((res) => {
          console.log(`_______________upload images: `, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setIsUploadingImage(false);
    }
  };

  const _onSearchMessage = () => {};

  const _onMouseDownSearch = (e) => {
    e.preventDefault();
  };

  const _onToggleEmoji = () => {
    setShowEmojiPicker(!showEmojiPicker);
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

  const onClickOutsideOfPicker = () => {
    setShowEmojiPicker(false);
  };

  const onEmojiClick = (emojiObject) => {
    setNewMessage(newMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
    if (messageInput.current) {
      messageInput.current.focus();
    }
  };

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const _onChangeImage = (e) => {
    if (imageRawBuffer.length + e.target.files.length > 12) {
      return;
    } else {
      for (let i = 0; i < e.target.files.length; i++) {
        fileToDataUri(e.target.files[i]).then((dataUri) => {
          e.target.files[i]["fileUri"] = dataUri;
          setImageRawBuffer((prev) => [...prev, e.target.files[i]]);
        });
      }
    }
  };

  const renderBufferedRawImages = () => {
    var images = [];
    for (let i = 0; i < imageRawBuffer.length; i++) {
      images.push(
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            mr: 2,
          }}
          className="buffered-image-con"
        >
          <Box
            sx={{
              overflow: "hidden",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={imageRawBuffer[i].fileUri}
              alt=""
              className="buffered-img"
            />
          </Box>
          <Box
            sx={{
              height: 20,
              bgcolor: "third.main",
              borderRadius: 3,
              mt: "auto",
              pl: 1,
            }}
          >
            <P overflowHidden nowrap width100 ellipsis fontSize={12}>
              {imageRawBuffer[i].name}
            </P>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: -12,
              right: -10,
            }}
          >
            <Tooltip
              title="Remove"
              arrow
              placement="top"
              TransitionComponent={Fade}
            >
              <IconButton
                size="small"
                onClick={() => removeOneBufferedImage(i)}
                color="secondary"
              >
                <RemoveCircleIcon color="error" sx={{ cursor: "pointer" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      );
    }
    return images;
  };

  const removeOneBufferedImage = (i) => {
    let temp = [...imageRawBuffer];
    temp.splice(i, 1);
    setImageRawBuffer(temp);
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
              showWidgets(index);
            }}
            onMouseLeave={() => {
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
                  className={"message-receive-con"}
                >
                  <P style={{ overflowWrap: "break-word" }}>
                    {chatItem.content}
                  </P>
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
                  className="message-receive-con"
                >
                  <Box display="flex" alignItems="center">
                    <Typography fontWeight="bold" fontSize={16}>
                      {chatItem.sender.username}
                    </Typography>
                    <Typography fontSize={14} sx={{ paddingLeft: 0.8 }}>
                      {moment(chatItem.createdAt, "HH:mm:ss").format("hh:mm A")}
                    </Typography>
                  </Box>
                  <P style={{ overflowWrap: "break-word" }}>
                    {chatItem.content}
                  </P>
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
    items = items.reverse();
    setChatHistoryList([...items]);
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    console.log("++++++++++++++", location);
    setCurrentChat(location.state.currentChat);
    const getMessageHistory = async () => {
      await callApi
        .get(`/message/${match.params.channelId}`)
        .then((res) => {
          console.log("__+_+_+_+_+_+__+", res.data);
          res.data.map((messageItem) => {
            let decrypted = CryptoJS.AES.decrypt(messageItem.content, "sammie");
            decrypted = decrypted.toString(CryptoJS.enc.Utf8);
            messageItem.content = decrypted;
          });
          setMessages(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getMessageHistory();
  }, []);

  useEffect(() => {
    socketRef.current = io.connect(AppUrl);
    socketRef.current.on("getMessage", (pushMessage) => {
      let decrypted = CryptoJS.AES.decrypt(pushMessage.content, "sammie");
      decrypted = decrypted.toString(CryptoJS.enc.Utf8);
      setMessages([...messages, { ...pushMessage, content: decrypted }]);
    });
    return () => socketRef.current.disconnect();
  }, [messages]);

  return (
    <Box
      className="width-without-sidebar h-100 primaryBg"
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
        sx={{
          px: 2,
          pt: 2,
          display: "flex",
          alignItems: "center",
          overflowX: "auto",
          justifyContent: isUploadingImage ? "center" : "unset",
        }}
      >
        {isUploadingImage ? (
          <P>Uploading...</P>
        ) : (
          imageRawBuffer.length > 0 && renderBufferedRawImages()
        )}
      </Box>
      <Box
        className="chat-detail-message-send-con"
        display="flex"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Box className="w-100" sx={{ position: "relative" }}>
          <TextField
            inputRef={messageInput}
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
                  <ImageUpload _onChangeImage={_onChangeImage} />
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
                    aria-label="emoji"
                    onClick={_onToggleEmoji}
                    onMouseDown={_onMouseDownToggleEmoji}
                  >
                    <InsertEmoticonIcon />
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
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                _onSendMessage();
              }
            }}
          />
          {showEmojiPicker && (
            <EmojiPicker
              onClickOutsideOfPicker={() => onClickOutsideOfPicker()}
              onEmojiClick={(emojiObject) => onEmojiClick(emojiObject)}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ChatBox;
