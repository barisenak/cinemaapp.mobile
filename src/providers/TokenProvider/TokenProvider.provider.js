import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {setAccessToken} from 'app/utils/fetch.util';

export function TokenProvider({children, getUser, setLanguage}) {
  const [isAppLoaded, setAppState] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then(accessToken => {
        setAccessToken(accessToken);
      })
      .then(() => {
        AsyncStorage.getItem('refreshToken').then(refreshToken => {
          getUser(refreshToken);
        });
      })
      .then(() => setAppState(true));
    // AsyncStorage.getItem('persist:root').then(settings => {
    //   console.log(settings['settings']);
    //   setLanguage(settings.language);
    // });
  }, []);

  return isAppLoaded ? children : null;
}

export default TokenProvider;
