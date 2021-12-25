import React from "react";
import { Box } from "@mui/material";

function SpaceBetweenBox({ children, style }) {
  return (
    <Box
      sx={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  );
}

export default SpaceBetweenBox;
