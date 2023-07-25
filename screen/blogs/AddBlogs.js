import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

const AddBlogs = () => {
  const [text, setText] = React.useState("");
  return (
    <View>
      <TextInput placeholder="Title ...." style={styles.input} />
      <TextInput
        placeholder="Description ...."
        style={styles.inputDes}
        multiline={true}
      />
    </View>
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
