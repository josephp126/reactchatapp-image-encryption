import React from "react";
import FriendList from "components/FriendsList";
import { Box, Typography } from "@mui/material";

function FriendListContainer({ title }) {
  return (
    <Box className="friend-list-con" sx={{ paddingTop: 3, px: 5 }}>
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
  );
}

export default FriendListContainer;
