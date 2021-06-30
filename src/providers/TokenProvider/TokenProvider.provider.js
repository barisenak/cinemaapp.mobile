import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {setAccessToken} from 'app/utils/fetch.util';

export function TokenProvider({children, getUser}) {
  const [isAppLoaded, setAppState] = useState(false);

  useEffect(() => {
    // REVIEW: Let's create a set of {util} function to work with {AsyncStorage},
    // so no need to mix JSX and DB calls.
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
  }, []);

  return isAppLoaded ? children : null;
}

export default TokenProvider;
