import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomCard from '../components/CustomCard'
import SearchBar from '../components/SearchBar'
import { useNavigation } from '@react-navigation/native'
import Loader from '../components/Loader'
import FloatingButton from '../components/FlotingButton'

const HomeScreen = () => {
  const [allProduct,setallProduct] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
fetch(`https://fakestoreapi.com/products`)
.then((res)=>res.json())
.then((res)=>setallProduct(res))
.catch((res)=>console.log("data is not find"))
.finally(()=>setLoading(false))
  },[])
const navigation = useNavigation()
  return (
    <>
       <Loader visible={loading}/>
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
        <FloatingButton  icon={"plus-circle-outline"} />
     </View>
    
   
    </>
  )
}

export default HomeScreen 