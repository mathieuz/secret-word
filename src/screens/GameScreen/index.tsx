//Modules
import React, { FormEvent, useState } from 'react';
import styles from './GameScreen.module.css';

//Components
import WordGuesser from '../../components/WordGuesser';
import CardContainer from '../../components/CardContainer';
import Button from '../../components/Button';
import LetterInputGuess from '../../components/LetterInputGuess';

//Game Components
import getRandomWordData from '../../game/logic/getRandomWordData';
import { ISecretWord } from '../../game/secretWords';

const GameScreen: React.FC = () => {

    const [randomWordData, setRandomWordData] = useState<ISecretWord>(getRandomWordData());

    const [userInputValue, setUserInputValue] = useState<string>("");
    const [triedLetters, setTriedLetters] = useState<string[]>([]);

    const [guessedLetters, setGuessedLetters] = useState<boolean[]>(
        randomWordData.word.split("").map(() => { return false; })
    );

    function handleLetterInputGuessSubmit(e: FormEvent) {
        e.preventDefault();

        if (!userInputValue) {
            return;
        };

        setTriedLetters((prevTriedLetters) => {
            if (prevTriedLetters.includes(userInputValue)) {
                return prevTriedLetters;
            };

            return [...prevTriedLetters, userInputValue];
        });

        setGuessedLetters((prevGuessedLetters) => {
            const updatedGuessedLetters = [...prevGuessedLetters];

            randomWordData.word.split("").forEach((wordLetter, wordLetterIndex) => {
                if (wordLetter === userInputValue) {
                    updatedGuessedLetters[wordLetterIndex] = true;
                };
            });

            return updatedGuessedLetters;
        });

    };

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <span className={styles.text}><b>Pontuação:</b> <span className={styles.score}>0</span></span>
            </div>
            <div className={styles.column}>
                <h1 className={`${styles.title} ${styles.textAlignCenter}`}>Adivinhe a Palavra!</h1>    
                <span className={`${styles.text} ${styles.textAlignCenter}`}>Dica sobre a palavra: <span className={styles.wordTip}>{randomWordData.tip}</span>.</span>
            </div>
            <div className={styles.column}>
                <WordGuesser word={randomWordData.word} guessedLetters={guessedLetters} />
                <span className={`${styles.text} ${styles.textAlignCenter}`}>Você ainda tem: <span className={styles.attemptCount}>3 tentativas</span>.</span>
            </div>
            <div className={`${styles.column}`}>
                <CardContainer>
                    <form onSubmit={(e) => { handleLetterInputGuessSubmit(e); }}>
                        <div className={`${styles.column}`}>
                            <LetterInputGuess setUserInputValue={setUserInputValue} name='letterInputGuess'/>
                        </div>
                        <Button isSubmit={true}>Tentar Letra!</Button>
                    </form>
                </CardContainer>
            </div>
            <div className={styles.column}>
                <span className={`${styles.text} ${styles.textAlignCenter}`}>Letras tentadas:</span>
                <div className={`${styles.text} ${styles.triedLettersContainer}`}>
                    {triedLetters.map((triedLetter, index) => <span key={`triedLetter${index}`}>{triedLetter} </span>)}
                </div>
            </div>
        </div>
    );
};

export default GameScreen;