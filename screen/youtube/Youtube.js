import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { useNavigation } from "@react-navigation/native";
import CommonMenuHeader from "../../components/CommonMenuHeader";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { request } from "../../Utils/Api";
import { FlatList } from "react-native";
import CustomCard from "../../components/CustomCard";
import YoutubeCard from "../../components/youtube/YoutubeCard";

const YoutubeScreen = () => {
  const navigation = useNavigation();
  const [youTubeData,setYouTubeData] = useState([])

  // console.log(youTubeData)
  let video_http = "https://www.googleapis.com/youtube/v3/videos?";
  useEffect(()=>{
    fetch(video_http + new URLSearchParams({
      key: "AIzaSyAMjU5KvjETeycpR-3F9lfx3R6BEl_z6GA",
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 50,
      regionCode: 'IN'
  }))
    .then((res)=>res.json())
    .then((res)=>setYouTubeData(res.items))
  },[])
  return (
    <>
      <CommonMenuHeader
        icon1={<FontAwesome name="youtube" size={24} color="red" />}
        icon2={<MaterialIcons name="cast" size={24} color="black" />}
        icon3={"bell-outline"}
        icon4={"magnify"}
        icon5={"account-circle-outline"}
        onPress={()=>navigation.goBack()}
      />
       <FlatList
        data={youTubeData}
        keyExtractor={item => item.id}
        
        renderItem={({item}) => (
          <YoutubeCard
          image={item.snippet.thumbnails.high.url}
          title={item.snippet.title}
          channalTitle={item.snippet.channelTitle}
          // thumbnail={item.channelThumbnail}
          onPress={()=>navigation.navigate("youtubePlay",{
             item : item.id
          })}
          />
        )}
      />
    </>
  );
};

export default YoutubeScreen;
