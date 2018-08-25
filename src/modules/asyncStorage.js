import { AsyncStorage } from 'react-native';

export const getFavoriteNames = async gender => {
  try {
    const value = await AsyncStorage.getItem(`favoriteNames:${gender}`);
    return JSON.parse(value) || [];
  } catch (error) {
    console.log(error);
  }
};

export const saveFavoriteNames = async (gender, favoriteNames) => {
  try {
    await AsyncStorage.setItem(
      `favoriteNames:${gender}`,
      JSON.stringify(favoriteNames)
    );
  } catch (error) {
    console.error(error);
  }
};
