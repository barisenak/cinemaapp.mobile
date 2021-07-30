import React, {useEffect, useState} from 'react';

import {setAccessToken} from 'app/utils/fetch.util';
import {getItem} from 'app/utils/storage.util';

export function TokenProvider({children, getUser}) {
  const [isAppLoaded, setAppState] = useState(false);

  useEffect(() => {
    getItem('accessToken')
      .then(accessToken => {
        accessToken ? setAccessToken(accessToken) : null;
      })
      .then(() => {
        getItem('refreshToken').then(refreshToken => {
          refreshToken ? getUser(refreshToken) : null;
        });
      })
      .then(() => setAppState(true));
  }, []);

  return isAppLoaded ? children : null;
}

export default TokenProvider;
