import { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Container = ({ children }: { children: React.ReactNode }) => {
  const [fontsLoaded] = useFonts({
    'Alef-Bold': require('../../assets/fonts/Alef/Alef-Bold.ttf'),
    'Alef-Regular': require('../../assets/fonts/Alef/Alef-Regular.ttf'),
    'OpenSans-Bold': require('../../assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
    'OpenSans-ExtraBold': require('../../assets/fonts/Open_Sans/OpenSans-ExtraBold.ttf'),
    'OpenSans-SemiBold': require('../../assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
    'OpenSans-Medium': require('../../assets/fonts/Open_Sans/OpenSans-Medium.ttf'),
    'OpenSans-Regular': require('../../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    'OpenSans-Light': require('../../assets/fonts/Open_Sans/OpenSans-Light.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={style.container} onLayout={onLayoutRootView}>
      {children}
      <StatusBar />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
    backgroundColor: '#3C753E',
  },
});
export default Container;
