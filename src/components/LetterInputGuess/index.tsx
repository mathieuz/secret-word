import React from 'react';
import styles from './LetterInputGuess.module.css';

const LetterInputGuess: React.FC = () => {
    return <input className={styles.letterInputGuess} type="text" name="letterInputGuess" maxLength={1}/>
};

export default LetterInputGuess;