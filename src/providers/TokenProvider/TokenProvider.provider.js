import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {setAccessToken} from 'app/utils/fetch.util';

export function TokenProvider({children, getUser}) {
  const [isAppLoaded, setAppState] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then(accessToken => {
        accessToken ? setAccessToken(accessToken) : null;
      })
      .then(() => {
        AsyncStorage.getItem('refreshToken').then(refreshToken => {
          refreshToken ? getUser(refreshToken) : null;
        });
      })
      .then(() => setAppState(true));
  }, []);

  return isAppLoaded ? children : null;
}

export default TokenProvider;
