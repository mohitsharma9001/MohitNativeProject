import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import HomeScreen from "../screen/Home";
import MenuScreen from "../screen/Menu";
import ProfileScreen from "../screen/Profile";

const Home = () => <HomeScreen/>

const Menu = () => <MenuScreen/>

const Profile = () => <ProfileScreen/>



const BottomTabNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "music",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "albums",
      title: "Menu",
      focusedIcon: "widgets",
      unfocusedIcon: "widgets-outline",
    },
    {
      key: "recents",
      title: "Profile",
      focusedIcon: "account-circle",
      unfocusedIcon: "account-circle-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: Home,
    albums: Menu,
    recents: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabNav;
