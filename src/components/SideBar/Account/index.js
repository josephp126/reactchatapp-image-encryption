import React from "react";
import { Avatar } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { user1 } from "../../../assets/images/image";

function SideBarAccount() {
  return (
    <ListItemButton component="div" >
      <ListItemIcon sx={{ fontSize: 20 }}>
        <Avatar alt="Remy Sharp" src={user1} sx={{ width: 40, height: 40 }} />
      </ListItemIcon>
      <ListItemText
        sx={{ my: 0 }}
        primary="sammie"
        primaryTypographyProps={{
          fontSize: 20,
          fontWeight: "medium",
          letterSpacing: 0,
        }}
      />
    </ListItemButton>
  );
}

export default SideBarAccount;
