//Modules
import React from 'react';
import styles from './GameOverScreen.module.css';

//Components
import Button from '../../components/Button';

//Enums
import Screen from '../../enums/Screen';

interface GameOverScreenProps {
    setCurrentScreen: (screen: Screen) => void
    finalScore: number
    setFinalScore: (finalScore: number) => void
};

const GameOverScreen: React.FC<GameOverScreenProps> = ({ setCurrentScreen, finalScore, setFinalScore }) => {
    return (
        <div className={styles.container}>
            <div className={styles.divBox}>
                <h1 className={styles.gameOver}>Fim de Jogo!</h1>
                <span>Sua pontuação final foi de <span className={styles.score}>{finalScore}</span> pontos.</span>
            </div>

            <Button onClick={() => { setFinalScore(0); setCurrentScreen(Screen.StartGameScreen); }}>Voltar para o começo</Button>
        </div>
    )
};

export default GameOverScreen;