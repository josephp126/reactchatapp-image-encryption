import React from "react";
import { Box } from "@mui/material";
import P from "components/Fonts/P";

function ActiveBox() {
  return (
    <Box
      sx={{
        display: {
          lg: "block",
          md: "none",
          sm: "none",
          xs: "none",
        },
        flex: "0 1 30%",
        minWidth: 360,
        maxWidth: 420,
        px: 3,
        borderLeftColor: "secondary",
        borderLeft: "1px solid",
      }}
    >
      <P bold fontSize={20}>
        Active Now
      </P>
      <P bold fontSize={15} center style={{ mt: 2, mb: 1 }}>
        It's quiet for now...
      </P>
      <P fontSize={13} center>
        When a friend starts an activity—like playing a game or hanging out on
        voice—we’ll show it here!
      </P>
    </Box>
  );
}

export default ActiveBox;
