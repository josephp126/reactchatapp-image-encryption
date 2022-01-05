import React from "react";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Input = styled("input")({
  display: "none",
});

function ImageUpload() {
  const _onUploadImage = () => {
    console.log("clicked Upload Image icon");
  };

  const _onMouseDownUploadImage = (e) => {
    e.preventDefault();
  };
  return (
    <label htmlFor="chat-image-upload">
      <Input accept="image/*" id="chat-image-upload" type="file" />
      <IconButton aria-label="upload picture" component="span">
        <CameraAltIcon />
      </IconButton>
    </label>
  );
}

export default ImageUpload;
