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
  Dimensions, Div
} from 'react-native';

function getPlatformsWithOffset(
      screenWidth, 
      platformWidth, 
      offset) 
{
  let x = platformWidth - offset;
  while (x < 0) x += platformWidth;
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
    //console.log('Reached HEre-------')
    let timerHandle = setTimeout(() => {
      //console.log('Reached HEre-------Settimeout ' + y)
      if(y > 500) {
        setY(100);
      } else {
        setY(y + 1);
      }    
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
  let block_width = 0;
  let block_y = 0;
  const output_list = [];
  for (var i = 0; i < blocks.length; i++)
  {
    blockUp = !blockUp;
    block_width = blocks[i][1] - blocks[i][0];
    if (blockUp) {
      block_y = 160 + PLATFORM_DIFF;
    } else {
      block_y = 160;
    }
    output_list.push (
      <View key={i} style={{
        height: PLATFORM_HEIGHT, 
        backgroundColor: blockUp?'brown':'blue', 
        top: block_y,
        left : blocks[i][0],
        width: block_width,
        position: 'absolute'}} />
    );
    //console.log(blocks[i])
  }

  return (
      <View style={styles.container}>
        <View style={{width: 50,  height: PLATFORM_HEIGHT, 
                      backgroundColor: 'yellow', top: y}} />
        {output_list}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green', 
  }
});

export default App;
