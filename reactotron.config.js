import Reactotron, {asyncStorage, networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

import AsyncStorage from '@react-native-community/async-storage';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .use(reactotronRedux())
  .use(networking())
  .use(asyncStorage())
  .connect();

console.tron = Reactotron.log;

export {reactotron as Reactotron};
