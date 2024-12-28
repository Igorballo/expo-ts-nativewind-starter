import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View>
      <Text className='text-5xl text-red-600 bg-blue-600 h-full flex items-center justify-center'>Open up App.tsx to start working on your app igor!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
