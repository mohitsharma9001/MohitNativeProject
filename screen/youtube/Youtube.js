import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { useNavigation } from "@react-navigation/native";
import CommonMenuHeader from "../../components/CommonMenuHeader";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { request } from "../../Utils/Api";
import { FlatList } from "react-native";
import CustomCard from "../../components/CustomCard";
import YoutubeCard from "../../components/youtube/YoutubeCard";
import {shortenNumber} from "../../Utils/Utils";
import moment from "moment/moment";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const YoutubeScreen = () => {
  const navigation = useNavigation();
  const [youTubeData,setYouTubeData] = useState([])
  const [showSearch,setShowSearch] = useState(false)

  // console.log(youTubeData)
  let video_http = "https://www.googleapis.com/youtube/v3/videos?";
  useEffect(()=>{
    fetch(video_http + new URLSearchParams({
      key: "AIzaSyAMjU5KvjETeycpR-3F9lfx3R6BEl_z6GA",
      part: 'snippet,statistics',
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
        icon4={<Ionicons
          name="search"
          size={22}
          color
          style={{
            color: "black",
          }}
         onPress={()=>setShowSearch(!showSearch)}
        />}
        icon5={"account-circle-outline"}
        onPress={()=>navigation.goBack()}
      />
        {showSearch ?<Searchbar
            placeholder={"Search videos..."}
            inputStyle={styles.input}
            style={[styles.Searchbar, { backgroundColor: "#fff" }]}
            autoFocus={true}
            icon={({ size, color }) => (
              <Ionicons
                name="search"
                size={24}
                color
                style={{
                  color: "black",
                }}
          
              />
            )}
           
          />: null}
       <FlatList
        data={youTubeData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <YoutubeCard
          image={item.snippet.thumbnails.high.url}
          title={item.snippet.title}
          channalTitle={item.snippet.channelTitle}
          views={shortenNumber(item.statistics.viewCount) + " Views"}
          uplodeTime={moment.utc(item.publishedAt).local().startOf('seconds').fromNow()}
          onPress={()=>navigation.navigate("youtubePlay",{
             item : item.id,
             title : item.snippet.title,
             channelTitle : item.snippet.channelTitle,
             views : shortenNumber(item.statistics.viewCount) + " Views"
          })}
          />
        )}
      />
    </>
  );
};
const styles = StyleSheet.create({
  Searchbar: {
    width: "100%",
    borderRadius: 0,
    // borderBottomWidth: 1,
    // borderColor: "",
  },
})
export default YoutubeScreen;
