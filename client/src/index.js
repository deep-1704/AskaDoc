import React from 'react';
import ReactDOM from 'react-dom/client';
// import LP from './Landing_page';
import Profile from './profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LP /> */}
    <Profile username="Deep Prajapati"/>
  </React.StrictMode>
);