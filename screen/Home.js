import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {

const navigation = useNavigation()
  return (
    <View style={{backgroundColor : "black"}}>
       {/* <Loader visible={loading}/>
        <StatusBar barStyle={"default"}/>
        <SearchBar/>
        <View style={{flex : 1,backgroundColor : "#fff" }}>
        <FlatList
        data={allProduct}
        keyExtractor={item => item.id}
        
        renderItem={({item}) => (
          <CustomCard
           title={item.title}
           description={item.description}
           price ={"Price : "+ item.price}
           rating ={"Rating : "+ item.rating.rate}
           image={item.image}
           onPress ={()=>navigation.navigate("practiceScreen")}
          />
        )}
      />
        <FloatingButton  icon={"plus-circle-outline"} />
     </View> */}
    
   
    </View>
  )
}

export default HomeScreen 