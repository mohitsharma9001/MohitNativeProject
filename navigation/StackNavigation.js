import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screen/Home";
import BottomTabNav from "./BottomTabNav";
import MenuScreen from "../screen/Menu";
import YoutubeScreen from "../screen/youtube/Youtube";
import NewsScreen from "../screen/news/News";


const Stack = createStackNavigator()
const MainStackNavigation = () => {
  return (  
<NavigationContainer>
    <Stack.Navigator
      initialRouteName={"Home"}
        screenOptions={{
        headerStyle: {
          backgroundColor: "#00B386",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown: false,
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
  <Stack.Screen name="Home" component={BottomTabNav} />
  <Stack.Screen name="menu" component={MenuScreen} />
  <Stack.Screen name="youtube" component={YoutubeScreen} />
  <Stack.Screen name="news" component={NewsScreen} />

  </Stack.Navigator>
  </NavigationContainer>
  );
};

export default MainStackNavigation;
