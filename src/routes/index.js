import React, { useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { GlobalContext } from "context/Provider";
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";

const Routes = () => {
  const {
    authState: { isLogin },
  } = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(isLogin);
  const [authLoaded, setAuthLoaded] = useState(false);
  const [open, setOpen] = useState(true);

  const getUser = () => {
    try {
      const user = localStorage.getItem("user");

      if (user) {
        setAuthLoaded(true);
        setOpen(false);
        // setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setOpen(false);
        // setIsAuthenticated(false);
      }
    } catch (error) {}
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getUser();
    if (isLogin === true) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isLogin, isAuthenticated]);

  return (
    <>
      {authLoaded ? (
        isAuthenticated ? (
          <MainRoutes />
        ) : (
          <AuthRoutes />
        )
      ) : (
        <Box>
          <Backdrop
            sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      )}
    </>
  );
};

export default Routes;
