import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet, ScrollView } from "react-native";

const AddBlogs = () => {
  const [inputValue, setInputValue] = useState("");
  const [description, setDescription] = useState("");
const navigation = useNavigation()
  const addDataToServer = async () => {
    const url = 'http://192.168.25.175:3000/blogs'; 
    const dataToSend = [{
      title: inputValue,
      description : description
    }];

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
response =await response.json()
navigation.navigate("home")

    } catch (error) {
      console.error('POST Request Failed');
      console.error('Error:', error);
      // Handle errors here
    }
  };
  return (
    <>
      <ScrollView>
        <TextInput
          placeholder="Title ...."
          style={styles.input}
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
        <TextInput
        placeholder="Description ...."
        style={styles.inputDes}
        multiline={true}
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
     
      </ScrollView>
       <View style={{margin : 12}}>
        <Button title="Post Blog" onPress={addDataToServer} />
        </View>
    </>
  );
};

export default AddBlogs;

const styles = StyleSheet.create({
  input: {
    margin: 12,
    padding: 10,
    borderBottomWidth: 0.5,
    fontSize: 28,
  },
  inputDes: {
    margin: 12,
    padding: 10,
    borderBottomWidth: 0.5,
    fontSize: 28,
  },
});
