import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {setAccessToken} from 'app/utils/fetch.util';

export function TokenProvider({children, getUser}) {
  const [isAppLoaded, setAppState] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then(accessToken => {
        setAccessToken(accessToken);
      })
      .then(() => {
        // REVIEW: Let's create a new util to work with external storage
        // storage.util
        //
        // function setItem() { ... }
        //
        // function getItem(key) {
        //   return AsyncStorage.getItem(key);
        // }
        //
        AsyncStorage.getItem('refreshToken').then(refreshToken => {
          getUser(refreshToken);
        });
      })
      .then(() => setAppState(true));
  }, []);

  return isAppLoaded ? children : null;
}

export default TokenProvider;
