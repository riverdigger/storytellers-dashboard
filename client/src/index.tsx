import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from "@azure/msal-browser";
import { msalConfig } from "./config/authConfig";
import { MsalProvider } from "@azure/msal-react";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const msalInstance = new PublicClientApplication(msalConfig);

//get initialize msalInstance
msalInstance.initialize();

const activeAccount = msalInstance.getActiveAccount();

if (!activeAccount) {
    // Account selection
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
        msalInstance.setActiveAccount(accounts[0]);
    }
}

//set the account
msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        const authenticationResult = event.payload as AuthenticationResult;
        const account = authenticationResult.account;
        msalInstance.setActiveAccount(account);
    }
});

//enable account storage event
msalInstance.enableAccountStorageEvents();


//App main component
function AppComponent() {
    const navigate = useNavigate();

    useEffect(() => {
        msalInstance.handleRedirectPromise().then((response) => {
            if (response && response.account) {
                // User is authenticated, you can proceed to  app
                navigate("/", { replace: true });
            }
        });
        // Check if the user is already signed in
        const account = msalInstance.getActiveAccount();
        if (account) {
            // User is already signed in, you can proceed to  app
            console.log("YOU IN");
            navigate("/", { replace: true });
        } else {
            // If the user is not signed in, initiate the login process
            msalInstance.initialize();
        }
    }, []);

    return <App />;
}

root.render(
  <BrowserRouter>
    <MsalProvider instance={msalInstance}>
      <React.StrictMode>
          <AppComponent />
      </React.StrictMode>
    </MsalProvider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
