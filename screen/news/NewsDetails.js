import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/header'
import { useNavigation, useRoute } from '@react-navigation/native';

const NewsDetails = () => {
    const route = useRoute();
    const navigation = useNavigation();
    useEffect(() => {
      navigation.setOptions({
        urlToImage: route.params.urlToImage,
        title: route.params.title,
        description: route.params.description,
        content : route.params.content,
      });
    }, [route.params.item]);
    // console.log(route.params.urlToImage)
  return (
    <View>
      <Header title = "News" onPress={()=>navigation.goBack()}/>
      <View>
        <Text>{route.params.title}</Text>
        <Image
        source={{uri : route.params.urlToImage}}
      />
      <Text>{route.params.content}</Text>
      </View>
    </View>
  )
}

export default NewsDetails