import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

import {TokenProvider} from './providers';
import NavigationProvider from './providers/NavigationProvider/NavigationProvider.provider.js';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TokenProvider>
          <NavigationProvider />
        </TokenProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
