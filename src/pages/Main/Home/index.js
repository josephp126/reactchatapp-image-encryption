import React, { useContext, useEffect, useRef, useState } from "react";
import { Grid, Box } from "@mui/material";
import SideBar from "components/SideBar";
import ChatBox from "components/ChatBox";
import callApi from "helpers/callApi";
import { GlobalContext } from "context/Provider";
import { io } from "socket.io-client";
import { AppUrl } from "config/env";

let socket = io(AppUrl);

function Home() {
  const { authState } = useContext(GlobalContext);
  const [friends, setFriends] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  // const socket = useRef();

  const selectCurrentChat = (payload) => {
    console.log("payload", payload);
    setCurrentChat(payload);
    callApi
      .get(`/message/${payload.selectedChat.id}`)
      .then((res) => {
        console.log(res.data);
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //send new message
  const sendMessage = (newMessage) => {
    let payload = {
      friendId: currentChat.selectedChat.id,
      sender: authState.data.id,
      content: newMessage,
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
    setMessages([...messages, pushMessage]);
    callApi
      .post(`/message`, payload)
      .then((res) => {
        console.log("new message", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
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

  // useEffect(() => {
  //   socket.current = io(AppUrl);
  // }, []);


  useEffect(() => {
    console.log("socket", socket);
    socket.emit("addUser", authState.data.id);
    socket.on("getUsers", (users) => {
      console.log("USERS: ", users);
    });
  }, [authState]);

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);
  return (
    <Box className="w-100 h-100">
      <Grid container spacing={0} className="h-100" mt={0}>
        <Grid item xs={12} display="flex" className="h-100" pb={0} pt={0}>
          <SideBar
            friends={friends}
            currentChat={currentChat}
            selectCurrentChat={selectCurrentChat}
          />
          <ChatBox
            currentChat={currentChat}
            messages={messages}
            sendMessage={sendMessage}
            // scrollRef={scrollRef}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
