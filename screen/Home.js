import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomCard from '../components/CustomCard'
import SearchBar from '../components/SearchBar'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const [allProduct,setallProduct] = useState([])
  useEffect(()=>{
fetch(`https://fakestoreapi.com/products`)
.then((res)=>res.json())
.then((res)=>setallProduct(res))
  },[])
const navigation = useNavigation()
  return (
    <>

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
           onPress ={()=>navigation.navigate("menu")}
          />
        )}
      />
     </View>
    
   
    </>
  )
}

export default HomeScreen 