import React, { useContext, useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import SideBar from "components/SideBar";
import ChatBox from "components/ChatBox";
import callApi from "helpers/callApi";
import { GlobalContext } from "context/Provider";

function Home() {
  const { authState } = useContext(GlobalContext);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const getFriends = async () => {
      await callApi
        .get(`/friend/${authState.data.id}`)
        .then((res) => {
          console.log(res);
          setFriends(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getFriends();
  }, []);
  return (
    <Box className="w-100 h-100">
      <Grid container spacing={0} className="h-100" mt={0}>
        <Grid item xs={12} display="flex" className="h-100" pb={0} pt={0}>
          <SideBar friends={friends}/>
          <ChatBox />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
