import React from "react";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios from "axios";
import { BasicUrl } from "config/env";

const Input = styled("input")({
  display: "none",
});

function ImageUpload({_onChangeImage}) {
  // const _onChangeImage = async (e) => {
  //   console.log("clicked Upload Image icon", e.target.files);
  //   let formData = new FormData();
  //   formData.append("images", e.target.files);
  //   await axios({
  //     method: "POST",
  //     url: BasicUrl + "/upload/image",
  //     data: formData,
  //     headers: {
  //       // Authorization: `Bearer ${token}`,
  //       "Content-Type": "multipart/form-data",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => {
  //       console.log(`_______________upload images: `, res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <label htmlFor="chat-image-upload">
      <Input
        accept="image/*"
        id="chat-image-upload"
        type="file"
        name="images"
        multiple
        onChange={(e) => _onChangeImage(e)}
      />
      <IconButton aria-label="upload picture" component="span">
        <CameraAltIcon />
      </IconButton>
    </label>
  );
}

export default ImageUpload;
