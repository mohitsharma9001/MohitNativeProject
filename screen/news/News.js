import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { useNavigation } from "@react-navigation/native";
import NewsCard from "../../components/news/NewsCard";
import CommonMenuHeader from "../../components/CommonMenuHeader";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
//nyt api 6XAKGAGGnAwZMgfjrEHA8ACDxqG4X7jM  https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
// dbb3bcdec9f548f28416879f4a5b0dd5 -news api key
const NewsScreen = () => {
  const navigation = useNavigation();
  const [newsData, setNewsData] = useState([]);
  console.log(newsData);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=dbb3bcdec9f548f28416879f4a5b0dd5`
    )
      .then((res) => res.json())
      .then((res) => setNewsData(res.articles));
  }, []);
  return (
    <View>
      <CommonMenuHeader
       icon1={<Ionicons name="md-newspaper-outline" size={24} color="#1F415B" />}
        icon3={"bell-outline"}
        icon4={"magnify"}
        icon5={"account-circle-outline"}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewsCard
            image={item.urlToImage}
            title={item.title}
            author={item.author}
            description={item.description}
          
            onPress={()=>navigation.navigate("newsDetails",{
              urlToImage : item.urlToImage,
               title : item.title,
               description : item.description,
               content : item.content
          
            })}
          />
        )}
      />
    </View>
  );
};

export default NewsScreen;
