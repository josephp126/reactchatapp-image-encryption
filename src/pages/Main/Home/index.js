import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import SearchIcon from "@mui/icons-material/Search";

function Home() {
  const [searchText, setSearchText] = useState("");

  const _onSearchMessage = () => {};

  const _onMouseDownSearch = (e) => {
    e.preventDefault();
  };

  return (
    <Box className="w-100 h-100">
      <Grid container spacing={2} className="h-100" mt={0}>
        <Grid item xs={4} className="h-100" pb={2}>
          <Box className="h-100" pl={2}>
            <Box className="w-100 h-100 primaryBg" borderRadius={2}>
              <Box
                className="w-100"
                sx={{ px: 1, py: 3 }}
                alignItems="center"
                display="flex"
              >
                <Box>
                  <TextField
                    label="Search..."
                    variant="standard"
                    fullWidth
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={_onSearchMessage}
                            onMouseDown={_onMouseDownSearch}
                            edge="end"
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box sx={{ pl: 4 }}>
                  <SettingsInputComponentIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} className="h-100" pb={2} pr={2}>
          <Box className="w-100 h-100 primaryBg" borderRadius={2}></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
