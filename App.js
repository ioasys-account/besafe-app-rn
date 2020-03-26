import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { configReducer } from 'store/reducerConfig';

import Navigator from 'config/routes';

const store = configReducer();

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
