/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";

const App: () => React$Node = () => {
  return (
    <>
      {/* <GameEngine style={styles.container}>
           <StatusBar hidden={true} />
      </GameEngine> */}
      <View style={styles.container}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  level1: {
    backgroundColor: 'brown',
    display: 'flex',
    height: '60px',
  }
});

export default App;
