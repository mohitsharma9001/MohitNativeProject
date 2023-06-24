import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screen/Home";
import MenuScreen from "../screen/Menu";
import ProfileScreen from "../screen/Profile";




const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      shifting={false}
      sceneAnimationEnabled={true}
     

    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <MaterialCommunityIcons name="home" size={24} color={ color} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={24}
                color={ color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <MaterialCommunityIcons name="widgets" size={24} color={ color} />
            ) : (
              <MaterialCommunityIcons
                name="widgets-outline"
                size={24}
                color={ color}
              />
            );
          },
        }}
      />


      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <MaterialCommunityIcons
                name="account-circle"
                size={24}
                color={ color}
              />
            ) : (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={24}
                color={ color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;