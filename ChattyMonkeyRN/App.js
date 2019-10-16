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

  const [refreshing, setRefreshing] = React.useState(false);
  const [y, setY] = React.useState(100);
  const [ , updateState] = React.useState();
  const forceUpdate = React.useCallback(
    () => updateState({}),[],
  );

  useEffect(() => {
    console.log('Reached HEre-------')
    setTimeout(() => {
      console.log('Reached HEre-------Settimeout')
      setY(y + 100);
      if(y > 500) setY(100);
      forceUpdate();
    }, 200)
  })
  
  requestAnimationFrame(() => {
    setY(y + 10);
    if(y > 500) setY(100);
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setY(y + 100);
    if(y > 500) setY(100);
    wait(200).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <>
      {/* <GameEngine style={styles.container}>
           <StatusBar hidden={true} />
      </GameEngine> */}
      <ScrollView style={styles.container}
      refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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
