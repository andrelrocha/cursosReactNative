import React from 'react';
import { SafeAreaView, View } from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Login from './src/screens/Login';
import Home from './src/screens/Home';

function App() {
  return (
    <View>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </View>
  );
}

export default App;
