//Modules
import React from "react";
import styles from "./StartGameScreen.module.css";

//Componentes
import Button from "../../components/Button";

//Enums
import Screen from "../../enums/Screen";

interface StartGameScreenProps {
    setCurrentScreen: (screen: Screen) => void
};

const StartGameScreen: React.FC<StartGameScreenProps> = ({ setCurrentScreen }) => {
    return (
        <div className={styles.container}>
            <div className={styles.divBox}>
                <h1 className={styles.gameTitle}>Secret Word!</h1>
                <span>Clique no botão abaixo para começar a jogar!</span>       
            </div>

            <Button onClick={() => { setCurrentScreen(Screen.GameScreen) }}>Começar Jogo!</Button>
        </div>
    );
};

export default StartGameScreen;