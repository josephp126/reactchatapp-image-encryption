import { Backdrop, CircularProgress } from "@mui/material";
import React, { useContext, useEffect } from "react";
import logoutUser from "context/actions/auth/logoutUser";
import { GlobalContext } from "context/Provider";

const Logout = () => {
  const { authDispatch } = useContext(GlobalContext);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(true);
    logoutUser()(authDispatch);
  }, [authDispatch]);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Logout;
