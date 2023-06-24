import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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

