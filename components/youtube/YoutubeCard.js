import { View, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { Image } from 'react-native'

const YoutubeCard = (props) => {
  return (
    
    <Card style={{borderRadius : 0}} onPress={props.onPress}>
    <Image
      
        source={{
          uri: props.image,
        }}
        style={{height : 200,width : "100%"}}
      />
    <View>
      {/* <Image source={{ uri: props.thumbnail }} style={{height : 40,width : 40,borderRadius : 50}}/> */}
      <Text variant="titleSmall" style={{color : "#1F415B",fontWeight : "400",marginTop : 5}}>{props.title}</Text>
      <View style={{display : "flex",flexDirection : "row",marginVertical : 5}}>
      <Text  style={{color : "#1F415B",fontWeight : "500",fontSize : 12,}}>{props.channalTitle}</Text>
      <Text  style={{color : "#1F415B",fontWeight : "500",fontSize : 12,left : 8}}>{props.views}</Text>
      <Text  style={{color : "#1F415B",fontWeight : "500",fontSize : 12,left : 16}}>{props.uplodeTime}</Text>
      </View>
    </View>
  </Card>
  )
}

export default YoutubeCard