import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";
const YouTubePlayVideo = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      item: route.params.item,
      title: route.params.title,
      channalTile: route.params.channelTitle,
      views: route.params.views,
    });
  }, [route.params.item]);

  return (
    <View>
      <YoutubePlayer height={300} play={true} videoId={route.params.item} />
      <View style={{ marginTop: -70,marginHorizontal : 10 }}>
        <Text style={styles.titleText}>{route.params.title}</Text>
        <Text style={styles.titleText}>{route.params.views}</Text>
      </View>
    </View>
  );
};

export default YouTubePlayVideo;
const styles = StyleSheet.create({
  titleText : {
    fontSize : 16,
    fontWeight : "600"
  }
})