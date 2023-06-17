import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import { useNavigation } from '@react-navigation/native'

const YoutubeScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Header title= "Youtube" onPress={()=>navigation.goBack()}/>
    </View>
  )
}

export default YoutubeScreen