import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import CounterScreen from './src/screens/CounterScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import HelloWorldScreen from './src/screens/HelloWorldScreen';
import { HomeworkScreen } from './src/screens/HomeworkScreen';
import { PositionScreen } from './src/screens/PositionScreen';


function App() {
  return (
    <SafeAreaView style={{ flex:1, backgroundColor: '#28425B'}}>
     { /* <HelloWorldScreen /> */}
     { /* <CounterScreen /> */} 
     { /*<BoxObjectModelScreen /> */} 
     { /*<DimensionsScreen /> */} 
     { /*<PositionScreen />*/} 
     { /*<FlexScreen />*/} 
     { /*<HomeworkScreen />*/} 
    </SafeAreaView>

  );
}

export default App
