import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import BaseContainer from "../Components/BaseContainer";
import AppLoader from "../Components/Loader";

export default function UnauthRoutes() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <AppLoader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="unauth-container">
      <BaseContainer>
        <Outlet />
      </BaseContainer>
    </div>
  );
}
