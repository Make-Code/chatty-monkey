import React from "react";
import { GameEngine } from "react-native-game-engine";
import Renderer from "./graphics/renderer";
import Systems from "./systems";
import Entities from "./entities";

import ShaderPass from "./graphics/passes/shader-pass";
import PixelShader from "./graphics/shaders/pixel-shader";

class Game extends React.Component {
render() {
   return (
        <GameEngine style={styles.container}>
           <StatusBar hidden={true} />
        </GameEngine>
    );
  }
} 

export default Game;