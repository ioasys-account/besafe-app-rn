import 'react-native-gesture-handler';
import React, { useLayoutEffect } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';

import store from 'store/reducerConfig';

import Navigator from 'config/routes';
import COLORS from 'config/colors';

import { getLanguage } from 'helpers';

const App = () => {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={COLORS.background} barStyle='dark-content' />
      <SafeAreaView backgroundColor={COLORS.primary} />
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
