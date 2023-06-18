import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Appbar } from 'react-native-paper';

const CommonMenuHeader = (props) => {
  return (
    <Appbar.Header>
    <Appbar.BackAction  onPress={props.onPress}/>
    <Appbar.Action icon={()=>props.icon1} />
    <Appbar.Content />
    <Appbar.Action icon={()=>props.icon2} />
    <Appbar.Action icon={props.icon3} />
    <Appbar.Action icon={props.icon4} />
    <Appbar.Action icon={props.icon5}  />
  </Appbar.Header>
  );
};

export default CommonMenuHeader;
