import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

import {TokenProvider} from './src/providers';
import NavigationProvider from './src/providers/NavigationProvider/NavigationProvider.provider.js';

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
