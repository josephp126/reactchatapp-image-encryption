import * as React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Fade from '@mui/material/Fade';
import ButtonGroup from "@mui/material/ButtonGroup";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import CreateIcon from '@mui/icons-material/Create';
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

const options = [
  "Turn off notification",
  "Delete message",
  "Mark unread",
];


function MessageSettingBox() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: -20,
        right: 30,
        padding: 1,
        zIndex: 111,
      }}
    >
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        color="secondary"
      >
        <Tooltip title="Add Reaction" arrow placement="top" TransitionComponent={Fade}>
          <Button size="small" onClick={handleClick} color="secondary">
            <EmojiEmotionsIcon size="small" />
          </Button>
        </Tooltip>
        <Tooltip title="Edit" arrow placement="top" TransitionComponent={Fade}>
          <Button size="small" onClick={handleClick} color="secondary">
            <CreateIcon size="small" />
          </Button>
        </Tooltip>
        <Tooltip title="More" arrow placement="top" TransitionComponent={Fade}>
          <Button
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
            color="secondary"
          >
            <MoreHorizIcon size="small" />
          </Button>
        </Tooltip>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}

export default MessageSettingBox;
