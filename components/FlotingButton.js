import React from "react";
import { FAB, Provider as PaperProvider } from "react-native-paper";
import {  StyleSheet, SafeAreaView, } from "react-native";


export default function FloatingButton({ onPress, icon}) {

  return (
      <SafeAreaView style={styles.MainContainer}>
      
        <FAB
          style={styles.fabStyle}
          animated={true}
          disabled={false}
          visible={true}
          loading={false}
          icon={icon}
          onPress={onPress}  
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    // position: "absolute", 
    // right: 0, 
    // bottom: 10,
    backgroundColor : "black"
  },
  fabWrapper: {
    position: "absolute",
    margin: 25,
    right: 0,
    bottom: 0,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    
  },
  fabStyle: {
    position: "absolute",
    margin: 25,
    right: 0,
    bottom: 0,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'black',
  },
});
