import { Typography } from "@mui/material";
import React from "react";

function BoldP({
  children,
  uppercase,
  fontSize,
  bold,
  ellipsis,
  overflowHidden,
  width100,
  nowrap,
  center,
  right,
  left,
  style,
}) {
  return (
    <Typography
      typography="p"
      textOverflow={ellipsis ? "ellipsis" : "unset"}
      overflow={overflowHidden ? "hidden" : "unset"}
      width={width100 ? "100%" : "unset"}
      whiteSpace={nowrap ? "nowrap" : "unset"}
      sx={{
        ...style,
        textTransform: uppercase ? "uppercase" : "capitalize",
        fontSize: fontSize ? fontSize : "15",
        fontWeight: bold ? "bold" : "normal",
        textAlign: center ? "center" : right ? "right" : "left",
      }}
    >
      {children}
    </Typography>
  );
}

export default BoldP;
