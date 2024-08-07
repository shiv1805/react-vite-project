import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import { UserContextProvider } from "./Context/AppContext.jsx";
import Router from "./Routes/Router";
import theme from "./Styles/theme.jsx";
import auth0Config from "../frontend/auth0config.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let domain = "";
  let clientId = "";

  switch (window.location.origin) {
    case "http://localhost:5173":
      domain = auth0Config.localhost.domain;
      clientId = auth0Config.localhost.clientId;
      break;
    case "https://everything-ui.netlify.app":
      domain = auth0Config.netlify.domain;
      clientId = auth0Config.netlify.clientId;
      break;
    case "https://shiv1805.github.io/react-vite-project":
      domain = auth0Config.github.domain;
      clientId = auth0Config.github.clientId;
      break;
    default:
      domain = auth0Config.localhost.domain;
      clientId = auth0Config.localhost.clientId;
      break;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
              redirect_uri: window.location.origin
            }}
          >
            <UserContextProvider>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                pauseOnHover
              />
              <Router />
            </UserContextProvider>
          </Auth0Provider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
