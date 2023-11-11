import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { global } from '../global';

export default function App() {
  return (
    <View style={global.container}>
      <Text style={global.text}>Open up App.tsx to start</Text>
      <StatusBar />
    </View>
  );
}
