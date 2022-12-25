import { useCallback } from "react";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { RegistrationScreen } from "./Screens/AuthScreens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/AuthScreens/LoginScreen/LoginScreen";
import { Home } from "./Screens/Home/Home";

SplashScreen.preventAutoHideAsync();

const AuthStack = createNativeStackNavigator();

// const isAuth = false;

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
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
    <NavigationContainer>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <AuthStack.Navigator initialRouteName="LoginScreen">
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="RegistrationScreen"
            component={RegistrationScreen}
          />

          {/* {isAuth ? (
            <AuthStack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
            />
          ) : (
            <>
              <AuthStack.Screen
                options={{ headerShown: false }}
                name="LoginScreen"
                component={LoginScreen}
              />
              <AuthStack.Screen
                options={{ headerShown: false }}
                name="RegistrationScreen"
                component={RegistrationScreen}
              />
            </>
          )} */}
        </AuthStack.Navigator>

        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
