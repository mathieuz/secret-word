//Modules
import React, { useState } from "react";
import "./App.css";

//Screens
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

//Enums
import Screen from "./enums/Screen";

const App: React.FC = () => {

    const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.StartGameScreen);

    if (currentScreen === Screen.StartGameScreen) {
        return <StartGameScreen setCurrentScreen={setCurrentScreen}/>;
    };

    if (currentScreen === Screen.GameScreen) {
        return <GameScreen/>;
    };
}

export default App;