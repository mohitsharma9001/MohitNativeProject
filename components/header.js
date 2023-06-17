import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Appbar } from 'react-native-paper';


const Header = (props) => {
    const navigation = useNavigation()
    const gotoBack = () => navigation.goBack("Home");
  return (
    <Appbar.Header>
    <Appbar.BackAction onPress={gotoBack} />
    <Appbar.Content title={props.title} />
    {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
    {props.searchIcon ? <Appbar.Action icon="magnify" onPress={() => {}} /> : null}
  </Appbar.Header>
  )
}

export default Header