import React from "react";
import { Box } from "@mui/material";
import { logo42px } from "assets/images/image";

function DefaultAvatar({ bgColor, size }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        background: bgColor,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={logo42px} alt="default-avatar" />
    </Box>
  );
}

export default DefaultAvatar;
