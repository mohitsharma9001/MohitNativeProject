import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import MenuScreen from "../screen/Menu";
import YoutubeScreen from "../screen/youtube/Youtube";
import NewsScreen from "../screen/news/News";
import YouTubePlayVideo from "../screen/youtube/YouTubePlayVideo";
import NewsDetails from "../screen/news/NewsDetails";
import BottomTabs from "./BottomTab";


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
  <Stack.Screen name="home" component={BottomTabs} />
  <Stack.Screen name="menu" component={MenuScreen} />
  <Stack.Screen name="youtube" component={YoutubeScreen} />
  <Stack.Screen name="news" component={NewsScreen} />
  <Stack.Screen name="youtubePlay" component={YouTubePlayVideo} />
  <Stack.Screen name="newsDetails" component={NewsDetails} />

  </Stack.Navigator>
  </NavigationContainer>
  );
};

export default MainStackNavigation;
