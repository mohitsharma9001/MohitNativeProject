import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
const YouTubePlayVideo = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ title: route.params.item });
  }, [route.params.item]);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={route.params.item}
      />
    </View>
  )
}

export default YouTubePlayVideo