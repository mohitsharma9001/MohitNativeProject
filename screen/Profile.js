import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const Flourth = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const Fifth = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const ProfileScreen = () => {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' },
    { key: 'forth', title: 'Forth' },
    { key: 'fifth', title: 'Fifth' },
  ];

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    forth: Flourth,
    fifth: Fifth,
  });

  const onIndexChange = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    // <View style={styles.container}>
    // <ScrollView horizontal>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={onIndexChange}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={(props) => (
          <TabBar {...props} scrollEnabled={true} style={styles.tabBar} />
        )}
      />
    // </ScrollView>
  // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  // tabBar: {
  //   backgroundColor: '#ffffff',
  // },
});

export default ProfileScreen;


