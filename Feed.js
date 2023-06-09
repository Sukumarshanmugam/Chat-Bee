import { Box } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={1} p={2}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
