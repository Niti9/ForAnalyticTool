import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import Animated, { FadeIn } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc';


import { vexo } from 'vexo-analytics';
vexo('8968a07a-b695-424a-85a0-1755997e5bd5');

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();




  // const [fontsLoaded, fontError] = useFonts({
  //   Inter: Inter_400Regular,
  //   InterSemi: Inter_600SemiBold,
  //   InterBold: Inter_700Bold,
  //   InterBlack: Inter_900Black,

  //   Amatic: AmaticSC_400Regular,
  //   AmaticBold: AmaticSC_700Bold,
  // });


  // useEffect(() => {
  //   if (fontsLoaded || fontError) {
  //     SplashScreen.hideAsync();
  //     // setAppReady(true);
  //   }
  // }, [fontsLoaded, fontError]);
 

 const [loaded] = useFonts({
  Inter: Inter_400Regular,
  InterSemi: Inter_600SemiBold,
  InterBold: Inter_700Bold,
  InterBlack: Inter_900Black,

  Amatic: AmaticSC_400Regular,
  AmaticBold: AmaticSC_700Bold,
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    console.log("load nahi ho rha hai")
    return null;
  }
  
  
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1 }} entering={FadeIn}>
      <Stack>
        <Stack.Screen name="index" />
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      </Stack>
      </Animated.View>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
