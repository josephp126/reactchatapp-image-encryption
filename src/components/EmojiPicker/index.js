import React from "react";
import { ClickAwayListener } from "@mui/material";
import Picker from "emoji-picker-react";

function EmojiPicker({ style, onClickOutsideOfPicker, onEmojiClick }) {
  return (
    <ClickAwayListener onClickAway={onClickOutsideOfPicker}>
      <div style={{ position: "absolute", bottom: 55, right: 50 }}>
        <Picker
          onEmojiClick={(e, emojiObject) => {
            onEmojiClick(emojiObject);
          }}
        />
      </div>
    </ClickAwayListener>
  );
}

export default EmojiPicker;
