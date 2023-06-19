import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import { useNavigation } from '@react-navigation/native'
// 6XAKGAGGnAwZMgfjrEHA8ACDxqG4X7jM
const NewsScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
       <Header title= "News" onPress={()=>navigation.goBack()}/>
    </View>
  )
}

export default NewsScreen