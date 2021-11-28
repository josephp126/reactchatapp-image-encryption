import React from "react";
import { AppBar,  Toolbar, } from "@mui/material";
import { logoMain } from "assets/images/image";

function Footer() {
  return (
    <footer>
      <AppBar position="static" elevation={0}>
        <Toolbar className="footer-bar">
          <img src={logoMain} alt="logo" className="logo-img" />
        </Toolbar>
      </AppBar>
    </footer>
  );
}

export default Footer;
