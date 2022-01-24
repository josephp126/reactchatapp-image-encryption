import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import callApi from "helpers/callApi";
import { AppUrl } from "config/env";

function ImageView({ imageData }) {
  const { originalName, size, fileName, mimeType } = imageData;
  const [isGettingImage, setIsGettingImage] = useState(false);
  const [parsedImgData, setParsedImgData] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      setIsGettingImage(true);
      const fetchedResource = await fetch(`/file/image/${fileName}`, {
        method: "get",
        headers: {
          //headers goes here
        },
      });
      console.log("++++++++++++++++++++++++++++++++++++++", fetchedResource);
      const reader = await fetchedResource.body.getReader();

      let chunks = [];
      reader.read().then(function processText({ done, value }) {
        if (done) {
          console.log("Stream finished. Content received:");

          console.log("CCCCCCCCCC", chunks);

          const blob = new Blob(chunks, { type: mimeType });
          console.log("BBBBBBBBBB", blob);

          // var image = btoa(String.fromCharCode.apply(null, chunks));
          var image = new Buffer(chunks).toString("base64");
          console.log("SSSSSSSSSSS", image);

          // this.setState({pic: "data:image/png;base64," + image});

          setParsedImgData(`data:${mimeType};base64,${image}`);
          return;
        }

        console.log(`Received ${chunks.length} chars so far!`);
        // console.log(value);
        const tempArray = new Uint8Array(chunks.length + value.length);
        tempArray.set(chunks);
        tempArray.set(value, chunks.length);
        chunks = tempArray;

        return reader.read().then(processText);
      });
      setIsGettingImage(false);

      // setIsGettingImage(true);
      // await callApi
      //   // .get(`/file/image/${generatedFileName}`)
      //   .get(`/file/image/${fileName}`)
      //   .then((res) => {
      //     console.log(
      //       "+++++++++++++++++)))))))))))))))))))++++++++++++++++++",
      //       res.data
      //     );
      //     setParsedImgData(res.data);
      //   })
      //   .catch((err) => {});
      // setIsGettingImage(false);
    };
    getImage();
  }, []);

  return (
    <Box>
      <p>{originalName}</p>
      <p>{size}</p>
      <Box>
        {isGettingImage ? (
          <p>loading...</p>
        ) : (
          <img src={parsedImgData} alt={originalName} />
        )}
      </Box>
    </Box>
  );
}

export default ImageView;
