import { View, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { Image } from 'react-native'

const YoutubeCard = (props) => {
  return (
    <Card style={{marginVertical : 5,marginHorizontal : 10}} onPress={props.onPress}>
    <Card.Cover source={{ uri: props.image }} />
    <Card.Content>
      {/* <Image source={{ uri: props.thumbnail }} style={{height : 40,width : 40,borderRadius : 50}}/> */}
      <Text variant="titleSmall" style={{color : "#1F415B",fontWeight : "400",marginTop : 10}}>{props.title}</Text>
      <View style={{display : "flex",flexDirection : "row",marginTop : 5}}>
      <Text  style={{color : "#1F415B",fontWeight : "500",fontSize : 12,}}>{props.channalTitle}</Text>
      <Text  style={{color : "#1F415B",fontWeight : "500",fontSize : 12,left : 8}}>{props.views}</Text>
      <Text  style={{color : "#1F415B",fontWeight : "500",fontSize : 12,left : 16}}>{props.uplodeTime}</Text>
      </View>
    </Card.Content>
  </Card>
  )
}

export default YoutubeCard