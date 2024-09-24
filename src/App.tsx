//Modules
import React, { useState } from "react";
import "./App.css";

//Screens
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

//Enums
import Screen from "./enums/Screen";

const App: React.FC = () => {

    const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.StartGameScreen);

    if (currentScreen === Screen.StartGameScreen) {
        return <StartGameScreen setCurrentScreen={setCurrentScreen}/>;
    };

    if (currentScreen === Screen.GameScreen) {
        return <GameScreen setCurrentScreen={setCurrentScreen}/>;
    };

    if (currentScreen === Screen.GameOverScreen) {
        return <GameOverScreen setCurrentScreen={setCurrentScreen}/>;
    };
};

export default App;