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
  ScrollView,
  Dimensions
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const getPlatformsWithOffset = (
      screenWidth, 
      platformWidth, 
      offset) =>
{
  let x = platformWidth - offset;
  while (x < 0) {
    const delta = Math.abs(Math.floor(x/platformWidth))
    x += delta*platformWidth;
  }
  const blocks = [[0, x]];
  while((x + platformWidth) < screenWidth)
  {
    blocks.push([x, x + platformWidth]);
    x = x + platformWidth;
  }
  blocks.push([x, screenWidth]);
  return blocks;
}

const App: () => React$Node = () => {

  const screen = Dimensions.get('screen');
  const PLATFORM_HEIGHT = 50;
  const PLATFORM_WIDTH  = screen.width/3;
  const PLATFORM_DIFF = 200;
  const [y, setY] = React.useState(100);
  const [t, setT] = React.useState(0);
    
  useEffect(() => {
    let timerHandle = setTimeout(() => {
      (y > 500) ? setY(100) : setY(y + 1)  
      setT(t + 2);  
    }, 20);
    return function cleanup() {
      clearTimeout(timerHandle);
    };
  });

  const offset = t;
  const blocks = getPlatformsWithOffset(
    screen.width, PLATFORM_WIDTH, offset);
  let blockUp = (Math.ceil((t)/PLATFORM_WIDTH))%2 == 0;
  let blockWidth = 0;
  let blockY = 0;
  const outputList = [];

  blocks.forEach((block, index) => {
    blockUp = !blockUp;
    blockWidth = block[1] - block[0];
    blockY = (blockUp) ? 100 + PLATFORM_DIFF : 160
    outputList.push (
      <View key={index} style={{
        height: PLATFORM_HEIGHT, 
        backgroundColor: blockUp ? '#7e481c' : '#57a0d3', 
        top: blockY,
        left : blocks[index][0],
        width: blockWidth,
        position: 'absolute',
        borderRadius: 10}} />
    );
  })

  return (
      <View style={styles.container}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} 
        style={styles.linearGradient}>
        <View style={{ width: 50,  height: PLATFORM_HEIGHT, 
                      backgroundColor: '#fada5e', 
                      top: y, left: 0, 
                      postion: 'absolute', borderRadius: 5}} />
        {outputList}
      </LinearGradient>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f7942', 
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});

export default App;
