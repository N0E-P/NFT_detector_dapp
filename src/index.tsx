// The ground of all the app
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://c6hhlei6g0gq.usemoralis.com:2053/server" appId="6aAUcocQa3OMclJBfd0ViF10jZayNKqvME06r16t">
      <App />
    </MoralisProvider>
  </React.StrictMode>
);