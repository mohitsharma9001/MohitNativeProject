import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Header from '../components/header'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const MenuScreen = () => {

  const item = [
    {
      id : 1,
      name : "Youtube",
      screen : "youtube",
      avatarUrl: "data:image/png;base64,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",
    },
    {
      id : 2,
      name : "News",
      screen : "news",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGx0hitiF1_hm3rAtj032vtns6HD7lAbVW6Q&usqp=CAU",
      
    },
    {
      id : 3,
      name : "Add Blogs",
      screen : "addBlogs",
      avatarUrl: "data:image/png;base64,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",
      
    },
    
  ]
const navigation = useNavigation()
  return (
    <>
      <Header title ="Menu" searchIcon={true} onPress={()=>navigation.goBack()}/>
      <View style={styles.mainContainer}>
      <View style={styles.flatListBox}>
        
      <FlatList
        data={item}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => { if (item.screen) navigation.navigate(item.screen) }} >
          <View style={{padding : 10}}>
                  <Image
                    source={{
                      uri: item.avatarUrl
                    }}
                    style={{ height: heightPercentageToDP(21), width: widthPercentageToDP(42), borderRadius: 15 }}
                    alt={item.name}
                  />
                  <Text style={{textAlign : "center",fontSize : 20,fontWeight : "500",color: "white"}}>{item.name}</Text>
                </View>
                </TouchableOpacity>
               
        )}
        keyExtractor={item => item.id}
      />
      </View>
      </View>
    </>
  )
}

export default MenuScreen
const styles = StyleSheet.create({
  mainContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "black",
    flex: 1,
    // alignItems: "center",
  },
  flatListBox: {
    marginTop: 15,
    flex: 1,
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "black",
    overflow: "hidden",
    justifyContent : "space-between"
    
  },
})
