import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <PanGestureHandler onGestureEvent={() => console.log('Gesture detected!')}>
        <View style={styles.box}></View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    margin: 20,
  },
});
