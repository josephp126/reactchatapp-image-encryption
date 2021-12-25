import { Typography } from "@mui/material";
import React from "react";

function BoldP({ children }) {
  return (
    <Typography
      typography="p"
      textOverflow="ellipsis"
      overflow="hidden"
      width="100%"
      whiteSpace="nowrap"
      sx={{
        fontSize: 15,
        fontWeight: "bold",
      }}
    >
      {children}
    </Typography>
  );
}

export default BoldP;
