import React from "react";
import FriendList from "components/FriendsList";
import { Box, Typography } from "@mui/material";
import P from "components/Fonts/P";
import ActiveBox from "components/Temp/ActiveBox";

function FriendListContainer({ title }) {
  return (
    <Box
      className="friend-list-con"
      sx={{ paddingTop: 3, pl: 5, display: "flex" }}
    >
      <Box
        sx={{
          flex: {
            lg: "0 1 70%",
            md: "0 1 100%",
            sm: "0 1 100%",
            xs: "0 1 100%",
          },
          height: "100%",
          overflow: "auto",
          pr: 5,
        }}
      >
        <Box sx={{ px: 1 }}>
          <Typography
            typography="p"
            overflow="hidden"
            sx={{ fontSize: 15, pb: 1 }}
          >
            {`${title} Friends - 28`}
          </Typography>
        </Box>
        <FriendList />
      </Box>
      <ActiveBox />
    </Box>
  );
}

export default FriendListContainer;
