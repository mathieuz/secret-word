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
    const [finalScore, setFinalScore] = useState<number>(0);

    if (currentScreen === Screen.StartGameScreen) {
        return <StartGameScreen setCurrentScreen={setCurrentScreen}/>;
    };

    if (currentScreen === Screen.GameScreen) {
        return <GameScreen setCurrentScreen={setCurrentScreen} setFinalScore={setFinalScore}/>;
    };

    if (currentScreen === Screen.GameOverScreen) {
        return <GameOverScreen setCurrentScreen={setCurrentScreen} finalScore={finalScore} setFinalScore={setFinalScore}/>;
    };
};

export default App;