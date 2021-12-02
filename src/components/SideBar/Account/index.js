import React, { useContext, useEffect } from "react";
import { Avatar } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { userPhoto } from "assets/images/image";
import { GlobalContext } from "context/Provider";

function SideBarAccount() {
  const { authState } = useContext(GlobalContext);
  useEffect(() => {
    console.log("authState", authState.data);
  }, []);
  return (
    <ListItemButton component="div">
      <ListItemIcon sx={{ fontSize: 20 }}>
        {authState.data.avatar == "" ? (
          <Avatar
            sx={{ bgcolor: authState.data.avatarColor, width: 40, height: 40 }}
          >
            {authState.data.username[0].toUpperCase()}
          </Avatar>
        ) : (
          <Avatar
            alt={authState.data.username}
            src={authState.data.avatar}
            sx={{ width: 40, height: 40 }}
          />
        )}
      </ListItemIcon>
      <ListItemText
        sx={{ my: 0 }}
        primary={authState.data.username}
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
