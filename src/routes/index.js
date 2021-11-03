import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/Provider";
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";

const Routes = () => {
  const {
    authState: { isLogin },
  } = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(isLogin);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await localStorage.getItem("user");

      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, [isLogin]);

  return (
    <>
      {authLoaded ? (
        isAuthenticated ? (
          <MainRoutes />
        ) : (
          <AuthRoutes />
        )
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default Routes;
