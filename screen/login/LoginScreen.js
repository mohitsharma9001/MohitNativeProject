import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import { Image } from "react-native";
import { ScrollView } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
      <ScrollView style={{ backgroundColor: "#fff", }}>
    <View style={{ padding: 24,backgroundColor: "#fff", }}>
      <StatusBar />
      <View style={{alignItems: "center",
              justifyContent: "center",marginBottom : 80,top : 50}}>
      <Image
        style={{height : 200,width: 200}}
        source={ {uri: 'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000',}}
      />
      </View>
      <View style={{ marginVertical: 15 }}>
        <TextInput mode="outlined" label="Email" />
      </View>
      <View style={{ marginVertical: 15}}>
        <TextInput mode="outlined" label="Password" secureTextEntry/>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "black",
              padding: 14,
              width: 200,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: "center",justifyContent : "center",marginTop: 180}}>
        <Text>Don’t have an account?</Text>
        <Text>Register</Text>
      </View>
    </View>
      </ScrollView>
  );
};

export default LoginScreen;
