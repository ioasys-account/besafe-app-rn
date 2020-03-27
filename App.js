import 'react-native-gesture-handler';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';

import store from 'store/reducerConfig';

import Navigator from 'config/routes';

const App = () => {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.Os == 'ios' ? 'padding' : 'height'}
      >
        <Navigator />
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default App;
