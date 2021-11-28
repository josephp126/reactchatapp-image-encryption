import React from "react";
import { Grid, Box } from "@mui/material";
import SideBar from "components/SideBar";
import ChatBox from "components/ChatBox";

function Home() {
  return (
    <Box className="w-100 h-100">
      <Grid container spacing={0} className="h-100" mt={0}>
        <Grid item xs={12} display="flex" className="h-100" pb={0} pt={0}>
          <SideBar />
          <ChatBox />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
