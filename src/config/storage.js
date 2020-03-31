import AsyncStorage from '@react-native-community/async-storage';

export const setStoreItem = async (
  key,
  value,
  onSuccessCallback = () => {},
  onFailureCallback = () => {}
) => {
  try {
    await AsyncStorage.setItem(key, value);
    onSuccessCallback(key, value);
  } catch (error) {
    onFailureCallback(error);
  }
};

export const getStoreItem = async (
  key,
  onSuccessCallback = () => {},
  onFailureCallback = () => {}
) => {
  let value;
  try {
    value = await AsyncStorage.getItem(key);
    onSuccessCallback(value);
  } catch (error) {
    onFailureCallback(error);
  }

  return value;
};

export const resetStoreItem = async (
  key,
  onSuccessCallback = () => {},
  onFailureCallback = () => {}
) => {
  let value;
  try {
    await AsyncStorage.removeItem(key);
    onSuccessCallback();
  } catch (error) {
    onFailureCallback(error);
  }

  return value;
};
