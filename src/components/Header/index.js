import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { logoMain } from "../../assets/images/image";
import { useLocation, Link } from "react-router-dom";
import { GlobalContext } from "../../context/Provider";
import ThemeToggle from "../../assets/theme/themetoggle";
// import ThemeToggle from '../../assets/theme/themetoggle'

function Header() {
  const location = useLocation();

  const {
    authState: { isLogin },
  } = useContext(GlobalContext);
  const [isLoginPage, setIsLoginPage] = useState(false);
  console.log(location);
  useEffect(() => {
    if (isLogin === true) {
    } else {
      if (location.pathname === "/login") {
        setIsLoginPage(true);
      } else {
        setIsLoginPage(false);
      }
    }
  }, [location, isLogin]);

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar className="app-bar">
            <Box sx={{ flexGrow: 1 }}>
              <img src={logoMain} alt="logo" className="logo-img" />
            </Box>
            
            {isLogin ? (
              <>
              <Link to="/logout" className="nav-link">
                Logout
              </Link>

              </>
            ) : isLoginPage ? (
              <Link to="/register" className="nav-link">
                Register
              </Link>
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
            <ThemeToggle />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default Header;
