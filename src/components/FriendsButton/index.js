import React from "react";
import { Typography } from "@mui/material";

function FriendsButton({ isSelected, label, _onSelect, style, addFriend }) {
  return (
    <>
      {addFriend ? (
        <div
          style={style}
          className={
            isSelected
              ? "friends-btn add-friend selected"
              : "friends-btn add-friend"
          }
          onClick={() => _onSelect(label)}
        >
          <Typography typography="p" overflow="hidden" sx={{}}>
            {label}
          </Typography>
        </div>
      ) : (
        <div
          style={style}
          className={isSelected ? "friends-btn selected" : "friends-btn"}
          onClick={() => _onSelect(label)}
        >
          <Typography typography="p" overflow="hidden" sx={{}}>
            {label}
          </Typography>
        </div>
      )}
    </>
  );
}

export default FriendsButton;
