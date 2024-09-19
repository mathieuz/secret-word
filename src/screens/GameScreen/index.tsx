//Modules
import React from 'react';
import styles from './GameScreen.module.css';

//Components
import WordGuesser from '../../components/WordGuesser';
import CardContainer from '../../components/CardContainer';
import Button from '../../components/Button';
import LetterInputGuess from '../../components/LetterInputGuess';

const GameScreen: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <h1 className={`${styles.title} ${styles.textAlignCenter}`}>Adivinhe a Palavra!</h1>    
                <span className={`${styles.text} ${styles.textAlignCenter}`}>Dica sobre a palavra: <span className={styles.wordTip}>Linguagem de programação</span>.</span>
            </div>
            <div className={styles.column}>
                <WordGuesser/>
                <span className={`${styles.text} ${styles.textAlignCenter}`}>Você ainda tem: <span className={styles.attemptCount}>3 tentativas</span>.</span>
            </div>
            <div className={`${styles.column}`}>
                <CardContainer>
                    <div className={`${styles.column}`}>
                        <LetterInputGuess/>
                    </div>
                    <Button>Tentar Letra!</Button>
                </CardContainer>
            </div>
            <div className={styles.column}>
                <span className={`${styles.text} ${styles.textAlignCenter}`}>Letras tentadas:</span>
                <div className={`${styles.text} ${styles.triedLettersContainer}`}>
                    <span>A </span>
                    <span>Z </span>
                    <span>X </span>
                    <span>W </span>
                    <span>Q </span>
                    <span>F </span>
                    <span>P </span>
                    <span>B </span>
                    <span>C </span>
                </div>
            </div>
        </div>
    );
};

export default GameScreen;