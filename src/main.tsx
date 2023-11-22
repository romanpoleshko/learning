import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { HashRouter } from 'react-router-dom';

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1070476743728-2phqg6oe8p30fsq1r4i5i5ruj188kiv2.apps.googleusercontent.com">
      <HashRouter>
        <App />
      </HashRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
