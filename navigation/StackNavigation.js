import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screen/Home";
import BottomTabNav from "./BottomTabNav";
import MenuScreen from "../screen/Menu";


const Stack = createStackNavigator()
const MainStackNavigation = () => {
  return (  
<NavigationContainer>
    <Stack.Navigator
      initialRouteName={"Home"}
      headerMode="none"
      screenOptions={{
          gestureEnabled: true,
  
      }}
    >
  <Stack.Screen name="Home" component={BottomTabNav} />
  <Stack.Screen name="menu" component={MenuScreen} />

  </Stack.Navigator>
  </NavigationContainer>
  );
};

export default MainStackNavigation;
