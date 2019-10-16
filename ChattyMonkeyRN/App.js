/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  RefreshControl,
  ScrollView
} from 'react-native';

import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const App: () => React$Node = () => {

  const [y, setY] = React.useState(100);
  
  useEffect(() => {
    //console.log('Reached HEre-------')
    setTimeout(() => {
      console.log('Reached HEre-------Settimeout ' + y)
      if(y > 500) {
        setY(100);
      } else {
        setY(y + 1);
      }      
    }, 10)
  })
  
  return (
    <>
      {/* <GameEngine style={styles.container}>
           <StatusBar hidden={true} />
      </GameEngine> */}
      <ScrollView style={styles.container}>
        <View style={{width: 50, height: 50, backgroundColor: 'brown', top: 500}} />
        <View style={{width: 100, height: 50, backgroundColor: 'brown', top: y}} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  scrollView: {
    flex: 0.1,
  }
});

export default App;
