
import React, { useState } from "react";
// ensure all pages have Bootstrap CSS
import 'argon-design-system-react/src/assets/css/argon-design-system-react.css?v1.1.0';
import '../styles/global.css';
import 'react-notifications/lib/notifications.css';
import 'spin.js/spin.css';
import UserContext from '../lib/userContext';
import { NotificationContainer } from 'react-notifications';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={[user, setUser]}>
    <Component {...pageProps}></Component>
    <NotificationContainer />
   
  </UserContext.Provider>;

}

export default MyApp;