import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import MainStackNavigation from '../navigation/StackNavigation'

const LoginScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={{marginTop : 100}}>
       <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      right={<TextInput.Affix text="/100" />}
    />
      <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      right={<TextInput.Affix text="/100" />}
    />
    <View style={{height : 50,width : "80%",alignItems: "center",justifyContent : "center"}}>
        {/* <Text onPress={()=><MainStackNavigation/>}>Submit</Text> */}
    </View>
    </View>
  )
}

export default LoginScreen