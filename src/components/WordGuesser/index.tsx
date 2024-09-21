//Modules
import React from 'react';
import styles from './WordGuesser.module.css';

interface WordGuesserProps {
    word: string
};

const WordGuesser: React.FC<WordGuesserProps> = ({ word }) => {

    const wordLetters: string[] = word.split("");

    return(
        <div className={styles.wordGuesserWrapper}>
            {wordLetters.map((letter, index) => { 
                return (
                    <span className={`${styles.letterSlot}`} 
                          key={`wordLetters${letter + index}`}>
                        {letter}
                    </span>
                );
            })}
        </div>
    );
};

export default WordGuesser;