import { NativeModules, Platform } from 'react-native';

export default () => {
  const locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;

  return locale.replace('_', '-');
};
