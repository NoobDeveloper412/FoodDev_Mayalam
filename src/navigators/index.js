import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, WelcomeScreen } from "../screens";
import React from "react";
const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
