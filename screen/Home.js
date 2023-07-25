import {
  View,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { images, resizeImage } from "../Utils/Images";
import Header from "../components/header";
import { EvilIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const [imageSlider, setImageSlider] = React.useState([
    "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/asur-2_launch_01--3x4-1688562858239.jpg?imformat=chrome",
    "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/crackdown-s2-3x4-1687791895161.jpg?imformat=chrome",
    "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/inspector-avinash-3x4-2-1687787855823.jpg?imformat=chrome",
    "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/bloody-daddy-3x4-clean-1687779431652.jpg?imformat=chrome",
    "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/rafuchakkar-3x4-1687781271734.jpg?imformat=chrome",
  ]);

  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "black" }}>
      <StatusBar/>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <View style={{flexDirection: "row",}}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvC2YkxAMxaZ-h2RHVBB4YvvMbSnyzyiwt-h21SDg&s",
              }}
              height={35}
              width={35}
            />
            <View style={{alignItems: "center",justifyContent: "center",left:10}}>
            <Text style={{ color: "white",fontSize: 20,fontStyle: "italic" }}>Jio Mohit</Text>
            </View>
          </View>
          <EvilIcons name="search" size={24} color="white" />
        </View>
        <View style={{ marginTop: 10 }}>
          <SliderBox
            images={imageSlider}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            sliderBoxHeight={400}
            autoplay
            circleLoop
            resizeMethod={"resize"}
            resizeMode={"cover"}
            paginationBoxStyle={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "rgba(128, 128, 128, 0.92)",
            }}
            ImageComponentStyle={{
              borderRadius: 15,
              width: "95%",
              marginTop: 5,
            }}
            imageLoadingColor="#2196F3"
          />
        </View>
        <View>
          <Text style={{ color: "white", padding: 13 }}>Hot Right Now 🔥</Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 10,
            }}
          >
            <Image
              source={{
                uri: "https://v3img.voot.com/resizeMedium,w_1920,h_1080/v3Storage/assets/bigg-punch-16x9-1688793787992.jpg?imformat=chrome",
              }}
              style={{ height: 150, borderRadius: 15, width: "100%" }}
            ></Image>
          </View>
        </View>
        <View>
          <Text style={{ color: "white", padding: 13 }}>
            Trending In India 🔥
          </Text>
          <View
            style={{
              marginHorizontal: 2,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ScrollView horizontal={true}>
              {images.map((item) => {
                return (
                  <View style={{ padding: 5 }}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={{
                        height: 170,
                        width: 130,
                        display: "flex",
                        flexDirection: "row",
                        borderRadius: 15,
                      }}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <View>
          <Text style={{ color: "white", padding: 13 }}>
          India's Top-Rated Originals 🌟
          </Text>
          <View
            style={{
              marginHorizontal: 2,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ScrollView horizontal={true}>
              {resizeImage.map((item) => {
                return (
                  <View style={{ padding: 5 }}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={{
                        height: 170,
                        width: 130,
                        display: "flex",
                        flexDirection: "row",
                        borderRadius: 15,
                      }}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
