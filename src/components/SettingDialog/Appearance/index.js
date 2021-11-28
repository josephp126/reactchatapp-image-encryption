import React, { useState } from "react";
import { Grid, Box, ListItemButton, ListItemIcon } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useTheme } from "../../../context/ThemeProvider";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

function AppearanceSetting() {
  const [ThemeMode, toggleTheme] = useTheme();
  const [mode, setMode] = useState(ThemeMode);
  const selectThemeMode = (e) => {
    console.log(e.target.value);
    setMode(e.target.value);
    toggleTheme(e.target.value);
  };

  return (
    <Box>
      <Typography whiteSpace="nowrap" fontSize={20} fontWeight="bold">
        Appearance
      </Typography>
      <Box sx={{ mt: 3 }}>
        <FormControl component="fieldset">
          <RadioGroup
            defaultValue="dark"
            aria-label="mode"
            name="customized-radios"
            value={mode}
            onChange={selectThemeMode}
          >
            <FormControlLabel value="dark" control={<BpRadio />} label="Dark" />
            <FormControlLabel
              value="light"
              control={<BpRadio />}
              label="Light"
            />
            <FormControlLabel
              value="os"
              control={<BpRadio />}
              label="Sync with computer"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default AppearanceSetting;
