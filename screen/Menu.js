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
                  <Text style={{textAlign : "center",fontSize : 16,fontWeight : "500"}}>{item.name}</Text>
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
    backgroundColor: "white",
    flex: 1,
    // alignItems: "center",
  },
  flatListBox: {
    marginTop: 15,
    flex: 1,
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    overflow: "hidden",
    justifyContent : "space-between"
    
  },
})
