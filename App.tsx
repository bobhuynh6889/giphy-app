import { StyleSheet, View } from 'react-native';

import AppNavigation from './src/navigation/AppNavigation'
import ToastMessage from './src/components/ToastMessage'

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
      <ToastMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
