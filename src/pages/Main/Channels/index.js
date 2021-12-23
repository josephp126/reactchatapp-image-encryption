import React from "react";
import { useRouteMatch, Redirect, Route, Switch } from "react-router";
import { Grid, Box } from "@mui/material";
import SideBar from "components/SideBar";
import ChatBox from "components/ChatBox";
import Me from "components/Me";

// let socket = io(AppUrl);

function Channels({ props }) {
  let { path } = useRouteMatch();

  return (
    <Box className="w-100 h-100">
      <Grid container spacing={0} className="h-100" mt={0}>
        <Grid item xs={12} display="flex" className="h-100" pb={0} pt={0}>
          <SideBar />
          <Switch>
            <Route
              path={`${path}/@me`}
              component={(props) => <Me {...props} />}
            ></Route>
            <Route
              path={`${path}/:channelId`}
              component={(props) => <ChatBox {...props} />}
            ></Route>
            <Redirect exact to={`${path}/@me`} />
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Channels;
