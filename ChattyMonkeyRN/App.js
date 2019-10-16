/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  RefreshControl,
  ScrollView
} from 'react-native';

const App: () => React$Node = () => {

  const PLATFORM_HEIGHT = 50;
  const PLATFORM_WIDTH  = 200;
  const PLATFORM_DIFF = 100;
  const [y, setY] = React.useState(100);
  const [t, setT] = React.useState(0);
  
  useEffect(() => {
    //console.log('Reached HEre-------')
    let timerHandle = setTimeout(() => {
      console.log('Reached HEre-------Settimeout ' + y)
      if(y > 500) {
        setY(100);
      } else {
        setY(y + 1);
      }    
      setT(t + 1);  
    }, 10);
    return function cleanup() {
      clearTimeout(timerHandle);
    };
  });

  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);

  return (
      <ScrollView style={styles.container}>
        <View style={{width: 50,  height: PLATFORM_HEIGHT, 
                      backgroundColor: 'yellow', top: 500}} />
        <View style={{width: PLATFORM_WIDTH, height: PLATFORM_HEIGHT, 
                      backgroundColor: 'brown', top: y}} />
        <View style={{width: PLATFORM_WIDTH, height: PLATFORM_HEIGHT, 
                      backgroundColor: 'blue', top: y + PLATFORM_DIFF,
                      left: 20}} />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  }
});

export default App;
