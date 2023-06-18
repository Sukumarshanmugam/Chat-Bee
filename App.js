import React from "react";
import Feed from "./component/Feed";
import NavList from "./component/NavList";
import RightBar from "./component/RightBar";
import SideBar from "./component/SideBar";
import { Stack, Box, createTheme, ThemeProvider } from "@mui/material";
import Add from "./component/Add";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavList />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
