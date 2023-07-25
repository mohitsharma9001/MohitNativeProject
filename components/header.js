import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Appbar } from 'react-native-paper';


const Header = (props) => {
    
  return (
    <Appbar.Header style={{backgroundColor: "black"}}>
    <Appbar.BackAction onPress={props.onPress} color='white'/>
    <Appbar.Content title={props.title} color='white'/>
    {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
    {props.searchIcon ? <Appbar.Action icon="magnify" onPress={() => {}} color='white'/> : null}
  </Appbar.Header>
  )
}

export default Header