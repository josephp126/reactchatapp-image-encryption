import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { logoMain } from "../../assets/images/image";

function Footer() {
  return (
    <footer>
      <AppBar position="static">
        <Toolbar className="footer-bar">
          <img src={logoMain} alt="logo" className="logo-img" />
        </Toolbar>
      </AppBar>
    </footer>
  );
}

export default Footer;
