//Modules
import React from 'react';
import styles from './WordGuesser.module.css';

interface WordGuesserProps {
    word: string
    guessedLetters: boolean[]
};

const WordGuesser: React.FC<WordGuesserProps> = ({ word, guessedLetters }) => {

    const wordLetters: string[] = word.split("");

    return(
        <div className={styles.wordGuesserWrapper}>
            {wordLetters.map((letter, index) => { 
                return (
                    <span className={`${styles.letterSlot} ${guessedLetters[index] ? "" : styles.emptyLetterSlot}`} 
                          key={`wordLetters${letter + index}`}>
                        {guessedLetters[index] ? letter : ""}
                    </span>
                );
            })}
        </div>
    );
};

export default WordGuesser;