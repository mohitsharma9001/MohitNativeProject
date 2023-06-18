import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNav from './navigation/BottomTabNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <MainStackNavigation/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

