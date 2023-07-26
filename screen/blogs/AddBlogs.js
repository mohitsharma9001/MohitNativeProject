import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

const AddBlogs = () => {
  const [inputValue, setInputValue] = useState("");
  const addDataToServer = async () => {
    console.warn("test")
    const url = 'http://localhost:3000/users'; 
    const dataToSend = [{
      name: "mohit sharma",
      age : 20
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
console.warn(response)
    } catch (error) {
      console.error('POST Request Failed');
      console.error('Error:', error);
      // Handle errors here
    }
  };
  return (
    <>
      <View>
        <TextInput
          placeholder="Title ...."
          style={styles.input}
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
        {/* <TextInput
        placeholder="Description ...."
        style={styles.inputDes}
        multiline={true}
      /> */}
        <Button title="Post Data" onPress={addDataToServer} />
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
