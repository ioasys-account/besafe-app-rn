import 'react-native-gesture-handler';
import React from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from 'store/reducerConfig';

import Navigator from 'config/routes';
import COLORS from 'config/colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
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
