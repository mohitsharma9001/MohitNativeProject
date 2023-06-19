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
import YouTubePlayVideo from "../screen/youtube/YouTubePlayVideo";


const Stack = createStackNavigator()
const MainStackNavigation = () => {
  return (  
<NavigationContainer>
    <Stack.Navigator
      initialRouteName={"Home"}
        screenOptions={{
    
        headerShown: false,
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
  <Stack.Screen name="home" component={BottomTabNav} />
  <Stack.Screen name="menu" component={MenuScreen} />
  <Stack.Screen name="youtube" component={YoutubeScreen} />
  <Stack.Screen name="news" component={NewsScreen} />
  <Stack.Screen name="youtubePlay" component={YouTubePlayVideo} />

  </Stack.Navigator>
  </NavigationContainer>
  );
};

export default MainStackNavigation;
